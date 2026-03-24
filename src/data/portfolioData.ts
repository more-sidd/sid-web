import ProjectModal from '../components/ProjectModal';
import Publications from '../components/Publications';
import { Project, Publication, Experience, Education, Skill } from '../types';
import personalPhoto from './sidd.jpg';
export const personalInfo = {
  name: "Siddhi More",
  title: "Mechanical Engineer & Researcher",
  tagline: "Designing innovative solutions through computational modeling and advanced manufacturing",
  photo: personalPhoto,
  email: "siddhimorework@gmail.com",
  linkedin: "https://www.linkedin.com/in/more-siddhi/",
  github: "https://github.com/more-sidd",
  resumeUrl: "./Siddhi Sanjay More Resume.pdf",
  about: "I'm a mechanical engineer passionate about pushing the boundaries of design and simulation. With expertise in CAD modeling, finite element analysis, and computational fluid dynamics, I bridge theoretical concepts with practical engineering solutions. My work spans from optimizing thermal management systems to developing novel manufacturing processes.",
  interests: [
    {
      title: "Computational Modeling",
      description: "Leveraging FEA and CFD to solve complex engineering challenges"
    },
    {
      title: "Advanced Manufacturing",
      description: "Exploring additive manufacturing and precision machining techniques"
    },
    {
      title: "Sustainable Design",
      description: "Creating energy-efficient solutions that minimize environmental impact"
    }
  ]
};

export const education: Education[] = [
  {
    id: "edu1",
    degree: "Master of Science in Robotics, Mechanical concentration",
    institution: "Northeastern University",
    location: "Boston, MA",
    graduationDate: "May 2027",
    gpa: "3.6/4.0",
    honors: ["Global Learner's Award"]
  },
  {
    id: "edu2",
    degree: "Bachelor of Science in Mechanical Engineering",
    institution: "University of Mumbai, Fr. Conceicao Rodrigues College of Engineering, India",
    location: "Mumbai, India",
    graduationDate: "Jun 2024",
    gpa: "3.2/4.0",
  
  }
];

export const experience: Experience[] = [
  {
    id: "exp1",
    title: "Robotics intern",
    company: "IIT Bombay and 1Stop.ai",
    location: "Mumbai, India",
    startDate: "Feb 2022",
    endDate: "Apr 2022",
    responsibilities: [ // <-- Changed to square brackets []
      "Developed kinematic and inverse kinematic models for a SCARA Robot to compute precise end-effector coordinates using MATLAB",
      "Simulated structural integrity and payload capacity within ANSYS Workbench to evaluate maximum stress and deformation for mechanical stability",
      "Analyzed 3R manipulator workspace by calculating DH parameters and transformation matrices to optimize robotic arm reach and movement efficiency",
      "Navigated motion control configurations in Robo-Analyzer to visualize joint end-effector relationships for enhanced industrial precision"
    ]
  } 
];


export const skills: Skill[] = [
  {
    category: "Hardware & Engineering",
    items: ["Autodesk AutoCAD","CATIA","ANSYS Workbench","SolidWorks","Autodesk Fusion 360","MATLAB/ Simulink","XFLR5","NX 11","Arduino","Microcontrollers"]
  },
  {
    category: "Software and Programming",
    items: ["Python","C","MATLAB","Git/Version Control","Linux (Ubuntu)"]
  },
  {
    category: "Robotics and Controls",
    items: ["ROS/ROS2","Nav2","SLAM Toolbox","MATLAB","Robo-Analyzer"]
  },
  {
    category: "Manufacturing",
    items: ["3D Printing", "CNC Machining", "Foam Fabrication", "Injection Molding"]
  }
];

export const projects: Project[] = [
   const portfolioData = {
  projects: [
    {
      id: "proj4",
      title: "Sound Triangulation and Doppler Motion Detection",
      category: "Robotics & Signal Processing",
      Thumbnail: "/.doppler.png"
      description: "Wearable assistive robotic system for vehicle tracking and haptic feedback",
      fullDescription: "Designed and simulated a wearable system in MATLAB and Python that identifies and tracks approaching vehicles to assist hearing-impaired users. The project involved creating a signal processing pipeline for real-time acoustic classification and spatial localization.",
      objectives: [
        "Track approaching vehicles to provide real-time haptic feedback",
        "Classify safety-critical sounds like horns and sirens against urban noise",
        "Achieve high-precision direction detection with low system latency"
      ],
      results: [
        "Achieved 95% accuracy in classifying safety-critical sounds using an FFT-based pipeline",
        "Successfully detected vehicle direction within a 10-degree accuracy range",
        "Maintained a system latency of <100ms using a GCC-PHAT TDOA localization algorithm"
      ],
      keyTakeaways: [
        "FFT-based signal processing is highly effective for filtering complex ambient urban environments",
        "TDOA algorithms like GCC-PHAT are critical for sub-100ms real-time responsiveness",
        "Integration of haptic feedback creates a vital safety layer for hearing-impaired accessibility"
      ]
    },
    
    {
      id: "proj5",
      title: "Semi-Autonomous Aquatic Cleanup Robot",
      category: "Autonomous Systems",
      description: "Robotic platform featuring a scooping mechanism and crusher for invasive vegetation removal",
      fullDescription: "Assembled a robust aquatic robot designed for the automated removal and processing of invasive water hyacinth. The system integrates real-time object recognition and autonomous navigation logic to maximize cleanup efficiency in aquatic environments.",
      objectives: [
        "Automate the removal and processing of invasive aquatic plant species",
        "Establish real-time object recognition and obstacle avoidance in water",
        "Optimize navigation coverage using autonomous maneuvering logic"
      ],
      results: [
        "Integrated an ESP32 Cam, Arduino Mega, and ultrasonic suite for real-time obstacle avoidance",
        "Optimized autonomous maneuvering using SLAM and refined random walk algorithms",
        "Successfully developed a dual scooping and crushing mechanism for efficient debris processing"
      ],
      keyTakeaways: [
        "SLAM-based navigation significantly maximizes coverage area compared to simple logic",
        "Sensor fusion between cameras and ultrasonic sensors is necessary for reliable aquatic operations",
        "Mechanical crusher integration reduces the volume of collected waste for better storage capacity"
      ]
    },
    {
      id: "proj6",
      title: "Plastic Injection Molding Analysis using FEA & DOE",
      category: "Manufacturing Simulation",
      description: "Simulation and parameter optimization for automotive airbag housings",
      fullDescription: "Optimized the manufacturing process for critical automotive safety components using SolidWorks Plastics. The research employed Design of Experiments (DOE) and ANOVA to analyze the complex interrelationships between process parameters to improve part quality.",
      objectives: [
        "Enhance dimensional accuracy and mechanical integrity of high-pressure safety components",
        "Identify critical process parameter interactions using advanced statistical methods",
        "Minimize manufacturing defects such as sink marks, warpage, and shrinkage"
      ],
      results: [
        "Identified melt and mold temperatures as the most significant factors influencing cooling time and quality",
        "Quantified defect reduction through optimized parameters (20% reduction in sink marks)",
        "Published research findings on simulation and parameter optimization using DOE and ANOVA"
      ],
      keyTakeaways: [
        "Cooling time accounts for approximately 70% of the total cycle time, making it a priority for efficiency",
        "DOE reveals critical interactions between variables that single-factor analyses often overlook",
        "Precise control of melt temperature is vital for minimizing sink marks and ensuring structural integrity"
      ]
    }
  ],
  
   
export const publications : Publications[] = [
   {
      id: "pub1",
      title: "Experimentation in Injection Molding: Simulation and Parameter Optimization Using Design of Experiment",
      authors: ["Siddhi More", "Sonia Pol", "Dnyaneshwari Shinde", "Sameeksha Naik", "Dr. Bhushan Patil"],
      venue: "International Conference on Advances in Physical Sciences and Materials 2024",
      year: "2024",
      abstract: "This research focuses on optimizing the injection molding process for automotive airbag housings to improve quality and reliability. By leveraging SolidWorks Plastics simulation and Design of Experiments (DOE) methodologies, the study identifies critical interrelationships between process parameters to minimize defects like sink marks and warpage.",
      pdfUrl: "/publications/more2024_injection_molding.pdf",
      externalUrl: "https://doi.org/10.1063/5.xxxxxxx"
    },
    {
      id: "pub3",
      title: "Experimentation and Analysis of Industrial Chimneys and Solar Chimney Power Plant: A Comprehensive Literature Review",
      authors: ["Siddhi More", "Sonia Pol", "Dnyaneshwari Shinde", "Sameeksha Naik", "Bhushan T. Patil"],
      venue: "International Conference on Advances in Physical Sciences and Materials 2024",
      year: "2024",
      abstract: "This comprehensive review examines the structural and thermal performance of industrial and solar chimneys. It analyzes the impact of wind loads and geometric configurations on stability, while exploring the potential of solar chimney power plants (SCPP) as a sustainable energy solution.",
      pdfUrl: "/publications/more2024_chimney_review.pdf",
      externalUrl: 
    }  
  ]
};