const papers = [
 
  {
    type: "preprint",
    year: 2025,
    topic: "transport",
    authors: [
      "G. S. Brennan",
      "T. B. Thompson",
      "H. Oliveri",
      "V. Vinje",
      "G. Ringstad",
      "P. K. Eide",
      "A. Goriely",
      "M. E. Rognes"
    ],
    citationAuthors: "G. S. Brennan, T. B. Thompson, H. Oliveri, V. Vinje, G. Ringstad, P. K. Eide, A. Goriely, and M. E. Rognes",
    title: "Heterogeneity in human brain clearance adds resilience against tauopathy",
    venue: "bioRxiv",
    doi: "10.1101/2025.06.03.657596"
  },

  {
    type: "preprint",
    year: 2025,
    topic: "mechanics",
    authors: [
      "H. Oliveri",
      "T. Lessinnes",
      "D. E.  Moulton",
      "A. Goriely"
    ],
    citationAuthors: "H. Oliveri, T. Lessinnes, D. E. Moulton, and A. Goriely",
    title: "Chirality and handedness",
    venue: "Under review, commissioned by Reviews of Modern Physics"
  },

  {
    type: "article",
    year: 2026,
    topic: "transport",
    authors: [
      "H. Oliveri",
      "E. Cozzolino",
      "A. Goriely"
    ],
    citationAuthors: "H. Oliveri, E. Cozzolino, and A. Goriely",
    title: "A multiscale theory for network advection-reaction-diffusion",
    venue: "Journal of Mathematical Biology, 92, 65",
    doi: "10.1007/s00285-026-02386-2"
  },

  {
    type: "article",
    year: 2026,
    topic: "plants",
    authors: [
      "H. Oliveri",
      "C. Godin",
      "I. Cheddadi"
    ],
    citationAuthors: "H. Oliveri, C. Godin, and I. Cheddadi",
    title: "Towards an active matter theory of plant morphogenesis",
    venue: "Quantitative Plant Biology, accepted",
    arxiv: "2512.05554"
  },

  {
    type: "article",
    year: 2025,
    topic: "transport",
    authors: [
      "A. Ahern",
      "T. B. Thompson",
      "H. Oliveri",
      "S. Lorthois",
      "A. Goriely"
    ],
    citationAuthors: "A. Ahern, T. B. Thompson, H. Oliveri, S. Lorthois, and A. Goriely",
    title: "Modelling the coupling between cerebrovascular pathology and amyloid beta spreading in Alzheimer's disease",
    venue: "Proceedings of the Royal Society A, 481, 20240548",
    doi: "10.1098/rspa.2024.0548"
  },

  {
    type: "article",
    year: 2025,
    topic: "neuro",
    authors: [
      "C. Kassianides",
      "A. Goriely",
      "H. Oliveri"
    ],
    citationAuthors: "C. Kassianides, A. Goriely, and H. Oliveri",
    title: "The multiscale mechanics of axon durotaxis",
    venue: "Journal of the Mechanics and Physics of Solids, 200, 106134",
    doi: "10.1016/j.jmps.2025.106134"
  },

  {
    type: "article",
    year: 2025,
    topic: "plants",
    authors: [
      "H. Oliveri",
      "I. Cheddadi"
    ],
    citationAuthors: "H. Oliveri and I. Cheddadi",
    title: "Hydromechanical field theory of plant morphogenesis",
    venue: "Journal of the Mechanics and Physics of Solids, 196, 106035",
    doi: "10.1016/j.jmps.2025.106035"
  },

  {
    type: "article",
    year: 2024,
    topic: "mechanics",
    authors: [
      "D. E.  Moulton",
      "H. Oliveri"
    ],
    citationAuthors: "D. E. Moulton and H. Oliveri",
    title: "The mathematics and mechanics of tug of war",
    venue: "Mathematics and Mechanics of Solids, 29, 1254–1270",
    doi: "10.1177/10812865231203154"
  },

  {
    type: "article",
    year: 2024,
    topic: "plants",
    authors: [
      "H. Oliveri",
      "D. E.  Moulton",
      "H. A. Harrington",
      "A. Goriely"
    ],
    citationAuthors: "H. Oliveri, D. E. Moulton, H. A. Harrington, and A. Goriely",
    title: "Active shape control by plants in dynamic environments",
    venue: "Physical Review E, 110, 014405",
    doi: "10.1103/PhysRevE.110.014405"
  },

  {
    type: "article",
    year: 2023,
    topic: "transport",
    authors: [
      "G. S. Brennan",
      "T. B. Thompson",
      "H. Oliveri",
      "M. E. Rognes",
      "A. Goriely"
    ],
    citationAuthors: "G. S. Brennan, T. B. Thompson, H. Oliveri, M. E. Rognes, and A. Goriely",
    title: "The role of clearance in neurodegenerative diseases",
    venue: "SIAM Journal on Applied Mathematics, 84, S172–S198",
    doi: "10.1137/22M1487801"
  },

  {
    type: "article",
    year: 2023,
    topic: "plants",
    authors: [
      "D. E.  Moulton",
      "H. Oliveri",
      "A. Goriely",
      "C. J. Thorogood"
    ],
    citationAuthors: "D. E. Moulton, H. Oliveri, A. Goriely, and C. J. Thorogood",
    title: "Mechanics reveals the role of peristome geometry in prey capture in carnivorous pitcher plants (Nepenthes)",
    venue: "Proceedings of the National Academy of Sciences, 120, e2306268120",
    doi: "10.1073/pnas.2306268120"
  },

  {
    type: "article",
    year: 2023,
    topic: "transport",
    authors: [
      "P. Putra",
      "H. Oliveri",
      "T. B. Thompson",
      "A. Goriely"
    ],
    citationAuthors: "P. Putra, H. Oliveri, T. Thompson, and A. Goriely",
    title: "Front propagation and arrival times in networks with application to neurodegenerative diseases",
    venue: "SIAM Journal on Applied Mathematics, 83, 194–224",
    doi: "10.1137/21M1467547"
  },

  {
    type: "article",
    year: 2022,
    topic: "neuro",
    authors: [
      "H. Oliveri",
      "A. Goriely"
    ],
    citationAuthors: "H. Oliveri and A. Goriely",
    title: "Mathematical models of neuronal growth",
    venue: "Biomechanics and Modeling in Mechanobiology, 21, 89–118",
    doi: "10.1007/s10237-021-01539-0"
  },

  {
    type: "article",
    year: 2022,
    topic: "neuro",
    authors: [
      "H. Oliveri",
      "R. de Rooij",
      "E. Kuhl",
      "A. Goriely"
    ],
    citationAuthors: "H. Oliveri, R. de Rooij, E. Kuhl, and A. Goriely",
    title: "Rheology of growing axons",
    venue: "Physical Review Research, 4, 033125",
    doi: "10.1103/PhysRevResearch.4.033125"
  },

  {
    type: "article",
    year: 2021,
    topic: "biomechanics",
    authors: [
      "M. Boudissa",
      "G. Bahl",
      "H. Oliveri",
      "M. Chabanas",
      "J. Tonetti"
    ],
    citationAuthors: "M. Boudissa, G. Bahl, H. Oliveri, M. Chabanas, and J. Tonetti",
    title: "Virtual preoperative planning of acetabular fractures using patient-specific biomechanical simulation: A case-control study",
    venue: "Orthopaedics & Traumatology: Surgery & Research, 107, 103004",
    doi: "10.1016/j.otsr.2021.103004"
  },

  {
    type: "article",
    year: 2021,
    topic: "biomechanics",
    authors: [
      "M. Boudissa",
      "B. Noblet",
      "G. Bahl",
      "H. Oliveri",
      "M. Herteleer",
      "J. Tonetti",
      "M. Chabanas"
    ],
    citationAuthors: "M. Boudissa, B. Noblet, G. Bahl, H. Oliveri, M. Herteleer, J. Tonetti, and M. Chabanas",
    title: "Planning acetabular fracture reduction using a patient-specific biomechanical model: A prospective and comparative clinical study",
    venue: "International Journal of Computer Assisted Radiology and Surgery, 16, 1305–1317",
    doi: "10.1007/s11548-021-02352-x"
  },

  {
    type: "article",
    year: 2021,
    topic: "neuro",
    authors: [
      "H. Oliveri",
      "K. Franze",
      "A. Goriely"
    ],
    citationAuthors: "H. Oliveri, K. Franze, and A. Goriely",
    title: "Theory for durotactic axon guidance",
    venue: "Physical Review Letters, 126, 118101",
    doi: "10.1103/PhysRevLett.126.118101"
  },

  {
    type: "article",
    year: 2020,
    topic: "plants",
    authors: [
      "D. E.  Moulton",
      "H. Oliveri",
      "A. Goriely"
    ],
    citationAuthors: "D. E. Moulton, H. Oliveri, and A. Goriely",
    title: "Multiscale integration of environmental stimuli in plant tropism produces complex behaviors",
    venue: "Proceedings of the National Academy of Sciences, 117, 32226–32237",
    doi: "10.1073/pnas.2016025117"
  },

  {
    type: "article",
    year: 2020,
    topic: "plants",
    authors: [
      "F. Zhao",
      "F. Du",
      "H. Oliveri",
      "L. Zhou",
      "Olivier Ali",
      "W. Chen",
      "S. Feng",
      "Q. Wang",
      "S. Lü",
      "M. Long",
      "R. Schneider",
      "A. Sampathkumar",
      "C. Godin",
      "Jan Traas",
      "Y. Jiao"
    ],
    citationAuthors: "F. Zhao*, F. Du*, H. Oliveri*, L. Zhou*, O. Ali*, W. Chen, S. Feng, Q. Wang, S. Lü, M. Long, R. Schneider, A. Sampathkumar, C. Godin, J. Traas, and Y. Jiao",
    title: "Microtubule-mediated wall anisotropy contributes to leaf blade flattening",
    venue: "Current Biology, 30, 3972–3985",
    doi: "10.1016/j.cub.2020.07.076",
    note: "* These authors contributed equally."
  },

  {
    type: "article",
    year: 2019,
    topic: "plants",
    authors: [
      "Olivier Ali",
      "H. Oliveri",
      "Jan Traas",
      "C. Godin"
    ],
    citationAuthors: "O. Ali, H. Oliveri, J. Traas, and C. Godin",
    title: "Simulating turgor-induced stress patterns in multilayered plant tissues",
    venue: "Bulletin of Mathematical Biology",
    doi: "10.1007/s11538-019-00622-z"
  },

  {
    type: "article",
    year: 2018,
    topic: "biomechanics",
    authors: [
      "M. Boudissa",
      "H. Oliveri",
      "M. Chabanas",
      "J. Tonetti"
    ],
    citationAuthors: "M. Boudissa, H. Oliveri, M. Chabanas, and J. Tonetti",
    title: "Computer-assisted surgery in acetabular fractures: Virtual reduction of acetabular fracture using the first patient-specific biomechanical model simulator",
    venue: "Orthopaedics & Traumatology: Surgery & Research, 104, 359–362",
    doi: "10.1016/j.otsr.2018.01.007"
  },

  {
    type: "article",
    year: 2018,
    topic: "plants",
    authors: [
      "H. Oliveri",
      "Jan Traas",
      "C. Godin",
      "Olivier Ali"
    ],
    citationAuthors: "H. Oliveri, J. Traas, C. Godin, and O. Ali",
    title: "Regulation of plant cell wall stiffness by mechanical stress: A mesoscale physical model",
    venue: "Journal of Mathematical Biology, 78, 625–653",
    doi: "10.1007/s00285-018-1286-y"
  },

  {
    type: "proceeding",
    year: 2020,
    topic: "biomechanics",
    authors: [
      "M. Boudissa",
      "M. Chabanas",
      "G. Bahl",
      "H. Oliveri",
      "J. Tonetti"
    ],
    citationAuthors: "M. Boudissa, M. Chabanas, G. Bahl, H. Oliveri, and J. Tonetti",
    title: "Virtual pre-operative planning in acetabular surgery using a patient-specific biomechanical model: A prospective clinical study",
    venue: "CAOS"
  },

  {
    type: "proceeding",
    year: 2017,
    topic: "biomechanics",
    authors: [
      "M. Boudissa",
      "H. Oliveri",
      "M. Chabanas",
      "P. Merloz",
      "J. Tonetti"
    ],
    citationAuthors: "M. Boudissa, H. Oliveri, M. Chabanas, P. Merloz, and J. Tonetti",
    title: "Pre-operative planning in acetabular surgery: The first patient-specific biomechanical model",
    venue: "International Society of Computer-Assisted Orthopaedic Surgery",
    doi: "10.1302/1358-992X.2017.20.018"
  },

  {
    type: "proceeding",
    year: 2017,
    topic: "biomechanics",
    authors: [
      "H. Oliveri",
      "M. Boudissa",
      "J. Tonetti",
      "M. Chabanas"
    ],
    citationAuthors: "H. Oliveri, M. Boudissa, J. Tonetti, and M. Chabanas",
    title: "Planning acetabular fracture reduction using patient-specific multibody simulation of the hip",
    venue: "Medical Imaging 2017: Image-Guided Procedures, Robotic Interventions, and Modeling, SPIE",
    doi: "10.1117/12.2250380"
  },

  {
    type: "proceeding",
    year: 2014,
    topic: "biomechanics",
    authors: [
      "M. Boudissa",
      "M. Chabanas",
      "H. Oliveri",
      "J. Tonetti"
    ],
    citationAuthors: "M. Boudissa, M. Chabanas, H. Oliveri, and J. Tonetti",
    title: "Virtual fracture reduction of the acetabulum using a rigid body biomechanical model",
    venue: "SURGETICA"
  }
];