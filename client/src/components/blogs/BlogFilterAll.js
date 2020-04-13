import React, { useContext, useRef, useEffect } from 'react';
import BlogContext from '../../context/blog/blogContext';

const BlogFilterAll = () => {
  const blogContext = useContext(BlogContext);
  const text = useRef('');

  const { filterAllBlogs, clearFilter, filteredAll } = blogContext;

  useEffect(() => {
    if (filteredAll === null) {
      text.current.value = '';
    }
  });

  const onChange = (e) => {
    if (text.current.value !== '') {
      filterAllBlogs(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Search blogs...'
        onChange={onChange}
      />
    </form>
  );
};

export default BlogFilterAll;
