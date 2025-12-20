import fs from 'fs';
import path from 'path';

const booksDirectory = path.join(process.cwd(), 'public/images/books');

/**
 * Ensure the books directory exists
 */
function ensureBooksDirectory(): void {
    if (!fs.existsSync(booksDirectory)) {
        fs.mkdirSync(booksDirectory, { recursive: true });
    }
}

/**
 * Get the filename for a book cover based on book ID or ISBN
 */
function getCoverFilename(bookId: string, isbn13?: string, isbn10?: string): string {
    // Prefer ISBN13, then ISBN10, then book ID
    const identifier = isbn13 || isbn10 || bookId;
    // Remove any non-alphanumeric characters except hyphens
    const sanitized = identifier.replace(/[^a-zA-Z0-9-]/g, '');
    return `${sanitized}.jpg`;
}

/**
 * Check if a book cover already exists locally
 */
export function coverExists(bookId: string, isbn13?: string, isbn10?: string): boolean {
    ensureBooksDirectory();
    const filename = getCoverFilename(bookId, isbn13, isbn10);
    const filePath = path.join(booksDirectory, filename);
    return fs.existsSync(filePath);
}

/**
 * Get the local path for a book cover
 */
export function getCoverPath(bookId: string, isbn13?: string, isbn10?: string): string {
    const filename = getCoverFilename(bookId, isbn13, isbn10);
    return `/images/books/${filename}`;
}

/**
 * Download and save a book cover image
 */
export async function downloadBookCover(
    coverUrl: string,
    bookId: string,
    isbn13?: string,
    isbn10?: string
): Promise<string> {
    ensureBooksDirectory();

    // Skip if cover already exists
    if (coverExists(bookId, isbn13, isbn10)) {
        return getCoverPath(bookId, isbn13, isbn10);
    }

    if (!coverUrl) {
        throw new Error(`No cover URL provided for book ${bookId}`);
    }

    try {
        const response = await fetch(coverUrl);
        if (!response.ok) {
            throw new Error(`Failed to download cover: ${response.statusText}`);
        }

        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const filename = getCoverFilename(bookId, isbn13, isbn10);
        const filePath = path.join(booksDirectory, filename);

        fs.writeFileSync(filePath, buffer);

        return getCoverPath(bookId, isbn13, isbn10);
    } catch (error) {
        console.error(`Error downloading cover for book ${bookId}:`, error);
        throw error;
    }
}

/**
 * Download covers for multiple books
 */
export async function downloadBookCovers(
    books: Array<{ id: string; cover?: string; isbn13?: string; isbn10?: string }>
): Promise<void> {
    ensureBooksDirectory();

    const downloadPromises = books
        .filter((book) => book.cover) // Only download if cover URL exists
        .map((book) =>
            downloadBookCover(book.cover!, book.id, book.isbn13, book.isbn10).catch((error) => {
                console.error(`Failed to download cover for book ${book.id}:`, error);
                // Don't throw - continue with other books
            })
        );

    await Promise.all(downloadPromises);
}
