import Link from 'next/link';
import { PostData } from '../../lib/posts';
import Date from '../Date/Date';

type PostSummaryProps = {
    postData: PostData;
};

export default function PostSummary(props: PostSummaryProps) {
    const { date, tag, title, id } = props.postData;
    return (
        <div className="mt-6">
            <div className="max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
                <div className="flex justify-between items-center">
                    <span className="font-light text-gray-600">
                        <Date dateString={date} />
                    </span>
                    <span className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500">
                        {tag || 'Random'}
                    </span>
                </div>
                <div className="mt-3 text-2xl text-gray-700 font-bold">{title}</div>
                <div className="flex justify-between items-center mt-4">
                    <Link href={`posts/${id}`}>
                        <a className="text-blue-500 hover:underline" rel="noopener noreferrer">
                            Read more
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}