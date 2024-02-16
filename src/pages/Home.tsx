/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { Link } from 'react-router-dom';

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      {/* Colorful banner */}
      <div className="bg-primary text-white text-center py-5">
        <h1>Welcome to Our Store!</h1>
        <p>Discover endless possibilities with our wide range of products.</p>
      </div>

      <div className="container my-5">
        {/* Introduction or featured section */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 text-center">
            <h2 className="mb-3">Featured Products</h2>
            <p>Check out our latest and most popular products.</p>
          </div>
        </div>

        {/* Categories section */}
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src="category-image-url.jpg" className="card-img-top" alt="Category Name" />
              <div className="card-body">
                <h5 className="card-title">Category 1</h5>
                <p className="card-text">Explore our wide range of products in Category 1.</p>
                <Link to="/store" className="btn btn-outline-primary">Shop Now</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src="category-image-url.jpg" className="card-img-top" alt="Category Name" />
              <div className="card-body">
                <h5 className="card-title">Category 2</h5>
                <p className="card-text">Discover the best items in Category 2.</p>
                <Link to="/store" className="btn btn-outline-primary">Shop Now</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src="category-image-url.jpg" className="card-img-top" alt="Category Name" />
              <div className="card-body">
                <h5 className="card-title">Category 3</h5>
                <p className="card-text">Find unique and exclusive products in Category 3.</p>
                <Link to="/store" className="btn btn-outline-primary">Shop Now</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action section */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <h2>Not sure where to start?</h2>
            <p>Browse our collections and find the perfect match for your needs.</p>
            <a href="/collections" className="btn btn-success">Browse Collections</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;