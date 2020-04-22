import React, { useState } from 'react';

function FilterItem(props) {
  return (
    <li className={props.checkboxClass} onClick={props.onToggleChekbox}><div className="check">&#10004;</div>{props.name}</li>
  )
}

function FilterFormList() {
  const [checkbox, setCheckbox] = useState([
    { name: 'Оплата онлайн', checkboxClass: 'custom-checkbox'},
    { name: 'Оплата картой курьеру', checkboxClass: 'custom-checkbox'},
    { name: 'Доставка Delivery Club', checkboxClass: 'custom-checkbox'},
    { name: 'Акции', checkboxClass: 'custom-checkbox'},
    { name: 'Еда за баллы', checkboxClass: 'custom-checkbox'}
  ]);

  function toggleCheckbox(index) {
    setCheckbox(checkbox.map((checkboxItem, i) => {
      if(i === index) {
        if (checkboxItem.checkboxClass === 'custom-checkbox active-filter') {
          checkboxItem.checkboxClass = 'custom-checkbox'
        } else {
          checkboxItem.checkboxClass = 'custom-checkbox active-filter'
        };
      };
      return checkboxItem;
    }));
  };

  return (
    <ul className="filters__list">
      {checkbox.map((elem, index) => <FilterItem checkboxClass={elem.checkboxClass} name={elem.name} onToggleChekbox={() => toggleCheckbox(index)} key={'checkbox_' + index} />)}
    </ul>
  );
};

export default FilterFormList;