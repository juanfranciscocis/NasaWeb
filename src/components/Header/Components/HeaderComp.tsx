import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { href: "/MarsExperience", label: "Mars Experience" },
        { href: "/PhotoOfTheDay", label: "Photo of the Day" },
        { href: "/Earth", label: "3D Earth" },
        { href: "/NasaImagesExperience", label: "NASA Images Experience" },
    ];

    return (
        <header className="text-white p-2 sm:p-4 fixed w-full z-[9999]">
            <div className="flex items-center justify-between p-2 sm:p-4 m-1 sm:m-2 rounded-2xl sm:rounded-4xl bg-gray-800/50 backdrop-blur-md shadow-lg">
                <a
                    href={'/'}
                    className={'flex items-center justify-start flex-shrink-0'}
                >
                    <img
                        src={'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png'}
                        className={'w-16  '}
                        alt="NASA Logo"
                    />
                    <h1 className="LandingPageFont text-lg sm:text-xl md:text-2xl ml-2 sm:ml-3 whitespace-nowrap">
                        NASA Missions
                    </h1>
                </a>

                <nav className="hidden lg:flex items-center justify-end gap-4 xl:gap-6">
                    {navItems.map((item) => (
<a
                                key={item.href}
                                href={item.href}
                                className="relative text-white/90 hover:text-white transition-colors duration-300 text-base xl:text-lg after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full whitespace-nowrap"
                            >
                                {item.label}
                            </a>
                    ))}
                </nav>

                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden p-2 text-white/90 hover:text-white transition-colors duration-300"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {isMenuOpen && (
                <div className="lg:hidden mt-2 mx-1 sm:mx-2 relative z-[9999]">
                    <div className="bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden">
                        {navItems.map((item, index) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className={`block px-4 sm:px-6 py-3 sm:py-4 text-white/90 hover:text-white hover:bg-gray-700/50 transition-all duration-300 ${
                                    index !== navItems.length - 1 ? 'border-b border-gray-700/50' : ''
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
