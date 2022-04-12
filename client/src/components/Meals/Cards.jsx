import React from 'react';
import Card from './Card';

export default function Cards({
  meals,
  isFiltered,
  selectedCategory,
  filteredMeals,
  deleteMeal,
  openModal,
  login,
  addToCart,
  page,
}) {
  if (isFiltered) {
    meals = filteredMeals;
  }

  if (selectedCategory !== 'all') {
    const arr = meals.filter((meal) => meal.category === selectedCategory);
    meals = arr;
  }

  return (
    <div className='cards'>
      {meals.map((meal) => {
        return (
          <Card
            meal={meal}
            deleteMeal={deleteMeal}
            openModal={openModal}
            login={login}
            addToCart={addToCart}
            page='main'
          />
        );
      })}
    </div>
  );
}
