import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";
import Banner from "./Banner";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const initialCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(initialCoffees);
  console.log(coffees);
  return (
    <div>
      <Banner></Banner>
      <div className=" mt-10">
        <div className="text-center mb-4">
          <h4 className="text-xl text-[#1B1A1A] mb-2.5">--- Sip & Savor ---</h4>
          <h1 className="text-5xl text-[#331A15] font-bold mb-6">
            Our Popular Products
          </h1>
          <Link to="/addCoffee">
            <button className="btn mb-8 text-xl text-white border-[#331A15] bg-[#e2b476] rounded-lg border-2 py-4 px-5">
              Add Coffee
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            ></CoffeeCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
