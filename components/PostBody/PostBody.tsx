type PostBodyProps = {
    contentHtml: string;
};

export default function PostBody(props: PostBodyProps): JSX.Element {
    return (
        <div
            className="lg:prose-xl mt-10 prose"
            dangerouslySetInnerHTML={{ __html: props.contentHtml }}
        />
    );
}
