import { useState } from 'react'
import { motion } from 'framer-motion'
import './Thoughts.css'

export default function Thoughts() {
    const posts = [
        {
            id: 1,
            category: "Growth",
            date: "Feb 10, 2026",
            title: "The Quiet After the Storm",
            excerpt: "There is a strange silence that comes after you stop fighting for things that aren't meant for you. It feels like emptiness at first, but slowly, it becomes room to breathe."
        },
        {
            id: 2,
            category: "Overthinking",
            date: "December 10, 2025",
            title: "Thoughts at 2 AM",
            excerpt: "Why do the things we should have said only make themselves known when everyone else is asleep? I am learning to let the unsent messages remain unsent."
        },
        {
            id: 3,
            category: "Healing",
            date: "April 20, 2026",
            title: "Linear Progression is a Myth",
            excerpt: "I caught myself slipping into old habits today. Instead of being angry, I just observed it. Progress isn't a straight line. Sometimes it's a spiral."
        },
        {
            id: 4,
            category: "Life as a student",
            date: "February 15, 2025",
            title: "The Weight of Potential",
            excerpt: "The hardest part of being surrounded by brilliant people is realizing you have to define your own version of success, rather than borrowing theirs."
        },
        {
            id: 5,
            category: "Growth",
            date: "March 27, 2026",
            title: "Overcoming The Fear of belonging",
            excerpt: "At last I gathered the courage I once lacked to walk into that room and sit in that chair. Not to prove anything, not to gain something immediately, but because staying felt right and I know that in the long run I will grow more than I ever could alone."
        },
        {
            id: 6,
            category: "Perception of life",
            date: "March 10, 2026",
            title: "Perception verses Reality",
            excerpt: "Life is not controlled by reality. It's controlled by how you perceive it. And this keeps me wondering🤔, If perception makes millions choose one product over the another, Is it still overrated or is perception itself part of the value?"
        },
        {
            id: 7,
            category: "Perception of life",
            date: "Jan 20, 2026",
            title: "It's all in the mind",
            excerpt: "When caught in stress or anxiety, pause. Take a breath, remember that your perspective is limited right now. The thing that is consuming my thoughts is probably not as significant as it feels. 'The witness practice'- learning to witness your emotions rather than becoming them."
        }

    ]

    const categories = ["All", "Growth", "Overthinking", "Life as a student", "Healing", "Perception of life"]

    const [activeCategory, setActiveCategory] = useState("All")

    const filteredPosts = activeCategory === "All"
        ? posts
        : posts.filter(post => post.category === activeCategory)

    return (
        <div className="page-container blog-page">
            <motion.div
                className="blog-header"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1>Thoughts</h1>
                <p className="subtitle">Reflections, essays, and unpolished poetry.</p>
            </motion.div>

            <motion.div
                className="blog-categories"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                {categories.map((cat, index) => (
                    <button
                        key={index}
                        className={`category-btn ${cat === activeCategory ? 'active' : ''}`}
                        onClick={() => setActiveCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </motion.div>

            <div className="blog-grid">
                {filteredPosts.map((post, index) => (
                    <motion.article
                        key={post.id}
                        className="blog-post"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="post-meta">
                            <span className="post-category">{post.category}</span>
                            <span className="post-date">{post.date}</span>
                        </div>
                        <h2 className="post-title">{post.title}</h2>
                        <p className="post-excerpt">{post.excerpt}</p>
                        <button className="read-more-btn">Read Entry</button>
                    </motion.article>
                ))}
            </div>
        </div>
    )
}
