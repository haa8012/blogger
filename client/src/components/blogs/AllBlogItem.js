import React, { useContext } from 'react';
import PropTypes from 'prop-types';

const AllBlogItem = ({ blog }) => {
  const { title, detail, footer } = blog;

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>{title} </h3>
      <ul className='list'>
        {detail && <li>{detail}</li>}
        {footer && <li>{footer}</li>}
      </ul>
    </div>
  );
};

AllBlogItem.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default AllBlogItem;
