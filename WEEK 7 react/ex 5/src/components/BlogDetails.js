import React from "react";

export default function BlogDetails({ blogs }) {
  return (
    <div>
      <h2>Blog Details</h2>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <p><b>{blog.author}</b></p>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
}
