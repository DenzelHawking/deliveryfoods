import React, {useState} from 'react';
import FilterForm from './FilterForm'

function Filter() {
  const [classValue, setClassValue] = useState('filter');

  function toggleFilter(event) {
    classValue === 'filter' ? setClassValue(classValue + ' openned') : setClassValue('filter');
    event.stopPropagation();
  };

  window.onclick = () => setClassValue('filter');

  return (
    <div className={classValue} onClick={toggleFilter}>
      <span>Фильтры</span> <i className="fas fa-chevron-down" />
      <FilterForm onApplyData={toggleFilter}/>
    </div>
  );
};

export default Filter;