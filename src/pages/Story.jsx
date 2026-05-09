import { motion } from 'framer-motion'
import './Story.css'
import firstPhoto from '../assets/First.jpg'
import secondPhoto from '../assets/young.jpeg'
import thirdPhoto from '../assets/lapi.jpg'
import fourthPhoto from '../assets/go.jpg'

export default function Story() {
    const photos = [
        { id: 1, caption: "First day of university.", image: firstPhoto },
        { id: 2, caption: "A primary photo.", image: secondPhoto },
        { id: 3, caption: "Coding one more line.", image: thirdPhoto },
        { id: 4, caption: "Learning to let go.", image: fourthPhoto }
    ]

    const timeline = [
        { year: "2024", event: "Joining university with no idea what to expect." },
        { year: "Early 2025", event: "Struggling with calculus, discovering programming, trying to fit in. " },
        { year: "Late 2025", event: "Emotional growth and learning to set boundaries." },
        { year: "2026", event: "Becoming independent and choosing myself." }
    ]

    return (
        <div className="page-container story-page">
            <motion.div
                className="story-header"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1>My Story</h1>
                <p className="subtitle">The narrative of my becoming.</p>
            </motion.div>

            <section className="story-section">
                <motion.div
                    className="textContent"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Who I Was</h2>
                    <p>
                        I used to be someone who was easily overwhelmed, unsure of her path, and constantly seeking validation from others.
                        There were moments of deep confusion and struggles with both academic pressures and personal expectations.
                        I held onto things that didn't serve me, simply because they were familiar.
                    </p>
                </motion.div>

                <motion.div
                    className="textContent"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h2>Who I Am Becoming</h2>
                    <p>
                        Now, I focus on growth, self-awareness, and my own ambitions. I am learning that it is okay to let go,
                        and that my worth is not defined by perfection. I am becoming someone who builds her own safe spaces,
                        who embraces the struggle of learning, and who looks forward to independence.
                    </p>
                </motion.div>
            </section>

            <section className="photo-section">
                <h2 className="section-title">Moments of Growth</h2>
                <div className="photo-grid">
                    {photos.map((photo, index) => (
                        <motion.div
                            key={photo.id}
                            className="photo-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {photo.image ? (
                                <img src={photo.image} alt={photo.caption} className="story-img" />
                            ) : (
                                <div className="photo-placeholder"></div>
                            )}
                            <p className="photo-caption">{photo.caption}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="timeline-section">
                <h2 className="section-title">Timeline</h2>
                <div className="timeline">
                    {timeline.map((item, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h3>{item.year}</h3>
                                <p>{item.event}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    )
}
