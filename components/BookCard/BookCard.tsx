import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '../ui/card';
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
        <Link href={bookUrl} target="_blank" rel="noopener noreferrer">
            <Card
                className="group h-full transition-all hover:shadow-lg border-gray-300 bg-white"
                data-testid="book-card">
                <CardContent className="p-0">
                    <div className="relative aspect-[2/3] w-full overflow-hidden bg-gray-100 flex items-center justify-center">
                        {coverSrc && (
                            <Image
                                src={coverSrc}
                                alt={book.title}
                                fill
                                className="object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                            />
                        )}
                    </div>
                    <div className="p-4 space-y-1">
                        <h3 className="font-semibold text-sm leading-tight text-gray-900 line-clamp-2">
                            {book.title}
                        </h3>
                        {book.subtitle && (
                            <p className="text-xs text-gray-600 line-clamp-1">{book.subtitle}</p>
                        )}
                        {authorsText && (
                            <p className="text-xs text-gray-500 line-clamp-1">{authorsText}</p>
                        )}
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}
