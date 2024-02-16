/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { Link } from 'react-router-dom';


type AboutProps = {};

const About: React.FC<AboutProps> = () => {
  return (
    <>

      <div className="bg-info text-white text-center py-4">
        <h2>Welcome to Our Store!</h2>
        <p>Your one-stop shop for everything unique and exciting.</p>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <h1 className="mb-3">About Us</h1>
            <p className="lead">Welcome to Our Store, your ultimate destination for a wide range of products. We pride ourselves on offering an eclectic mix of items to cater to every taste, need, and occasion. Whether you're in search of the latest gadgets, unique home decor, or the perfect gift, we have you covered.</p>
            <p>Our mission is to provide a seamless shopping experience, offering quality products at competitive prices. With an emphasis on variety, value, and customer satisfaction, we strive to be your go-to online marketplace for everything from A to Z.</p>
            <p>We're constantly updating our catalog with new and exciting products, so there's always something fresh to discover. Our team carefully selects each item to ensure it meets our high standards for quality and uniqueness.</p>
            <p>If you have any questions or need assistance, our dedicated customer service team is here to help. Thank you for choosing us as your shopping destination. Happy browsing!</p>
            
            {/* Bootstrap color buttons for actions */}
            <div className="mt-4">
            <Link to="/store" className="btn btn-outline-primary">Shop Now</Link>
              <a href="/contact" className="btn btn-success">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
