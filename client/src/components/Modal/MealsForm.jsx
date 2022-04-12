import React from 'react';

export default function Products({ addMeal, isEdit, currentMeal, editMeal }) {
  let type = 'Add';
  let sumbitFun = addMeal;
  let nameValue = '';
  let priceValue = '';
  let descValue = '';
  let imgValue = '';
  let categoryValue = '';

  if (isEdit) {
    type = 'Update';
    sumbitFun = editMeal;
    nameValue = currentMeal.name;
    priceValue = currentMeal.price;
    descValue = currentMeal.description;
    imgValue = currentMeal.img_url;
    categoryValue = currentMeal.category;
  }

  return (
    <>
      <h1>Products</h1>
      <form onSubmit={sumbitFun}>
        <input type="text" name="name" defaultValue={nameValue}  placeholder='Add a new  meal'/>
        <input type="number" name="price" defaultValue={priceValue} placeholder='Price' />
        <input type="text" name="description" defaultValue={descValue} placeholder='Descrip The Meal' />
        <input type="text" name="img" defaultValue={imgValue} placeholder='Link of Image' />
        <select name="categories" defaultValue={categoryValue}>
          <option value="Women">Women</option>
          <option value="Man">Man</option>
          <option value="Accessories">Accessories</option>
        </select>
        <button type="submit"> {type} </button>
      </form>
    </>
  );
}
