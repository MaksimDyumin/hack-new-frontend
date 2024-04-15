import React from 'react';

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
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <p>Статья: {comment.article}</p>
            <p>Текст: {comment.text}</p>
            <p>Родитель: {comment?.parent}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsList;