import { motion } from 'framer-motion'
import { useState } from 'react'
import './Poetry.css'

const PoemText = ({ content }) => {
    const [expanded, setExpanded] = useState(false);
    const lines = content.split('\n');
    const isLong = lines.length > 5;

    const displayContent = expanded || !isLong
        ? content
        : lines.slice(0, 5).join('\n') + '...';

    return (
        <div onClick={() => isLong && setExpanded(!expanded)} style={{ cursor: isLong ? 'pointer' : 'default' }}>
            <p className="poem-text format-poem">
                {displayContent}
            </p>
            {isLong && !expanded && (
                <div style={{ fontSize: '0.85rem', opacity: 0.7, fontStyle: 'italic', marginTop: '0.5rem' }}>
                    Click to read more
                </div>
            )}
        </div>
    );
};

export default function Poetry() {
    const [filter, setFilter] = useState('All')
    const categories = ['All', 'Love', 'Healing', 'Overthinking', 'Becoming']

    const featuredPoem = {
        title: "Becoming",
        content: `In the end,\nShe grew up\nNot all at once\nBut in the small changes she hardly noticed\nLike how home started to feel\nToo small for her big dreams\nWhen her feet moved slower than her mind\nShe wasn't excited by the same things as before\nAnd her laughter became more tamed\nRarely escaping her lips\nShe still remembers the girl she was\nThe hours she spent outside\nShe misses them but she knows,\nThat to grow means to let go\nSome versions of ourselves\nShe lived fully once\nThe girl she was hasn't left her\nShe is just more QUIET now.`
    }

    const poems = [
        {
            id: 1,
            title: "Silence",
            category: "Love",
            date: "Dec 27, 2025",
            content: `She was supposed to be yours\ngentle, whole,\na version of me who never wandered\ninto hands that weren't yours.\n\nbut I failed her\nwe paused\nand I didn't.\nI found someone who wore affection like perfume\nSweet on the surface\npoison underneath\nhe was everything I once dreamed\nSoft hands, warm words\nNever told me I was "too much"\n\nBut he was never home\nHe was noise when i missed your silence\nand yet I stayed\nNot because I saw forever\nBut because he made me feel wanted\nIn a moment I felt forgettable\n\nFrom that a seed grew\nI wasn't ready to carry\nand the day I found out,\nI left you\nLike truth leaves a lie when the light hits.\n\nYou should have left too. But you didn't\nand that, that's what hurts the most.\nbecause I destroyed us\nIn a way I can't rewind\nI want you.\nI ache for the version of us\nthat never saw this storm.\n\nbut how do i hand you a love written in broken ink?\nhow do i tell you that the part of me you loved was shadowed\n by a mistake I can't erase?\n\nYou still love me\nand i feel it in every word,\nevery silence, you fill just to keep me warm\nbut if i tell you\n the whole truth\nI know you might walk away\nand never look back.\n\nand that's what keeps me quiet.\n\nBut her...\nthe version of me I was supposed to be\nShe still looks for you\nIn every apology I can't speak.`
        },
        {
            id: 2,
            title: "Holding back",
            category: "Overthinking",
            date: "April 26, 2026",
            content: `I see you holding your heart like it might break again\nKeeping distance like it's the only way to stay whole\nI hear it in your silence\nIn the spaces where words should have been\n\nMaybe you are protecting yourself\nMaybe loving halfway feels safer than falling fully\nMaybe you tell yourself this is control\nthis careful, measured closeness\n\nBut where does that leave me?\n\nI'm here feeling you're avoiding\nreading meaning into pauses\nwaiting in conversations that never come back\nholding on to something that never quite holds me\n\nYou say you don't want to force it\nBut do you see what this is doing instead?\nBecause this... this feels like being chosen in words\nand forgotten in actions\n\nI don't need perfect\nI don't need constant\nBut I need real\nI need something that doesn't leave me questioning whether I\nMatter in the quiet moments\n\nIf you're afraid to hold on\nthen don't reach me at all\nIf you can't be here fully\ndon't come halfway and call it love\n\nBecause I can't keep standing\nBetween what you feel and what you do\ntrying to make sense of both\n\nI care about you, maybe more than I should\nbut I can't keep learning how to shrink\njust to fit into your distance\nSo if you want me\nwant me with your actions, not just your words.\n\nAnd if you don't\nThen let me go gently\nnot in pieces.`
        },
        {
            id: 3,
            title: "Almost",
            category: "Healing",
            date: "Jan 22, 2026",
            content: `I know i broke you,\nor maybe i broke myself through you\nI see the cracks i left,\nThe quiet I failed to fill\nI carry them like stones\nin the pockets of my chest\n\nI don't ask for forgiveness\nI only carry the weight of knowing\nI should have done better\nI should have stayed steadier\n I should have been less of a storm\nand more of a hand you could hold.\n\nAnd yet\nI hope, even as I shrink,\nEven as I vanish into my own guilt\nThat you see me.\nThat you know am trying,\nIn the small, trembling ways I can.\nThat my remourse is not emptiness,\nBut love in disguise\nQuiet and stumbling.\n\n I want to feel chosen\nI want to feel like I belong\nWithout forcing it\nWithout wondering if your heart regrets\n The moments we've shared.\n I want to rest in knowing\nthat my presence is not a debt\nbut a place you freely hold.\n\nI am sorry\nI am small\nI am flawed\n\nBut am here.\nAnd I hope that someday somehow,\nYou are still here too.`
        }
    ]

    const filteredPoems = filter === 'All' ? poems : poems.filter(p => p.category === filter)

    return (
        <div className="page-container poetry-page">
            <motion.div
                className="poetry-header"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1>Pieces of Me</h1>
                <p className="subtitle">Some things are easier written than said.<br />These are the words I never spoke out loud.</p>
            </motion.div>

            {/* Featured Poem Section */}
            <motion.section
                className="featured-poem-section"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div className="featured-poem-card">
                    <h2>{featuredPoem.title}</h2>
                    <PoemText content={featuredPoem.content} />
                </div>
            </motion.section>

            {/* Filters */}
            <motion.div
                className="poetry-filters"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                {categories.map((cat, i) => (
                    <button
                        key={i}
                        className={`filter-btn ${filter === cat ? 'active' : ''}`}
                        onClick={() => setFilter(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </motion.div>

            {/* Poetry Grid */}
            <motion.div
                className="poetry-grid"
                layout
            >
                {filteredPoems.map((poem, index) => (
                    <motion.div
                        key={poem.id}
                        className="poem-card"
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="poem-meta">
                            <span className="poem-category">{poem.category}</span>
                            <span className="poem-date">{poem.date}</span>
                        </div>
                        <h3>{poem.title}</h3>
                        <PoemText content={poem.content} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}
