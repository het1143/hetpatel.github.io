import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css'; 
import bgLight from "./assets/bg-light.jpg"; 
import bgDark from "./assets/bg-dark.jpg";
import dduLogo from "./assets/ddu_logo.png";   
import njitLogo from "./assets/njit_logo.png"; 

// Icons & UI Components
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import SendIcon from '@mui/icons-material/Send';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faBrain, faCloud, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import headshot from "./assets/headshot.png";
import BigData from "./assets/Big_Data_Image.png";
import LabManagement from "./assets/LabManagement.png";
import ResumeParser from "./assets/ResumeParser.png";
import CropProductionAna from "./assets/CropProductionAna.png";
import AgroWaste from "./assets/AgroWaste.png";
import PhysucalInventoryCounting from "./assets/PhysucalInventoryCounting.png";
import ElectBillManag from "./assets/ElectricBill.png";
import LT from "./assets/LT.png";

// --- DATA ---
const navigationLinks = [
  ["Expertise", "expertise"],
  ["History", "history"],
  ["Projects", "projects"],
  ["Contact", "contact"]
];

const expertiseData = [
    {
        title: "Full Stack & Software Engineering",
        icon: faLaptopCode, 
        desc: "Building interactive dashboards and automating enterprise workflows. Experienced with front-end design and backend optimization.",
        stack: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript", "HTML5", "CSS3", "Power Platform", "Git", "VS Code"]
    },
    {
        title: "Cloud & Big Data Analytics",
        icon: faCloud,
        desc: "Architecting scalable data infrastructure on cloud platforms. Orchestrating ETL pipelines and managing Hadoop clusters for massive datasets.",
        stack: ["AWS", "Hadoop", "Hive", "MapReduce", "Google Earth Engine", "EC2", "Bash", "Java", "SQL"]
    },
    {
        title: "AI & Machine Learning",
        icon: faBrain,
        desc: "Developing predictive models and automating data extraction using NLP and deep learning. Specializing in EDA and algorithm optimization.",
        stack: ["Python", "Pandas", "Scikit-learn", "NumPy", "Matplotlib", "Seaborn", "NLTK", "Keras", "EDA"]
    }
];

const educationData = [
    {
        school: "New Jersey Institute of Technology",
        degree: "Master of Science in Computer Science",
        year: "Sep 2025 - May 2027",
        location: "Newark, NJ",
        image: njitLogo, 
        grade: "Grade: 3.83/4",
        desc: "Relevant coursework: Artificial Intelligence,Cloud Computing, Big Data, Database Management."
    },
    {
        school: "Dharmsinh Desai University",
        degree: "B.Tech in Information Technology",
        year: "2020 - 2024",
        location: "Nadiad, Gujarat",
        image: dduLogo,
        grade: "",
        desc: ""
    }
];

const historyData = [
    {
        title: "Undergraduate Research",
        subtitle: "Dharmsinh Desai University, Nadiad, India",
        date: "June 2024 - Jan 2025",
        desc: "Engineered a Digital Supply Chain Optimization Model and closed-loop framework (online auction) to manage crop residue. Quantified environmental impact, projecting 2,500+ GW of sustainable electricity generation annually.",
        icon: faBriefcase
    },
    {
        title: "Software Developer Intern",
        subtitle: "Dhyey Consulting, Vadodara, India",
        date: "Dec 2023 - Apr 2024",
        desc: "Built a Power Apps solution integrated with Dynamics 365 F&O, increasing inventory counting efficiency by 30%. Configured Power Automate flows reducing manual handling by 40% and deployed Power BI dashboards.",
        icon: faBriefcase
    },
    {
        title: "Artificial Intelligence Intern",
        subtitle: "Future Netwings, Remote",
        date: "July 2023 - Aug 2023",
        desc: "Conducted EDA on Titanic dataset enhancing preprocessing workflow. Developed a laptop price model using KNN, achieving a 25% accuracy improvement via feature optimization.",
        icon: faBrain
    }
];

// --- COMPONENTS ---

const Navigation = ({ mode, setMode }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.getElementById("navigation");
            if (navbar) {
                setScrolled(window.scrollY > 50);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMobileOpen(false);
    };

    const drawerContent = (
        <Box sx={{ textAlign: 'center' }}>
            <p className="mobile-menu-top"><MenuIcon /> Menu</p>
            <List>
                {navigationLinks.map(([label, id]) => (
                    <ListItem key={label} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }} onClick={() => scrollToSection(id)}>
                            <ListItemText primary={label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div id="navigation" className={`navbar-fixed-top ${scrolled ? 'scrolled' : ''}`}>
            <div className="navigation-bar">
                <div className="nav-left">
                     {mode === 'dark' 
                        ? <LightModeIcon className="mode-icon" onClick={() => setMode('light')} fontSize="large" /> 
                        : <DarkModeIcon className="mode-icon" onClick={() => setMode('dark')} fontSize="large" />
                    }
                </div>

                <IconButton
                    color="inherit"
                    edge="start"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    sx={{ display: { sm: 'none' } }}
                    className="mobile-menu-icon"
                >
                    <MenuIcon fontSize="large"/>
                </IconButton>
                
                <div className="nav-right">
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navigationLinks.map(([label, id]) => (
                            <Button key={label} onClick={() => scrollToSection(id)} className="nav-link">
                                {label}
                            </Button>
                        ))}
                    </Box>
                </div>
            </div>
            
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={() => setMobileOpen(false)}
                ModalProps={{ keepMounted: true }}
                sx={{ display: { xs: 'block', sm: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 } }}
            >
                {drawerContent}
            </Drawer>
        </div>
    );
};

const Intro = () => (
    <div className="container">
        <div className="about-section">
            <div className="image-wrapper">
                <img src={headshot} alt="Avatar" width="150%" />
            </div>
            <div className="content">
                <div className="social_icons">
                    <a href="https://github.com/het1143" target="_blank" rel="noreferrer"><GitHubIcon /></a>
                    <a href="https://www.linkedin.com/in/hetpatel1143" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
                </div>
                <h1>Het Patel</h1>
                <p>Software Developer | AI & Machine Learning Enthusiast</p>
            </div>
        </div>
    </div>
);

// --- UPDATED ABOUT COMPONENT ---
const About = () => (
    <div className="about-me-container" id="about">
        <div className="about-grid">
            
            {/* Left Side: About Me Text */}
            <div className="about-text-column">
                <h1>About Me</h1>
                <p>
                    I am a passionate software engineer with expertise in both full-stack development and AI/ML solutions. 
                    With a strong foundation in designing and developing scalable, production-grade software systems, 
                    I excel in creating efficient and robust applications.
                </p>
                <p>
                    In addition to my software engineering skills, I specialize in developing AI-driven solutions using 
                    cutting-edge machine learning models and frameworks. My focus areas include building intelligent 
                    systems for NLP, data processing, and predictive analysis, enabling businesses to derive actionable 
                    insights from their data.
                </p>
                <p>
                    My academic background has equipped me with strong problem-solving skills and a deep understanding of 
                    algorithms, data structures, and system architecture, which I apply to solve real-world challenges.
                </p>
            </div>

            {/* Right Side: Education List */}
            <div className="education-column">
                <h1>Education</h1>
                {educationData.map((edu, index) => (
                    <div key={index} className="education-item">
                        <div className="edu-image-wrapper">
                            <img src={edu.image} alt={edu.school} />
                        </div>
                        <div className="edu-content">
                            <h3>{edu.school}</h3>
                            <span className="edu-degree">{edu.degree}</span>
                            <span className="edu-meta">{edu.year}</span>
                            {edu.grade && <span className="edu-grade">{edu.grade}</span>}
                            <p className="edu-desc">{edu.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const Expertise = () => (
    <div className="container-fluid" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                {expertiseData.map((skill, index) => (
                    <div className="skill" key={index}>
                        <div className="skill-header">
                            <FontAwesomeIcon icon={skill.icon} size="2x" className="skill-icon" />
                            <h3>{skill.title}</h3>
                        </div>
                        <p>{skill.desc}</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {skill.stack.map((item, i) => (
                                <span key={i} className="chip-pill">{item}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const History = () => (
    <div id="history">
        <div className="items-container">
            <h1>Career History</h1>
            <div className="vertical-timeline vertical-timeline--animate vertical-timeline--two-columns">
                {historyData.map((item, index) => (
                    <div key={index} className="vertical-timeline-element vertical-timeline-element--work">
                        <span className="vertical-timeline-element-icon bounce-in">
                            <FontAwesomeIcon icon={item.icon} />
                        </span>
                        <div className="vertical-timeline-element-content bounce-in">
                            <div className="vertical-timeline-element-content-arrow"></div>
                            <h3 className="vertical-timeline-element-title">{item.title}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
                            <p>{item.desc}</p>
                            <span className="vertical-timeline-element-date">{item.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const Projects = () => (
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">

           <div className="project">
                <a href="https://github.com/het1143/Big-Data-Flight-Analysis" target="_blank" rel="noreferrer">
                    <img src={BigData} className="zoom" alt="Big Data Flight Analysis" width="100%" />
                </a>
                <h2>Big Data Flight Analysis</h2>
                <p>Deployed a 7-node Hadoop cluster on AWS EC2 to analyze 120M+ flight records using optimized MapReduce algorithms.</p>
            </div>

           <div className="project">
                <a href="https://github.com/het1143/Research-Lab-Management-System-Data-Management-System-Design-." target="_blank" rel="noreferrer">
                    <img src={LabManagement} className="zoom" alt="Research Lab Management" width="100%" />
                </a>
                <h2>Research Lab Management System</h2>
                <p>Built a relational database system using Python and SQLite to streamline the management of lab resources and grants, featuring interactive dashboards for real-time analytics and performance tracking.</p>
            </div>

           <div className="project">
                <a href="https://github.com/het1143/Crop-Production-Analysis" target="_blank" rel="noreferrer">
                    <img src={CropProductionAna} className="zoom" alt="Crop-Production-Analysis" width="100%" />
                </a>
                <h2>Crop Production Analysis</h2>
                <p>Analyzed 5-year rice production trends using Google Earth Engine and satellite data, performing NDVI computation, cloud masking, and spatial mapping to derive regional agricultural insights.</p>
            </div>

            <div className="project">
                <a href="https://github.com/het1143/Physical-Inventory-Counting" target="_blank" rel="noreferrer">
                    <img src={PhysucalInventoryCounting} className="zoom" alt="Physical Inventory Counting" width="100%" />
                </a>
                <h2>Physical Inventory Counting</h2>
                <p>Developed a Power App for warehouse management featuring barcode scanning, real-time synchronization with Dynamics 365 Fin&Ops, and comprehensive Power BI analytics.</p>
            </div>

            <div className="project">
                <a href="https://github.com/het1143/Python-Resume-Parser" target="_blank" rel="noreferrer">
                    <img src={ResumeParser} className="zoom" alt="Python Resume Parser" width="100%" />
                </a>
                <h2>Python Resume Parser</h2>
                <p>Automated the parsing of bulk PDFs using NLP and tokenization to extract structured resume data, implementing a custom ATS simulation to filter candidates based on technical keywords.</p>
            </div>
            
            <div className="project">
                <a href="https://github.com/jenish3000/SDP_AGROWASTE" target="_blank" rel="noreferrer">
                    <img src={AgroWaste} className="zoom" alt="Digital Agro-Waste Management System" width="100%" />
                </a>
                <h2>Agro-Waste Management System</h2>
                <p>Developed a MERN stack dashboard to facilitate efficient farmer-authority interaction, featuring automated auction handling and real-time bidding logic for optimized waste management.</p>
            </div>
            
            <div className="project">
                <a href="https://github.com/het1143/Electricity-Bill-Management" target="_blank" rel="noreferrer">
                    <img src={ElectBillManag} className="zoom" alt="Electricity Bill Management System" width="100%" />
                </a>
                <h2>Electricity Bill Management System</h2>
                <p>Designed a comprehensive database system using PostgreSQL and PL/pgSQL, featuring custom cursors and validation procedures to streamline electricity billing and employee management.</p>
            </div>

            <div className="project">
                <a href="https://github.com/het1143/YACC-Based-Language-Translator" target="_blank" rel="noreferrer">
                    <img src={LT} className="zoom" alt="Gujarati Time Translator" width="100%" />
                </a>
                <h2>Gujarati Time Translator</h2>
                <p>Developed a compiler-based translator in C that parses and converts complex Gujarati time expressions into English format using custom tokenization logic.</p>
            </div>

        </div>
    </div>
);


const ResProjects = () => (
    <div className="projects-container" id="res-projects">
        <h1>Research Projects</h1>
        <div className="projects-grid">
            <div className="project" style={{ gridColumn: "1 / -1" }}>
                <a href="http://jscglobal.org/volume-14-issue-1-january-2025/" target="_blank" rel="noreferrer">
                    <h2>Sustainable Crop Residue Management Through Digital Mediation</h2>
                </a>
                <p>
                    The research paper "Sustainable Crop Residue Management Through Digital Mediation," authored by Het Patel and Deepak Vegda, addresses the severe air pollution crisis in Delhi caused largely by crop residue (stubble) burning in neighboring states like Punjab. The authors identify that the shift to mechanical harvesting, which leaves significant stalk residue, combined with the short time window between rice harvesting and wheat sowing, drives farmers to burn stubble as a quick, cost-effective clearing method. To mitigate the resulting environmental degradation and soil nutrient depletion, the paper proposes a "Digital Mediation" model where the government acts as an intermediary between farmers and industrial sectors.
                </p>
                <p>
                    In this proposed system, farmers register on a government portal and request harvest support via a toll-free hotline. Third-party services are then dispatched to harvest crops and collect the residue, which is transported to government warehouses rather than being burned. This collected waste is subsequently sold through an online auction to industries for use in biomass energy, paper production, animal feed, and construction materials. This closed-loop solution aims to transform agricultural waste into an economic asset, thereby reducing pollution while creating a sustainable bioeconomy.
                </p>
            </div>
        </div>
    </div>
);


const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email && message) {
            window.location.href = `mailto:hetpatel1143@gmail.com?subject=Portfolio Contact from ${name}&body=From: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
            setName("");
            setEmail("");
            setMessage("");
        }
    };

    return (
        <div id="contact">
            <div className="contact_wrapper">
                <h1>Contact Me</h1>
                <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
                <form className="contact-form" noValidate autoComplete="off">
                    <div className="form-row">
                        <input 
                            type="text" 
                            className="custom-input" 
                            placeholder="Your Name *" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input 
                            type="text" 
                            className="custom-input" 
                            placeholder="Email / Phone *" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <textarea 
                        className="custom-input custom-textarea" 
                        placeholder="Message *" 
                        rows={6}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <div className="button-container">
                        <Button 
                            variant="contained" 
                            endIcon={<SendIcon />} 
                            onClick={handleSubmit}
                            className="send-button"
                        >
                            SEND
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const Footer = () => (
    <footer>
        <div className="footer-icons">
            <a href="https://github.com/het1143" target="_blank" rel="noreferrer" className="footer-icon-link"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/hetpatel1143" target="_blank" rel="noreferrer" className="footer-icon-link"><LinkedInIcon /></a>
        </div>
        <p>A portfolio designed & built by <a href="https://github.com/het1143/HP1143" target="_blank" rel="noreferrer">Het Patel</a> with ❤️</p>
    </footer>
);

// --- MAIN APP ---
function App() {
    const [mode, setMode] = useState('dark');

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const theme = createTheme({
        palette: {
            mode: mode,
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
                
                <Navigation mode={mode} setMode={setMode} />
                
                <div style={{ transitionDuration: '700ms' }}>
                    
                    <div style={{
                        backgroundImage: `url(${mode === 'dark' ? bgDark : bgLight})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        paddingBottom: '40px' 
                    }}>
                        <Intro />
                    </div>

                    <About />
                    <Expertise />
                    <History />
                    <Projects />
                    <ResProjects />
                    <Contact />
                </div>
                
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;
