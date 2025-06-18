//give me a code snippet for a landing page in React with TypeScript
import React from 'react';
import { FaAngleDoubleDown } from "react-icons/fa";

const Landing: React.FC = () => {
    return (
    <>
        <div className={'flex flex-col items-center justify-center h-screen'}>
            <img
                src={'src/assets/NasaLogoMain.png'}
            className="transition-transform duration-3000 hover:scale-110 "
                style={{
                    filter:
                        'drop-shadow(10px 0 0 white) drop-shadow(0 10px 0 white) drop-shadow(-10px 0 0 white) drop-shadow(0 -10px 0 white)'
                }}
            />
                <div className={'flex flex-col items-center justify-end'}>
                    <FaAngleDoubleDown className="text-4xl animate-bounce" />
                </div>
        </div>
    </>
    );
};

export default Landing;
