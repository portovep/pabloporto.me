'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogTitle
} from '@/components/ui/dialog';
import { Photo } from '@/content/photography';

interface Props {
    photos: Photo[];
    collectionName: string;
}

export default function PhotographyGallery({ photos, collectionName }: Props) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const touchStartX = useRef<number | null>(null);

    const prev = useCallback(
        () =>
            setSelectedIndex((i) => (i !== null ? (i - 1 + photos.length) % photos.length : null)),
        [photos.length]
    );
    const next = useCallback(
        () => setSelectedIndex((i) => (i !== null ? (i + 1) % photos.length : null)),
        [photos.length]
    );

    const onTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };
    const onTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null || photos.length <= 1) return;
        const delta = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(delta) > 50) {
            if (delta > 0) prev();
            else next();
        }
        touchStartX.current = null;
    };

    useEffect(() => {
        if (selectedIndex === null || photos.length <= 1) return;
        const neighbours = [
            (selectedIndex + 1) % photos.length,
            (selectedIndex - 1 + photos.length) % photos.length
        ];
        neighbours.forEach((i) => {
            const img = new window.Image();
            img.src = photos[i].src.src;
        });
    }, [selectedIndex, photos]);

    const current = selectedIndex !== null ? photos[selectedIndex] : null;

    return (
        <>
            <div
                className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 mt-8 w-full"
                data-testid="photography-gallery">
                {photos.map((photo, index) => (
                    <div
                        key={photo.src.src}
                        className="group cursor-pointer active:scale-[0.98] transition-transform"
                        onClick={() => setSelectedIndex(index)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') setSelectedIndex(index);
                        }}
                        data-testid="gallery-photo"
                        aria-label={`Open ${photo.title}`}>
                        <div className="overflow-hidden shadow-xl shadow-black/10 dark:shadow-none">
                            <Image
                                src={photo.src}
                                alt={`${photo.title} — ${collectionName}`}
                                placeholder="blur"
                                quality={80}
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                                sizes="(max-width: 768px) 90vw, 45vw"
                                priority={index < 2}
                                className="transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    </div>
                ))}
            </div>

            <Dialog
                open={selectedIndex !== null}
                onOpenChange={(open) => {
                    if (!open) setSelectedIndex(null);
                }}>
                <DialogContent
                    showCloseButton={false}
                    className="max-w-none w-screen h-screen p-0 bg-black/90 border-0 rounded-none flex items-center justify-center translate-x-0 translate-y-0 top-0 left-0"
                    onTouchStart={onTouchStart}
                    onTouchEnd={onTouchEnd}
                    onKeyDown={(e) => {
                        if (e.key === 'ArrowLeft') prev();
                        if (e.key === 'ArrowRight') next();
                    }}>
                    <DialogTitle className="sr-only">{current?.title ?? ''}</DialogTitle>
                    <DialogDescription className="sr-only">
                        {collectionName} photo viewer
                    </DialogDescription>
                    {current && (
                        <div className="relative w-full h-full max-w-5xl mx-auto">
                            <Image
                                src={current.src}
                                alt={current.title}
                                fill
                                className="object-contain"
                                placeholder="blur"
                                quality={90}
                                sizes="100vw"
                            />
                        </div>
                    )}
                    <DialogClose
                        className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                        aria-label="Close">
                        <X size={32} />
                    </DialogClose>
                    {photos.length > 1 && (
                        <>
                            <button
                                onClick={prev}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
                                aria-label="Previous photo">
                                <ChevronLeft size={48} />
                            </button>
                            <button
                                onClick={next}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
                                aria-label="Next photo">
                                <ChevronRight size={48} />
                            </button>
                        </>
                    )}
                    {current && (
                        <p className="absolute bottom-6 left-0 right-0 text-center text-white/60 text-sm">
                            {current.title}
                            {photos.length > 1 &&
                                selectedIndex !== null &&
                                ` · ${selectedIndex + 1} / ${photos.length}`}
                        </p>
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
}
