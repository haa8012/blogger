import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import BlogItem from './BlogItem';
import Spinner from '../layout/Spinner';
import BlogContext from '../../context/blog/blogContext';

const Blogs = () => {
  const blogContext = useContext(BlogContext);

  const { blogs, filtered, getBlogs, loading } = blogContext;

  useEffect(() => {
    getBlogs();
    // eslint-disable-next-line
  }, []);

  if (blogs !== null && blogs.length === 0 && !loading) {
    return <h4>Please add a blog</h4>;
  }

  return (
    <Fragment>
      {blogs !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map((blog) => (
                <CSSTransition key={blog._id} timeout={500} classNames='item'>
                  <BlogItem blog={blog} />
                </CSSTransition>
              ))
            : blogs.map((blog) => (
                <CSSTransition key={blog._id} timeout={500} classNames='item'>
                  <BlogItem blog={blog} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Blogs;
