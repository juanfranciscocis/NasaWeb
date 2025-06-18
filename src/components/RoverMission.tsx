//React snippet for RoverMission component
import React, {useState, useEffect} from 'react';


const RoverMission: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen ">
            <h1 className="text-4xl font-bold mb-4">NASA Mars Rover Mission</h1>
            <p className="text-lg mb-8">Explore the latest images and data from Mars rovers.</p>
            <button
                className="text-4xl animate-bounce bg-gray-600 p-4 rounded-full hover:bg-gray-700 transition-colors"
            >
                <a href="/MarsExperience">
                    <h1 className="text-white text-xl opacity-100">Visit Experience</h1>
                </a>
            </button>
        </div>
    );
}

export default RoverMission;
