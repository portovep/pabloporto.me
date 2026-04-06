import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function GetInTouch() {
    return (
        <section className="w-full mt-16">
            <h2 className="heading-section mb-6">Let&apos;s get in touch!</h2>
            <p className="mb-6 leading-relaxed">
                Feel free to reach out — whether to work on something together or just to say hi.
                You can find me on{' '}
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
                , or{' '}
                <a
                    href="https://www.instagram.com/porto.vga/"
                    target="_blank"
                    className="text-link"
                    rel="noopener noreferrer">
                    Instagram
                </a>
                .
            </p>
            <div className="flex justify-start gap-4">
                <Button asChild className="bg-emerald-500 hover:bg-emerald-600 text-white">
                    <a href="mailto:pablo@pabloporto.me">Get in Touch</a>
                </Button>
                <Button
                    variant="outline"
                    asChild
                    className="border-emerald-500 text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-950">
                    <Link href="/blog">Read My Blog</Link>
                </Button>
            </div>
        </section>
    );
}
