import React, { useState } from "react";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Hello guysss, Form Submitted");

    console.log("email is", email);
    console.log("password is", password);

    setemail("");
    setpassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            required
            type="email"
            placeholder="Enter your email"
            className="bg-neutral-800 hover:bg-neutral-900  w-96 h-10 pl-2"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <input
            required
            type="password"
            placeholder="Enter your password"
            className="bg-neutral-800 hover:bg-neutral-900  w-96 h-10 mt-2 pl-2"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <button className="text-black mt-8 w-96 h-10 bg-neutral-50 hover:bg-neutral-200">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
