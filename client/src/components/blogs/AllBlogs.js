import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import AllBlogItem from './AllBlogItem';
import Spinner from '../layout/Spinner';
import BlogContext from '../../context/blog/blogContext';

const AllBlogs = () => {
  const blogContext = useContext(BlogContext);

  const { allBlogs, filteredAll, getAllBlogs, loading } = blogContext;

  useEffect(() => {
    getAllBlogs();
    // eslint-disable-next-line
  }, []);

  if (allBlogs !== null && allBlogs.length === 0 && !loading) {
    return <h4>Please add a blog</h4>;
  }

  return (
    <Fragment>
      {allBlogs !== null && !loading ? (
        <TransitionGroup>
          {filteredAll !== null
            ? filteredAll
                .filter((blog) => {
                  return blog.type !== 'private';
                })
                .map((blog) => (
                  <CSSTransition key={blog._id} timeout={500} classNames='item'>
                    <AllBlogItem blog={blog} />
                  </CSSTransition>
                ))
            : allBlogs
                .filter((blog) => {
                  return blog.type !== 'private';
                })
                .map((blog) => (
                  <CSSTransition key={blog._id} timeout={500} classNames='item'>
                    <AllBlogItem blog={blog} />
                  </CSSTransition>
                ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default AllBlogs;
