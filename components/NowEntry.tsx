'use client';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function NowEntry({
    date,
    children,
    defaultOpen = false,
    collapsible = true,
    image
}: {
    date: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
    collapsible?: boolean;
    image?: React.ReactNode;
}) {
    const [open, setOpen] = useState(defaultOpen);

    if (!collapsible) {
        return (
            <div className="mb-8 w-full" data-testid="now-entry">
                <div className="max-w-3xl mb-4">
                    <h2 className="text-xl font-semibold text-foreground mb-4">{date}</h2>
                </div>
                {image && <div className="-mx-8 md:-mx-16 lg:-mx-24 mb-6">{image}</div>}
                <div className="max-w-3xl">
                    <div
                        className="prose prose-lg dark:prose-invert prose-a:text-emerald-500 hover:prose-a:text-emerald-600 prose-a:no-underline"
                        data-testid="now-entry-content">
                        {children}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <Collapsible
            open={open}
            onOpenChange={setOpen}
            className="mb-8 w-full max-w-3xl"
            data-testid="now-entry">
            <CollapsibleTrigger className="flex w-full items-center gap-2 text-xl font-semibold text-foreground hover:text-emerald-500 transition-colors cursor-pointer">
                <ChevronDown
                    className={`h-5 w-5 transition-transform ${open ? 'rotate-180' : ''}`}
                />
                {date}
            </CollapsibleTrigger>
            <CollapsibleContent
                className="mt-4 prose prose-lg dark:prose-invert prose-a:text-emerald-500 hover:prose-a:text-emerald-600 prose-a:no-underline"
                data-testid="now-entry-content">
                {children}
            </CollapsibleContent>
        </Collapsible>
    );
}
