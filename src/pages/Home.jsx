import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen } from 'lucide-react'
import './Home.css'
import heroImage from '../assets/GRADUATION-removebg-preview.png'

export default function Home() {
    return (
        <div className="home-container">
            <div className="home-hero">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        className="profile-image-container"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <img src={heroImage} alt="Profile" className="profile-image" />
                    </motion.div>

                    <h1 className="hero-title">Becoming Ess</h1>
                    <h2 className="hero-subtitle">A journey of growth, learning, and becoming</h2>

                    <p className="hero-intro">
                        "I am not who I was, and I am still becoming who I want to be."
                    </p>

                    <div className="hero-actions">
                        <Link to="/story" className="btn btn-primary">
                            Explore My Journey <ArrowRight size={18} />
                        </Link>
                        <Link to="/thoughts" className="btn btn-secondary">
                            Read My Thoughts <BookOpen size={18} />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
