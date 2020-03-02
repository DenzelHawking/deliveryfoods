import React from 'react';
import Filter from './Filter'

function ContentTitle(props) {
  return (
    <div className="left">
      <span className="header-name">{props.name}</span>
      <Filter />
    </div>
  );
};

export default ContentTitle;