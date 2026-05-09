import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { FaInstagram, FaTwitter, FaGithub, FaTiktok } from 'react-icons/fa'
import './Contact.css'

export default function Contact() {
    return (
        <div className="page-container contact-page">
            <motion.div
                className="contact-header"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1>Let's Connect</h1>
                <p className="subtitle">Leave a message, or just say hi.</p>
            </motion.div>

            <div className="contact-wrapper">
                <motion.div
                    className="contact-form-container"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <form className="contact-form" action="https://formspree.io/f/mwvagbvb" method="POST">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Your name" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Your email" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="5" placeholder="Your message..." required></textarea>
                        </div>

                        <button type="submit" className="btn-submit">
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </motion.div>

                <motion.div
                    className="contact-socials"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h2>Find me online</h2>
                    <p>If forms aren't your thing, you can reach out to me on these spaces.</p>

                    <div className="social-links">
                        <a href="https://www.instagram.com/jedz_her?igsh=eHJmNnY5cG93YnEz" className="social-link"><FaInstagram size={24} /> Instagram</a>
                        <a href="https://x.com/clima430027" className="social-link"><FaTwitter size={24} /> Twitter</a>
                        <a href="https://github.com/SarahGikandi" className="social-link"><FaGithub size={24} /> GitHub</a>
                        <a href="https://www.tiktok.com/@sarahgikadi?_r=1&_t=ZS-95vPof2v7mT" className="social-link"><FaTiktok size={24} /> TikTok</a>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
