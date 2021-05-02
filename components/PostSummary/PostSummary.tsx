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
                className="text-indigo-600 hover:text-indigo-800 font-medium"
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
            className="text-indigo-600 hover:text-indigo-800 font-medium"
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
        <div className="mt-6 border-2 border-gray-200 bg-white rounded-lg hover:bg-white hover:shadow-lg">
            <div className="max-w-4xl pl-6 md:pl-10 py-6">
                <div className="flex justify-between items-center">
                    <span className="font-light text-lg text-gray-600">
                        <Date dateString={date} />
                    </span>
                    <div className="items-end">
                        <Label text={type || 'Post'} />
                    </div>
                </div>
                <div className="mt-4 text-2xl text-gray-700 font-bold">{title}</div>
                <div className="flex justify-between items-center mt-5">
                    {postLink(props.postData)}
                </div>
            </div>
        </div>
    );
}
