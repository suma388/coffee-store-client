import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const { _id, name, price, taste, supplier, quantity, details, photo } =
    useLoaderData();
  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    // js er formData method diye from er data gula niyar upay
    const formData = new FormData(form);
    const upDatedCoffee = Object.fromEntries(formData.entries());
    console.log(upDatedCoffee);
    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "Application/json",
      },
      body: JSON.stringify(upDatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your Coffee update successfully",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };

  return (
    <div className="mt-8">
      <Link to="/">
        {" "}
        <button className="flex justify-center items-center gap-2 lg:mx-24 text-xl font-bold cursor-pointer">
          <BiArrowBack></BiArrowBack> Back to Home
        </button>
      </Link>{" "}
      <div className="md:p-10 p-3 lg:p-20 bg-[#F4F3F0] mt-6 md:mx-10 lg:mx-24">
        <div className="px-4 md:px-10 lg:px-18 text-center space-y-1.5 md:space-y-4">
          <h2 className="text-lg font-bold md:text-3xl">
            Update Existing Coffee Details
          </h2>
          <p>
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form onSubmit={handleUpdateCoffee}>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-8">
            <fieldset className="fieldset  rounded-box  p-4 ">
              <label className="label font-bold md:text-lg">Name</label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                className="input border-none w-full"
                placeholder="Enter coffee name"
              />
            </fieldset>
            <fieldset className="fieldset  rounded-box  p-4 ">
              <label className="label font-bold md:text-lg">Quantity</label>
              <input
                type="text"
                name="quantity"
                defaultValue={quantity}
                className="input border-none w-full"
                placeholder="Enter coffee quantity"
              />
            </fieldset>
            <fieldset className="fieldset  rounded-box  p-4 ">
              <label className="label font-bold md:text-lg">Supplier</label>
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                className="input border-none w-full"
                placeholder="Enter Supplier name"
              />
            </fieldset>
            <fieldset className="fieldset  rounded-box  p-4 ">
              <label className="label font-bold md:text-lg">Taste</label>
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                className="input border-none w-full"
                placeholder="Enter coffee taste"
              />
            </fieldset>
            <fieldset className="fieldset  rounded-box  p-4 ">
              <label className="label font-bold md:text-lg">Price</label>
              <input
                type="text"
                name="price"
                defaultValue={price}
                className="input border-none w-full"
                placeholder="Enter coffee Price"
              />
            </fieldset>
            <fieldset className="fieldset  rounded-box  p-4 ">
              <label className="label font-bold md:text-lg">Details</label>
              <input
                type="text"
                name="details"
                defaultValue={details}
                className="input border-none w-full"
                placeholder="Enter coffee Details"
              />
            </fieldset>
            <fieldset className="fieldset  rounded-box  p-4 col-span-2">
              <label className="label font-bold md:text-lg">Photo</label>
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                className="input border-none w-full"
                placeholder="Enter photo url"
              />
            </fieldset>
          </div>
          <input
            type="submit"
            className="btn w-full text-[#331A15] md:text-xl bg-[#D2B48C] mt-3 border-2 border-[#331A15]"
            value="Update Coffee Details"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
