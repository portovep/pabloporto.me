import { PostFrontmatter } from '@/lib/posts';
import { Date } from '@/components/ui';
import { Badge } from '@/components/ui/badge';

type PostSummaryProps = {
    postData: PostFrontmatter;
};

export default function PostSummary(props: PostSummaryProps) {
    const { date, type, title } = props.postData;
    return (
        <div className="lg:group lg:hover:bg-card lg:hover:shadow-lg bg-card border-2 border-border rounded-lg">
            <div className="md:pl-10 max-w-4xl py-6 pl-6">
                <div className="flex items-center justify-between">
                    <span className="text-lg font-light text-muted-foreground">
                        <Date dateString={date} />
                    </span>
                    <div className="mr-6">
                        <Badge className="bg-emerald-500 text-white hover:bg-emerald-600">
                            {type || 'Post'}
                        </Badge>
                    </div>
                </div>
                <div className="pr-6 mt-4 text-2xl font-semibold text-foreground">{title}</div>
                <div className="flex items-center justify-between mt-5">
                    <div className="text-emerald-500 lg:group-hover:text-emerald-600 font-medium">
                        {type === 'Post' ? 'Read more' : 'Check it out'}
                        <span aria-hidden="true" className="ml-2">
                            →
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
