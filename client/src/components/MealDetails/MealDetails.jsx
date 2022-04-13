import React from 'react';
import Navbar from '../Navbar/Navbar';
import './mealDetails.css';

export default function MealDetails({
  mealDetails,
  isLoggedIn,
  handleLogout,
  handleLogin,
  displayLogin,
  isOpen,
  openModal,
}) {
  const { img_url, name, price, category, description } = mealDetails;
  return (
    
    <div className='main'>
      <div className='container'>
      <Navbar
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
        handleLogin={handleLogin}
        displayLogin={displayLogin}
        isOpen={isOpen}
        openModal={openModal}
      />
      <div className="mealDetails">
        <div className='meal-img'>
        <img src={img_url} alt="meal img" />
        </div>
     
        <div className="DataSide">
          <h3 className="meal-name">{name}</h3>
          <p className="meal-price">{price}$</p>
          <p className="meal-category">{category}</p>
          <p className="meal-description">{description}</p>
          <button className="Add">Add to cart</button>
        </div>
      </div>
     </div>

    </div>
  
    
  );
}
