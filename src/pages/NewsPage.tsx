// import axios from "axios";
import { Card } from "antd";
import { CSSProperties, useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import useAxios from "../useApi/useAxios";


type PreviewArticle = {
  id: number,
  headline: string,
  rating: number,
  author: string,
  date: Date
}

function NewsPage() {
  const [articles, setArticles] = useState<Array<PreviewArticle> | null>(null);
  const navigate = useNavigate();
  const axios = useAxios()
  const ulStyles: CSSProperties = {
    listStyle: 'none',
    display: "grid",
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '10px',
    padding: 0,
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Array<PreviewArticle>>('/articles/');//'http://127.0.0.1:8000/articles/'
        setArticles(response.data);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };
    fetchData()
  },[])

  const handleClick = (article: PreviewArticle) => {
    navigate(`/article/${article.id}`)
  };

  const liStyles: CSSProperties = {
    cursor: "pointer"
  }

  return (
    <ul style={ulStyles}>
      {articles != null ? (
        articles.map((item, index) => (
          <li onClick={() => handleClick(item)} style={liStyles} key={index}>
            <Card title={item.headline} bordered={false} style={{ width: '100%' }}>
              <p>rating: {item.rating}</p>
              <p>author: {item.author}</p>
              <p>date: {item.date.toLocaleString()}</p>
            </Card>
          </li>
        ))
      ) : (
        <p>Загрузка данных...</p>
      )}
    </ul>
  );

}

export default NewsPage;