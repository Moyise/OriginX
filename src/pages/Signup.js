import React from "react";
import { Link } from "react-router-dom";

import AuthImage from "../images/auth-image.jpg";

function Signup() {
  return (
    <main className="bg-black">
      <div className="relative md:flex">
        {/* Content */}
        <div className="md:w-1/2">
          <div className="max-w-sm mx-auto min-h-screen flex flex-col justify-center px-4 py-8">
            <div className="w-full">
              <h1 className="text-3xl text-white font-bold mb-6">
                Create your Account ✨
              </h1>
              {/* Form */}
              <form>
                <div className="space-y-4">
                  <div>
                    <label
                      className="block text-sm font-medium mb-1 text-gray-400"
                      htmlFor="email"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      className="form-input w-full bg-black border-gray-800 focus:border-gray-400 text-gray-200"
                      type="email"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium mb-1 text-gray-400"
                      htmlFor="name"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      className="form-input w-full bg-black border-gray-800 focus:border-gray-400 text-gray-200"
                      type="name"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium mb-1 text-gray-400"
                      htmlFor="role"
                    >
                      Your Role <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="role"
                      className="form-select w-full bg-black border-gray-800 focus:border-gray-400 text-gray-200"
                    >
                      <option>Designer</option>
                      <option>Developer</option>
                      <option>Accountant</option>
                    </select>
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium mb-1 text-gray-400"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      className="form-input w-full bg-black border-gray-800 focus:border-gray-400 text-gray-200"
                      type="password"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <div className="mr-1">
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="text-sm ml-2">Email me about product news.</span>
                    </label>
                  </div>
                  <Link
                    className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3 whitespace-nowrap"
                    to="/"
                  >
                    Sign Up
                  </Link>
                </div>
              </form>
              {/* Footer */}
              <div className="pt-5 mt-6 border-t border-gray-200">
                <div className="text-sm">
                  Have an account?{" "}
                  <Link
                    className="font-medium text-indigo-500 hover:text-indigo-600"
                    to="/signin"
                  >
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div
          className="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2"
          aria-hidden="true"
        >
          <img
            className="object-cover object-center w-full h-full"
            src={AuthImage}
            width="760"
            height="1024"
            alt="Authentication"
          />
        </div>
      </div>
    </main>
  );
}

export default Signup;
