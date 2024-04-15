// const {  Flex, Layout  } = antd;
import { Route, Routes, Link } from 'react-router-dom';
import NewsPage from './pages/NewsPage'
import ArticlePage from './pages/ArticlePage';
import './App.css';
import { Layout, theme } from 'antd';
import { CSSProperties } from 'react';
const { Header, Content, Footer } = Layout;


function App() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const headerStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    fontSize: '20px',
  };
  const contentStyle: CSSProperties = {
    background: colorBgContainer,
    maxWidth: '1240px',
    width: '100%',
    margin: 'auto',
    minHeight: 280,
    padding: 24,
    borderRadius: borderRadiusLG,
  };
  const footerStyle: CSSProperties = {
    display: 'flex',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
    fontSize: '20px',
  };
  const layoutStyle = {
    // borderRadius: 8,
    overflow: 'hidden',
    width: '100%',
    minHeight: '100vh'
  };

  return (
    <div className="App">
      <Layout style={layoutStyle}>
        <Header style={headerStyle} >Header</Header>
        <Content style={contentStyle}><Routes>
          <Route path='/' element={<NewsPage />} />
          <Route path='article/:id' element={<ArticlePage />} />
        </Routes></Content>
        <Footer style={footerStyle} >Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
