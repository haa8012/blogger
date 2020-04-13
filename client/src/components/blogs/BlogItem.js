import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import BlogContext from '../../context/blog/blogContext';

const BlogItem = ({ blog }) => {
  const blogContext = useContext(BlogContext);
  const { deleteBlog, setCurrent, clearCurrent } = blogContext;

  const { _id, title, detail, footer, type } = blog;

  const onDelete = () => {
    deleteBlog(_id);
    clearCurrent();
  };

  const onEdit = () => {
    setCurrent(blog);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {title}{' '}
        <span
          style={{ float: 'right' }}
          className={
            'badge ' + (type === 'public' ? 'badge-success' : 'badge-primary')
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className='list'>
        {detail && (
          <li>
            {/* <i className='fas fa-envelope-open' />  */}
            {detail}
          </li>
        )}
        {footer && (
          <li>
            {/* <i className='fas fa-footer' />  */}
            {footer}
          </li>
        )}
      </ul>
      <p>
        <button className='btn btn-dark btn-sm' onClick={onEdit}>
          Edit
        </button>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

BlogItem.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default BlogItem;
