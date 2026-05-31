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
      "https://www.r-project.org/logo/Rlogo.png",
  },
  {
    id: 5,
    name: "Python",
    image:
      "https://www.svgrepo.com/show/452091/python.svg",
  },
  {
    id: 6,
    name: "Google Earth Engine",
    image:
      "images/googleearth-engine.png",
  },
];

export function SkillsTool() {
  return (
    <div className="flex flex-col items-center mt-3 mb-5 w-full">
      <p className="text-xs text-white font-light mb-3 tracking-widest uppercase">
      Some tools I work with
      </p>
      <div className="flex flex-row items-center justify-center w-full">
        <AnimatedTooltip items={people} />
      </div>
    </div>
  );
}
