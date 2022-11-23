import Link from 'next/link';
import Meta from '../Meta/Meta';

type LayoutProps = {
    children: React.ReactNode;
    home?: boolean;
    wide?: boolean;
    pageTitle?: string;
};

export default function Layout({ children, home, wide, pageTitle }: LayoutProps): JSX.Element {
    return (
        <main className={`${wide ? 'max-w-6xl' : 'max-w-4xl'} px-0 py-0 mx-auto grow`}>
            <Meta pageTitle={pageTitle} />
            <section className="mx-4 antialiased">{children}</section>
            {!home && (
                <div className="ml-7 mt-12 text-lg">
                    <Link href="/" rel="noopener noreferrer">
                        <span className="hover:text-emerald-600 font-medium">
                            <span aria-hidden="true" className="mr-2">
                                ←
                            </span>
                            Back to home
                        </span>
                    </Link>
                </div>
            )}
        </main>
    );
}
