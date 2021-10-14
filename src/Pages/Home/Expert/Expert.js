import React from 'react';

const Expert = (props) => {
    const {name, img} = props.expert
    return (
        <div className="card">
        <img
          src={img}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body service">
          <h5 className="card-title">{name}</h5>
         
          
        </div>
      </div>
    );
};

export default Expert;