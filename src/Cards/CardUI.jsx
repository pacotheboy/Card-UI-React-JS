import React from 'react';
import './card-styles.css';

const Card = props => {
    return(
      <div className="card text-center shadow">
          <div className="overflow">
              <img src={props.imgsrc} alt="" className="card-img-top"/>
          </div>
          <div className="card-body text-dark">
              <h4 className="card-title">{props.title}</h4>
              <p className="card-text text-secundary">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam repellat labore
              </p>
              <a href="" className="btn btn-outline-success">Go AnyWhere</a>
          </div>
      </div>
    );
}
export default Card;