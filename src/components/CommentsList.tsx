import React from 'react';
import { Card } from "antd";

type Comment = {
  article: string;
  text: string;
  parent?: number;
};

type CommentsListProps = {
  comments: Comment[];
};

const CommentsList: React.FC<CommentsListProps> = ({ comments }) => {
  return (
    <div>
      <h2>Список комментариев</h2>
      <ul className='comments-container'>
        <Card>
          {comments.map((comment, index) => (
            <li key={index}>
              <p>Текст: {comment.text}</p>
            </li>
          ))}
        </Card>
      </ul>
    </div>
  );
};

export default CommentsList;