import Link from 'next/link';

const linkClass = 'text-emerald-500 hover:text-emerald-600 font-medium';

export default function GetInTouch() {
    return (
        <section className="w-full mt-16">
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl mb-6">
                Let&apos;s get in touch!
            </h2>
            <p className="mb-6 leading-relaxed">
                Feel free to reach out — whether to work on something together or just to say hi.
                You can find me on{' '}
                <a
                    href="https://linkedin.com/in/pabloportoveloso"
                    target="_blank"
                    className={linkClass}
                    rel="noopener noreferrer">
                    LinkedIn
                </a>
                ,{' '}
                <a
                    href="https://github.com/portovep"
                    target="_blank"
                    className={linkClass}
                    rel="noopener noreferrer">
                    GitHub
                </a>
                , or{' '}
                <a
                    href="https://www.instagram.com/porto.vga/"
                    target="_blank"
                    className={linkClass}
                    rel="noopener noreferrer">
                    Instagram
                </a>
                .
            </p>
            <div className="flex justify-start gap-4">
                <a
                    href="mailto:pablo@pabloporto.me"
                    className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600">
                    Get in Touch
                </a>
                <Link
                    href="/blog"
                    className="px-6 py-3 border border-emerald-500 text-emerald-500 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950">
                    Read My Blog
                </Link>
            </div>
        </section>
    );
}
