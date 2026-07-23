import NewsletterCta from '@/components/NewsletterCta';

interface GetInTouchProps {
    newsletter?: boolean;
}

export default function GetInTouch({ newsletter = false }: GetInTouchProps) {
    return (
        <section className="w-full mt-16">
            <h2 className="heading-section mb-6">Elsewhere</h2>
            <p className="mb-6 text-lg leading-relaxed">
                You can also find me on{' '}
                <a
                    href="https://linkedin.com/in/pabloportoveloso"
                    target="_blank"
                    className="text-link"
                    rel="noopener noreferrer">
                    LinkedIn
                </a>
                ,{' '}
                <a
                    href="https://github.com/portovep"
                    target="_blank"
                    className="text-link"
                    rel="noopener noreferrer">
                    GitHub
                </a>
                ,{' '}
                <a
                    href="https://www.instagram.com/porto.vga/"
                    target="_blank"
                    className="text-link"
                    rel="noopener noreferrer">
                    Instagram
                </a>
                , or{' '}
                <a href="/feed.xml" className="text-link">
                    RSS
                </a>
                . Feel free to reach out. Whether to work on something together or just to say hi.
            </p>
            {newsletter && <NewsletterCta className="mt-8" />}
        </section>
    );
}
