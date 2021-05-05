type PostBodyProps = {
    contentHtml: string;
};

export default function PostBody(props: PostBodyProps): JSX.Element {
    return (
        <div
            className="mt-10 prose lg:prose-xl"
            dangerouslySetInnerHTML={{ __html: props.contentHtml }}
        />
    );
}
