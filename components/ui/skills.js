"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/tooltip";
const people = [
  {
    id: 1,
    name: "ArcGIS",
    image:
      "https://esrisingapore.com.sg/sites/esrisingapore.com.sg/files/styles/default_webp/public/2019-04/arcgis-pro-banner-icon.png.webp?itok=3LV2Fhw-",
  },
  {
    id: 2,
    name: "QGIS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/77/Qgis-icon-3.0.png",
  },
  {
    id: 3,
    name: "MATLAB",
    image:
      "https://www.svgrepo.com/show/373830/matlab.svg",
  },
  {
    id: 4,
    name: "R",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/724px-R_logo.svg.png?20240131042527",
  },
  {
    id: 5,
    name: "Python",
    image:
      "https://www.svgrepo.com/show/452091/python.svg",
  },
  {
    id: 6,
    name: "Google Earth",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Google_Earth_icon.svg/512px-Google_Earth_icon.svg.png?20210607063331",
  },
];

export function SkillsTool() {
  return (
    <div className="flex flex-row items-center justify-center mt-3 mb-5 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
