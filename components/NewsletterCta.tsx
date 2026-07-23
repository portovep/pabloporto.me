import { Button, Input } from '@/components/ui';
import { cn } from '@/lib/utils';

// Submitting the form as a GET lands on Substack with ?email=… pre-filled, so the
// reader only has to confirm there. Keeps this a server component — no JS, no iframe.
const SUBSTACK_SUBSCRIBE_URL = 'https://pabsgarage.substack.com/subscribe';

interface NewsletterCtaProps {
    className?: string;
}

export default function NewsletterCta({ className }: NewsletterCtaProps) {
    return (
        <section data-testid="newsletter-cta" className={cn(className)}>
            <p className="text-foreground font-medium">Get new posts by email.</p>
            <form
                method="get"
                action={SUBSTACK_SUBSCRIBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:flex-row sm:items-center flex flex-col gap-2 mt-3">
                <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                </label>
                <Input
                    id="newsletter-email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    data-testid="newsletter-email"
                    className="sm:max-w-xs"
                />
                <Button type="submit" data-testid="newsletter-submit" variant="accent">
                    Subscribe
                </Button>
            </form>
            <p className="mt-2 text-sm">No spam. Unsubscribe anytime.</p>
        </section>
    );
}
