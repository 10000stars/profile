"use client";
import React from "react";
import { LayoutGrid } from "./layout-grid";

export function Memorabiliagrid() {
  return (
    <div className="h-screen py-10 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-semibold md:text-2xl text-xl text-white">
        Folds at Eden, NSW Australia
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-semibold md:text-2xl text-xl text-white">
        Winter in the Canadian Rockies
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-semibold md:text-2xl text-xl text-white">
        Sunset at Yosemite
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-2xl text-xl text-white">
        View from Stanley Park, Vancouver
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "images/Folds.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "/images/Banff.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "/images/Yosemite_sunset.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "images/Van.jpg",
  },
];
