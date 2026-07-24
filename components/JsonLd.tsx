interface JsonLdProps {
    data: object;
}

// Renders a JSON-LD structured-data block. The `<` escaping prevents the
// serialized JSON from prematurely closing the surrounding <script> tag.
export default function JsonLd({ data }: JsonLdProps) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
        />
    );
}
