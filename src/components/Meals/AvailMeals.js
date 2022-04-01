import { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailMeals.module.css";
import MealItem from "./MealItem/MealItem";

function AvailMeals(params) {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://food-order-app-cd620-default-rtdb.firebaseio.com/meals.json"
      );

      if(!response.ok){
        throw new Error('Something went wrong')
      }
      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          desc: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };
    try{
    fetchMeals();
    }catch(error){
      setIsLoading(false)
      setError(error.message)
    }
    
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if(error){
    return <section className={classes.MealsError}>
      <p>{error}</p>
    </section>
  }


  const mealsList = meals.map((meal) => (
    <li>
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.desc}
        price={meal.price}
      />
    </li>
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}

export default AvailMeals;
