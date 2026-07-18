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
import bestOf2025Photo02 from '@/public/images/photos/best-of-2025/DSC04279 (1).jpg';
import bestOf2025Photo05 from '@/public/images/photos/best-of-2025/DSC04304.jpg';
import bestOf2025Photo06 from '@/public/images/photos/best-of-2025/DSC04491.jpg';
import bestOf2025Photo07 from '@/public/images/photos/best-of-2025/DSC04521.jpg';
import bestOf2025Photo08 from '@/public/images/photos/best-of-2025/DSC04606 (2) (1).jpg';
import bestOf2025Photo09 from '@/public/images/photos/best-of-2025/DSC04628 (3) (1).jpg';
import bestOf2025Photo10 from '@/public/images/photos/best-of-2025/DSC04636 (1).jpg';
import bestOf2025Photo11 from '@/public/images/photos/best-of-2025/DSC04941 (2).jpg';
import bestOf2025Photo12 from '@/public/images/photos/best-of-2025/DSC05166~3 (2).jpg';
import bestOf2025Photo13 from '@/public/images/photos/best-of-2025/DSC05195 (1) (1).jpg';
import bestOf2025Photo14 from '@/public/images/photos/best-of-2025/DSC05219 (1) (1).jpg';
import bestOf2025Photo15 from '@/public/images/photos/best-of-2025/DSC05717 (3).jpg';
import bestOf2025Photo16 from '@/public/images/photos/best-of-2025/IMG-20251113-WA0005 (3).jpg';
import bestOf2025Photo18 from '@/public/images/photos/best-of-2025/IMG20250126120554 (2).jpg';
import bestOf2025Photo19 from '@/public/images/photos/best-of-2025/IMG20250131184248(1).jpg';
import bestOf2025Photo21 from '@/public/images/photos/best-of-2025/IMG20250210160846.jpg';
import bestOf2025Photo23 from '@/public/images/photos/best-of-2025/IMG20250302112829 (1)(1).jpg';
import bestOf2025Photo25 from '@/public/images/photos/best-of-2025/IMG20250302143905.jpg';
import bestOf2025Photo26 from '@/public/images/photos/best-of-2025/IMG20250313163748 (1).jpg';
import bestOf2025Photo27 from '@/public/images/photos/best-of-2025/IMG20250316123753.jpg';
import bestOf2025Photo28 from '@/public/images/photos/best-of-2025/IMG20250316125826.jpg';
import bestOf2025Photo29 from '@/public/images/photos/best-of-2025/IMG20250324141559.jpg';
import bestOf2025Photo30 from '@/public/images/photos/best-of-2025/IMG20250329220043.jpg';
import bestOf2025Photo34 from '@/public/images/photos/best-of-2025/IMG20250418133601(1).jpg';
import bestOf2025Photo37 from '@/public/images/photos/best-of-2025/IMG20250504152729.jpg';
import bestOf2025Photo38 from '@/public/images/photos/best-of-2025/IMG20250504153252 (1).jpg';
import bestOf2025Photo41 from '@/public/images/photos/best-of-2025/IMG20250507132021.jpg';
import bestOf2025Photo42 from '@/public/images/photos/best-of-2025/IMG20250807213048 (3) (1).jpg';
import bestOf2025Photo43 from '@/public/images/photos/best-of-2025/IMG20250914133747.jpg';
import bestOf2025Photo44 from '@/public/images/photos/best-of-2025/IMG20251025100649 (1).jpg';
import bestOf2025Photo45 from '@/public/images/photos/best-of-2025/IMG20251028172037 (1).jpg';
import bestOf2025Photo47 from '@/public/images/photos/best-of-2025/IMG20251103180541 (1).jpg';
import bestOf2025Photo48 from '@/public/images/photos/best-of-2025/IMG20251108155003 (1).jpg';
import bestOf2025Photo49 from '@/public/images/photos/best-of-2025/IMG20251109175441 (1).jpg';
import bestOf2025Photo50 from '@/public/images/photos/best-of-2025/IMG20251115211656 (1).jpg';
import bestOf2025Photo52 from '@/public/images/photos/best-of-2025/IMG20251208225150.jpg';
import bestOf2025Photo54 from '@/public/images/photos/best-of-2025/IMG20251210225934.jpg';
import bestOf2025Photo56 from '@/public/images/photos/best-of-2025/IMG20251228180014.jpg';

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
        slug: 'best-of-2025',
        name: 'Best of 2025',
        cover: bestOf2025Photo07,
        photos: [
            { src: bestOf2025Photo02, title: 'Best of 2025' },
            { src: bestOf2025Photo05, title: 'Best of 2025' },
            { src: bestOf2025Photo06, title: 'Best of 2025' },
            { src: bestOf2025Photo07, title: 'Best of 2025' },
            { src: bestOf2025Photo08, title: 'Best of 2025' },
            { src: bestOf2025Photo09, title: 'Best of 2025' },
            { src: bestOf2025Photo10, title: 'Best of 2025' },
            { src: bestOf2025Photo11, title: 'Best of 2025' },
            { src: bestOf2025Photo12, title: 'Best of 2025' },
            { src: bestOf2025Photo13, title: 'Best of 2025' },
            { src: bestOf2025Photo14, title: 'Best of 2025' },
            { src: bestOf2025Photo15, title: 'Best of 2025' },
            { src: bestOf2025Photo16, title: 'Best of 2025' },
            { src: bestOf2025Photo18, title: 'Best of 2025' },
            { src: bestOf2025Photo19, title: 'Best of 2025' },
            { src: bestOf2025Photo21, title: 'Best of 2025' },
            { src: bestOf2025Photo23, title: 'Best of 2025' },
            { src: bestOf2025Photo25, title: 'Best of 2025' },
            { src: bestOf2025Photo26, title: 'Best of 2025' },
            { src: bestOf2025Photo27, title: 'Best of 2025' },
            { src: bestOf2025Photo28, title: 'Best of 2025' },
            { src: bestOf2025Photo29, title: 'Best of 2025' },
            { src: bestOf2025Photo30, title: 'Best of 2025' },
            { src: bestOf2025Photo34, title: 'Best of 2025' },
            { src: bestOf2025Photo37, title: 'Best of 2025' },
            { src: bestOf2025Photo38, title: 'Best of 2025' },
            { src: bestOf2025Photo41, title: 'Best of 2025' },
            { src: bestOf2025Photo42, title: 'Best of 2025' },
            { src: bestOf2025Photo43, title: 'Best of 2025' },
            { src: bestOf2025Photo44, title: 'Best of 2025' },
            { src: bestOf2025Photo45, title: 'Best of 2025' },
            { src: bestOf2025Photo47, title: 'Best of 2025' },
            { src: bestOf2025Photo48, title: 'Best of 2025' },
            { src: bestOf2025Photo49, title: 'Best of 2025' },
            { src: bestOf2025Photo50, title: 'Best of 2025' },
            { src: bestOf2025Photo52, title: 'Best of 2025' },
            { src: bestOf2025Photo54, title: 'Best of 2025' },
            { src: bestOf2025Photo56, title: 'Best of 2025' }
        ]
    },
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
