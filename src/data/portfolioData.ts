import { Project, Publication, Experience, Education, Skill } from '../types';

import siddPhoto from '/sidd.jpg';
import dopplerThumbnail from '/doppler.png';

export const personalInfo = {
  name: "Siddhi More",
  title: "Robotics Engineer & Researcher",
  tagline: "Building intelligent systems at the intersection of mechanical engineering and autonomous control",
  photo: siddPhoto,
  email: "more.sidd@northeastern.edu",
  linkedin: "https://www.linkedin.com/in/siddhi-more-728b92230/",
  github: "https://github.com/more-sidd",
  resumeUrl: "/SiddhiResume.pdf",
};

export const education: Education[] = [
  {
    id: "edu1",
    degree: "MS Robotics",
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
      "Developed forward and inverse kinematic models for a SCARA robot in MATLAB",
      "Simulated structural integrity and payload capacity in ANSYS Workbench",
      "Analyzed 3R manipulator workspace via DH parameters and transformation matrices",
      "Validated motion control configurations in Robo-Analyzer",
    ],
  },
  {
    id: "exp2",
    title: "ASME Student Representative",
    company: "American Society of Mechanical Engineers",
    location: "Mumbai, India",
    startDate: "Mar 2022",
    endDate: "Aug 2022",
    responsibilities: [
      "Represented the student chapter and organized technical workshops and events",
    ],
  },
];

export const skills: Skill[] = [
  {
    category: "Robotics & Control",
    items: ["ROS / ROS2", "Nav2", "SLAM", "Impedance Control", "Gait Phase Estimation", "Sensor Fusion", "Kinematics / IK", "Q-Learning"],
  },
  {
    category: "Software & Programming",
    items: ["Python", "C", "MATLAB / Simulink", "Linux (Ubuntu)", "Git"],
  },
  {
    category: "Embedded & Hardware",
    items: ["ESP32", "Arduino", "CAN Bus", "IMU / FSR", "Microcontrollers"],
  },
  {
    category: "CAD & Simulation",
    items: ["SolidWorks", "ANSYS Workbench", "Fusion 360", "CATIA", "AutoCAD", "XFLR5"],
  },
  {
    category: "Manufacturing",
    items: ["3D Printing", "CNC Machining", "Injection Molding", "FEA / DOE"],
  },
];

export const projects: Project[] = [
  {
    id: "proj1",
    title: "Prosthetic Ankle — Impedance Control",
    category: "Assistive Robotics",
    description: "Impedance-controlled prosthetic ankle for biomechanically natural gait restoration in transtibial amputees.",
    fullDescription: "Developing an impedance-controlled prosthetic ankle system targeting natural gait restoration for transtibial amputees. The system uses real-time sensor fusion and closed-loop torque control to replicate biological ankle mechanics across gait phases.",
    objectives: [
      "Restore biomechanically natural gait for transtibial amputees",
      "Implement real-time gait phase estimation using embedded sensors",
      "Tune closed-loop impedance control across stance and swing phases",
    ],
    results: [
      "Built real-time gait phase estimation pipeline via IMU + FSR sensor fusion on ESP32",
      "Implemented CAN bus communication between embedded controller and actuator",
      "Achieved closed-loop torque control with phase-dependent impedance parameters",
    ],
    keyTakeaways: [
      "Sensor fusion of IMU and FSR data provides robust gait phase detection",
      "CAN bus enables low-latency, reliable communication in embedded control loops",
      "Phase-aware impedance tuning is essential for natural-feeling prosthetic motion",
    ],
  },
  {
    id: "proj2",
    title: "Aquatic Hyacinth Cleaner — Q-Learning Agent",
    category: "Reinforcement Learning",
    description: "Simulation-based autonomous robot using Q-learning to navigate a grid pond and remove invasive water hyacinth.",
    fullDescription: "Designed and implemented a reinforcement learning agent operating in a grid-based pond simulation. The agent learns to navigate obstacles, locate hyacinth clusters, and plan efficient removal paths through thousands of training episodes.",
    objectives: [
      "Automate invasive species removal using a learning-based navigation strategy",
      "Build a robust grid simulation environment with obstacles and dynamic targets",
      "Train a stable Q-learning policy without manual path programming",
    ],
    results: [
      "Built grid-based pond environment with full action / reward logic in Python",
      "Q-learning agent with epsilon-greedy exploration achieved consistent removal after 500 episodes",
      "Automated Matplotlib visualizations of learning curves and final path overlays",
    ],
    keyTakeaways: [
      "Goal-aware state representation is critical for resolving navigation deadlocks",
      "Epsilon-greedy decay schedule significantly impacts convergence speed",
      "Visualizing the learned policy directly on the grid is essential for debugging",
    ],
  },
  {
    id: "proj3",
    title: "Sound Triangulation & Doppler Motion Detection",
    category: "Robotics & Signal Processing",
    thumbnail: dopplerThumbnail,
    description: "Wearable assistive system that identifies and tracks approaching vehicles to provide haptic feedback for hearing-impaired users.",
    fullDescription: "Designed and simulated a wearable system in MATLAB and Python that identifies and tracks approaching vehicles to assist hearing-impaired users. The project involved creating a signal processing pipeline for real-time acoustic classification and spatial localization.",
    objectives: [
      "Track approaching vehicles to provide real-time haptic feedback",
      "Classify safety-critical sounds like horns and sirens against urban noise",
      "Achieve high-precision direction detection with low system latency",
    ],
    results: [
      "Achieved 95% accuracy classifying safety-critical sounds using an FFT-based pipeline",
      "Detected vehicle direction within ±10° accuracy using GCC-PHAT TDOA localization",
      "Maintained system latency under 100ms end-to-end",
    ],
    keyTakeaways: [
      "FFT-based signal processing is highly effective for filtering complex urban environments",
      "TDOA algorithms like GCC-PHAT are critical for sub-100ms real-time responsiveness",
      "Haptic feedback integration creates a vital safety layer for hearing-impaired users",
    ],
    github: "https://github.com/more-sidd/A-Doppler-Based-Wearable-device-for-Directional-Awareness",
  },
  {
    id: "proj4",
    title: "Turtlebot3 SLAM with ROS2",
    category: "Autonomous Navigation",
    description: "Automated ROS2 control package for Turtlebot3 navigating closed-loop trajectories to drive autonomous SLAM mapping.",
    fullDescription: "Engineered a ROS2 control package that replaces manual teleoperation with automated closed-loop trajectory execution, enabling consistent autonomous SLAM map generation across varied simulation environments.",
    objectives: [
      "Replace manual teleoperation with automated trajectory control for SLAM",
      "Ensure consistent map density across varied environments",
      "Validate odometry accuracy and trajectory tracking performance",
    ],
    results: [
      "Nav2 navigation stack with collision detection and velocity control deployed successfully",
      "Eliminated manual mapping errors for consistent map density",
      "Odometry error analysis and trajectory accuracy validated across multiple environments",
    ],
    keyTakeaways: [
      "Closed-loop trajectory control produces significantly more consistent SLAM maps than teleoperation",
      "Velocity profiling at corners reduces odometry drift considerably",
      "Nav2's collision detection is essential for reliable operation in cluttered environments",
    ],
    github: "https://github.com/more-sidd/Turtlebot3-Navigation-using-SLAM",
  },
  {
    id: "proj5",
    title: "Semi-Autonomous Aquatic Cleanup Robot",
    category: "Autonomous Systems",
    description: "Robotic platform with scooping mechanism and crusher for invasive water hyacinth removal — Smart India Hackathon.",
    fullDescription: "Assembled a robust aquatic robot designed for automated removal and processing of invasive water hyacinth. Integrates real-time object recognition and autonomous navigation to maximize cleanup efficiency.",
    objectives: [
      "Automate removal and processing of invasive aquatic plant species",
      "Establish real-time object recognition and obstacle avoidance in water",
      "Optimize navigation coverage using autonomous maneuvering logic",
    ],
    results: [
      "Integrated ESP32 Cam, Arduino Mega, and ultrasonic suite for real-time obstacle avoidance",
      "Optimized autonomous maneuvering using SLAM and refined random walk algorithms",
      "Developed dual scooping and crushing mechanism for efficient debris processing",
    ],
    keyTakeaways: [
      "SLAM-based navigation significantly maximizes coverage versus simple reactive logic",
      "Sensor fusion between cameras and ultrasonics is necessary for reliable aquatic operation",
      "Mechanical crusher integration reduces collected waste volume for better storage",
    ],
  },
  {
    id: "proj6",
    title: "Injection Molding FEA & DOE Optimization",
    category: "Manufacturing Simulation",
    description: "Simulation and parameter optimization for automotive airbag housings — published in AIP Conference Proceedings.",
    fullDescription: "Optimized the manufacturing process for automotive safety components using SolidWorks Plastics and Design of Experiments. The research identifies critical parameter interactions to minimize defects in high-pressure injection-molded parts.",
    objectives: [
      "Enhance dimensional accuracy and integrity of high-pressure safety components",
      "Identify critical process parameter interactions using statistical methods",
      "Minimize manufacturing defects: sink marks, warpage, and shrinkage",
    ],
    results: [
      "Reduced sink marks by 20% and warpage by 11% through optimized parameters",
      "Identified melt and mold temperatures as the most significant quality factors",
      "Published findings in AIP Conference Proceedings (ICAPSM 2024)",
    ],
    keyTakeaways: [
      "Cooling time accounts for ~70% of cycle time, making it a priority optimization target",
      "DOE reveals critical parameter interactions that single-factor analyses miss",
      "Precise melt temperature control is essential for minimizing sink marks",
    ],
  },
];

export const publications: Publication[] = [
  {
    id: "pub1",
    title: "Experimentation in Injection Molding: Simulation and Parameter Optimization Using Design of Experiment",
    authors: ["Siddhi More", "Sonia Pol", "Dnyaneshwari Shinde", "Sameeksha Naik", "Dr. Bhushan Patil"],
    venue: "International Conference on Advances in Physical Sciences and Materials 2024",
    year: "2024",
    abstract: "This research focuses on optimizing the injection molding process for automotive airbag housings using SolidWorks Plastics simulation and Design of Experiments (DOE). The study identifies critical interrelationships between process parameters to minimize defects like sink marks and warpage, enhancing quality and reliability of safety-critical components.",
    externalUrl: "https://doi.org/10.1063/5.xxxxxxx",
  },
  {
    id: "pub2",
    title: "Experimentation and Analysis of Industrial Chimneys and Solar Chimney Power Plant: A Comprehensive Literature Review",
    authors: ["Siddhi More", "Sonia Pol", "Dnyaneshwari Shinde", "Sameeksha Naik", "Bhushan T. Patil"],
    venue: "International Conference on Advances in Physical Sciences and Materials 2024",
    year: "2024",
    abstract: "This comprehensive review examines the structural and thermal performance of industrial and solar chimneys. It analyzes the impact of wind loads and geometric configurations on stability, while exploring the potential of solar chimney power plants (SCPP) as a sustainable energy solution.",
  },
];
