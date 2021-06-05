import Link from 'next/link';
import { PostData } from '../../lib/posts';
import Label from '../Label/Label';
import Date from '../Date/Date';

type PostSummaryProps = {
    postData: PostData;
};

const postLink = (postData: PostData) =>
    postData.type === 'Post' ? (
        <Link href={`posts/${postData.id}`}>
            <a
                className="text-emerald-500 group-hover:text-emerald-600 font-medium"
                rel="noopener noreferrer">
                Read more
                <span aria-hidden="true" className="ml-2">
                    →
                </span>
            </a>
        </Link>
    ) : (
        <a
            href={postData.link}
            target="_blank"
            className="text-emerald-500 group-hover:text-emerald-600 font-medium"
            rel="noopener noreferrer">
            Check it out
            <span aria-hidden="true" className="ml-2">
                →
            </span>
        </a>
    );

export default function PostSummary(props: PostSummaryProps): JSX.Element {
    const { date, type, title } = props.postData;
    return (
        <div className="group hover:bg-white hover:shadow-lg mt-6 bg-white border-2 border-gray-200 rounded-lg">
            <div className="md:pl-10 max-w-4xl py-6 pl-6">
                <div className="flex items-center justify-between">
                    <span className="text-lg font-light text-gray-600">
                        <Date dateString={date} />
                    </span>
                    <div className="mr-6">
                        <Label text={type || 'Post'} />
                    </div>
                </div>
                <div className="mt-4 text-2xl font-bold text-gray-700">{title}</div>
                <div className="flex items-center justify-between mt-5">
                    {postLink(props.postData)}
                </div>
            </div>
        </div>
    );
}
