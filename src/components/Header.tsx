import React from 'react';

const Header: React.FC = () => {
    return (
        <header className=" text-white p-4 fixed min-w-full z-100">
            <div
                className="flex items-center justify-between p-2 m-2 rounded-4xl bg-gray-800/50 backdrop-blur-md shadow-lg">
                <div className={'w-1/2 flex items-center justify-start'}>
                    <img
                        src={'src/assets/NasaLogoMain.png'}
                        className={'max-w-14'}
                    />
                    <h1 className={"LandingPageFont text-2xl"}>
                        NASA Mars Rover Mission
                    </h1>
                </div>
                <div className={'w-1/2'}>
                </div>
            </div>
        </header>
    );
};

export default Header;
