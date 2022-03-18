import Card from "../UI/Card";
import classes from "./AvailMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    desc: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    desc: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    desc: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    desc: "Healthy...and green...",
    price: 18.99,
  },
];
function AvailMeals(params) {
  const mealsList = DUMMY_MEALS.map((meal) => (
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
