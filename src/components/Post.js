import React from "react";

const Post = ({ article }) => {
  const { name, featuredImg } = article.fields;
  console.log(name, featuredImg.fields);
  return (
    <div>
      <h1 style={{ color: "red" }}>{name}</h1>
      <h3>{featuredImg.fields.description}</h3>
      <img
        src={featuredImg.fields.file.url}
        alt=""
        style={{ height: "250px", width: "250px" }}
        title={name}
      />
    </div>
  );
};

export default Post;
