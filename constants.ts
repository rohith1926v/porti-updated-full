import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  profile: {
    name: "Rohith Virlanki",
    email: "rohithvirlanki1926@gmail.com",
    phone: "+91 8639353615",
    location: "Visakhapatnam, India",
    summary: "A Bachelor of Computer Science graduate with strong technical competencies in programming, databases, and software engineering. Fast learner, practical project experience, and committed to developing clean, efficient, and user-centred solutions.",
    social: {
      github: "https://github.com/rohith1926v",
      linkedin: "https://www.linkedin.com/in/rohith-v-85a051265"
    }
  },
  education: [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering-Cyber Security",
      institution: "Visakhapatnam, India", 
      score: "CGPA: 8.3/10",
      period: "12/2021 – 05/2025",
      location: "Visakhapatnam, India"
    },
    {
      degree: "Senior Secondary School - Maths, Physics, and Chemistry (MPC)",
      institution: "Visakhapatnam, India",
      score: "Score: 963/1000",
      period: "06/2019 – 03/2021",
      location: "Visakhapatnam, India"
    },
    {
      degree: "Secondary School",
      institution: "Visakhapatnam, India",
      score: "CGPA: 9.7/10",
      period: "06/2018 – 03/2019",
      location: "Visakhapatnam, India"
    }
  ],
  languages: [
    "English (Native/Bilingual)",
    "German (Conversational)"
  ],
  skills: [
    {
      category: "Programming Languages",
      items: ["Python", "Java", "SQL", "C"]
    },
    {
      category: "Frameworks & Libraries",
      items: ["HTML", "CSS", "JavaScript"]
    },
    {
      category: "Databases",
      items: ["SQL", "MongoDB", "NoSQL"]
    },
    {
      category: "Tools & Technologies",
      items: ["Git", "GitHub", "Google Gemini", "Open API"]
    }
  ],
  projects: [
    {
      id: "firewall-config",
      title: "Firewall Configuration and Optimization",
      period: "07/2025 – 10/2025",
      description: "Designed and optimized a custom firewall using iptables and pfSense to filter traffic and enforce security policies.",
      longDescription: "In an era of increasing cyber threats, perimeter defense remains crucial. This project involved the architecting of a robust network defense system using open-source tools. I deployed pfSense as the primary edge device, configuring granular rules to segment network traffic based on sensitivity levels. The core objective was to minimize the attack surface without hindering legitimate business operations.",
      challenges: [
        "Balancing strict security rules with network performance latency.",
        "Configuring stateful packet inspection for complex protocols.",
        "Eliminating false positives that were blocking critical administrative access."
      ],
      outcomes: [
        "Reduced unauthorized access attempts by 99% based on log analysis.",
        "Optimized rule hierarchy resulting in a 15% reduction in packet processing overhead.",
        "Created a reusable configuration template for rapid deployment in similar subnets."
      ],
      technologies: ["iptables", "pfSense", "Network Security", "Linux", "Bash Scripting"],
      repoLink: "https://github.com/rohith1926v"
    },
    {
      id: "ids-ips-system",
      title: "Prevention and Detection of Network Attacks",
      period: "12/2024 – 04/2025",
      description: "Implemented an Intrusion Detection/Prevention System to analyze traffic patterns and block malicious activity.",
      longDescription: "This project focused on the proactive identification of network anomalies. Leveraging Snort and Suricata, I built a hybrid detection engine capable of signature-based and anomaly-based analysis. The system was integrated with a SIEM dashboard to visualize threat vectors in real-time, allowing for immediate incident response.",
      challenges: [
        "Tuning sensitivity to distinguish between high-volume legitimate traffic and DDoS attempts.",
        "Integrating disparate log sources into a unified analysis pipeline.",
        "Writing custom signatures for zero-day exploit patterns relevant to the environment."
      ],
      outcomes: [
        "Successfully detected and mitigated simulated SQL injection and XSS attacks during red team testing.",
        "Reduced mean time to detect (MTTD) from hours to minutes.",
        "Established a comprehensive threat log archive for forensic analysis."
      ],
      technologies: ["IDS/IPS", "Snort", "Traffic Analysis", "Cyber Security", "Python"],
      repoLink: "https://github.com/rohith1926v"
    }
  ],
  certificates: [
    {
      title: "Cyber Security Internship",
      issuer: "SkillDzire",
      description: "Acquired practical experience in network security, threat analysis, vulnerability assessment, and firewall configuration. Developed substantive capabilities to identify and mitigate security risks effectively."
    },
    {
      title: "Full-Stack Java Internship",
      issuer: "SkillDzire",
      description: "Acquired hands-on experience in Java programming, front-end and back-end development, integrating databases, and building responsive web applications using industry-relevant tools and frameworks."
    }
  ]
};

// Data for Chart Visualization
export const SKILL_CHART_DATA = [
  { subject: 'Python', A: 90, fullMark: 100 },
  { subject: 'Java', A: 85, fullMark: 100 },
  { subject: 'SQL', A: 80, fullMark: 100 },
  { subject: 'HTML/CSS', A: 95, fullMark: 100 },
  { subject: 'CyberSec', A: 85, fullMark: 100 },
  { subject: 'Networking', A: 75, fullMark: 100 },
];