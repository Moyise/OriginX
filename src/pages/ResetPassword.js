import React from "react";

import AuthImage from "../images/auth-image.jpg";

function ResetPassword() {
  return (
    <main className="bg-black">
      <div className="relative md:flex">
        {/* Content */}
        <div className="md:w-1/2">
          <div className="max-w-sm mx-auto min-h-screen flex flex-col justify-center px-4 py-8">
            <div className="w-full">
              <h1 className="text-3xl text-white font-bold mb-6">
                Reset your Password ✨
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
                </div>
                <div className="flex justify-end mt-6">
                  <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white whitespace-nowrap">
                    Send Reset Link
                  </button>
                </div>
              </form>
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

export default ResetPassword;
