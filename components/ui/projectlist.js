import { Animatedtemplate } from "./project-template";

export function Animatedprojects() {
  const projects = [
    {
      desc:
        "Examining increasingly prevalent floods in Phnom Penh through analysis of remote sensing and instrumental data",
      name: "Flooding and Precipitation in Phnom Penh",
      year: "2022-2024",
      src: "projects/River.png",
      link:"https://www.sciencedirect.com/science/article/pii/S2214581824002945"
    },
    {
      desc:
        "Investigating subsurface structures and stratigraphy in the Singapore Strait",
      name: "Sub-bottom Profile of the Singapore Strait",
      year: "2023-2024",
      src: "projects/sg_geology.png",
    },
    {
      desc:
        "Reconstructing Holocene sea-level changes using Ground Penetrating Radar",
      name: "Holocene Beach Ridges in Bintan, Indonesia",
      year: "2024-2025",
      src: "projects/BR.png",
      link: "https://dr.ntu.edu.sg/entities/publication/4327f23e-85c3-4218-b45c-efe11b30a17b"
    },
    {
      desc:
        "Exploring the presence of active faulting beneath downtown Singapore",
      name: "Neotectonics in the Kallang Basin",
      year: "2023-present",
      src: "projects/Kallang.png",
    },
  ];
  return <Animatedtemplate testimonials={projects} />;
}
