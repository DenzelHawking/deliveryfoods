import React, { useState } from 'react';

function FilterFormList() {
  const [checkbox, setCheckbox] = useState('custom-checkbox');

  function toggleCheckbox() {
    if (checkbox === 'custom-checkbox') {
      setCheckbox(checkbox + ' active-filter')
    }
  }

  return (
    <ul className="filters__list">
      <li className={checkbox} onClick={toggleCheckbox}><div className="check">&#10004;</div>Оплата онлайн</li>
      <li className={checkbox} onClick={toggleCheckbox}><div className="check">&#10004;</div>Оплата картой курьеру</li>
      <li className={checkbox} onClick={toggleCheckbox}><div className="check">&#10004;</div>Доставка Delivery Club</li>
      <li className={checkbox} onClick={toggleCheckbox}><div className="check">&#10004;</div>Акции</li>
      <li className={checkbox} onClick={toggleCheckbox}><div className="check">&#10004;</div>Еда за баллы</li>
    </ul>
  );
};

export default FilterFormList;