import React from 'react';
import FilterFormList from './FilterFormList'

function FilterForm(props) {
  function propagationEvents(event) {
    event.stopPropagation();
  }

  return (
    <div className="filter__form" onClick={propagationEvents}>
      <FilterFormList />
      <button className="apply-filters" onClick={props.onApplyData}>Применить</button>
    </div>
  );
};


export default FilterForm;
