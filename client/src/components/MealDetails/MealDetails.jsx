import React from 'react';
import Login from '../Login/Login';
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
  cart,
  addToCart,
  closeModal,
  history
}) {
  const { img_url, name, price, category, description,id } = mealDetails;
  return (
    <>
    {displayLogin && (
      <Login
        type="mealDetails"
        handleLogin={handleLogin}
        closeModal={closeModal}
        history={history}
      />
    )}
    <div className='main'>
      <div className='container'>
      <Navbar
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
        handleLogin={handleLogin}
        displayLogin={displayLogin}
        isOpen={isOpen}
        cart={cart}
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
          {!isLoggedIn && <button onClick={(e) =>addToCart(e,id)} className="Add">Add to cart</button>}
        </div>
      </div>
     </div>

    </div>
  
    </>
    
  );
}
