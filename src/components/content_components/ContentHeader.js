import React from 'react';
// import React, { useState } from 'react';
import Search from '../content_header_components/Search';
import ContentTitle from '../content_header_components/ContentTItle'
import '../../css/filters.css';

function ContentHeader() {
  // const [name, setName] = useState('Рестораны');

  return (
    <div className="restaurants__header">
      <ContentTitle name='Рестораны' />
      <Search />
    </div>
  );
};

export default ContentHeader;