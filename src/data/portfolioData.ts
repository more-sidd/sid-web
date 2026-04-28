import { Project, Publication, Experience, Education, Skill } from '../types';
import siddPhoto from '/sidd.jpg';
import dopplerThumbnail from '/doppler.png';

export const personalInfo = {
  name: "Siddhi More",
  title: "Wearable & Assistive Robotics Engineer",
  tagline: "Building hardware that restores human mobility — from planetary gearbox design and embedded firmware to ROS2 navigation and ML-validated musculoskeletal simulation.",
  photo: "/sidd.jpg",
  email: "more.sidd@northeastern.edu",
  linkedin: "https://www.linkedin.com/in/siddhi-more-728b92230/",
  github: "https://github.com/more-sidd",
  resumeUrl: "/SiddhiResume.pdf",
};
export const education: Education[] = [
  {
    id: "edu1",
    degree: "MS Robotics(Mechanical Concentration)",
    institution: "Northeastern University",
    location: "Boston, MA",
    graduationDate: "May 2027",
    gpa: "3.67 / 4.0",
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
    title: "Robotics Intern",
    company: "IIT Bombay & 1Stop.ai",
    location: "Mumbai, India",
    startDate: "Feb 2022",
    endDate: "Apr 2022",
    responsibilities: [
      "Developed forward and inverse kinematic solvers for a 4-DOF SCARA robot in MATLAB; applied DH parameter analysis for full workspace characterization and validated motion configurations in Robo-Analyzer.",
      "Independently designed the complete SCARA robot assembly in SolidWorks — modeled arm links, base, end effector, and board with full part documentation and multi-view engineering renders.",
      "Validated structural integrity and payload capacity under static load cases in ANSYS Workbench, evaluating max stress and deformation margins.",
    ],
  },
 {
    id: "exp2",
    title: "CAD intern",
    company: "IIT Bombay & 1Stop.ai",
    location: "Mumbai, India",
    startDate: "May 2022",
    endDate: "Aug 2022",
    responsibilities: [
       "Created and refined 3D mechanical component models in AutoCAD and CAD/CAM software; developed precision engineering drawings and part documentation aligned with manufacturing standards.",
      "Modeled and assembled components following technical specifications; gained industry-standard drafting and documentation practices applicable to real manufacturing workflows.",
    ],
  },
  {
    id: "exp3",
    title: "Junior Design and Materials Member",
    company: "Team Vaayushastra — SAE Aero Design West",
    location: "Mumbai, India",
    startDate: "Aug 2021",
    endDate: "Nov 2021",
    responsibilities: [
      "Served as Materials Incharge for SAE Aero Design West competition — selected and sourced materials for wing construction, operated laser cutters and woodworking equipment for structural components, and performed foam cutting for wing profiles.",
      "Designed landing gear and wings in SolidWorks and ran FEA simulations to validate structural integrity under competition deadlines; iterated rapidly between CAD, simulation, and physical prototype.",
    ],
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
    id: "proj1",
    title: "Powered Ankle Prosthesis — Predictive Bilateral Control",
    category: "Wearable Robotics",
    description: "Closed-loop impedance-controlled prosthetic ankle with a 36:1 planetary gearbox, 200Hz ESP32 gait phase estimator, and OpenSim-validated ML terrain classification at 85.9% accuracy.",
    fullDescription: "Below-knee amputees face significant challenges adapting to varying terrain. Current passive prostheses cannot adjust ankle stiffness across activities, resulting in excessive metabolic cost and increased fall risk. This project addresses that through a powered ankle prosthesis combining phase-portrait gait estimation with predictive control to deliver biomechanically timed assistive torque.",
    objectives: [
      "Design and fabricate a backdrivable, compact 36:1 compound planetary gearbox for ankle actuation.",
      "Build a 200Hz real-time gait phase estimation pipeline fusing IMU and FSR data on ESP32-S2.",
      "Validate system performance against OpenSim Gait2392 musculoskeletal simulation across varied terrain.",
    ],
    results: [
      "Designed 36:1 Bilateral Drive compound planetary gearbox in Fusion 360 (61.9 Nm theoretical, 44.6 Nm realistic at η=72%); 3D printed in PLA, integrated with Moteus C1 brushless controller via CAN-FD at 100Hz command loop.",
      "Built 200Hz gait phase pipeline: complementary filter (α=0.98) fusing MPU6050 IMU + heel FSR; 4th-order Butterworth LPF at 4Hz; central-difference angular velocity reconstruction eliminating ±250°/s gyro clipping artifact; 75ms linear predictive model compensating CAN-FD command latency.",
      "OpenSim ML validation: 85.9% terrain classification accuracy across 7 activity classes; ankle angle RMSE 3.91°; MOCO stair-climbing peak dorsiflexion 12.5° vs. predicted 11.7°.",
    ],
    keyTakeaways: [
      "Replacing raw gyroscope output with central-difference derivative of filtered angle eliminated a critical 54%/45% Mid-Stance/Push-Off distribution artifact.",
      "A 75ms predictive model is necessary to compensate end-to-end CAN-FD pipeline latency and correctly time torque delivery at push-off.",
      "PLA gearbox teeth fracture under repeated impact loading at heel strike — PETG or Nylon required for physical deployment.",
    ],
    github: "https://github.com/more-sidd/Predictive-Bilateral-Control-for-a-Powered-Ankle-Prosthesis",
  },
  {
    id: "proj2",
    title: "Wearable Hearing System — GCC-PHAT Sound Triangulation",
    category: "Assistive Robotics",
    description: "Wearable assistive device for hearing-impaired users that classifies safety-critical sounds and delivers real-time directional haptic feedback using GCC-PHAT TDOA localization — ±10° accuracy, <100ms latency.",
    fullDescription: "430 million people worldwide live with disabling hearing loss, creating a critical safety gap in urban environments where auditory cues from approaching vehicles are inaccessible. This project developed a wearable system combining microphone array triangulation with Doppler effect analysis to identify specific safety sounds, pinpoint their source, and determine if they are approaching.",
    objectives: [
      "Classify safety-critical sounds (horns, sirens) against urban ambient noise in real time.",
      "Localize sound source direction to within ±10° using a wearable microphone array.",
      "Classify source motion as Approaching or Receding and estimate Closest Point of Approach.",
    ],
    results: [
      "Built FFT/STFT pipeline (90ms frames) achieving 95% classification accuracy for horns (505–516 Hz) and sirens (400–1300 Hz) against ambient urban noise.",
      "Implemented GCC-PHAT TDOA with 4-microphone square array — 0.13° angular error with 4 mics (optimal); ±10° across practical outdoor range; validated 0.5° error at 45°/10m.",
      "Doppler motion analysis via polynomial curve-fitting for CPA identification; validated on real police siren recordings; fused output: direction 6.3°, speed 25.0 m/s, <100ms end-to-end pipeline latency.",
    ],
    keyTakeaways: [
      "4-microphone square array is optimal — 2-mic arrays produce 180° ambiguity unsolvable for 2D localization.",
      "GCC-PHAT outperforms standard cross-correlation in noisy outdoor environments by relying solely on phase information.",
      "Doppler frequency shift analysis reliably distinguishes stationary from approaching sources even in real urban noise conditions.",
    ],
    github: "https://github.com/more-sidd/A-Doppler-Based-Wearable-device-for-Directional-Awareness",
  },
  {
    id: "proj3",
    title: "Autonomous SLAM Navigation — ROS2 & TurtleBot3",
    category: "Autonomous Navigation",
    description: "Custom ROS2 control package replacing manual teleoperation with automated closed-loop trajectory execution for consistent autonomous SLAM map generation. Report: 97/100.",
    fullDescription: "Manual teleoperation for SLAM mapping is unreliable — human error causes collisions, inconsistent coverage, and poor map quality. This project developed turtlebot3_control, a ROS2 package that automates trajectory execution with Cartographer SLAM and Nav2 running in parallel, enabling consistent, reproducible autonomous mapping.",
    objectives: [
      "Replace manual teleoperation with automated closed-loop trajectory control for SLAM.",
      "Achieve consistent map density and trajectory accuracy across varied environments.",
      "Validate odometry performance and characterize drift through rosbag analysis.",
    ],
    results: [
      "Developed turtlebot3_control ROS2 package with distance/heading control modes (10Hz callback), Cartographer SLAM + Nav2 in parallel, LIDAR collision detection, and velocity clamping at 0.22 m/s.",
      "Achieved centimeter-level translation error (square: 0.053m, hash: 0.070m) and milliradian yaw error (0.093 rad); validated across 10-sample spawn pose characterization.",
      "Rosbag frequency analysis: /odom 9.49Hz, /tf 20.2Hz; designed custom Gazebo environment with narrow paths to stress-test LiDAR SLAM performance.",
    ],
    keyTakeaways: [
      "Hash trajectory covers more interior map points but accumulates more odometry error than perimeter-focused square trajectory.",
      "Velocity clamping at hardware spec (0.22 m/s) is critical — removing it causes exponential response instability and collision.",
      "Rosbag frequency histograms are a practical tool for diagnosing odometry drift and sensor update rate issues.",
    ],
    github: "https://github.com/more-sidd/Turtlebot3-Navigation-using-SLAM",
  },
  {
    id: "proj4",
    title: "Aquatic Hyacinth Cleaner — Q-Learning Navigation Agent",
    category: "Reinforcement Learning",
    description: "Q-learning agent with partial observability solving autonomous aquatic navigation for invasive species removal — 100% completion rate from episode 400 of 5000, clearing all 20 targets in 94 steps.",
    fullDescription: "A physical aquatic robot can only sense what its sensors detect within a certain range — it cannot see the entire pond at once. This project designed a Q-learning agent operating under partial observability constraints to navigate a grid-based pond simulation, avoid obstacles, and efficiently remove invasive water hyacinth.",
    objectives: [
      "Train an autonomous agent to navigate a partially observable grid environment.",
      "Solve the blind navigation problem using zone-based state representation.",
      "Achieve 100% hyacinth removal without global map knowledge.",
    ],
    results: [
      "Q-learning agent (ε=1.0 decaying at 0.995/episode, lr=0.2, γ=0.95) on 20×20 grid with 30 obstacles and 20 targets; 100% completion rate sustained from episode 400 of 5000.",
      "Solved partial observability with 4×4 position zone encoding (16 blind-navigation policies) + coverage-scaled exploration bonus inspired by SLAM discovery phases.",
      "Final greedy evaluation: cleared all 20 hyacinths in 94 steps; multi-robot coordination ready via shared visited-cells map.",
    ],
    keyTakeaways: [
      "Naive global-state representation fails under partial observability — zone encoding with 16 policies resolves navigation deadlocks the prior approach could not.",
      "Map reshuffling every 500 episodes balances stable Q-table convergence with generalizability to novel obstacle layouts.",
      "Coverage-scaled exploration bonus, inspired by SLAM, actively prevents the agent from revisiting already-cleared regions.",
    ],
    github: "https://github.com/more-sidd/hyacinth-cleaner-bot",
  },
  {
    id: "proj5",
    title: "Semi-Autonomous Aquatic Robot — Smart India Hackathon",
    category: "Autonomous Systems",
    description: "Multi-microcontroller aquatic robot with CNN-based hyacinth classification (87.5% accuracy), full EasyEDA circuit schematic, and end-to-end hyacinth-to-textile processing pipeline.",
    fullDescription: "Invasive water hyacinth causes severe ecological damage to freshwater bodies across India. This Smart India Hackathon project designed a semi-autonomous robot to remove and process the plant — combining multi-microcontroller embedded electronics, computer vision, SolidWorks FEA, and textile fabrication into a single end-to-end system.",
    objectives: [
      "Design a multi-microcontroller architecture for coordinated aquatic robot control.",
      "Build and train a CNN classifier to identify hyacinth vs. clear water in real time.",
      "Validate crusher mechanism structural integrity and design hyacinth processing pipeline.",
    ],
    results: [
      "Designed complete multi-microcontroller architecture and drew full circuit schematic in EasyEDA — ESP32 master node controlling 4 Arduino Nano slaves over I2C for propulsion, drum/crusher, servo, and ultrasonic obstacle avoidance; L298N motor drivers, rotary encoders, buck converters (24V→12V/5V).",
      "Built and trained CNN (TensorFlow 2.0, Keras) on 991 images — 87.5% test accuracy for hyacinth vs. clear water classification; ran SolidWorks FEA (von Mises stress analysis) on crusher drum to validate structural integrity under load.",
      "Designed end-to-end hyacinth processing pipeline from harvesting and crushing through textile fiber production; worked directly with textile fabrication machinery.",
    ],
    keyTakeaways: [
      "I2C master-slave architecture with ESP32 as master enables clean separation of subsystem control across multiple Arduino Nano nodes.",
      "Buck converters (24V→12V/5V) are essential for powering mixed-voltage embedded systems from a single battery source.",
      "Von Mises stress FEA on the crusher drum identified stress concentrations that informed structural reinforcement before fabrication.",
    ],
  },
  {
    id: "proj6",
    title: "Injection Molding FEA & DOE Optimization",
    category: "Manufacturing Simulation",
    description: "Systematic DOE and ANOVA optimization of automotive airbag housing injection molding in SolidWorks Plastics — reduced sink marks by 20% and warpage by 11%. Published in AIP Conference Proceedings, ICAPSM 2024.",
    fullDescription: "Automotive airbag housings are safety-critical components that must withstand high pressures during deployment. Defects like sink marks and warpage compromise both structural integrity and dimensional accuracy. This research applied Design of Experiments and ANOVA to identify the critical process parameter interactions driving these defects.",
    objectives: [
      "Identify critical process parameter interactions affecting sink marks and warpage in thin-shell injection molded components.",
      "Apply DOE methodology to systematically explore the parameter space with minimum trials.",
      "Publish validated optimization strategies for high-pressure automotive safety components.",
    ],
    results: [
      "Ran 2³ full-factorial DOE (8 trials) in SolidWorks Plastics varying melt temperature (275/300°C), mold temperature (75/95°C), and injection pressure (150/180 MPa) on PA6 Wellamid Nylon airbag housing.",
      "ANOVA revealed melt temperature (F=159.0) and mold temperature (F=440.0) as statistically significant drivers of both cooling time and sink marks vs. F_crit=7.709; injection pressure non-significant.",
      "Identified optimal parameter set reducing sink marks by 20% and warpage by 11%; authored and published peer-reviewed paper in AIP Conference Proceedings, ICAPSM 2024.",
    ],
    keyTakeaways: [
      "Mold temperature is the dominant factor (F=440.0) controlling both cooling time and sink mark formation — more influential than injection pressure.",
      "Full-factorial DOE reveals critical two-factor interactions that single-variable analysis completely misses.",
      "Cooling time accounts for ~70% of total cycle time, making it the highest-leverage target for production efficiency improvements.",
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
    externalUrl: "https://doi.org/10.1063/5.xxxxxxx",
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