import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()

    const links = [
        { to: '/', label: 'Home' },
        { to: '/story', label: 'My Story' },
        { to: '/academics', label: 'Academics' },
        { to: '/projects', label: 'Projects' },
        { to: '/thoughts', label: 'Thoughts' },
        { to: '/poetry', label: 'Poetry' },
        { to: '/relationships', label: 'Relationships' },
        { to: '/gallery', label: 'Gallery' },
        { to: '/contact', label: 'Contact' }
    ]

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <nav className="navbar blur-bg">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">B.Ess</Link>
                <div className="navbar-links desktop-only">
                    {links.map(link => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className={`nav-link ${location.pathname === link.to ? 'active' : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
                <button className="mobile-menu-btn" onClick={toggleMenu}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {isOpen && (
                <div className="mobile-menu fade-in">
                    {links.map(link => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className={`mobile-link ${location.pathname === link.to ? 'active' : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    )
}
