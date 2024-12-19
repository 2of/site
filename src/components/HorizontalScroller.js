import React from 'react';
import PropTypes from 'prop-types';
import styles from './HorizontalScroller.module.scss';

const HorizontalScroller = ({ items }) => {
  return (
    <div className={styles.scrollerContainer}>
        {/* {items} */}
      <div className={styles.scrollerContent}>
        {items.map((item, index) => (
          <div key={index} className={styles.scrollerItem}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

HorizontalScroller.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default HorizontalScroller;