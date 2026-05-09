import { motion } from 'framer-motion'
import { Book, Lightbulb, AlertCircle } from 'lucide-react'
import './Academics.css'

export default function Academics() {
    const subjects = [
        {
            name: "Calculus",
            struggle: "Derivatives of multi-variable functions felt impossible. I couldn't visualize the concepts at all.",
            helped: "Watching YouTube visualizers and practicing a lot.",
            learned: "Patience. Math isn't about natural talent; it's about breaking a problem down until it makes sense."
        },
        {
            name: "Statistics",
            struggle: "Memorizing different distribution formulas and when to apply them.",
            helped: "Creating a cheat sheet that grouped formulas by use-cases rather than chapters.",
            learned: "To look for the story in data, rather than just crunching numbers."
        },
        {
            name: "Programming",
            struggle: "Understanding scope and why my code worked one day and broke the next.",
            helped: "Using the debugger step-by-step instead of randomly changing variables and praying it works.",
            learned: "Logic is unforgiving, but it is fair. Bugs are just puzzles waiting to be solved."
        },
        {
            name: "Discrete Structures",
            struggle: "Writing formal proofs. I knew the answers but couldn't explain them formally.",
            helped: "Treating proofs like legal arguments where every step needs a cited justification.",
            learned: "The value of rigorous thought and precise communication."
        },
        {
            name: "Physics",
            struggle: "The physics behind light interference, wave formulas, magnetism, laws, AC current among others.",
            helped: "Writing down formulas where there were mathematical questions and understanding concepts in a deeper level.",
            learned: "That theory and reality sometimes look different, and connecting the two is beautiful."
        }
    ]

    return (
        <div className="page-container academics-page">
            <motion.div
                className="academics-header"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1>Academics</h1>
                <p className="subtitle">The struggles and the breakthroughs.</p>
            </motion.div>

            <section className="reflection-block">
                <motion.div
                    className="reflection-content"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <AlertCircle size={32} className="reflection-icon" />
                    <h2>When I felt like giving up</h2>
                    <p>
                        There were semesters where my grades slipped and the workload felt suffocating. I questioned if I belonged in Computer Science. But in those moments, stepping back, taking a breath, and asking for help changed everything. I realized that struggling didn't mean I was failing; it meant I was learning.
                    </p>
                </motion.div>
            </section>

            <section className="subjects-list">
                {subjects.map((subject, index) => (
                    <motion.div
                        key={index}
                        className="subject-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="subject-header">
                            <h2>{subject.name}</h2>
                        </div>
                        <div className="subject-details">
                            <div className="detail-item">
                                <h4><AlertCircle size={16} /> What I struggled with:</h4>
                                <p>{subject.struggle}</p>
                            </div>
                            <div className="detail-item">
                                <h4><Lightbulb size={16} /> What helped me understand:</h4>
                                <p>{subject.helped}</p>
                            </div>
                            <div className="detail-item">
                                <h4><Book size={16} /> What I learned:</h4>
                                <p>{subject.learned}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </section>

            <section className="study-tips">
                <h2 className="section-title">Survival Study Tips</h2>
                <motion.ul
                    className="tips-list"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <li><strong>01.</strong> Don't just memorize, understand the "why".</li>
                    <li><strong>02.</strong> Sleep is more important than a late-night cram session.</li>
                    <li><strong>03.</strong> Having a study partner or a study group is very helpful.</li>
                    <li><strong>04.</strong> Having and reading class notes sometimes is all you need.</li>
                </motion.ul>
            </section>
        </div>
    )
}
