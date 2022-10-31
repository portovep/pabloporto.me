type PostBodyProps = {
    contentHtml: string;
};

export default function PostBody(props: PostBodyProps): JSX.Element {
    return (
        <div
            className="lg:prose-xl prose-a:text-emerald-500 hover:prose-a:text-emerald-600 hover:prose-a:font-medium prose-a:no-underline prose-table:m-1 prose-table:p-2 mt-10 prose"
            dangerouslySetInnerHTML={{ __html: props.contentHtml }}
        />
    );
}
