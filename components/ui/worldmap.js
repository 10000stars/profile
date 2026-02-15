"use client";

import React, { useMemo, useState, useEffect } from "react";
import { MapContainer, TileLayer, useMap, Marker } from "react-leaflet";
import L from "leaflet";
import { X } from "lucide-react"; // optional

const SAMPLE_LOCATIONS = [
  {
    id: 1,
    name: "Vancouver, Canada",
    lat: 49.2804,
    lng: -123.1263,
    images: [
      { url: "images/Van.jpg", caption: "Vancouver Skyline" },
      { url: "images/spring.jpg", caption: "Spring in Vancouver" },
      { url: "images/richmond.jpg", caption: "Garry Point Park" },
      { url: "images/ubc.jpg", caption: "UBC" },
      { url: "images/snow.jpg", caption: "Snowy Times" },
      { url: "images/Stanley.jpg", caption: "Stanley Park" },
      { url: "images/Squamish.jpg", caption: "Squamish" },
      { url: "images/horseshoe.jpg", caption: "Horseshoe Bay" },
      { url: "images/Bowen.jpg", caption: "Bowen Island" },
      { url: "images/kits.jpg", caption: "Point Grey" },
      { url: "images/Wreck.jpg", caption: "Wreck Beach" }
    ]
  },
  {
    id: 2,
    name: "Mt.Fuji, Japan",
    lat: 35.3786,
    lng: 138.7238,
    images: [
      { url: "images/Fuji_far.jpg", caption: "Mt. Fuji from afar" },
      { url: "images/Fuji_close.jpg", caption: "Mt. Fuji up close" },
      { url: "images/kawaguchi.jpg", caption: "Lake Kawaguchi" },
    ]
  },
  {
    id: 3,
    name: "Singapore",
    lat: 1.2955,
    lng: 103.8131,
    images: [
      { url: "images/Singapore.jpg", caption: "A normal day in Singapore" },
      { url: "images/nightsg.jpg", caption: "Singapore River at night" },
      { url: "images/fieldwork.jpg", caption: "Morning fieldwork" },
      { url: "images/lokos.jpg", caption: "Lokos Anticline" },
      { url: "images/siloso.jpg", caption: "Fort Siloso" }
    ]
  },
  {
    id: 4,
    name: "Tohoku region, Japan",
    lat: 38.7235,
    lng: 140.2595,
    images: [
      { url: "images/iwate.jpg", caption: "Mt. Iwate" },
      { url: "images/hachimantai.jpg", caption: "Hachimantai Ōnuma Pond" },
      { url: "images/Azuma.jpg", caption: "Mt. Azuma-fuji crater" }
    ]
  },
    {
    id: 5,
    name: "NSW, Australia",
    lat: -34.9862,
    lng: 150.3764,
    images: [
      { url: "images/opera.jpg", caption: "The Opera House" },
      { url: "images/sydney.jpg", caption: "Tamarama Beach, Sydney" },
      { url: "images/bluemt.jpg", caption: "Blue Mountains" },
      { url: "images/Folds.jpg", caption: "Quarantine Bay, Eden" },
      { url: "images/fossil.jpg", caption: "Flagstaff Hill, Wollongong" },
      { url: "images/Haycock.jpg", caption: "Haycock Point"},
      { url: "images/Bombo.jpg", caption: "Bombo Headland" }
    ]
  },
  {
    id: 6,
    name: "California, USA",
    lat: 36.2947,
    lng: -119.7926,
    images: [
      { url: "images/goldengate.jpg", caption: "Golden Gate" },
      { url: "images/sf.jpg", caption: "San Francisco Skyline" },
      { url: "images/Yosemite_sunset.jpg", caption: "Half Dome" },
      { url: "images/Yosemite_falls.jpg", caption: "Lower Yosemite Falls" },
      { url: "images/pointlobos.jpg", caption: "Point Lobos" },
      { url: "images/lonepine.jpg", caption: "Lone Pine" },
      { url: "images/cerrogordo.jpg", caption: "Cerro Gordo" },
      { url: "images/camping.jpg", caption: "Sunrise over Sierra Nevada" },
      { url: "images/wilsoncreek.jpg", caption: "Wilson Creek, Mono Lake" },
      { url: "images/Tioga.jpg", caption: "Approaching Tioga Pass" },
      { url: "images/devils.jpg", caption: "Devils Postpile" },
      { url: "images/wallacecreek.jpg", caption: "Wallace Creek, Carrizo Plain" },
      { url: "images/redrock.jpg", caption: "Red Rock Canyon" },
      { url: "images/crowley.jpg", caption: "Lake Crowley"}
    ]
  },
  {
    id: 7,
    name: "Canadian Rockies",
    lat: 51.2663,
    lng: -115.9644,
    images: [
      { url: "images/banff.jpg", caption: "Overlooking Banff" },
      { url: "images/Rundle.jpg", caption: "Mount Rundle" },
      { url: "images/louise.jpg", caption: "Lake Louise" },
      { url: "images/Johnston.jpg", caption: "Johnston Canyon" }
    ]
  },
  {
    id: 8,
    name: "Victoria, Australia",
    lat: -37.7676,
    lng: 144.6424,
    images: [
      { url: "images/melbourne.jpg", caption: "Melbourne Skyline" },
      { url: "images/oceanroad.jpg", caption: "Great Ocean Road" },
      { url: "images/apostles.jpg", caption: "Twelve Apostles" },
      { url: "images/grampian.jpg", caption: "Grampians" }
    ]
  },
    {
    id: 9,
    name: "Bali, Indonesia",
    lat: -8.3874,
    lng: 115.4313,
    images: [
      { url: "images/batur.jpg", caption: "Mt. Batur" },
      { url: "images/padangbai.jpg", caption: "Padang Bai" },
      { url: "images/rice.jpg", caption: "Rice fields" },
    ]
  },
    {
    id: 10,
    name: "Guangdong, China",
    lat: 23.0666,
    lng:  112.7777,
    images: [
      { url: "images/karst_lake.jpg", caption: "A steep, tower-like limestone hill" },
      { url: "images/karst_insc.jpg", caption: "Inscriptions on the walls of a karstic cave" },
    ],
  },
    {
    id: 11,
    name: "Chongqing, China",
    lat: 29.5657,
    lng:  106.5512,
    images: [
      { url: "images/chongqing_night.jpg", caption: "The night city" },
      { url: "images/chongqing1.jpg", caption: "Dipping limestone layers" },
      { url: "images/chongqing2.jpg", caption: "One of the Wulong Karst bridges" }
      
    ],
  },
    {
    id: 12,
    name: "Ko Phra Thong, Thailand",
    lat: 9.1108,
    lng:  98.2779,
    images: [
      { url: "images/PT_beach.jpg", caption: "Sunny afternoon" },
      { url: "images/PT_field.jpg", caption: "A day in the field" },
      { url: "images/PT_sunset.jpg", caption: "Through the clouds" },
      { url: "images/PT_chickens.jpg", caption: "Cloths and Chickens" },
    ],
  },
    {
    id: 13,
    name: "Gamay, Philippines",
    lat: 12.3729,
    lng:  125.2956,
    images: [
      { url: "images/gamay_swale.jpg", caption: "Ridge and Swale" },
      { url: "images/gamay_field.jpg", caption: "Good field day" },
      { url: "images/gamay_stars.jpg", caption: "A starry night" },
      { url: "images/gamay_landslide.jpg", caption: "Landslide" },
    ],
  },
];

// Smaller pin icon
function makePinIcon(selected) {
  const fill = selected ? "#facc15" : "#ef4444"; // yellow when selected
  const html = `
    <svg width="20" height="26" viewBox="0 0 28 36" xmlns="http://www.w3.org/2000/svg" style="display:block; filter:drop-shadow(0 1px 4px rgba(0,0,0,.6))">
      <path d="M14 0c7.18 0 13 5.76 13 12.86 0 8.06-12.07 21.83-12.59 22.41a.56.56 0 0 1-.82 0C13.07 34.7 1 20.92 1 12.86 1 5.76 6.82 0 14 0Z" fill="${fill}"/>
      <circle cx="14" cy="13" r="5.5" fill="white"/>
    </svg>`;
  return L.divIcon({ html, className: "", iconSize: [20, 26], iconAnchor: [10, 26] });
}
function FlyTo({ center }) {
  const map = useMap();
  useEffect(() => {
    if (!center) return;
    map.flyTo(center, Math.max(map.getZoom(), 4), { duration: 0.8 });
  }, [center, map]);
  return null;
}

export default function WorldMap({ locations = SAMPLE_LOCATIONS }) {
  const [selectedId, setSelectedId] = useState(null);
  const selected = useMemo(
    () => locations.find((l) => String(l.id) === String(selectedId)) || null,
    [locations, selectedId]
  );

  const startCenter = [1.2955, 103.8131]; // [lat, lng]
  const startZoom = 2.2;

  return (
    // 80% width on lg+, full width on small;
    <div className="w-full mt-3 lg:w-4/5 mx-auto bg-slate-900 text-white rounded-xl overflow-hidden relative">
      {/* 2) Grid: map left / panel right on lg+, stacked on small */}
      <div className="grid grid-rows-[auto_auto] lg:grid-cols-[minmax(320px,1fr)_minmax(280px,420px)] lg:grid-rows-1  h-[95vh] lg:h-[80vh]">
        {/* Map */}
        <div className="relative h-[60vh] lg:h-[80vh] z-0">
          <MapContainer
            center={startCenter}
            zoom={startZoom}
            minZoom={2}
            maxZoom={18}
            scrollWheelZoom
            className="h-full w-full"
            zoomControl={true}
            maxBounds={[[-85, -180], [85, 180]]}
            maxBoundsViscosity={1.0}
            style={{ background: "transparent" }} 
          >
            {/* Dark, non-satellite base map */}
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
              maxZoom={19}
              noWrap={true}
            />

            {locations.map(loc => (
              <Marker
                key={loc.id}
                position={[loc.lat, loc.lng]}
                icon={makePinIcon(String(selectedId) === String(loc.id))}
                eventHandlers={{ click: () => setSelectedId(loc.id) }}
              />
            ))}
            <FlyTo center={selected ? [selected.lat, selected.lng] : null} />
          </MapContainer>
        </div>

        {/* Details panel (right on desktop, below on mobile) */}
        <div className="border-t lg:border-t-0 border-slate-800 bg-slate-800/60 p-4 lg:p-6 
                h-full overflow-y-auto">
          {!selected ? (
            <div className="flex h-full items-center justify-center text-slate-300 text-center">
              <p>Select a pin for more details</p>
            </div>
          ) : (
            <div className="relative h-full">
              <button
                onClick={() => setSelectedId(null)}
                className="absolute right-0 top-0 rounded-full bg-slate-700/70 p-2 hover:bg-slate-600"
                aria-label="Close"
                title="Close"
              >
                <X className="h-5 w-5" />
              </button>

              <h2 className="pr-10 text-xl font-semibold">{selected.name}</h2>

             <div className="mt-4 grid grid-cols-1 gap-4">
                {selected.images?.map((img, i) => (
                  <figure key={i} className="overflow-hidden rounded-lg bg-black/30">
                    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg bg-black/30">
                      <img
                        src={img.url}
                        alt={img.caption}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                        draggable={false}
                      />
                    </div>
                    <figcaption className="p-2 text-sm text-slate-300">{img.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}