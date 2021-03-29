type PostBodyProps = {
    contentHtml: string;
};

export default function PostBody(props: PostBodyProps) {
    return (
        <div
            className="mt-10 prose lg:prose-xl prose-purple"
            dangerouslySetInnerHTML={{ __html: props.contentHtml }}
        />
    );
}
