import React from 'react';
import RestaurantsList from './content_components/RestaurantsList';
import ContentHeader from './content_components/ContentHeader';
import '../css/content.css';

function Content() {
  return (
    <div id="content">
      <ContentHeader />
      <RestaurantsList />
    </div>
  );
};

export default Content;