import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title,calories,image,ingredients}) =>{
    return(
        <div className={style.recipe}>
            <h1 className={style.title}>{title}</h1>
            <o1>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </o1>
            <p><b>Calories </b>{Math.round(calories)}</p>
            <img src={image} alt=""/>
        </div>
    );
};

export default Recipe;