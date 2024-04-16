import { Button, message, Typography } from 'antd';
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import useAxios from "../useApi/useAxios";
import CommentsList from '../components/CommentsList';

type Comment = {
  article: string,
  text: string,
  parent?: number,
}

type Article = {
  id: number,
  headline: string,
  rating: number,
  author: string,
  date: Date,
  comments: Array<Comment>
}

const { Paragraph, Text } = Typography;

function ArticlePage() {
  const [article, setArticle] = useState<Article | null>(null);
  const { id } = useParams();
  const axios = useAxios()
  const location = useLocation()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Article>(`/articles/${id}`);
        setArticle(response.data);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    fetchData()
  }, [])

  return (
    <>
      <div className="top-container">
        <div className="info-container">
          {article != null ? (<>
            <h1>{article.headline}</h1>
            <p>Автор: {article.author}</p>
            <p>Рейтинг: {article.rating}</p>
            <p>Дата: {article.date.toLocaleString()}</p>
            <p>Количество комментариев: {article.comments.length}</p>
          </>) : (
            <p>Загрузка данных...</p>
          )}
        </div>
        <div className="link-container">
          <Paragraph style={{ fontSize: '20px' }} copyable>{'http://localhost:3000' + location.pathname}</Paragraph>
        </div>
      </div>
      <div className="comments-container">
      {article?.comments != null ? (<CommentsList comments={article.comments} />) : (
            <p>Загрузка данных...</p>
          )}
      
      </div>
    </>
  );
}

export default ArticlePage;