import type { MDXComponents } from 'mdx/types';
import type { ComponentPropsWithoutRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        img: ({ src, alt }: ComponentPropsWithoutRef<'img'>) => (
            <Image
                src={src as string}
                alt={alt || ''}
                width={800}
                height={450}
                className="rounded w-full h-auto"
            />
        ),
        a: ({ href, children }: ComponentPropsWithoutRef<'a'>) =>
            href?.startsWith('/') ? (
                <Link href={href} className="text-emerald-500 hover:text-emerald-600">
                    {children}
                </Link>
            ) : (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-500 hover:text-emerald-600">
                    {children}
                </a>
            ),
        ...components
    };
}
