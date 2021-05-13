import Layout, { siteTitle } from '../../components/Layout/Layout';
import PhotoCard from '../../components/PhotoCard/PhotoCard';
import SectionDescription from '../../components/SectionDescription/SectionDescription';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

export default function Traveling(): JSX.Element {
    return (
        <Layout wide pageTitle={`${siteTitle} - Traveling`}>
            <section className="mt-10 text-xl leading-6">
                <div className="w-full p-6 pt-4">
                    <SectionTitle text="Lastest photos" />
                    <SectionDescription>
                        <p>Some of my best photos, taken while exploring the world.</p>
                    </SectionDescription>

                    <div className="mt-12   grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
                        <PhotoCard
                            title="Taj Mahal"
                            location="Jaipur, India"
                            imageURL="/images/photos/IMG_20200217_080528.jpeg"
                        />
                        <PhotoCard
                            title="TBD"
                            location="TBD"
                            imageURL="/images/photos/IMG_20200217_071819.jpeg"
                        />
                        <PhotoCard
                            title="TBD"
                            location="TBD"
                            imageURL="/images/photos/IMG_20180701_063735.jpeg"
                        />
                        <PhotoCard
                            title="TBD"
                            location="TBD"
                            imageURL="/images/photos/IMG_20150525_104418.jpeg"
                        />
                        <PhotoCard
                            title="TBD"
                            location="TBD"
                            imageURL="/images/photos/IMG_20200225_125124.jpeg"
                        />
                        <PhotoCard
                            title="TBD"
                            location="TBD"
                            imageURL="/images/photos/IMG_20200303_152059.jpeg"
                        />
                        <PhotoCard
                            title="TBD"
                            location="TBD"
                            imageURL="/images/photos/IMG_20180224_145152.jpeg"
                        />
                        <PhotoCard
                            title="TBD"
                            location="TBD"
                            imageURL="/images/photos/IMG_20180814_213428.jpeg"
                        />
                        <PhotoCard
                            title="TBD"
                            location="TBD"
                            imageURL="/images/photos/IMG_20180630_212048.jpeg"
                        />
                    </div>
                </div>
            </section>
        </Layout>
    );
}
