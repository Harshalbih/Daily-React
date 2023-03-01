import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const RestaurantMenu = () => {
  const [restaurant, setRestaurant] = useState("");
  const params = useParams();
  const { id } = params; //Dyanamic routing

  useEffect(() => {
    fetchrestaurant();
  }, []);

  async function fetchrestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=18.5236317&lng=73.8411226&menuId=" +
        id 
    );
    const json = await data.json();
    console.log(data);
    setRestaurant(json.data);
  }

  return (
    <>
      <div>
        <h1>Restaurant: {id}</h1>
        <h2>{restaurant.name}</h2>
        <h3>{restaurant.area}</h3>
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            restaurant.cloudinaryImageId
          }
          alt=""
        ></img>
        <p>{restaurant.avgRating}</p>
        <p>{restaurant.costForTwoMsg}</p>
      </div>
      <div>
        <h1>Menu</h1>
        {console.log(restaurant.menu.items)}
        {/* <ul>
          {Object.values(restaurant.menu.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul> */}
      </div>
    </>
  );
};
export default RestaurantMenu;
