import { BrowserRouter, Link } from 'react-router-dom';
import { useState } from 'react';


/*
    Primer header para el inicio de usuario

    *Buscar la paletas de colores


*/
export const HeaderBasic: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <BrowserRouter>
            <header className="bg-white shadow">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center py-4">
                        <div>
                            <Link to="/" className="text-2xl font-bold">Q se yo</Link>
                        </div>
                        <div className="hidden md:flex space-x-4">
                            <Link to="/login" className="text-gray-800">Login</Link>
                            <Link to="/register" className="text-gray-800">Register</Link>
                        </div>
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="transition-transform duration-300 ease-in-out transform"
                                style={{ transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
                            >
                                <svg
                                    className="w-6 h-6 text-gray-800"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {isMenuOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16m-7 6h7"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                    {isMenuOpen && (
                        <div className={`md:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'animate-slideDown' : 'animate-slideUp overflow-hidden'}`}>
                            <Link to="/login" className="block text-gray-800 py-2">Login</Link>
                            <Link to="/register" className="block text-gray-800 py-2">Register</Link>
                        </div>

                    )}
                </div>
            </header>
        </BrowserRouter>
    );
};

/*
    *Segundo header para la verificacion de usuario
    *Agregar animacion
    *Agregar iconos
    *Agregar opciones de usuario
    *

*/
export const HeaderPro: React.FC = () => {
    return (
        <BrowserRouter>
            <header className="bg-white shadow">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center py-4">
                        <div>
                            <Link to="/" className="text-2xl font-bold">Q se yo</Link>
                        </div>
                        <div className="hidden md:flex space-x-4">
                            <Link to="/login" className="text-gray-800">Login</Link>
                            <Link to="/register" className="text-gray-800">Register</Link>
                        </div>
                    </div>
                </div>
            </header>
        </BrowserRouter>
    );
}