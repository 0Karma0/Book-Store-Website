// Banner.js
import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <section className="py-8 flex items-center justify-between">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Bookstore</h1>
        <Link to="/listed-books" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">View The List</Link>
      </div>
      <div>
        <img src="/banner-image.jpg" alt="Bookstore Banner" className="w-64 h-auto" />
      </div>
    </section>
  );
}

export default Banner;