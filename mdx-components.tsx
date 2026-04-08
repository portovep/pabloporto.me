import type { MDXComponents } from 'mdx/types';
import type { ComponentPropsWithoutRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PageHeader } from '@/components/ui';
import GetInTouch from '@/components/GetInTouch';

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        img: ({ src, alt }: ComponentPropsWithoutRef<'img'>) => (
            <Image
                src={typeof src === 'string' ? src : ''}
                alt={alt || ''}
                width={800}
                height={450}
                className="rounded w-full h-auto"
            />
        ),
        a: ({ href, children, ...rest }: ComponentPropsWithoutRef<'a'>) => {
            if (href?.startsWith('/')) {
                return (
                    <Link href={href} {...rest}>
                        {children}
                    </Link>
                );
            }
            return (
                <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
                    {children}
                </a>
            );
        },
        GetInTouch,
        Image,
        Link,
        PageHeader,
        ...components
    };
}
