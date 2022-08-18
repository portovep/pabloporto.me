import Layout from '../../components/Layout/Layout';
import PhotoCard from '../../components/PhotoCard/PhotoCard';
import { SectionDescription, SectionTitle } from '../../components/ui';
import WorldMap from '../../components/WorldMap/WorldMap';
import tajMahalPhoto from '../../public/images/photos/IMG_20200217_080528.jpeg';
import tajMahalFacadePhoto from '../../public/images/photos/IMG_20200217_071819.jpeg';
import monkeyJumpingPhoto from '../../public/images/photos/IMG_20180701_063735.jpeg';
import beachHousePhoto from '../../public/images/photos/IMG_20150525_104418.jpeg';
import maldivesBeachPhoto from '../../public/images/photos/IMG_20200225_125124.jpeg';
import lonelyElephantPhoto from '../../public/images/photos/IMG_20200303_152059.jpeg';
import edinburghLandscapePhoto from '../../public/images/photos/IMG_20180224_145152.jpeg';
import galicianSunsetPhoto from '../../public/images/photos/IMG_20180814_213428.jpeg';
import jaipurKidPhoto from '../../public/images/photos/IMG_20180630_212048.jpeg';

export default function Traveling(): JSX.Element {
    return (
        <Layout wide pageTitle="Traveling">
            <section className="mt-10 text-xl leading-6">
                <div className="w-full p-6 pt-4">
                    <SectionTitle text="Traveling" />

                    <div className="mt-14 mb-8">
                        <WorldMap />
                    </div>

                    <SectionDescription>
                        <p>Some of my best photos, taken while exploring the world.</p>
                    </SectionDescription>

                    <div className="md:grid-cols-2 xl:grid-cols-3 grid grid-cols-1 gap-12 mt-12">
                        <PhotoCard
                            title="Taj Mahal"
                            location="Jaipur, India"
                            imageURL={tajMahalPhoto}
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
                        <PhotoCard
                            title="Sunset"
                            location="Galicia"
                            imageURL={galicianSunsetPhoto}
                        />
                        <PhotoCard
                            title="Chid helping his father"
                            location="Jaipur, India"
                            imageURL={jaipurKidPhoto}
                        />
                    </div>
                </div>
            </section>
        </Layout>
    );
}
