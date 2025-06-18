import React from 'react';

//Add rover cards props
interface RoverCardsProps {
    isRight?: boolean;
}

const RoverCards: React.FC = (props: RoverCardsProps) => {
    const {isRight} = props;
    return (
        <div
            className={'w-full bg-amber-300 mr-10 ml-10'}
            style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(1px)',
                WebkitBackdropFilter: 'blur(1px)',
            }}
        >
            <div className={'flex flex-row items-center p-4'}>
                {!isRight && (
                    <div className={'w-2/3 flex items-center justify-center'}>
                        <img
                            src={'src/assets/NasaLogoMain.png'}
                            className={'max-w-140'}
                        />
                    </div>
                )}
                <div
                    className={'w-1/3 flex items-center justify-center text-2xl font-bold'}
                    style={{
                        background: 'rgba(255, 255, 255, 0)',
                        borderRadius: '10px',
                        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)',
                        backdropFilter: 'blur(1px)',
                        WebkitBackdropFilter: 'blur(1px)',
                    }}
                >
                    <h1>Hola</h1>
                </div>
                {isRight && (
                    <div className={'w-2/3 flex items-center justify-center'}>
                        <img
                            src={'src/assets/NasaLogoMain.png'}
                            className={'max-w-140'}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default RoverCards;
