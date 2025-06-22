import React, {useState, useEffect, useRef} from 'react';
import type {NasaImageCollection} from "../Interfaces/NasaImageCollection.ts";
import {fetchNasaImages} from "../Services/NasaImages.service.ts";
import Cards from "./Cards.tsx";
import {CircularProgress} from "@mui/material";

const ShowImages: React.FC = () => {
    const [showImages, setImages] = useState<NasaImageCollection | null>(null);
    const [query, setQuery] = useState('');
    const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {

        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
        }

        debounceTimeout.current = setTimeout(() => {
            console.log('Fetching NASA images for query:', query);
            fetchNasaImages({query})
                .then((images) => {
                    console.log('Fetched NASA images:', images);
                    setImages(images);
                })
                .catch((error) => {
                    console.error('Error fetching NASA images:', error);
                });
        }, 500); // Delay in milliseconds

        return () => {
            if (debounceTimeout.current) {
                clearTimeout(debounceTimeout.current);
            }
        };
    }, [query]);

    return (
        <>
            <div
                className={'flex flex-row items-center justify-center mb-4 min-w-full bg-gray-800/50 backdrop-blur-md shadow-lg p-4 rounded-2xl'}>
                <input
                    type="text"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder="Search NASA images..."
                    className="rounded-lg px-4 py-2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 w-80"
                />
            </div>
            {showImages && showImages.items.length > 0 && (
                <div className="flex flex-wrap gap-6 justify-center">
                    <div className="flex flex-wrap gap-6 justify-center">
                        {showImages?.items.map((item) => (
                            <div key={item.nasa_id} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 flex">
                                <Cards
                                    title={item.title}
                                    description={item.description}
                                    images={item.images.map(img => img.href)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {showImages && showImages.items.length === 0 && (
                <div className="text-white text-center mt-10">
                    <h2 className="text-2xl font-bold">No images found for "{query}"</h2>
                </div>
            )}
            {!showImages && (
                <div className="flex justify-center items-center h-64">
                    <CircularProgress
                        style={{color: 'white'}}
                    />
                </div>
            )}
        </>
    );
};

export default ShowImages;
