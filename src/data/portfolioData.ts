import { Project, Publication, Experience, Education, Skill, GalleryItem } from '../types';

export const personalInfo = {
  name: "Siddhi More",
  title: "Wearable & Assistive Robotics Engineer",
  tagline: "Building hardware that restores human mobility. From planetary gearbox design and embedded firmware to ROS2 navigation and ML-validated musculoskeletal simulation.",
  photo: "/sidd.jpeg",
  photo2: "/sidd2.jpg",
  email: "siddhimorework@gmail.com",
  linkedin: "https://www.linkedin.com/in/more-siddhi/",
  github: "https://github.com/more-sidd",
  // Point this at whichever file is in public/. A .pdf opens in the browser;
  // anything else (.docx) downloads instead — see src/lib/resume.ts.
  resumeUrl: "/SiddhiResume.docx",
};
export const education: Education[] = [
  {
    id: "edu1",
    degree: "MS Robotics (Mechanical Concentration)",
    institution: "Northeastern University",
    location: "Boston, MA",
    graduationDate: "Dec 2026",
    gpa: "3.25 / 4.0",
    honors: ["Global Student Award"],
    courses: [
      "Robot Sensing & Navigation",
      "Robotics Mechanics & Control",
      "Assistive Robotics",
      "Wearable Robotics",
      "Control Systems Engineering",
      "Foundations of AI",
    ],
  },
  {
    id: "edu2",
    degree: "BE Mechanical Engineering",
    institution: "Mumbai University",
    location: "Mumbai, India",
    graduationDate: "Jul 2024",
    gpa: "3.2 / 4.0",
    honors: ["Honors: Robotics"],
    courses: [
      "Finite Element Analysis",
      "Machine Design",
      "Automation & AI",
      "Fluid Mechanics",
      "CAD / CAM",
      "Logistics & Supply Chain",
    ],
  },
];

export const experience: Experience[] = [
  {
    id: "exp1",
    title: "4-DOF SCARA Robot: Kinematics & Structural Design",
    company: "Robotics & CAD Intern · IIT Bombay (via 1Stop.ai)",
    location: "Mumbai, India",
    startDate: "Feb 2022",
    endDate: "Apr 2022",
    responsibilities: [
      "Modeled, simulated, and structurally validated a 4-DOF SCARA robotic arm from kinematic derivation to production-ready CAD.",
      "Kinematics & Path Validation: Derived DH parameters and built forward/inverse kinematics solvers in MATLAB, hitting sub-millimeter end-effector accuracy across the full workspace in Robo-Analyzer.",
      "Structural Optimization & DFM: Ran max-payload static FEA in ANSYS Workbench to catch and eliminate a critical stress concentration, then delivered SolidWorks models with full GD&T and manufacturing tolerances.",
    ],
    tools: ["MATLAB", "SolidWorks", "ANSYS Workbench", "Robo-Analyzer", "GD&T"],
  },
];

export const skills: Skill[] = [
  {
    category: "Robotics & Control",
    items: ["ROS / ROS2", "Nav2", "Cartographer SLAM", "Impedance Control", "Gait Phase Estimation", "Sensor Fusion (IMU/FSR)", "Kinematics & IK", "Q-Learning / RL", "FSM Design"],
  },
  {
    category: "Embedded & Hardware",
    items: ["ESP32-S2 (WiFi/Bluetooth)", "Arduino (Uno & Mega)", "CAN-FD (Moteus C1)", "MPU6050 IMU", "FSR", "KiCad", "Fritzing", "EasyEDA", "PCB Layout", "Soldering (SMD & through-hole)", "Multimeter", "Oscilloscope"],
  },
  {
    category: "Software & Programming",
    items: ["Python", "C", "MATLAB / Simulink", "Linux (Ubuntu)", "Git", "TensorFlow", "Keras", "ROS2 Humble", "rosbag analysis"],
  },
  {
    category: "CAD & Simulation",
    items: ["SolidWorks (Plastics, Motion)", "Fusion 360", "ANSYS Workbench (FEA)", "CATIA", "AutoCAD", "NX 11", "OpenSim MOCO", "XFLR5"],
  },
  {
    category: "Fabrication",
    items: ["FDM 3D Printing (Ultimaker, Cura, Bambu Studio)", "SLA Resin Printing", "CNC Milling (G-code, M-code)", "Laser Cutting", "Foam Cutting", "Woodworking", "Textile Machines", "PCB Milling"],
  },
];

export const projects: Project[] = [
  {
    id: "proj-auv",
    title: "AUV GPS-Denied Navigation",
    category: "Autonomous Navigation",
    dates: "September 2026 to Present",
    status: "in-progress",
    description: "This project focused on solving underwater localization for an autonomous underwater vehicle (AUV) operating without GPS at Northeastern University. From this work, I gained practical experience in state estimation, sensor noise modeling, and building Extended Kalman Filters from scratch.",
    fullDescription: "Underwater vehicles lose GPS access immediately below the surface, which makes relying on onboard inertial and velocity sensors prone to severe drift over long missions. The goal of this project was to simulate a realistic underwater survey environment and develop a sensor fusion pipeline capable of keeping position estimates accurate using acoustic beacons and onboard sensors.",
    objectives: [],
    goals: [],
    keyTakeaways: [],
    results: [
      "Built a Python simulation of an AUV running a 100 x 100 m lawnmower survey at roughly 1 m/s, generating ground truth poses alongside noisy IMU, DVL, depth, and acoustic beacon range data with adjustable noise levels, ping rates, and beacon counts.",
      "Implemented a dead reckoning baseline that rotates DVL velocity by IMU heading to measure and visualize unbounded position drift against ground truth.",
      "Developed an Extended Kalman Filter (EKF) with analytic Jacobians to fuse DVL, IMU heading, depth, and nonlinear acoustic beacon ranges, validating the math on clean data before introducing sensor noise.",
    ],
  },
  {
    id: "proj1",
    title: "Stanford University Pupper V3 Research",
    shortTitle: "Pupper V3",
    category: "Legged Robots/ Quadrupeds",
    dates: "June 2026 to Present",
    status: "in-progress",
    description: "This ongoing research project in Boston involves building and programming a Stanford Pupper V3 quadruped robot for community robotics education. Through this project, I have been bridging physical hardware assembly with simulation validation and reinforcement learning for legged locomotion.",
    fullDescription: "Legged robots require careful mechanical assembly and adaptive control policies to walk reliably outside of controlled environments. The goal of this project is to get a physical Pupper V3 platform running smoothly for educational demonstrations while exploring whether reinforcement learning policies can outperform traditional, hand-tuned gait schedules.",
    objectives: [],
    goals: [],
    keyTakeaways: [],
    results: [
      "Executed the physical hardware assembly of the Stanford Pupper V3 quadruped and implemented low-level gait control algorithms.",
      "Validated robot kinematics and joint behavior using URDF-based simulations in MuJoCo before testing on physical hardware.",
      "Currently training a reinforcement learning locomotion policy in simulation to replace manually tuned gait scheduling, with real-world hardware deployment underway.",
    ],
    images: [
      "/gallery/Pupper4.jpg",
      "/gallery/Pupper1.jpg",
      "/gallery/Pupper2.jpg",
      "/gallery/Pupper3.jpg",
    ],
  },
  {
    id: "proj2",
    title: "Smart Ankle Prosthetics",
    category: "Wearable Robotics",
    dates: "January 2026 to July 2026",
    status: "complete",
    description: "This project centered on building an embedded control and sensing pipeline for a powered ankle prosthesis at Northeastern University. Working on this system gave me hands-on experience debugging real-time microcontroller sensor data, compensating for hardware latency, and validating biomechanical models.",
    fullDescription: "Powered ankle prosthetics need to detect where a user is in their walking stride and apply torque at the exact right moment without noticeable lag. The goal was to build a reliable real-time gait-phase classifier on an embedded microcontroller, compensate for communication delays, and verify the control strategy across different walking terrains.",
    objectives: [],
    goals: [],
    keyTakeaways: [],
    results: [
      "Built an ESP32-S2 sensor fusion pipeline combining an MPU6050 IMU and heel FSR with a 100 Hz complementary filter for real-time gait-phase classification.",
      "Diagnosed a gyroscope clipping bug where 11.8% of samples saturated at plus or minus 250 deg/s and skewed gait distribution to 54%/45%, resolving it with central-difference velocity reconstruction to restore the expected 25% split across all four gait states.",
      "Implemented 75 ms latency-compensated predictive control and sent 2.0 Nm feedforward torque commands to a Moteus C1 motor controller over CAN-FD in a stable 100 Hz loop.",
      "Validated the control architecture in OpenSim (Gait2392 model) paired with a machine learning terrain classifier, hitting 85.9% accuracy across 7 activity classes and 3.91 deg ankle-angle RMSE.",
    ],
    images: [
      "/gallery/pros-v2-hand.jpg",
      "/gallery/pros-v2-bench.jpg",
      "/gallery/pros-cad.jpg",
      "/gallery/fsr-data.jpg",
    ],
  },
  {
    id: "proj3",
    title: "Sound Triangulation & Doppler Detection",
    category: "Assistive Robotics",
    dates: "September 2025 to December 2025",
    status: "complete",
    description: "This project involved building an acoustic localization and motion detection system at Northeastern University. Through this work, I gained practical insight into array signal processing, microphone geometry trade-offs, and real-time audio classification.",
    fullDescription: "Identifying where a sound is coming from and whether it is moving toward or away from a sensor is critical for assistive devices and autonomous awareness. The goal was to design an optimal microphone array geometry and build a low-latency processing pipeline capable of accurately triangulating sound sources and classifying Doppler shifts.",
    objectives: [],
    goals: [],
    keyTakeaways: [],
    results: [
      "Implemented GCC-PHAT time-difference-of-arrival (TDOA) localization, achieving 0.5 deg angular error during validation testing (44.5 deg estimated vs. 45 deg true angle) at a 10 m distance.",
      "Ran a sensitivity study across microphone spacings (10 to 90 mm) and array sizes (2 to 8 mics), identifying a 4-microphone square layout with 50 to 90 mm spacing as the sweet spot (0.13 deg simulated error compared to 20 to 26 deg at tighter spacings).",
      "Built a parallel FFT-based Doppler motion classifier using a 400 to 1300 Hz bandpass filter to distinguish approaching from receding sources, validated on real police siren recordings with under 100 ms end-to-end latency.",
    ],
    images: ["/gallery/car-horn-detection.png"],
  },
  {
    id: "proj4",
    title: "ROS2/Gazebo TurtleBot3 SLAM Trajectory Generation",
    shortTitle: "TurtleBot3 SLAM Trajectory Generation",
    category: "Autonomous Navigation",
    dates: "January 2025 to April 2025",
    status: "complete",
    description: "This project focused on automating indoor mapping and navigation for a TurtleBot3 mobile robot in ROS2 and Gazebo at Northeastern University. From this project, I learned how to tune closed-loop controllers around real hardware velocity limits and validate autonomous trajectories.",
    fullDescription: "Standard SLAM workflows often rely on manual keyboard teleoperation, which is slow and hard to reproduce. The goal of this project was to replace manual driving with an autonomous waypoint-following controller that avoids obstacles and hits repeatable target poses.",
    objectives: [],
    goals: [],
    keyTakeaways: [],
    results: [
      "Built a closed-loop waypoint controller in ROS2 using a distance and heading control law running on a 10 Hz callback, complete with LIDAR-based collision detection.",
      "Diagnosed a velocity clamping issue where the feedforward control law conflicted with the TurtleBot3's 0.22 m/s hardware speed limit and caused trajectory instability, fixing it by retuning the control gains.",
      "Achieved repeatable final-pose accuracy within 5.3 to 7.0 cm of translation error and roughly 93 mrad of yaw error across independent trajectories, validated against 10 ground-truth spawn samples.",
    ],
    images: ["/gallery/custom-env-turtlebot.png"],
  },
  {
    id: "proj6",
    title: "Semi-Autonomous Aquatic Cleanup Robot",
    category: "Autonomous Systems",
    dates: "July 2023 to October 2023",
    status: "complete",
    description: "This project was built for the Smart India Hackathon to tackle invasive water hyacinth growth in local waterways. Through this experience, I learned how to coordinate multi-microcontroller hardware systems and validate mechanical assemblies under real operating loads.",
    fullDescription: "Clearing dense water hyacinth manually is slow and labor-intensive. The goal was to design and build an aquatic robot capable of navigating waterways, collecting surface weeds with a rotating drum, and crushing them onboard for compact storage.",
    objectives: [],
    goals: [],
    keyTakeaways: [],
    results: [
      "Designed a distributed embedded control architecture using one ESP32 master and four Arduino Nano slaves communicating over I2C to coordinate propulsion, crushing, and drum-servo subsystems.",
      "Ran static finite element analysis (von Mises nodal stress) in SolidWorks on the collection drum assembly to verify structural safety margins under heavy collection loads.",
    ],
    images: ["/gallery/SIH-2.png"],
  },
  {
    id: "proj7",
    title: "Plastic Injection Molding Optimization via FEA & DOE",
    shortTitle: "Injection Molding Optimization",
    category: "Manufacturing Simulation",
    dates: "July 2023 to July 2024",
    status: "complete",
    description: "This research project at Mumbai University focused on improving manufacturing quality for automotive plastic components through simulation and statistical testing. Completing this work gave me deep experience in Design of Experiments (DOE), molding simulation, and academic publishing.",
    fullDescription: "Injection molding defects like sink marks and long cooling cycles drive up manufacturing costs and scrap rates. The goal was to systematically isolate which molding parameters actually control part quality and cycle time for an automotive airbag housing.",
    objectives: [],
    goals: [],
    keyTakeaways: [],
    results: [
      "Authored a peer-reviewed paper as first author (published in AIP Conference Proceedings 3397, 2026) applying Design of Experiments and ANOVA to optimize injection molding parameters in SolidWorks Plastics.",
      "Proved statistically that melt temperature (F = 159.0) and mold temperature (F = 440.0) are the primary drivers of cooling time compared to the F-critical threshold of 7.7.",
      "Identified melt temperature (F = 10.8) and mold temperature (F = 8.2) as the key drivers behind sink-mark defects, while showing that injection pressure had no statistically significant effect.",
    ],
    images: ["/gallery/sink-marks.png"],
  },

  /* ── Not in the latest content pass ──────────────────────────────────────
     These two were on the site before and were not included in the rewrite.
     Left in place rather than deleted, since removing work is not something
     to do by inference. Delete these two entries if they are meant to go.
     ─────────────────────────────────────────────────────────────────────── */
  {
    id: "proj5",
    title: "Aquatic Hyacinth Cleaner — Q-Learning Navigation Agent",
    shortTitle: "Q-Learning Navigation Agent",
    category: "Reinforcement Learning",
    status: "complete",
    description: "Q-learning agent with partial observability solving autonomous aquatic navigation for invasive species removal: 100% completion rate from episode 400 of 5000, clearing all 20 targets in 94 steps.",
    fullDescription: "A physical aquatic robot can only sense what its sensors detect within a certain range, so it cannot see the entire pond at once. This project designed a Q-learning agent operating under partial observability constraints to navigate a grid-based pond simulation, avoid obstacles, and efficiently remove invasive water hyacinth.",
    objectives: [
      "Train an autonomous agent to navigate a partially observable grid environment.",
      "Solve the blind navigation problem using zone-based state representation.",
      "Achieve 100% hyacinth removal without global map knowledge.",
    ],
    goals: [],
    keyTakeaways: [
      "Naive global-state representation fails under partial observability: zone encoding with 16 policies resolves navigation deadlocks the prior approach could not.",
      "Map reshuffling every 500 episodes balances stable Q-table convergence with generalizability to novel obstacle layouts.",
    ],
    results: [
      "Q-learning agent on a 20x20 grid with 30 obstacles and 20 targets; 100% completion rate sustained from episode 400 of 5000.",
      "Solved partial observability with 4x4 position zone encoding (16 blind-navigation policies) plus a coverage-scaled exploration bonus inspired by SLAM discovery phases.",
      "Final greedy evaluation: cleared all 20 hyacinths in 94 steps; multi-robot coordination ready via a shared visited-cells map.",
    ],
    images: ["/gallery/grid-visualization.png"],
  },
  {
    id: "proj8",
    title: "CAD and Engineering Drawing",
    category: "CAD & Drafting",
    status: "complete",
    description: "Coursework drawing sets from Fr. CRCE: AutoCAD orthographic and isometric sheets in first year, then SolidWorks models of standard machine elements in second year.",
    fullDescription: "Two sets of drawing coursework from Fr. Conceicao Rodrigues College of Engineering. The first year set is AutoCAD: orthographic projection sheets with sectional views, dimensioning and title blocks, plus isometric views built from given orthographic inputs. The second year Mechanical set moves to SolidWorks, modeling standard machine elements from engineering drawings and rendering them as assemblies.",
    objectives: [
      "Read an engineering drawing and reconstruct the part it describes, in both directions: orthographic views from an isometric, and an isometric from orthographic views.",
      "Produce dimensioned sheets with correct sectioning, line types and title blocks to drawing-standard conventions.",
      "Move from 2D drafting in AutoCAD to parametric solid modeling of standard machine elements in SolidWorks.",
    ],
    goals: [
      "Build the drawing-reading fluency that later design work depends on, so a part can be understood from a sheet rather than from a 3D file.",
    ],
    keyTakeaways: [
      "Sectioning is where most drawing errors show up. Deciding where to cut, and then hatching only what the cut plane actually passes through, is the part that takes practice.",
      "Modeling a coupling or a jig from its drawing forces you to notice fits and clearances that are easy to skip when designing straight into CAD.",
    ],
    results: [
      "Eight machine elements modeled in SolidWorks: knuckle joint, universal joint, two drill jigs, clapper block, single tool post, protected type flange coupling and Oldham coupling.",
      "Six AutoCAD sheets covering orthographic projections with sectional views and isometric reconstructions, each dimensioned and titled.",
    ],
    skills: [
      "AutoCAD",
      "SolidWorks",
      "Orthographic Projection",
      "Isometric Views",
      "Sectional Views",
      "Dimensioning",
      "Machine Drawing",
    ],
    images: [
      "/cad/knuckle-joint.png",
      "/cad/universal-joint.png",
      "/cad/drill-jig-1.png",
      "/cad/drill-jig-2.png",
      "/cad/clapper-block.png",
      "/cad/single-tool-post.png",
      "/cad/flange-coupling.png",
      "/cad/oldham-coupling.png",
      "/cad/autocad-1.png",
      "/cad/autocad-2.png",
      "/cad/autocad-3.png",
      "/cad/autocad-4.png",
      "/cad/autocad-5.png",
      "/cad/autocad-6.png",
    ],
  },
];

export const publications: Publication[] = [
  {
    id: "pub1",
    title: "Experimentation in Injection Molding: Simulation and Parameter Optimization Using Design of Experiment",
    authors: ["Siddhi More", "Sonia Pol", "Dnyaneshwari Shinde", "Sameeksha Naik", "Dr. Bhushan Patil"],
    venue: "AIP Conference Proceedings, International Conference on Advances in Physical Sciences and Materials (ICAPSM 2024)",
    year: "2024",
    abstract: "This research optimizes the injection molding process for automotive airbag housings using SolidWorks Plastics simulation and a 2³ full-factorial Design of Experiments. ANOVA analysis identified melt temperature (F=159.0) and mold temperature (F=440.0) as statistically significant drivers of cooling time and sink mark formation, while injection pressure was non-significant. Optimal parameter settings reduced sink marks by 20% and warpage by 11%, contributing validated optimization strategies for safety-critical automotive manufacturing.",
    externalUrl: "https://doi.org/10.1063/5.0348166",
  },
  {
    id: "pub2",
    title: "Experimentation and Analysis of Industrial Chimneys and Solar Chimney Power Plant: A Comprehensive Literature Review",
    authors: ["Siddhi More", "Sonia Pol", "Bhushan T. Patil"],
    venue: "International Conference on Materials Science and Manufacturing Technology (ICMSMT 2024)",
    year: "2024",
    abstract: "This comprehensive review examines the structural and thermal performance of industrial and solar chimneys, analyzing the impact of wind loads and geometric configurations on stability. The review explores the potential of solar chimney power plants (SCPP) as a sustainable energy solution, synthesizing findings across structural analysis, thermal modeling, and renewable energy generation research.",
  },
];
// ← paste here, at the end of the file
/* ── Gallery ─────────────────────────────────────────────────────────────────
   Two buckets and nothing else, because three tabs was confusing:
     robotics -> projects, builds, debugging
     fun      -> people, outdoors, and events
   Set `video: true` for .mp4 files. Move an item between buckets by changing
   its `category`.
   ─────────────────────────────────────────────────────────────────────────── */
export const galleryItems: GalleryItem[] = [
  { src: "/gallery/Pupper1.jpg",              caption: "Pupper v3 quadruped",                          category: "robotics" },
  { src: "/gallery/Pupper2.jpg",              caption: "Pupper v3 quadruped",                          category: "robotics" },
  { src: "/gallery/Pupper3.jpg",              caption: "Pupper v3 quadruped",                          category: "robotics" },
  { src: "/gallery/Pupper4.jpg",              caption: "Pupper v3 quadruped",                          category: "robotics" },
  { src: "/gallery/pupper.jpg",               caption: "Pupper v3 — Stanford CS 123 x BRH",            category: "robotics" },
  { src: "/gallery/Pupper-debug.gif",         caption: "Debugging Pupper v3, Lab 4",                   category: "robotics" },
  { src: "/gallery/pupper-helloworld.mp4",    caption: "Pupper v3 first steps",                        category: "robotics", video: true },
  { src: "/gallery/moteus-debug.mp4",         caption: "Debugging a Moteus controller",                category: "robotics", video: true },
  { src: "/gallery/rebotfailing.mp4",         caption: "reBOT arm not cooperating",                    category: "robotics", video: true },
  { src: "/gallery/pros-cad.jpg",             caption: "Powered ankle prosthesis — CAD",               category: "robotics" },
  { src: "/gallery/pros-v2-hand.jpg",         caption: "Powered ankle prosthesis — linkage",           category: "robotics" },
  { src: "/gallery/pros-v2-bench.jpg",        caption: "Powered ankle prosthesis — bench testing",     category: "robotics" },
  { src: "/gallery/fsr-data.jpg",             caption: "FSR heel-strike data",                         category: "robotics" },
  { src: "/gallery/car-horn-detection.png",   caption: "Horn detection — wearable hearing system",     category: "robotics" },
  { src: "/gallery/turtlebot3.jpg",           caption: "TurtleBot3",                                   category: "robotics" },
  { src: "/gallery/custom-env-turtlebot.png", caption: "Custom Gazebo environment for TurtleBot3",     category: "robotics" },
  { src: "/gallery/grid-visualization.png",   caption: "Q-learning grid for the hyacinth cleaner",     category: "robotics" },
  { src: "/gallery/sink-marks.png",           caption: "Injection molding sink-mark analysis",        category: "robotics" },
  { src: "/gallery/SIH-2.png",                caption: "Smart India Hackathon build",                  category: "robotics" },
  { src: "/gallery/STM2.jpg",                 caption: "IKS5A1 sensor shield on a NUCLEO-F401RE",      category: "robotics" },
  { src: "/gallery/jw1.jpg",                  caption: "JW Fishers ROV in the shop",                   category: "robotics" },
  { src: "/gallery/jw2.jpg",                  caption: "ROV surface control unit, opened up",          category: "robotics" },
  { src: "/gallery/jw4.jpg",                  caption: "Looking up from the test pool, 1.4 ft down",   category: "robotics" },
  { src: "/gallery/jw3.mp4",                  caption: "Flying the ROV around the test pool",          category: "robotics", video: true },
  { src: "/gallery/hiking1.jpg",              caption: "Hiking",                                       category: "fun" },
  { src: "/gallery/hiking2.jpeg",             caption: "Hiking",                                       category: "fun" },
  { src: "/gallery/kayaking.jpg",             caption: "Kayaking",                                     category: "fun" },
  { src: "/gallery/neu.jpg",                  caption: "Northeastern University",                      category: "fun" },
  { src: "/gallery/sidd3.jpg",                caption: "Around Boston",                                category: "fun" },
  { src: "/gallery/revolute.jpg",             caption: "Revolute — Boston physical AI hackathon",      category: "fun" },
  { src: "/gallery/massrob1.jpg",             caption: "MassRobotics Women in Robotics meetup",        category: "fun" },
  { src: "/gallery/massrob2.png",             caption: "MassRobotics Women in Robotics meetup",        category: "fun" },
  { src: "/gallery/massrob3.png",             caption: "MassRobotics Women in Robotics meetup",        category: "fun" },
  { src: "/gallery/gwise1.jpeg",              caption: "GWiSE at Northeastern",                        category: "fun" },
  { src: "/gallery/gwise2.jpg",               caption: "GWiSE at Northeastern",                        category: "fun" },
  { src: "/gallery/gli1.jpg",                 caption: "Graduate Leadership Institute, lead360",       category: "fun" },
  { src: "/gallery/gli2.jpg",                 caption: "Graduate Leadership Institute, lead360",       category: "fun" },
  { src: "/gallery/gli3.jpeg",                caption: "Graduate Leadership Institute, lead360",       category: "fun" },
  { src: "/gallery/sih.jpg",                  caption: "Smart India Hackathon team",                   category: "fun" },
  { src: "/gallery/STM1.jpg",                 caption: "ST MEMS workshop, Burlington",                 category: "fun" },
];
