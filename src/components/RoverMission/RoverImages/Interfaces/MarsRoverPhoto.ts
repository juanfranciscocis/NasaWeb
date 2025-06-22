
interface Camera {
    id: number;
    name: string;
    full_name: string;
}

interface Rover {
    id: number;
    name: string;
    status: string;
}

export interface MarsRoverPhoto {
    id: number;
    img_src: string;
    earth_date: string;
    camera: Camera;
    rover: Rover;
}

