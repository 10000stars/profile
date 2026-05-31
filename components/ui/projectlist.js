import { Animatedtemplate } from "./project-template";


export function Animatedprojects() {
  const projects = [
    {
      desc:
        ["Beyond corals and mangroves, beach ridges can also serve as useful indicators of Holocene sea levels. This is especially valuable in Southeast Asia, where sea-level histories remain poorly constrained.",
          "Using Ground Penetrating Radar (GPR) data from Bintan, Indonesia, my final-year thesis examined beach ridge stratigraphy to reconstruct local Holocene sea-level history. I now continue this work as a research assistant, conducting similar surveys in Thailand, the Philippines, and Indonesia to expand the regional dataset."
        ],
      name: "Holocene Beach Ridges in Southeast Asia",
      year: "2024 - present",
      src: "projects/BR.png",
      links: [
        null,   
        null,                        
        null 
      ],
      images: [
        "projects/gpr_transect.png",
        "projects/gpr_survey.png",
        "projects/gpr_core.png",
      ],
      captions: [
        ["Setting up a GPR transect along a dirt bike track on a remote island in southern Thailand. On an island this overgrown, existing dirt bike trails are often the only way to get a good survey line.", "The island has one of the most extensive and well-preserved beach ridge systems in the region (see the cover image for this project), but getting here requires a 40-minute boat ride from the mainland. Worth it, though."],
        ["Running a 100 MHz GPR survey along the side of a paved road cutting through a resort property. The paved road made for a perfect survey corridor, flat and consistent. I handled the transmitter and receiver, moving them at regular intervals while a colleague managed the data logger.", "Getting here took a bit of groundwork too. The resort is privately owned, so access had to be arranged ahead of time through the local mayor and resort management before we could set foot on the property."],
        ["Ground-truthing is an essential part of any geophysical survey. Alongside the GPR, we routinely hand auger to ground-truth what the radar is picking up, and to collect samples for dating through radiocarbon and OSL analyses. Sometimes we pull full sediment cores too, for more detailed lab work back home.","Here, a distinct non-linear contact in the auger suggests something exciting right beneath our feet!"]
      ],
      locations: [
        "Ko Phra Thong, Thailand",
        "Gamay, Philippines",
        "Natuna, Indonesia",
      ],
    },
    {
      desc:
        ["Singapore has experienced no major earthquakes since its founding, leading to the general view that it is tectonically stable. Yet in the downtown core, bedrock hills are unconformably juxtaposed against much younger sediments to the east. Could this interesting geomorphology reflect recent tectonic activity?",
          "In this undergraduate project, I analysed historical borehole data to map the subsurface stratigraphy of the downtown basin, focusing on the offset of palaeochannels coming from the western uplands."
        ],
      name: "Neotectonics in downtown Singapore?",
      year: "2023 - 2025",
      src: "projects/Kallang.png",
      link:"https://central.scec.org/publication/14476"
    },
        {
      desc:
        ["Sand is a vital global resource, but growing extractions have caused severe social and environmental harm. In Singapore, where large quantities are imported for reclamation and construction, there is a pressing need for more sustainable, low-impact sources.",
          "In this undergraduate project, I interpreted three shallow-seismic boomer profiles from the Singapore Strait, correlating offshore sediments with mainland Singapore's Quaternary stratigraphy to identify potential fluvial sand deposits."
        ],
      name: "Sand resources in the Singapore Strait",
      year: "2023 - 2024",
      src: "projects/sg_geology.png",
    },
        {
      desc:
        ["Urban flooding is a growing challenge in the rapidly developing lowland cities of Southeast Asia. In the face of climate change, what are its primary causes, and how can they be addressed?",
          "In this undergraduate project, I investigated floods in Phnom Penh using remote sensing and instrumental data. Increasing rainfall alongside declining river levels suggests that intensifying precipitation, rather than river overflow, is the primary driver of urban flooding."
        ],
      name: "Urban flooding in Phnom Penh",
      year: "2022 - 2024",
      src: "projects/River.png",
      link:"https://www.sciencedirect.com/science/article/pii/S2214581824002945"
    },

  ];
  return <Animatedtemplate testimonials={projects} />;
}
