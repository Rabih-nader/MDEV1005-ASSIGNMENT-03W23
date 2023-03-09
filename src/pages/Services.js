import React from 'react';
import { useContext } from 'react';
import Home from './Home';

function Services() {
  return (
    <div className="container">
      <h1 className="my-4">Services Page</h1>
      <p className="lead">Welcome to Services</p>
      <div className="card-deck">
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">Service 1</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper aliquet lacus nec malesuada.</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">Service 2</h5>
            <p className="card-text">Donec at felis a mi imperdiet cursus. Donec porttitor, magna et luctus sagittis, turpis massa bibendum erat, at ultricies turpis quam sit amet massa.</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 5 mins ago</small>
          </div>
        </div>
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">Service 3</h5>
            <p className="card-text">In sit amet lacus ac nisi dictum egestas non non nisl. Vestibulum ut ex quam.</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 10 mins ago</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
