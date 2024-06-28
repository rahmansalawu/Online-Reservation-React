import Button from "../ui/Button";
import SpecialCard from "./SpecialCard";
import classes from "./Specials.module.css";

import SpecialImage1 from "../../images/greeksalad.jpg";
import SpecialImage2 from "../../images/bruchetta.jpg";
import SpecialImage3 from "../../images/lemondesert.jpg";

// A database fetched list of special dishes collection:
const specialDishes = [
  {
    id: "d1",
    image: SpecialImage1,
    title: "Greek Salad",
    price: 12.99,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus exrerum vel nobis placeat amet architecto ea excepturi ullam repellendus ducimus incidunt voluptatem totam dolores.",
  },
  {
    id: "d2",
    image: SpecialImage2,
    title: "Bruchetta",
    price: 5.99,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus exrerum vel nobis placeat amet architecto ea excepturi ullam repellendus ducimus incidunt voluptatem totam dolores.",
  },
  {
    id: "d3",
    image: SpecialImage3,
    title: "Lemon Desert",
    price: 5.00,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus exrerum vel nobis placeat amet architecto ea excepturi ullam repellendus ducimus incidunt voluptatem totam dolores.",
  },
];

export default function Specials() {
  return (
    <section className={classes.specialsSection}>
      <div className={`fluidContainer ${classes.specialsContainer}`}>
        <div className={classes.specialsInto}>
          <h2 className="sectionTitle">This weeks specials!</h2>
          <Button link="/">Online menu</Button>
        </div>
        <div className={classes.specialsCollection}>
          {specialDishes.map((dish) => (
            <SpecialCard
              key={dish.id}
              image={dish.image}
              title={dish.title}
              price={dish.price}
              description={dish.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
