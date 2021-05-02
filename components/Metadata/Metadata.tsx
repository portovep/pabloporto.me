type MetadataProps = {
    title?: string;
    description?: string;
    imageURL?: string;
};

export default function Metadata({ title, description, imageURL }: MetadataProps): JSX.Element {
    return (
        <>
            {title && (
                <>
                    <title>{title}</title>
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content={title} />
                    <meta name="twitter:title" content={title} />
                </>
            )}
            {description && (
                <>
                    <meta name="description" content={description} />
                    <meta property="og:description" content={description} />
                    <meta name="twitter:description" content={description} />
                </>
            )}

            {imageURL && (
                <>
                    <meta property="og:image" content={imageURL} />
                    <meta name="twitter:image" content={imageURL} />
                    <meta name="twitter:card" content="summary_large_image" />
                </>
            )}
        </>
    );
}
