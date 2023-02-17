import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUser(email, password)
      .then((userCredential) => {
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <div className="text-center mt-4 w-2/3 mx-auto">
      <form className="flex items-center flex-col" onSubmit={handleSubmit}>
        <div className=" flex items-center">
          <input
            type="email"
            name="email"
            className="form-control w-full py-2 px-6 rounded mb-3 text-black"
            id="floatingInput"
            placeholder="name@example.com"
            required
          />
        </div>
        <div className="my-2 ">
          <input
            type="text"
            name="name"
            className="form-control w-full py-2 px-6 rounded mb-3 text-black"
            id="floatingInput"
            placeholder="Name"
            required
          />
        </div>
        <div className="my-2">
          <input
            type="url"
            name="photoUrl"
            className="form-control w-full py-2 px-6 rounded mb-3 text-black"
            id="floatingInput"
            placeholder="Enter photo url"
            required
          />
        </div>
        <div className=" my-2">
          <input
            type="password"
            name="password"
            className="form-control w-full py-2 px-6 rounded mb-3 text-black"
            id="floatingPassword"
            placeholder="Password"
            required
          />
        </div>
        <button className="w-1/2 btn  bg-[#533483] mb-5 mt-3" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default SignUp;
