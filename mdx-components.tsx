import type { MDXComponents } from 'mdx/types';
import type { ComponentPropsWithoutRef } from 'react';
import Image from 'next/image';

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
        ...components
    };
}
