import Image from 'next/image';
import Link from 'next/link';
import { Book } from '@/lib/literal';

type BookCardProps = {
    book: Book;
    coverPath?: string;
};

export default function BookCard({ book, coverPath }: BookCardProps) {
    const authorsText = book.authors.map((author) => author.name).join(', ');
    const bookUrl = `https://literal.club/book/${book.slug}`;
    const coverSrc = coverPath || book.cover || '/images/books/placeholder-book.svg';

    return (
        <Link
            href={bookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-2"
            data-testid="book-card">
            <div
                className="relative w-full aspect-[2/3] overflow-hidden rounded-[2px] transition-transform duration-300 group-hover:-translate-y-1"
                style={{
                    boxShadow:
                        '-4px 6px 12px rgba(0,0,0,0.25), -2px 0 0 rgba(0,0,0,0.15), inset -3px 0 8px rgba(0,0,0,0.12)'
                }}>
                <Image
                    src={coverSrc}
                    alt={book.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 128px, (max-width: 1024px) 25vw, 16vw"
                    placeholder="blur"
                    blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                />
            </div>
            <div className="space-y-0.5">
                <h3 className="font-medium text-sm leading-tight text-foreground line-clamp-2">
                    {book.title}
                </h3>
                {authorsText && (
                    <p className="text-xs text-muted-foreground line-clamp-1">{authorsText}</p>
                )}
            </div>
        </Link>
    );
}
