import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const price = form.price.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      price,
      details,
      photo,
    };
    console.log(newCoffee);
    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Coffee Added Successfully!!",
            icon: "success",
            draggable: true,
          });
        }
        console.log("coffee after add into db", data);
      });
  };

  return (
    <div className="mt-8">
      <Link to="/">
        {" "}
        <button className="flex justify-center items-center gap-2 lg:mx-24 text-xl font-bold cursor-pointer">
          <BiArrowBack></BiArrowBack> Back to Home
        </button>
      </Link>
      <div className="md:p-10 p-3 lg:p-20 bg-[#F4F3F0] mt-6 md:mx-10 lg:mx-24">
        <div className="px-4 md:px-10 lg:px-18 text-center space-y-1.5 md:space-y-4">
          <h2 className="text-lg font-bold md:text-3xl">Add New Coffee</h2>
          <p>
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form onSubmit={handleAddCoffee}>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-8">
            <fieldset className="fieldset  rounded-box  p-4 ">
              <label className="label font-bold md:text-lg">Name</label>
              <input
                type="text"
                name="name"
                className="input border-none w-full"
                placeholder="Enter coffee name"
              />
            </fieldset>
            <fieldset className="fieldset  rounded-box  p-4 ">
              <label className="label font-bold md:text-lg">Quantity</label>
              <input
                type="text"
                name="quantity"
                className="input border-none w-full"
                placeholder="Enter coffee quantity"
              />
            </fieldset>
            <fieldset className="fieldset  rounded-box  p-4 ">
              <label className="label font-bold md:text-lg">Supplier</label>
              <input
                type="text"
                name="supplier"
                className="input border-none w-full"
                placeholder="Enter Supplier name"
              />
            </fieldset>
            <fieldset className="fieldset  rounded-box  p-4 ">
              <label className="label font-bold md:text-lg">Taste</label>
              <input
                type="text"
                name="taste"
                className="input border-none w-full"
                placeholder="Enter coffee taste"
              />
            </fieldset>
            <fieldset className="fieldset  rounded-box  p-4 ">
              <label className="label font-bold md:text-lg">Price</label>
              <input
                type="text"
                name="price"
                className="input border-none w-full"
                placeholder="Enter coffee Price"
              />
            </fieldset>
            <fieldset className="fieldset  rounded-box  p-4 ">
              <label className="label font-bold md:text-lg">Details</label>
              <input
                type="text"
                name="details"
                className="input border-none w-full"
                placeholder="Enter coffee Details"
              />
            </fieldset>
            <fieldset className="fieldset  rounded-box  p-4 col-span-2">
              <label className="label font-bold md:text-lg">Photo</label>
              <input
                type="text"
                name="photo"
                className="input border-none w-full"
                placeholder="Enter photo url"
              />
            </fieldset>
          </div>
          <input
            type="submit"
            className="btn w-full text-[#331A15] md:text-xl bg-[#D2B48C] mt-3 border-2 border-[#331A15]"
            value="Add Coffee"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
