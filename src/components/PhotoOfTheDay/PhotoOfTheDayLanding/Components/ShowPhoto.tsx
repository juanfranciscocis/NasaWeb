//React snippet for RoverMission component
import React, {useState, useEffect} from 'react';
import {fetchPhotoOfTheDay} from "../../ShowPhotoOfTheDay/Services/PhotoOfTheDay.service.ts";
import type {PhotoOfTheDay} from "../../ShowPhotoOfTheDay/Interfaces/PhotoOfTheDay.ts";
import {CircularProgress} from "@mui/material";
import {FaAngleDoubleDown} from "react-icons/fa";


const ShowPhoto: React.FC = () => {
    const [photoOfTheDay, setPhotoOfTheDay] = useState<PhotoOfTheDay | null>(null);

    useEffect(() => {
        console.log('Photo of the Day component mounted');
        fetchPhotoOfTheDay().then(
            (photo) => {
                console.log('Fetched Photo of the Day:', photo);
                setPhotoOfTheDay(photo);
            }
        ).catch((error) => {
            console.error('Error fetching Photo of the Day:', error);
        }
        )
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen ">
            <h1 className="text-4xl font-bold mb-4">NASA Photo Of The Day</h1>
            <p className="text-lg mb-8">Explore the wonders of space with the latest photo from NASA's collection. </p>
            {photoOfTheDay ? (
                <>
                <img src={photoOfTheDay.hdurl} alt={photoOfTheDay.title} className="max-w-full h-[20rem] rounded-lg shadow-lg" />
                    <button
                        className="text-4xl animate-bounce bg-gray-600 p-4 rounded-full hover:bg-gray-700 transition-colors mt-10"
                    >
                        <a href="/PhotoOfTheDay">
                            <h1 className="text-white text-xl opacity-100">Photo of the Day</h1>
                        </a>
                    </button>
                    <div className={'flex flex-col items-center justify-end mt-20'}>
                        <FaAngleDoubleDown className="text-4xl animate-bounce" />
                    </div>
                </>
            ) : (
                <div className="flex justify-center items-center h-64">
                    <CircularProgress
                        style={{color: 'white'}}
                    />
                </div>
            )}

        </div>
    );
}

export default ShowPhoto;
