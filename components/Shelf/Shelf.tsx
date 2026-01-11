import { Shelf as ShelfType } from '@/lib/literal';
import BookCard from '../BookCard/BookCard';
import { getCoverPath, coverExists } from '@/lib/bookCovers';

type ShelfProps = {
    shelf: ShelfType;
};

export default function Shelf({ shelf }: ShelfProps) {
    if (!shelf.books || shelf.books.length === 0) {
        return null;
    }

    return (
        <section className="space-y-4" data-testid="shelf">
            <div className="space-y-2">
                <h2 className="text-2xl font-bold text-gray-900">{shelf.title}</h2>
                {shelf.description && (
                    <p className="text-gray-600 text-sm max-w-2xl">{shelf.description}</p>
                )}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {shelf.books.map((book) => {
                    // Only use local path if the file actually exists
                    // Otherwise fall back to remote URL
                    const coverPath =
                        book.cover && coverExists(book.id, book.isbn13, book.isbn10)
                            ? getCoverPath(book.id, book.isbn13, book.isbn10)
                            : undefined;
                    return <BookCard key={book.id} book={book} coverPath={coverPath} />;
                })}
            </div>
        </section>
    );
}
