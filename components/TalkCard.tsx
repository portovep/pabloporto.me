import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { TalkData } from '@/lib/talks';
import { ExternalLink } from 'lucide-react';

type TalkCardProps = {
    talk: TalkData;
};

export default function TalkCard({ talk }: TalkCardProps) {
    const content = (
        <Card
            className="group transition-all hover:shadow-md border-border bg-card"
            data-testid="talk-card">
            <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-1">
                        <h3 className="text-lg font-semibold text-foreground leading-tight group-hover:text-foreground transition-colors">
                            {talk.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>{talk.year}</span>
                            <span>•</span>
                            <span>{talk.event}</span>
                        </div>
                    </div>
                    {talk.url && (
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0 mt-1" />
                    )}
                </div>
            </CardContent>
        </Card>
    );

    if (talk.url) {
        return (
            <Link href={talk.url} target="_blank" rel="noopener noreferrer" className="block">
                {content}
            </Link>
        );
    }

    return <div className="block">{content}</div>;
}
