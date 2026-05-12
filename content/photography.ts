import { StaticImageData } from 'next/image';

import beachHousePhoto from '@/public/images/photos/IMG_20150525_104418.jpeg';
import edinburghLandscapePhoto from '@/public/images/photos/IMG_20180224_145152.jpeg';
import jaipurKidPhoto from '@/public/images/photos/IMG_20180630_212048.jpeg';
import monkeyJumpingPhoto from '@/public/images/photos/IMG_20180701_063735.jpeg';
import galicianSunsetPhoto from '@/public/images/photos/IMG_20180814_213428.jpeg';
import tajMahalFacadePhoto from '@/public/images/photos/IMG_20200217_071819.jpeg';
import tajMahalPhoto from '@/public/images/photos/IMG_20200217_080528.jpeg';
import maldivesBeachPhoto from '@/public/images/photos/IMG_20200225_125124.jpeg';
import lonelyElephantPhoto from '@/public/images/photos/IMG_20200303_152059.jpeg';
import birdCostaRicaPhoto from '@/public/images/photos/IMG-20220518-WA0027.jpeg';
import laFortunaWaterfallPhoto from '@/public/images/photos/IMG-20220508-WA0053.jpeg';
import islaDeArosaPhoto from '@/public/images/photos/IMG_20170821_162359.jpeg';
import corfuMonastery from '@/public/images/photos/IMG20230925093628.jpeg';
import albanianChurchPhoto from '@/public/images/photos/IMG20231004114145.jpg';
import albanianAlpsLandscapePhoto from '@/public/images/photos/IMG-20231005-WA0139~2.jpg';

export interface Photo {
    src: StaticImageData;
    title: string;
}

export interface Collection {
    slug: string;
    name: string;
    cover: StaticImageData;
    photos: Photo[];
}

export const collections: Collection[] = [
    {
        slug: 'india',
        name: 'India',
        cover: tajMahalPhoto,
        photos: [
            { src: tajMahalPhoto, title: 'Taj Mahal' },
            { src: tajMahalFacadePhoto, title: 'Taj Mahal Facade' },
            { src: monkeyJumpingPhoto, title: 'Monkey Jump' },
            { src: jaipurKidPhoto, title: 'Child helping his father' }
        ]
    },
    {
        slug: 'maldives',
        name: 'Maldives',
        cover: maldivesBeachPhoto,
        photos: [{ src: maldivesBeachPhoto, title: 'Maldives water' }]
    },
    {
        slug: 'sri-lanka',
        name: 'Sri Lanka',
        cover: lonelyElephantPhoto,
        photos: [{ src: lonelyElephantPhoto, title: 'Lonely Elephant' }]
    },
    {
        slug: 'scotland',
        name: 'Scotland',
        cover: edinburghLandscapePhoto,
        photos: [{ src: edinburghLandscapePhoto, title: 'Edinburgh landscape' }]
    },
    {
        slug: 'galicia',
        name: 'Galicia',
        cover: galicianSunsetPhoto,
        photos: [
            { src: galicianSunsetPhoto, title: 'Sunset' },
            { src: islaDeArosaPhoto, title: 'Isla de Arosa' }
        ]
    },
    {
        slug: 'costa-rica',
        name: 'Costa Rica',
        cover: birdCostaRicaPhoto,
        photos: [
            { src: birdCostaRicaPhoto, title: 'Tropical Bird' },
            { src: laFortunaWaterfallPhoto, title: 'La Fortuna Waterfall' }
        ]
    },
    {
        slug: 'greece',
        name: 'Greece',
        cover: corfuMonastery,
        photos: [{ src: corfuMonastery, title: 'Corfu Monastery' }]
    },
    {
        slug: 'albania',
        name: 'Albania',
        cover: albanianAlpsLandscapePhoto,
        photos: [
            { src: albanianAlpsLandscapePhoto, title: 'Albanian Alps' },
            { src: albanianChurchPhoto, title: 'Albanian Church' }
        ]
    },
    {
        slug: 'portugal',
        name: 'Portugal',
        cover: beachHousePhoto,
        photos: [{ src: beachHousePhoto, title: 'Beach House' }]
    }
];
