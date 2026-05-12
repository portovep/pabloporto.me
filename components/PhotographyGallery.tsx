'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Photo } from '@/content/photography';

interface Props {
    photos: Photo[];
    collectionName: string;
}

export default function PhotographyGallery({ photos, collectionName }: Props) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [closing, setClosing] = useState(false);
    const touchStartX = useRef<number | null>(null);

    const close = useCallback(() => {
        setClosing((prev) => {
            if (prev) return prev;
            setTimeout(() => {
                setSelectedIndex(null);
                setClosing(false);
            }, 200);
            return true;
        });
    }, []);
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

    useEffect(() => {
        if (selectedIndex === null) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') close();
            if (e.key === 'ArrowLeft') prev();
            if (e.key === 'ArrowRight') next();
        };
        window.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [selectedIndex, close, prev, next]);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 mt-8 w-full">
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
                        aria-label={`Open ${photo.title}`}>
                        <div className="overflow-hidden shadow-xl shadow-black/10 dark:shadow-none">
                            <Image
                                src={photo.src}
                                alt={`${photo.title} — ${collectionName}`}
                                placeholder="blur"
                                quality={80}
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 33vw"
                                priority={index < 3}
                                className="transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    </div>
                ))}
            </div>

            {selectedIndex !== null && (
                <div
                    className={`fixed inset-0 z-50 bg-black/90 flex items-center justify-center duration-200 ${
                        closing ? 'animate-out fade-out-0' : 'animate-in fade-in-0'
                    }`}
                    onClick={close}
                    onTouchStart={onTouchStart}
                    onTouchEnd={onTouchEnd}>
                    <div
                        className="relative w-full h-full max-w-5xl mx-auto"
                        onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={photos[selectedIndex].src}
                            alt={photos[selectedIndex].title}
                            fill
                            className="object-contain"
                            quality={100}
                            sizes="100vw"
                        />
                    </div>
                    <button
                        onClick={close}
                        className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                        aria-label="Close">
                        <X size={32} />
                    </button>
                    {photos.length > 1 && (
                        <>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    prev();
                                }}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
                                aria-label="Previous photo">
                                <ChevronLeft size={48} />
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    next();
                                }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
                                aria-label="Next photo">
                                <ChevronRight size={48} />
                            </button>
                        </>
                    )}
                    <p className="absolute bottom-6 left-0 right-0 text-center text-white/60 text-sm">
                        {photos[selectedIndex].title}
                        {photos.length > 1 && ` · ${selectedIndex + 1} / ${photos.length}`}
                    </p>
                </div>
            )}
        </>
    );
}
