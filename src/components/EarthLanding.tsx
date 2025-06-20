//React snippet for RoverMission component
import React, {useState, useEffect} from 'react';
import {FaAngleDoubleDown} from "react-icons/fa";


const InteractiveEarth: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen ">
            <h1 className="text-4xl font-bold mb-4">3D Earth</h1>
            <p className="text-lg mb-8">Interactive 3D visualization of Earth.</p>
            <button
                className="text-4xl animate-bounce bg-gray-600 p-4 rounded-full hover:bg-gray-700 transition-colors"
            >
                <a href="/Earth">
                    <h1 className="text-white text-xl opacity-100">Visit Experience</h1>
                </a>
            </button>
            <div className={'flex flex-col items-center justify-end mt-20'}>
                <FaAngleDoubleDown className="text-4xl animate-bounce" />
            </div>
        </div>
    );
}

export default InteractiveEarth;
