import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Lock } from 'lucide-react'
import { useState } from 'react'
import './Relationships.css'

export default function Relationships() {
    const [passcode, setPasscode] = useState('')
    const [isUnlocked, setIsUnlocked] = useState(false)
    const [error, setError] = useState('')

    const lessons = [
        "You cannot love someone into their potential if they do not want to become it themselves.",
        "A boundary without an enclosed consequence is just a suggestion.",
        "I’ve learned that effort should not feel one-sided, and that consistency speaks louder than words ever will.",
        "Emotional safety is the foundation. Without it, romance is just anxiety disguised as passion.",
        "Choosing myself doesn't mean I am selfish; it means I am no longer bleeding to keep others warm.",
        "I’ve learned that potential is not the same as reality, and holding on to what “could be” can keep me stuck in what is not.",
        "I’ve learned that I cannot love someone into becoming what I need, no matter how much I care.",
        "And most importantly, I’ve learned that real love does not require me to lose myself in order to keep it."
    ]

    const handleUnlock = (e) => {
        e.preventDefault()
        if (passcode === '1512') {
            setIsUnlocked(true)
            setError('')
        } else {
            setError('Access denied')
        }
    }

    return (
        <div className="page-container relationships-page">
            <AnimatePresence mode="wait">
                {!isUnlocked ? (
                    <motion.div
                        key="lock-screen"
                        className="lock-screen-wrapper"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="blur-background"></div>
                        <motion.div
                            className="lock-card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <div className="lock-icon-container">
                                <Lock size={32} />
                            </div>
                            <h2>This space is private</h2>
                            <p className="lock-subtitle">A more personal space.</p>

                            <form onSubmit={handleUnlock} className="lock-form">
                                <input
                                    type="password"
                                    placeholder="Enter passcode"
                                    value={passcode}
                                    onChange={(e) => setPasscode(e.target.value)}
                                    className={error ? 'input-error' : ''}
                                />
                                <AnimatePresence>
                                    {error && (
                                        <motion.p
                                            className="error-message"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                        >
                                            {error}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                                <button type="submit" className="unlock-btn">
                                    Unlock
                                </button>
                            </form>
                        </motion.div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            className="relationships-header"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Heart className="header-icon" size={40} />
                            <h1>Relationships</h1>
                            <p className="subtitle">The complex map of loving others and keeping myself.</p>
                        </motion.div>

                        <div className="content-wrapper">
                            <motion.section
                                className="rel-section my-view"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2>My View on Love</h2>
                                <p>
                                    I used to think love was about how much you were willing to sacrifice. I thought enduring pain was a sign of devotion, that the more you stayed through discomfort, the more real it was.
                                    Now, I see love differently.It is not just about romance; it is about emotional safety. It is finding a shared space where growth is nurtured, not stunted but where you are allowed to evolve without fear of losing yourself. Love is not meant to shrink you or silence parts of you just to keep it alive.Love should feel more like peace than anxiety.More like clarity than confusion.More like being met, than constantly reaching.It is not about who can endure the most, but about two people choosing each other in ways that feel steady, mutual, and true.And maybe, most importantly, love should not cost you yourself to keep it.
                                </p>
                            </motion.section>

                            <motion.section
                                className="rel-section rel-status"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <h3>Current Status:</h3>
                                <p className="status-highlight">Learning to choose myself.</p>
                            </motion.section>

                            <motion.section
                                className="rel-section lessons"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2>Lessons I've Learned</h2>
                                <ul className="lessons-list">
                                    {lessons.map((lesson, index) => (
                                        <li key={index}>
                                            <span className="bullet"></span>
                                            <p>{lesson}</p>
                                        </li>
                                    ))}
                                </ul>
                            </motion.section>

                            <motion.section
                                className="letter-section"
                                initial={{ opacity: 0, rotate: -2 }}
                                whileInView={{ opacity: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                            >
                                <div className="letter-paper">
                                    <p>Dear You,</p>
                                    <p>
                                        You don’t have to have everything figured out right now.<br /><br />
                                        It’s okay to feel unsure, to question things, to stand in between what you once believed and what you’re beginning to see. Growth often feels like confusion before it feels like clarity.<br /><br />
                                        Remember this gently: your worth has never been something to prove. Not through effort, not through patience, not through how much you can carry. You are already enough, even on the days you feel like you’re falling apart quietly.<br /><br />
                                        You are allowed to change.<br /><br />
                                        You are allowed to outgrow spaces, ideas, and even versions of yourself that once felt right.<br /><br />
                                        You are allowed to choose peace, even if it doesn’t make sense to anyone else.<br /><br />
                                        There is no rush to become a “perfect” version of yourself. You are learning, unlearning, and becoming, all at the same time. And that is enough.<br /><br />
                                        Take your time.<br />
                                        Be kind to your heart.<br />
                                        Trust that you will find your way, even if right now it feels like you’re just trying to hold yourself together.<br /><br />
                                        You are not behind.<br />
                                        You are not lost.<br />
                                        You are becoming.
                                    </p>
                                    <p>
                                        Thank you for the lesson. I am taking my energy back now.
                                    </p>
                                    <p className="signature">— Ess</p>
                                </div>
                            </motion.section>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
