import PhotoCard from '@/components/PhotoCard';
import { PageHeader } from '@/components/ui';
import WorldMapClient from './WorldMapClient';
import { createMetadata } from '@/lib/metadata';

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

export const metadata = createMetadata(
    'Traveling',
    'Favourite travel destinations and photography from around the world.',
    '/traveling'
);

export default function TravelingPage() {
    return (
        <section data-testid="traveling-intro">
            <PageHeader title="Traveling" />

            <div className="mt-14 p-1 mb-8">
                <WorldMapClient />
            </div>

            <h2 className="heading-section mb-4">Shooting</h2>
            <p className="text-lg text-muted-foreground mb-2">
                Here are some of the photos I&apos;ve taken. Shot with a Sony A6400 or Oneplus 13R.
                More on{' '}
                <a
                    href="https://www.instagram.com/porto.vga"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link">
                    Instagram
                </a>
                .
            </p>
            <hr className="my-8 h-0.5 border-t-0 bg-border w-10" />
            <div className="md:grid-cols-2 xl:grid-cols-3 gap-x-14 gap-y-8 sm:gap-y-12 md:gap-y-28 grid grid-cols-1 mt-12">
                <PhotoCard
                    title="Taj Mahal"
                    location="Jaipur, India"
                    imageURL={tajMahalPhoto}
                    priority
                />
                <PhotoCard
                    title="Taj Mahal Facade"
                    location="Jaipur, India"
                    imageURL={tajMahalFacadePhoto}
                />
                <PhotoCard
                    title="Monkey jump"
                    location="Jaipur, India"
                    imageURL={monkeyJumpingPhoto}
                />
                <PhotoCard
                    title="Beach house"
                    location="Faro, Portugal"
                    imageURL={beachHousePhoto}
                />
                <PhotoCard
                    title="Maldives water"
                    location="Maldives"
                    imageURL={maldivesBeachPhoto}
                />
                <PhotoCard
                    title="Lonely Elephant"
                    location="Sri Lanka"
                    imageURL={lonelyElephantPhoto}
                />
                <PhotoCard
                    title="Edinburgh landscape"
                    location="Edinburgh, Scotland"
                    imageURL={edinburghLandscapePhoto}
                />
                <PhotoCard title="Sunset" location="Galicia" imageURL={galicianSunsetPhoto} />
                <PhotoCard
                    title="Chid helping his father"
                    location="Jaipur, India"
                    imageURL={jaipurKidPhoto}
                />
                <PhotoCard
                    title="Tropical Bird"
                    location="Costa Rica"
                    imageURL={birdCostaRicaPhoto}
                />
                <PhotoCard
                    title="Waterfall"
                    location="La Fortuna, Costa Rica"
                    imageURL={laFortunaWaterfallPhoto}
                />
                <PhotoCard title="Isla de Arosa" location="Galicia" imageURL={islaDeArosaPhoto} />
                <PhotoCard
                    title="Greek Monastery"
                    location="Corfu, Greece"
                    imageURL={corfuMonastery}
                />
                <PhotoCard
                    title="Albanian church"
                    location="Theth, Albania"
                    imageURL={albanianChurchPhoto}
                />
                <PhotoCard
                    title="Albanian alps landscape"
                    location="Theth, Albania"
                    imageURL={albanianAlpsLandscapePhoto}
                />
            </div>
        </section>
    );
}
