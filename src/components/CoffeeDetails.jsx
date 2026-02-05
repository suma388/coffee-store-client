import { BiArrowBack } from "react-icons/bi";
import { DiVim } from "react-icons/di";
import { Link, useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  const { name, chef, supplier, taste, price, details, photo } = coffee;

  return (
    <div className="mt-8">
      <Link to="/">
        {" "}
        <button className="flex justify-center items-center gap-2 lg:mx-24 text-xl font-bold cursor-pointer">
          <BiArrowBack></BiArrowBack> Back to Home
        </button>
      </Link>
      <div className="bg-[#F4F3F0] mt-8 rounded-lg lg:mx-36 p-2 md:p-8 flex justify-between items-center ">
        {/* Image */}
        <div className=" flex justify-center w-[50%]">
          <img src={photo} alt={name} className="max-h-60 object-contain" />
        </div>

        {/* Details */}
        <div className=" w-[50%]">
          <h2 className="text-xl md:text-3xl font-bold md:font-semibold mb-4 text-[#331A15]">
            Niceties
          </h2>

          <p>
            <span className="font-semibold">Name:</span> {name}
          </p>
          <p>
            <span className="font-semibold">Chef:</span> {chef}
          </p>
          <p>
            <span className="font-semibold">Supplier:</span> {supplier}
          </p>
          <p>
            <span className="font-semibold">Taste:</span> {taste}
          </p>
          <p>
            <span className="font-semibold">Price:</span> {price}
          </p>
          <p>
            <span className="font-semibold">Details:</span> {details}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
