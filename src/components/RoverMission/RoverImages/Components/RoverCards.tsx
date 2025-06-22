import React, {useEffect, useState, useCallback} from 'react';
import {fetchMarsRoverImages} from "../services/MarsRover.service.ts";
import type {MarsRoverPhoto} from "../Interfaces/MarsRoverPhoto.ts";
import {CircularProgress, MenuItem, Select, Slider} from "@mui/material";
import { debounce } from '@mui/material/utils';

//Add rover cards props
interface RoverCardsProps {
}


const RoverCards: React.FC<RoverCardsProps> = (props) => {
    const [marsRoverPhotos, setMarsRoverPhotos] = useState<MarsRoverPhoto[]>([]);
    const [selectedCamera, setSelectedCamera] = useState<string>("FHAZ");
    const [selectedSol, setSelectedSol] = useState<number>(1000);
    const [displaySol, setDisplaySol] = useState<number>(1000);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // Debounce the sol value change to prevent too many API calls
    const debouncedSetSol = useCallback(
        debounce((value: number) => {
            setSelectedSol(value);
        }, 1000),
        []
    );

    useEffect(() => {
        console.log('Fetching Mars Rover images with camera:', selectedCamera, 'and sol:', selectedSol);
        setIsLoading(true);
        fetchMarsRoverImages({ 
            camera: selectedCamera,
            sol: selectedSol
        })
            .then((photos) => {
                setMarsRoverPhotos(photos);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching Mars Rover images:', error);
                setIsLoading(false);
            });
    }, [selectedCamera, selectedSol]);

    useEffect(() => {
        if (marsRoverPhotos.length > 0) {
            console.log('Fetched Mars Rover Photos:', marsRoverPhotos);
        }
    }, [marsRoverPhotos]); // Added dependency


    return (
        <>
            <div
                className={'flex flex-col lg:flex-row items-center justify-center mb-4 min-w-full bg-gray-800/50 backdrop-blur-md shadow-lg p-3 sm:p-4 lg:p-6 rounded-2xl'}>
                <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-10 w-full lg:w-auto">
                    {/* Camera Selection */}
                    <div className="flex flex-col sm:flex-row sm:items-center w-full lg:w-auto">
            <span className="text-white mb-2 sm:mb-0 sm:mr-3 font-medium text-sm sm:text-base whitespace-nowrap">
                Select Camera:
            </span>
                        <Select
                            id="camera-select"
                            variant="outlined"
                            value={selectedCamera}
                            onChange={(e) => setSelectedCamera(e.target.value as string)}
                            sx={{
                                color: 'white',
                                minWidth: { xs: '100%', sm: 160, md: 180 },
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'white',
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'white',
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'white',
                                },
                                '& .MuiSelect-icon': {
                                    color: 'white',
                                },
                            }}
                            inputProps={{style: {color: 'white'}}}
                            displayEmpty
                        >
                            <MenuItem value="ALL">ALL</MenuItem>
                            <MenuItem value="FHAZ">FHAZ</MenuItem>
                            <MenuItem value="RHAZ">RHAZ</MenuItem>
                            <MenuItem value="MAST">MAST</MenuItem>
                            <MenuItem value="CHEMCAM">CHEMCAM</MenuItem>
                            <MenuItem value="MAHLI">MAHLI</MenuItem>
                            <MenuItem value="MARDI">MARDI</MenuItem>
                            <MenuItem value="NAVCAM">NAVCAM</MenuItem>
                            <MenuItem value="PANCAM">PANCAM</MenuItem>
                            <MenuItem value="MINITES">MINITES</MenuItem>
                        </Select>
                    </div>

                    {/* Sol Slider */}
                    <div className="flex flex-col w-full lg:w-auto">
                        <div className="flex items-center mb-2">
                <span className="text-white font-medium text-sm sm:text-base text-center sm:text-left w-full">
                    Martian sol of the Rover's mission
                </span>
                        </div>
                        <div className="w-full sm:w-72 md:w-80 lg:w-80">
                            <Slider
                                value={displaySol}
                                onChange={(_, value) => {
                                    const newValue = value as number;
                                    setDisplaySol(newValue);
                                    debouncedSetSol(newValue);
                                }}
                                min={0}
                                max={5000}
                                step={100}
                                valueLabelDisplay="auto"
                                sx={{
                                    color: 'white',
                                    '& .MuiSlider-thumb': {
                                        backgroundColor: 'white',
                                    },
                                    '& .MuiSlider-rail': {
                                        color: 'white',
                                    },
                                    '& .MuiSlider-track': {
                                        color: 'white',
                                    },
                                    '& .MuiSlider-valueLabel': {
                                        color: 'black',
                                        backgroundColor: 'white',
                                    },
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full p-4">
                {isLoading ? (
                    <div className="flex justify-center items-center h-64">
                        <CircularProgress
                            style={{color: 'white'}}
                        />
                    </div>
                ) : marsRoverPhotos.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {marsRoverPhotos.map((photo) => (
                            <div
                                key={photo.id}
                                className="bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-lg backdrop-blur-sm"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    borderRadius: '10px',
                                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                                    backdropFilter: 'blur(1px)',
                                    WebkitBackdropFilter: 'blur(1px)',
                                }}
                            >
                                <img
                                    src={photo.img_src}
                                    alt={`${photo.rover.name} - ${photo.camera.full_name}`}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold mb-2">{photo.rover.name} Rover</h2>
                                    <p className="text-sm mb-1">
                                        <span
                                            className="font-medium">Camera:</span> {photo.camera.full_name} ({photo.camera.name})
                                    </p>
                                    <p className="text-sm mb-1">
                                        <span className="font-medium">Date:</span> {photo.earth_date}
                                    </p>
                                    <p className="text-sm">
                                        <span className="font-medium">Status:</span> {photo.rover.status}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex justify-center items-center h-64">
                        <p className="text-xl text-white">No images found for the selected camera.</p>
                    </div>
                )}
            </div>
        </>
    );
}

export default RoverCards;
