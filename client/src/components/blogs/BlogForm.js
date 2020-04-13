import React, { useState, useContext, useEffect } from 'react';
import BlogContext from '../../context/blog/blogContext';

const BlogForm = () => {
  const blogContext = useContext(BlogContext);

  const { addBlog, updateBlog, clearCurrent, current } = blogContext;

  useEffect(() => {
    if (current !== null) {
      setBlog(current);
    } else {
      setBlog({
        title: '',
        detail: '',
        footer: '',
        type: 'private',
      });
    }
  }, [blogContext, current]);

  const [blog, setBlog] = useState({
    title: '',
    detail: '',
    footer: '',
    type: 'private',
  });

  const { title, detail, footer, type } = blog;

  const onChange = (e) => setBlog({ ...blog, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addBlog(blog);
    } else {
      updateBlog(blog);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };
  // const onKeydown = (e) => {
  //   // e.preventDefault();
  //   console.log(e.target);
  //   // e.target.setStyle({'cssText': ''})
  //   e.target.cssText = 'height:auto; padding:0';
  //   e.target.cssText = 'height:' + e.target.scrollHeight + 'px';
  // };

  return (
    <div className='form-container-sp'>
      <form onSubmit={onSubmit}>
        <h2 className='text-primary'>{current ? 'Edit Blog' : 'Add Blog'}</h2>
        <input
          type='text'
          placeholder='Title'
          name='title'
          value={title}
          onChange={onChange}
        />
        {/* https://codepen.io/vsync/pen/czgrf
      dynamicly changing text area */}
        <textarea
          rows='3'
          // columns='50'
          id='detail'
          placeholder='Detail'
          name='detail'
          value={detail}
          onChange={onChange}
          // onKeyDown={onKeydown}
        ></textarea>
        <input
          type='text'
          placeholder='Footer'
          name='footer'
          value={footer}
          onChange={onChange}
        />
        <h5>Blog Type</h5>
        <input
          type='radio'
          name='type'
          value='private'
          checked={type === 'private'}
          onChange={onChange}
        />{' '}
        Private{' '}
        <input
          type='radio'
          name='type'
          value='public'
          checked={type === 'public'}
          onChange={onChange}
        />{' '}
        Public
        <div>
          <input
            type='submit'
            value={current ? 'Update Blog' : 'Add Blog'}
            className='btn btn-primary btn-block'
          />
        </div>
        {current && (
          <div>
            <button className='btn btn-light btn-block' onClick={clearAll}>
              Clear
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default BlogForm;
