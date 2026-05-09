import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, X } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { useState } from 'react'
import './Projects.css'
import First from '../assets/calc.png'
import Second from '../assets/tracker.png'
import Third from '../assets/pk.png'

export default function Projects() {
    const [selectedImage, setSelectedImage] = useState(null)

    const projects = [
        {
            id: 1,
            title: "Python Calculator",
            description: "A comprehensive terminal-based calculator that gracefully handles complex mathematical expressions, order of operations, and input validation without libraries.",
            learned: "Deepened my understanding of algorithms and handling in user inputs.",
            githubLink: "https://github.com/SarahGikandi/calculator-project",
            demoLink: "",
            image: First
        },
        {
            id: 2,
            title: "Task Tracker App",
            description: "A personal productivity tool built with Vanilla JS and Local Storage to track daily academic and personal goals.",
            learned: "How to manage persistent state in the browser and manipulate the DOM dynamically based on data changes.",
            githubLink: "https://github.com/SarahGikandi/discipline-tracker",
            demoLink: "https://sarahdiscplinetracker.netlify.app/",
            image: Second
        },
        {
            id: 3,
            title: "A valentine's website",
            description: "A simple personal website built with vanila JS. Hosted it later with netlify app. ",
            learned: "Was my first project to link a youtube link to play a song also using inbuilt features like broken heart, floating hearts among others.",
            githubLink: "https://github.com/SarahGikandi/A-valentines-website",
            demoLink: "",
            image: Third
        }
    ]

    return (
        <div className="page-container projects-page">
            <motion.div
                className="projects-header"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1>Projects</h1>
                <p className="subtitle">Things I've built while learning.</p>
            </motion.div>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className="project-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div
                            className={`project-screenshot ${project.image ? 'clickable' : ''}`}
                            onClick={() => project.image && setSelectedImage(project.image)}
                        >
                            {project.image && (
                                <img src={project.image} alt={project.title} className="screenshot-img" />
                            )}
                            <div className="overlay">
                                <span>View Screenshot</span>
                            </div>
                        </div>
                        <div className="project-content">
                            <h2>{project.title}</h2>
                            <p className="project-desc">{project.description}</p>

                            <div className="project-learned">
                                <strong>What I learned:</strong>
                                <p>{project.learned}</p>
                            </div>

                            <div className="project-links">
                                {project.demoLink && (
                                    <a href={project.demoLink} className="btn-project" target="_blank" rel="noopener noreferrer">
                                        Live Demo <ExternalLink size={16} />
                                    </a>
                                )}
                                {project.githubLink && (
                                    <a href={project.githubLink} className="btn-project" target="_blank" rel="noopener noreferrer">
                                        View Code <FaGithub size={16} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="screenshot-modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <button className="close-modal" onClick={() => setSelectedImage(null)}>
                            <X size={32} />
                        </button>
                        <motion.img
                            src={selectedImage}
                            alt="Screenshot closeup"
                            className="zoomed-screenshot"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
