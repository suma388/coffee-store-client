import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdModeEdit, MdRemoveRedEye } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, price, photo, quantity } = coffee;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this coffee!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(_id, result.isConfirmed);
      //   jokhon isConfirmed hobe tokhon e nice asbe r tokhon e ami delete request ta pathabo tar por delete jodi hoy tahole success msg ta dekhabo
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("coffee after delete", data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your order has been deleted.",
                icon: "success",
              });
              const reminingCoffee = coffees.filter((cof) => cof._id !== _id);
              setCoffees(reminingCoffee);
            }
          });
      }
    });
  };

  return (
    <div className="bg-[#f5f4f0] p-5 rounded-lg flex justify-center items-center gap-2 md:gap-6">
      <div>
        <img src={photo} alt="" />
      </div>
      <div className="md:text-lg font-medium ">
        <p>Name : {name}</p>
        <p>Price : {price} Taka</p>
        <p>Quantity : {quantity}</p>
      </div>
      <div className="flex flex-col gap-1 md:gap-4 lg:ml-8">
        <Link to={`coffee/${_id}`}>
          <button className="btn">
            <MdRemoveRedEye size={28} />
          </button>
        </Link>
        <Link to={`upDateCoffee/${_id}`}>
          <button className="btn">
            <MdModeEdit size={28} />
          </button>
        </Link>
        <button onClick={() => handleDelete(_id)} className="btn">
          <AiFillDelete size={28} />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
