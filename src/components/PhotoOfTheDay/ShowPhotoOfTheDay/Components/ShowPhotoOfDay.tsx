import React, {useState, useEffect} from 'react';
import {fetchPhotoOfTheDay} from '../services/PhotoOfTheDay.service.ts';
import type {PhotoOfTheDay} from "../Interfaces/PhotoOfTheDay.ts";
import {CircularProgress} from "@mui/material";


const ShowPhotoOfDay: React.FC = () => {

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
        });
    }, []);

    return (
        <div
            className="flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-br from-blue-900 via-black to-gray-900 p-6 rounded-xl shadow-2xl">
            {photoOfTheDay ? (
                <div className="w-full max-w-2xl bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg">
                    <h1 className="text-3xl font-bold text-white mb-2 text-center drop-shadow-lg">{photoOfTheDay.title}</h1>
                    <p className="text-gray-300 text-center mb-4">{photoOfTheDay.date}</p>
                    <div className="flex justify-center mb-6">
                        {photoOfTheDay.media_type === 'image' ? (
                            <img
                                src={photoOfTheDay.hdurl || photoOfTheDay.url}
                                alt={photoOfTheDay.title}
                                className="rounded-lg max-h-[28rem] shadow-xl border-4 border-white/20"
                            />
                        ) : (
                            <iframe
                                src={photoOfTheDay.url}
                                title={photoOfTheDay.title}
                                className="rounded-lg w-full h-[28rem] shadow-xl border-4 border-white/20"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            />
                        )}
                    </div>
                    <p className="text-gray-200 text-lg leading-relaxed text-justify drop-shadow-md">
                        {photoOfTheDay.explanation}
                    </p>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center h-64">
                    <CircularProgress color="inherit" className="mb-4" />
                    <span className="text-white">Loading NASA's Photo of the Day...</span>
                </div>
            )}
        </div>
    );
}

export default ShowPhotoOfDay;
