export interface PhotoOfTheDay {
    title: string;
    date: string; // Format: YYYY-MM-DD
    explanation: string;
    url: string; // Link to standard image
    media_type: 'image' | 'video'; // Media can be an image or video
    hdurl?: string; // Optional high-definition image
}
