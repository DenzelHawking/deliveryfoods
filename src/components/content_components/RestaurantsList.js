import React, {useState, useEffect} from 'react';
import request from '../../js/request'

const sendData = {
  page: 1,
  limit: 9
};

function RestaurantsList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    request()
  }, []);

  request('http://10.101.8.49:8084/v1/store', 'POST', sendData, setData);

  return (
    <ul className='restaurants-list'>{
      data.map((elem) => {
        return <LisnData key={elem.ID} name={elem.Name} time={elem.Time} stars={elem.Raiting} backimg={elem.Logotype} />
      })
    }</ul>
  );
};

function LisnData(props) {
  const bgImage = {backgroundImage: `url(${props.backimg})`};

  return (
    <li className='restaurants-item'>
      <a href="google.com">
        <div className="restaurants__img" style={bgImage}></div>
  
        <div className="restaurants-list__top">
          <div className="restaurants__name">{props.name}</div>
          <div className="restaurants__delivery-time">{props.time}</div>
        </div>
              
        <div className="restaurants-list__bottom">
          <div className="restaurants__rating"><i className="fa fa-star"></i> {props.stars}</div>
        </div>
      </a>
    </li>
  );
};

export default RestaurantsList;
