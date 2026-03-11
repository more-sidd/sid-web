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
  resumeUrl: "/resume.pdf",
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
  {
    id: "proj1",
    title: "Sound Triangulation and Doppler - Motion Detection",
    category: "Wearable Devices",
    description: [
      "Designed and simulated a wearable assistive robotic system in MATLAB that identifies and tracks approaching vehicles to provide haptic feedback for hearing impaired users",
      "Systemized an FFT- based signal processing pipeline that achieved 95% accuracy in classifying safety-critical sounds (horns and sirens) against ambient urban noises",
      "Programmed a GCC-PHAT TDOA localization algorithm in Python that successfully detected vehicle direction"
    ],
    thumbnail: "https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=600",
    media: [
      {
        type: "image",
        url: "https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=1200",
        caption: "Battery pack thermal distribution analysis"
      },
      {
        type: "image",
        url: "https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=1200",
        caption: "Cooling channel geometry optimization"
      }
    ],
    tools: ["MATLAB", "Python"],
    year: "2025"
  },
  {
    id: "proj2",
    title: "Microfluidic Heat Exchanger Design",
    category: "Research",
    description: "Novel microscale heat exchanger with enhanced heat transfer coefficients for electronics cooling",
    fullDescription: "Developed an innovative microfluidic heat exchanger design that leverages microscale flow phenomena to achieve exceptional heat transfer performance. This research project combines experimental validation with detailed numerical simulations.",
    objectives: [
      "Design compact heat exchanger for high-power electronics",
      "Maximize heat transfer coefficient while minimizing pressure drop",
      "Validate performance through experimental testing"
    ],
    results: [
      "Achieved 250% improvement in heat transfer coefficient",
      "Maintained pressure drop within acceptable limits",
      "Successfully fabricated and tested prototype devices"
    ],
    keyTakeaways: [
      "Microscale effects significantly enhance heat transfer mechanisms",
      "Surface roughness plays critical role in performance",
      "Additive manufacturing enables complex geometries previously impossible"
    ],
    thumbnail: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=600",
    media: [
      {
        type: "image",
        url: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1200",
        caption: "Microfluidic channel network design"
      },
      {
        type: "image",
        url: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1200",
        caption: "Heat transfer performance comparison"
      }
    ],
    tools: ["COMSOL", "MATLAB", "Python", "Fusion 360"],
    year: "2022"
  },
  {
    id: "proj3",
    title: "Aerospace Component Structural Analysis",
    category: "FEA",
    description: "Stress and fatigue analysis of critical aircraft structural components under flight loads",
    fullDescription: "Conducted comprehensive finite element analysis of aircraft wing components to ensure structural integrity under operational loads. The project included static, dynamic, and fatigue analyses to validate design against aerospace standards.",
    objectives: [
      "Verify structural adequacy under maximum design loads",
      "Identify critical stress concentration areas",
      "Optimize component weight while maintaining safety factors"
    ],
    results: [
      "Achieved 15% weight reduction through topology optimization",
      "Confirmed safety factors exceed regulatory requirements",
      "Identified and mitigated potential failure modes"
    ],
    keyTakeaways: [
      "Proper boundary condition definition is crucial for accurate FEA results",
      "Modal analysis reveals potential resonance issues early in design",
      "Topology optimization provides non-intuitive yet effective design solutions"
    ],
    thumbnail: "https://images.pexels.com/photos/2693529/pexels-photo-2693529.jpeg?auto=compress&cs=tinysrgb&w=600",
    media: [
      {
        type: "image",
        url: "https://images.pexels.com/photos/2693529/pexels-photo-2693529.jpeg?auto=compress&cs=tinysrgb&w=1200",
        caption: "Stress distribution under maximum load"
      },
      {
        type: "image",
        url: "https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&w=1200",
        caption: "Topology optimization results"
      }
    ],
    tools: ["ANSYS Mechanical", "CATIA", "Python", "nCode"],
    year: "2023"
  },
  {
    id: "proj4",
    title: "Autonomous Drone Frame Design",
    category: "CAD Models",
    description: "Lightweight carbon fiber drone frame optimized for payload capacity and flight stability",
    fullDescription: "Designed a custom quadcopter frame for autonomous delivery applications, balancing structural requirements with weight constraints. The project included CAD modeling, FEA validation, and prototype fabrication using carbon fiber composites.",
    objectives: [
      "Design frame supporting 5kg payload",
      "Minimize overall weight for extended flight time",
      "Ensure vibration isolation for sensitive electronics"
    ],
    results: [
      "Created 800g frame with 5kg payload capacity",
      "Achieved first natural frequency above 50 Hz",
      "Successfully integrated all electronic components"
    ],
    keyTakeaways: [
      "Carbon fiber layup orientation significantly affects stiffness-to-weight ratio",
      "Vibration damping requires careful material selection and mounting design",
      "Modular design enables rapid prototyping and iteration"
    ],
    thumbnail: "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=600",
    media: [
      {
        type: "image",
        url: "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=1200",
        caption: "CAD model of drone frame assembly"
      },
      {
        type: "image",
        url: "https://images.pexels.com/photos/1982126/pexels-photo-1982126.jpeg?auto=compress&cs=tinysrgb&w=1200",
        caption: "Modal analysis showing vibration modes"
      }
    ],
    tools: ["SolidWorks", "ANSYS", "Composites Modeler", "3D Printing"],
    year: "2022"
  },
  {
    id: "proj5",
    title: "Industrial Robot Gripper Mechanism",
    category: "CAD Models",
    description: "Adaptive gripper design for handling objects of varying sizes and geometries in manufacturing",
    fullDescription: "Developed a sophisticated robotic gripper mechanism capable of securely grasping objects ranging from 10mm to 150mm in diameter. The design incorporates compliant mechanisms for adaptive grasping and force sensing capabilities.",
    objectives: [
      "Create versatile gripper for diverse object geometries",
      "Implement force feedback for delicate object handling",
      "Design for manufacturing using standard machining processes"
    ],
    results: [
      "Successfully grips objects from 10mm to 150mm diameter",
      "Integrated force sensing with 0.1N resolution",
      "Reduced manufacturing cost by 40% compared to commercial alternatives"
    ],
    keyTakeaways: [
      "Compliant mechanisms provide inherent adaptability",
      "Design for assembly significantly reduces production time",
      "Proper material selection balances durability and cost"
    ],
    thumbnail: "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=600",
    media: [
      {
        type: "image",
        url: "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=1200",
        caption: "Gripper mechanism CAD assembly"
      },
      {
        type: "image",
        url: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1200",
        caption: "Kinematic motion analysis"
      }
    ],
    tools: ["Inventor", "MATLAB", "CNC Machining", "Arduino"],
    year: "2021"
  },
  {
    id: "proj6",
    title: "Wind Turbine Blade Aerodynamic Optimization",
    category: "Simulations",
    description: "CFD-driven design optimization to maximize energy capture efficiency across operating conditions",
    fullDescription: "Performed comprehensive aerodynamic analysis and optimization of wind turbine blade profiles to maximize annual energy production. The project utilized high-fidelity CFD simulations coupled with optimization algorithms to explore design space.",
    objectives: [
      "Increase annual energy production by 10%",
      "Reduce blade loading and fatigue stresses",
      "Maintain structural manufacturability"
    ],
    results: [
      "Achieved 12.3% increase in energy capture",
      "Reduced maximum blade loading by 8%",
      "Validated performance through wind tunnel testing"
    ],
    keyTakeaways: [
      "Multi-point optimization accounts for varying wind conditions",
      "Blade twist distribution critically affects performance",
      "Trade-offs between efficiency and structural loads require careful balancing"
    ],
    thumbnail: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=600",
    media: [
      {
        type: "image",
        url: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1200",
        caption: "Blade surface pressure distribution"
      },
      {
        type: "image",
        url: "https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=1200",
        caption: "Velocity flow field visualization"
      }
    ],
    tools: ["OpenFOAM", "Python", "ANSYS CFX", "Paraview"],
    year: "2023"
  }
];

export const publications: Publication[] = [
  {
    id: "pub1",
    title: "Enhanced Heat Transfer in Microfluidic Devices Using Surface Roughness Optimization",
    authors: ["Siddhi More", "Sonia Pol", "Dnyaneshwari Shine","Sameeksha Naik","Dr. Bhushan Patil"],
    venue: "International Journal of Heat and Mass Transfer",
    year: "2022",
    abstract: "This study investigates the effects of controlled surface roughness on heat transfer performance in microfluidic heat exchangers. Through a combination of numerical simulations and experimental validation, we demonstrate that optimized roughness patterns can enhance heat transfer coefficients by up to 250% compared to smooth channels, while maintaining acceptable pressure drop penalties.",
    pdfUrl: "/publications/chen2022_microfluidic.pdf",
    externalUrl: "https://doi.org/10.1016/j.ijheatmasstransfer.2022.xxxxx"
  },
  {
    id: "pub2",
    title: "Topology Optimization of Lightweight Structures for Aerospace Applications",
    authors: ["A. Chen", "R. Williams"],
    venue: "AIAA Journal of Aircraft",
    year: "2023",
    abstract: "We present a novel approach to topology optimization that incorporates manufacturing constraints specific to aerospace components. Our method achieves significant weight reduction while ensuring compliance with stringent safety factors and manufacturing feasibility. Case studies on aircraft wing ribs demonstrate 15-20% weight savings compared to conventional designs.",
    pdfUrl: "/publications/chen2023_topology.pdf",
    externalUrl: "https://doi.org/10.2514/1.C037xxx"
  },
  {
    id: "pub3",
    title: "Computational Fluid Dynamics Analysis of Battery Thermal Management Systems",
    authors: ["A. Chen", "K. Lee", "T. Brown", "S. Patel"],
    venue: "Journal of Power Sources",
    year: "2023",
    abstract: "This paper presents a comprehensive CFD study of liquid cooling strategies for lithium-ion battery packs in electric vehicles. We compare multiple cooling channel configurations and identify optimal designs that minimize temperature gradients while reducing pumping power requirements. The validated models provide insights for next-generation thermal management systems.",
    externalUrl: "https://doi.org/10.1016/j.jpowsour.2023.xxxxx"
  },
  {
    id: "pub4",
    title: "Design and Fabrication of Compliant Mechanisms for Robotic Grasping",
    authors: ["A. Chen", "D. Martinez"],
    venue: "IEEE Robotics and Automation Letters",
    year: "2021",
    abstract: "We introduce a systematic design methodology for compliant robotic grippers that adapt to object geometry through elastic deformation. The approach combines kinematic synthesis with finite element analysis to optimize grip force distribution and object security. Experimental results demonstrate superior performance on irregularly shaped objects compared to traditional rigid grippers.",
    pdfUrl: "/publications/chen2021_gripper.pdf",
    externalUrl: "https://doi.org/10.1109/LRA.2021.xxxxx"
  }
];
