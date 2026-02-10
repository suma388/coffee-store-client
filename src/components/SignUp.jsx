import React, { useContext } from "react";
import { Link } from "react-router";
import AuthProvider from "../context/AuthProvider";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleCreateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...userInfo } = Object.fromEntries(
      formData.entries(),
    );
    console.log(password, email, userInfo);

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "Application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("after add to mongodb", data);
            if (data.insertedId) {
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
      });
  };

  return (
    <div className="card bg-base-100 mt-20 mb-18 mx-auto w-full max-w-lg shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl text-center font-bold">SignIn now!</h1>
        <form onSubmit={handleCreateUser}>
          <label className="label">Name</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Name"
            name="name"
          />
          <label className="label">Photo</label>
          <input
            type="text"
            name="photo"
            className="input w-full"
            placeholder="Photo URL"
          />
          <label className="label">Address</label>
          <input
            type="text"
            name="address"
            className="input w-full"
            placeholder="Address"
          />
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input w-full"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            name="password"
            type="password"
            className="input w-full"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral w-full mt-4">Login</button>
          <p className="text-lg mt-2">
            Already have an account? Please{" "}
            <Link className="text-green-600 font-bold">SignIn</Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
