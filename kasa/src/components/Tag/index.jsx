import React from "react";
import "./style.scss";

const Tag = ({ tags }) => {
  return (
    <>
      <ul className="tags">
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </>
  );
};

export default Tag;
