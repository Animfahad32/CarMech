import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const {name,price,time,img,id} = props.service;
    return (
      <div className="card">
      <img
        src={img}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body service">
        <h5 className="card-title">{name}</h5>
        <h3 className="card-text price">
          ${price}
        </h3>
        <p className="card-text">Est Time : {time} days</p>
       
        
      </div>
      <Link to={`/booking/${id}`}>
      <button className="btn btn-danger fw-bold p-2 br">Book {name}</button>
      </Link>
    </div>
    );
};

export default Service;<h2>Service</h2>