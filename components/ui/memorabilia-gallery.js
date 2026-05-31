"use client";

import { useState, useCallback, useEffect } from "react";
import { IconRefresh, IconMapPin } from "@tabler/icons-react";

const ALL_IMAGES = [
  { url: "images/Van.jpg",              caption: "Vancouver Skyline",              location: "Vancouver, BC, Canada",       lat: 49.276,  lng: -123.209 },
  { url: "images/richmond.jpg",         caption: "Garry Point Park",               location: "Vancouver, BC, Canada",       lat: 49.127,  lng: -123.195 },
  { url: "images/ubc.jpg",              caption: "UBC",                            location: "Vancouver, BC, Canada",       lat: 49.267,  lng: -123.254 },
  { url: "images/snow.jpg",             caption: "Snowy Times",                    location: "Vancouver, BC, Canada",       lat: 49.238,  lng: -123.108 },
  { url: "images/Stanley.jpg",          caption: "Stanley Park",                   location: "Vancouver, BC, Canada",       lat: 49.309,  lng: -123.154 },
  { url: "images/Squamish.jpg",         caption: "Squamish",                       location: "Squamish, BC, Canada",       lat: 49.671,  lng: -123.131 },
  { url: "images/horseshoe.jpg",        caption: "Horseshoe Bay",                  location: "Horsehoe Bay, BC, Canada",       lat: 49.378,  lng: -123.274 },
  { url: "images/Fuji_far.jpg",         caption: "Mt. Fuji from afar",             location: "Fujiyoshida, Yamanashi, Japan",         lat: 35.500,  lng: 138.800  },
  { url: "images/Fuji_close.jpg",       caption: "Mt. Fuji up close",              location: "Fujikawaguchiko, Yamanashi, Japan",         lat: 35.395,  lng: 138.733  },
  { url: "images/kawaguchi.jpg",        caption: "Lake Kawaguchi",                 location: "Mt. Fuji, Japan",         lat: 35.513,  lng: 138.767  },
  { url: "images/Singapore.jpg",        caption: "A normal day in Singapore",      location: "Singapore",               lat: 1.383,   lng: 103.760  },
  { url: "images/nightsg.jpg",          caption: "Singapore River at night",       location: "Singapore",               lat: 1.287,   lng: 103.850  },
  { url: "images/lokos.jpg",            caption: "Lokos Anticline",                location: "St John's Island, Singapore",               lat: 1.213,   lng: 103.852  },
  { url: "images/iwate.jpg",            caption: "Mt. Iwate",                      location: "Hirakasa, Iwate, Japan",           lat: 39.874,  lng: 141.046  },
  { url: "images/hachimantai.jpg",      caption: "Hachimantai Ōnuma Pond",         location: "Hachimantai, Akita, Japan",           lat: 39.984,  lng: 140.799  },
  { url: "images/Azuma.jpg",            caption: "Mt. Azuma-fuji crater",          location: "Fukushima, Japan",           lat: 37.723,  lng: 140.258  },
  { url: "images/opera.jpg",            caption: "The Opera House",                location: "Sydney, NSW, Australia",          lat: -33.853, lng: 151.212  },
  { url: "images/sydney.jpg",           caption: "Tamarama Beach",                 location: "Sydney, NSW, Australia",          lat: -33.900, lng: 151.270  },
  { url: "images/bluemt.jpg",           caption: "Blue Mountains",                 location: "Katoomba, NSW, Australia",          lat: -33.732, lng: 150.312  },
  { url: "images/Folds.jpg",            caption: "Quarantine Bay",                 location: "Eden, NSW, Australia",          lat: -37.077, lng: 149.889  },
  { url: "images/fossil.jpg",           caption: "Fossil",                         location: "Wollongong, NSW, Australia",          lat: -34.421, lng: 150.909  },
  { url: "images/Haycock.jpg",          caption: "Haycock Point",                  location: "Eden, NSW, Australia",          lat: -36.949, lng: 149.942  },
  { url: "images/Bombo.jpg",            caption: "Bombo Headland",                 location: "Bombo, NSW, Australia",          lat: -34.653, lng: 150.862  },
  { url: "images/goldengate.jpg",       caption: "Golden Gate",                    location: "San Francisco, CA, USA",         lat: 37.809,  lng: -122.475 },
  { url: "images/sf.jpg",               caption: "San Francisco Skyline",          location: "San Francisco, CA, USA",         lat: 37.803,  lng: -122.406 },
  { url: "images/Yosemite_sunset.jpg",  caption: "Half Dome",                      location: "Yosemite, CA, USA",         lat: 37.729,  lng: -119.573 },
  { url: "images/Yosemite_falls.jpg",   caption: "Lower Yosemite Falls",           location: "Yosemite, CA, USA",         lat: 37.750,  lng: -119.596 },
  { url: "images/pointlobos.jpg",       caption: "Outcrops by the sea",            location: "Point Lobos, CA, USA",         lat: 36.519,  lng: -121.952 },
  { url: "images/lonepine.jpg",         caption: "Lone Pine",                      location: "Lone Pine, CA, USA",         lat: 36.604,  lng: -118.063 },
  { url: "images/cerrogordo.jpg",       caption: "Cerro Gordo",                    location: "Keeler, CA, USA",         lat: 36.533,  lng: -117.822 },
  { url: "images/camping.jpg",          caption: "Sunrise over Sierra Nevada",     location: "Keeler, CA, USA",         lat: 36.521,  lng: -117.822 },
  { url: "images/wilsoncreek.jpg",      caption: "Wilson Creek",                   location: "Lee Vining, CA, USA",         lat: 38.029,  lng: -119.125 },
  { url: "images/Tioga.jpg",            caption: "Approaching Tioga Pass",         location: "Lee Vining, CA, USA",         lat: 37.951,  lng: -119.222 },
  { url: "images/devils.jpg",           caption: "Devils Postpile",                location: "Mammoth Lakes, CA, USA",         lat: 37.615,  lng: -119.088 },
  { url: "images/wallacecreek.jpg",     caption: "Wallace Creek",                  location: "Carrizo Plains, CA, USA",         lat: 35.271,  lng: -119.827 },
  { url: "images/redrock.jpg",          caption: "Red cliffs",                     location: "Red Rock Canyon, CA, USA",         lat: 35.363,  lng: -117.978 },
  { url: "images/crowley.jpg",          caption: "Lake Crowley",                   location: "Mammoth Lakes, CA, USA",         lat: 37.610,  lng: -118.720 },
  { url: "images/banff.jpg",            caption: "Overlooking Banff",              location: "Banff, AB, Canada",        lat: 51.197,  lng: -115.588 },
  { url: "images/Rundle.jpg",           caption: "Mount Rundle",                   location: "Banff, AB, Canada",        lat: 51.186,  lng: -115.545 },
  { url: "images/louise.jpg",           caption: "Frozen lake",                    location: "Lake Louise, AB, Canada",        lat: 51.416,  lng: -116.219 },
  { url: "images/Johnston.jpg",         caption: "Winter wonderland",              location: "Johnston Canyon, AB, Canada",        lat: 51.279,  lng: -115.823 },
  { url: "images/melbourne.jpg",        caption: "Melbourne Skyline",              location: "Melbourne, VIC, Australia",     lat: -37.808, lng: 144.962  },
  { url: "images/oceanroad.jpg",        caption: "Great Ocean Road",               location: "Lorne, VIC, Australia",     lat: -38.567, lng: 143.966  },
  { url: "images/apostles.jpg",         caption: "Twelve Apostles",                location: "Princetown, VIC, Australia",     lat: -38.665, lng: 143.104  },
  { url: "images/grampian.jpg",         caption: "Grampians",                      location: "Halls Gap, VIC, Australia",     lat: -37.160, lng: 142.516  },
  { url: "images/batur.jpg",            caption: "Mt. Batur",                      location: "Bali, Indonesia",         lat: -8.268,  lng: 115.365  },
  { url: "images/padangbai.jpg",        caption: "Padang Bai",                     location: "Bali, Indonesia",         lat: -8.536,  lng: 115.510  },
  { url: "images/karst_insc.jpg",       caption: "Inscriptions in karstic cave",   location: "Zhaoqing, Guangdong, China",        lat: 23.078,  lng: 112.477  },
  { url: "images/chongqing_night.jpg",  caption: "The night city",                 location: "Chongqing, China",        lat: 29.567,  lng: 106.576  },
  { url: "images/chongqing1.jpg",       caption: "Dipping limestone layers",       location: "Wulong, Chongqing, China",        lat: 29.425,  lng: 107.776  },
  { url: "images/PT_beach.jpg",         caption: "Sunny afternoon",                location: "Ko Phra Thong, Thailand", lat: 9.139,   lng: 98.259   },
  { url: "images/PT_sunset.jpg",        caption: "Through the clouds",             location: "Ko Phra Thong, Thailand", lat: 9.139,   lng: 98.259   },
  { url: "images/gamay_swale.jpg",      caption: "Ridge and Swale",                location: "Northern Samar, Philippines",      lat: 12.374,  lng: 125.297  },
  { url: "images/gamay_stars.jpg",      caption: "A starry night",                 location: "Northern Samar, Philippiness",      lat: 12.374,  lng: 125.297  },
  { url: "images/natuna_sunrise.jpg",  caption: "Sunrise before fieldwork",        location: "Natuna, Indonesia",      lat: 3.986,  lng: 108.376  },
];

function useScreenCount() {
  const getCount = () => {
    if (typeof window === "undefined") return 6;
    if (window.innerWidth >= 1024) return 6;
    if (window.innerWidth >= 768) return 4;
    return 3;
  };

  const [count, setCount] = useState(getCount);

  useEffect(() => {
    const handler = () => setCount(getCount());
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return count;
}

function pickSmart(pool, seen, count) {
  const unseenPool = pool.filter((img) => !seen.has(img.url));
  const newSeen = new Set(seen);

  let source = unseenPool.length >= count ? unseenPool : [...pool];
  if (unseenPool.length < count) newSeen.clear();

  const shuffled = [...source].sort(() => Math.random() - 0.5);
  const result = shuffled.slice(0, count);
  result.forEach((img) => newSeen.add(img.url));

  return { result, newSeen };
}

function MemorabiliaCard({ image }) {
  return (
    <div className="relative rounded-xl overflow-hidden bg-[#13161f] group">
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <img
          src={image.url}
          alt={image.caption}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <p className="text-white text-sm font-medium leading-tight">{image.caption}</p>
          <a
            href={`https://www.google.com/maps?q=${image.lat},${image.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="flex items-center gap-1 mt-1 w-fit"
          >
            <IconMapPin size={11} className="text-white/50" />
            <p className="text-white/50 hover:text-white/80 transition text-xs">{image.location}</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function MemorabiliaGallery() {
  const count = useScreenCount();
  const [seen, setSeen] = useState(() => new Set());
  const [displayed, setDisplayed] = useState(() => {
    const { result, newSeen } = pickSmart(ALL_IMAGES, new Set(), 6);
    return { images: result, seen: newSeen };
  });
  const [spinning, setSpinning] = useState(false);

  useEffect(() => {
    const { result, newSeen } = pickSmart(ALL_IMAGES, seen, count);
    setDisplayed({ images: result, seen: newSeen });
    setSeen(newSeen);
  }, [count]);

  const handleRefresh = useCallback(() => {
    setSpinning(true);
    setTimeout(() => {
      const { result, newSeen } = pickSmart(ALL_IMAGES, seen, count);
      setDisplayed({ images: result, seen: newSeen });
      setSeen(newSeen);
      setSpinning(false);
    }, 400);
  }, [seen, count]);

  return (
    <div className="w-full px-4 py-4">
      <div className="flex justify-end mb-4">
        <button
          onClick={handleRefresh}
          className="flex items-center gap-2 border border-white/20 rounded-xl px-4 py-1.5 text-sm text-white hover:bg-white/10 transition"
        >
          <IconRefresh
            size={15}
            className={spinning ? "animate-spin" : "transition-transform"}
          />
          Shuffle
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayed.images.slice(0, count).map((img, i) => (
          <MemorabiliaCard key={`${img.url}-${i}`} image={img} />
        ))}
      </div>
    </div>
  );
}