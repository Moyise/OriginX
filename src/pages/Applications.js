import React, { useState } from "react";
import { Link } from "react-router-dom";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import ApplicationCard01 from "../partials/application/ApplicationCard01";
import ApplicationCard02 from "../partials/application/ApplicationCard02";
import ApplicationCard03 from "../partials/application/ApplicationCard03";

import Image01 from "../images/applications-image-01.jpg";
import Image02 from "../images/applications-image-02.jpg";
import Image03 from "../images/applications-image-03.jpg";
import Image04 from "../images/applications-image-04.jpg";
import Image05 from "../images/applications-image-05.jpg";
import Image06 from "../images/applications-image-06.jpg";
import Image07 from "../images/applications-image-07.jpg";
import Image08 from "../images/applications-image-08.jpg";

function Applications() {
  const items01 = [
    {
      id: 0,
      image: Image01,
      title: "Form Builder CP",
      link: "#0",
      content:
        "Master Digital Marketing Strategy, Social Media Marketing, Analytics & More!",
      rating: "4.2",
      feat01: "23 hours on-demand video",
      feat02: "37 articles",
      feat03: "Access on mobile and TV",
      feat04: "8K+ active installations",
    },
    {
      id: 1,
      image: Image02,
      title: "Form Builder CP",
      link: "#0",
      content:
        "Master Digital Marketing Strategy, Social Media Marketing, Analytics & More!",
      rating: "4.9",
      feat01: "23 hours on-demand video",
      feat02: "37 articles",
      feat03: "Access on mobile and TV",
      feat04: "8K+ active installations",
    },
    {
      id: 2,
      image: Image03,
      title: "Form Builder CP",
      link: "#0",
      content:
        "Master Digital Marketing Strategy, Social Media Marketing, Analytics & More!",
      rating: "4.3",
      feat01: "23 hours on-demand video",
      feat02: "37 articles",
      feat03: "Access on mobile and TV",
      feat04: "8K+ active installations",
    },
    {
      id: 3,
      image: Image04,
      title: "Form Builder CP",
      link: "#0",
      content:
        "Master Digital Marketing Strategy, Social Media Marketing, Analytics & More!",
      rating: "4.4",
      feat01: "23 hours on-demand video",
      feat02: "37 articles",
      feat03: "Access on mobile and TV",
      feat04: "8K+ active installations",
    },
  ];

  const items02 = [
    {
      id: 0,
      image: Image05,
      title: "Form Builder CP",
      link: "#0",
      content:
        "Master Digital Marketing Strategy, Social Media Marketing, Analytics & More!",
      price: "$89.00",
      deal: "$199.00",
    },
    {
      id: 1,
      image: Image06,
      title: "Form Builder CP",
      link: "#0",
      content:
        "Master Digital Marketing Strategy, Social Media Marketing, Analytics & More!",
      price: "$89.00",
      deal: "$199.00",
    },
    {
      id: 2,
      image: Image07,
      title: "Form Builder CP",
      link: "#0",
      content:
        "Master Digital Marketing Strategy, Social Media Marketing, Analytics & More!",
      price: "$89.00",
      deal: "$199.00",
    },
    {
      id: 3,
      image: Image08,
      title: "Form Builder CP",
      link: "#0",
      content:
        "Master Digital Marketing Strategy, Social Media Marketing, Analytics & More!",
      price: "$89.00",
      deal: "$199.00",
    },
  ];

  const items03 = [
    {
      id: 0,
      image:
        '<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path class="text-indigo-300" d="M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z" /><path class="text-indigo-600" d="M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z" /><path class="text-indigo-500" d="M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z" /></svg>',
      title: "Form Builder CP",
      link: "#0",
    },
    {
      id: 1,
      image: Image06,
      title: "Form Builder CP",
      link: "#0",
    },
    {
      id: 2,
      image: Image07,
      title: "Form Builder CP",
      link: "#0",
    },
    {
      id: 3,
      image: Image08,
      title: "Form Builder CP",
      link: "#0",
    },
  ];

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-black">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Page header */}
            <div className="mb-5">
              {/* Title */}
              <h1 className="text-2xl md:text-3xl text-white font-bold">
                Find the app that’s right for you ✨
              </h1>
            </div>

            {/* Search form */}
            <div className="max-w-xl mb-5">
              <form className="relative">
                <label htmlFor="app-search" className="sr-only">
                  Search
                </label>
                <input
                  id="app-search"
                  className="form-input bg-black w-full pl-9 py-3 border-gray-800 focus:border-gray-400 text-gray-200"
                  type="search"
                  placeholder="Search…"
                />
                <button
                  className="absolute inset-0 right-auto group"
                  type="submit"
                  aria-label="Search"
                >
                  <svg
                    className="w-4 h-4 flex-shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3 mr-2"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                    <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Filters */}
            <div className="mb-4 border-b border-gray-800">
              <ul className="text-sm font-medium flex flex-nowrap -mx-4 sm:-mx-6 lg:-mx-8 overflow-x-scroll no-scrollbar">
                <li className="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                  <Link className="text-indigo-500 whitespace-nowrap" to="#0">
                    View All
                  </Link>
                </li>
                <li className="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                  <Link
                    className="text-gray-500 hover:text-gray-600 whitespace-nowrap"
                    to="#0"
                  >
                    Web Sprint
                  </Link>
                </li>
                <li className="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                  <Link
                    className="text-gray-500 hover:text-gray-600 whitespace-nowrap"
                    to="#0"
                  >
                    Marketing
                  </Link>
                </li>
                <li className="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                  <Link
                    className="text-gray-500 hover:text-gray-600 whitespace-nowrap"
                    to="#0"
                  >
                    Development
                  </Link>
                </li>
                <li className="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
                  <Link
                    className="text-gray-500 hover:text-gray-600 whitespace-nowrap"
                    to="#0"
                  >
                    Design
                  </Link>
                </li>
              </ul>
            </div>

            {/* Page content */}
            <div>
              {/* Cards 1 (Trending apps) */}
              <div className="mt-8">
                <h2 className="text-xl text-gray-300 font-bold mb-5">Trending apps</h2>
                <div className="grid grid-cols-12 gap-6">
                  {items01.map((item) => {
                    return (
                      <ApplicationCard01
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        link={item.link}
                        content={item.content}
                        rating={item.rating}
                        feat01={item.feat01}
                        feat02={item.feat02}
                        feat03={item.feat03}
                        feat04={item.feat04}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Cards 2 (Premium but worth it) */}
              <div className="mt-8">
                <h2 className="text-xl text-gray-800 font-bold mb-5">
                  Premium but worth it
                </h2>
                <div className="grid grid-cols-12 gap-6">
                  {items02.map((item) => {
                    return (
                      <ApplicationCard02
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        link={item.link}
                        content={item.content}
                        rating={item.rating}
                        price={item.price}
                        deal={item.deal}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Cards 3 (Popular categories) */}
              <div className="mt-8">
                <h2 className="text-xl text-gray-300 font-bold mb-5">
                  Popular categories
                </h2>
                <div className="grid grid-cols-12 gap-6">
                  {items03.map((item) => {
                    return (
                      <ApplicationCard03
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        link={item.link}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Applications;
