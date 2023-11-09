import React from "react";
interface BlogProps {
  title: string;
  heading: string;
  creatorName: string;
}

const BlogItem: React.FC<BlogProps> = ({ title, heading, creatorName }) => {
  return (
    <>
      <div className="post-preview">
        <a href="/post">
          <h2 className="post-title">{title}</h2>
          <h3 className="post-subtitle">{heading}</h3>
        </a>
        <p className="post-meta">
          Posted by <a href="#">{creatorName}</a> on September 24, 2014
        </p>
      </div>
      <hr />
    </>
  );
};

export default BlogItem;
