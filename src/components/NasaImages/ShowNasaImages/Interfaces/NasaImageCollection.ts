export interface NasaImageCollection {
    items: NasaImageItem[];
}

export interface NasaImageItem {
    href: string;
    title: string;
    description: string;
    date_created: string;
    media_type: string;
    nasa_id: string;
    images: NasaImage[];
    preview: NasaPreview;
}

export interface NasaImage {
    href: string;
    rel: string;
    width: number;
    height: number;
    size: number;
}

export interface NasaPreview {
    href: string;
    rel: string;
    render: string;
    width: number;
    height: number;
    size: number;
}
