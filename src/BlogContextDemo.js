import React, {useContext} from "react";
import {BlogContext} from './App';

function BlogContextDemo() {
  const binfo = useContext(BlogContext);
  return (
      <div>
       <p>Topic: {binfo.NodeJS.post}</p>
       <p>Author: {binfo.NodeJS.author}</p>
      </div>
  );
}

export default BlogContextDemo;
