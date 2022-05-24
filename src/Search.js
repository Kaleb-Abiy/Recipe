import React, {useState, useEffect} from 'react'
import Meals from './Meals';
import './Search.css'

function Search() {
    const [calorie, setCalorie] = useState('');
    const [total, setTotal] = useState('');
    const [meals, setMeals] = useState([]);
    const url = `https://api.spoonacular.com/mealplanner/generate?timeFrame=day&targetCalories=${calorie}&apiKey=ca41ab6461834f009b5883a56159f181`
    useEffect(()=>{
        fetch(url)
        .then(response => response.json())
        .then(data => setMeals(data.meals))
    },[total])

    console.log(meals)


    const handleSubmit = (e)=>{
        e.preventDefault()
        setTotal(calorie)
    }


    return (
        <div className="container">
          <div className="d-flex justify-content-center mb-5">
            <form onSubmit={handleSubmit} className="input-group mb-3 mt-3 food-input">
                <input type="text" className="form-control"  name="search" aria-describedby="basic-addon1" placeholder="Enter calorie number" onChange={e=> setCalorie(e.target.value)}/>
                <input type="submit" className="btn btn-primary" name="submit"/>
            </form>
          </div>  

            <div className="row aign-items-center">                
                {meals && meals.map(meal =>(
                    <Meals title={meal.title} link={meal.sourceUrl} image = {`https://spoonacular.com/recipeImages/${meal.id}-556x370.jpg`}/>
                ))}     
            </div>
        </div>
        
       
    );
}

export default Search
