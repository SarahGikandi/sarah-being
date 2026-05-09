import { motion } from 'framer-motion'
import { useState } from 'react'
import './Gallery.css'
import photoOne from '../assets/famili love.jpg'
import photoTwo from '../assets/GROUP.jpeg'
import photoThree from '../assets/prayergroup2.2.jpeg'
import photoFour from '../assets/nelly.jpg'
import photoFive from '../assets/fellows.jpg'
import photoSix from '../assets/fadm.jpg'
import photoSeven from '../assets/birthdaypic.jpeg'
import photoEight from '../assets/embu.jpg'
import photoNine from '../assets/gem.jpg'
import photoTen from '../assets/essy.jpg'
import photoEleven from '../assets/estee.jpg'
import photoTwelve from '../assets/waterfall.jpg'
import photoThirteen from '../assets/peter.jpg'
import photoFourteen from '../assets/MY.jpg'
import photoFifteen from '../assets/HTML kickoff... jedida_2 (1).jpg'

export default function Gallery() {
    const [filter, setFilter] = useState('All')

    const filters = ['All', 'Me', 'Moments', 'Random memories',]

    const photos = [
        // To add an image, first import it at the top of the file, then add the `image` property here.
        // Example: { id: 1, category: "Me", caption: "Rediscovering the camera.", image: myImportedImage },
        { id: 1, category: "Me", caption: "A moment after Graduation.", image: photoOne, fit: 'contain' },
        { id: 2, category: "Moments", caption: "A group discussion in the computer lab.", image: photoTwo, fit: 'contain' },
        { id: 3, category: "Random memories", caption: "Prayer group. My second home in chuka.", image: photoThree },
        { id: 4, category: "Moments", caption: "In class, few minutes before exam.", image: photoFour },
        { id: 5, category: "Me", caption: "Classmates we graduated with.", image: photoFive },
        { id: 6, category: "Random memories", caption: "My admission in campus.", image: photoSix },
        { id: 7, category: "Random memories", caption: "During my 20th birthday.", image: photoSeven },
        { id: 8, category: "Random memories", caption: "A ceremony at Embu.", image: photoEight },
        { id: 9, category: "Moments", caption: "A friend of mine, sharon.", image: photoNine },
        { id: 10, category: "Moments", caption: "Essy, a friend.", image: photoTen },
        { id: 11, category: "Random memories", caption: "A high school photo during rewarding.", image: photoEleven },
        { id: 12, category: "Random memories", caption: "A visit at the falls.", image: photoTwelve },
        { id: 13, category: "Random memories", caption: "On our way out of an examination with peter.", image: photoThirteen },
        { id: 14, category: "Me", caption: "One of my best pic as a fresher.", image: photoFourteen },
        { id: 15, category: "Moments", caption: "My very first html code 😂. Looks funny now but so far i see growth", image: photoFifteen }
    ]

    const filteredPhotos = filter === 'All' ? photos : photos.filter(p => p.category === filter)

    return (
        <div className="page-container gallery-page">
            <motion.div
                className="gallery-header"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1>Photo Gallery</h1>
                <p className="subtitle">Captured fragments of becoming.</p>
            </motion.div>

            <motion.div
                className="gallery-filters"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                {filters.map((f, i) => (
                    <button
                        key={i}
                        className={`filter-btn ${filter === f ? 'active' : ''}`}
                        onClick={() => setFilter(f)}
                    >
                        {f}
                    </button>
                ))}
            </motion.div>

            <motion.div
                className="gallery-grid"
                layout
            >
                {filteredPhotos.map((photo, index) => (
                    <motion.div
                        key={photo.id}
                        className="gallery-item"
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4 }}
                    >
                        {photo.image ? (
                            <img
                                src={photo.image}
                                alt={photo.caption}
                                className={`gallery-img ${photo.fit === 'contain' ? 'fit-contain' : ''}`}
                            />
                        ) : (
                            <div className="img-placeholder"></div>
                        )}
                        <div className="img-overlay">
                            <span className="img-caption">{photo.caption}</span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}
