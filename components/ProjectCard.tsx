import type { ReactNode } from 'react';
import { Badge } from '@/components/ui/badge';

type ProjectCardProps = {
    title: ReactNode;
    year: string;
    imageSlot: ReactNode;
    actions: ReactNode;
    children: ReactNode;
    noBorder?: boolean;
    topMargin?: boolean;
};

export default function ProjectCard({
    title,
    year,
    imageSlot,
    actions,
    children,
    noBorder = false,
    topMargin = false
}: ProjectCardProps) {
    return (
        <div
            data-testid="making-project"
            className={`pb-14 md:flex-row container flex flex-col items-start pt-10 mx-auto mb-10${noBorder ? '' : ' border-b border-border'}${topMargin ? ' mt-10' : ''}`}>
            <div className="md:order-first lg:grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-start order-last mb-0">
                <div className="flex flex-col md:flex-row md:items-center md:gap-3 items-start mb-6 w-full md:w-auto">
                    <h2 className="heading-section">{title}</h2>
                    <Badge className="bg-emerald-500 text-white hover:bg-emerald-600 mt-2 md:mt-0">
                        {year}
                    </Badge>
                </div>
                {children}
                <div className="flex flex-col items-start gap-4 mt-8">{actions}</div>
            </div>
            <div className="md:mb-0 lg:max-w-lg lg:w-full md:w-1/2 w-full mb-8">{imageSlot}</div>
        </div>
    );
}
