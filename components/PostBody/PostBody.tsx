import styles from './PostBody.module.css';

type PostBodyProps = {
    contentHtml: string;
};

export default function PostBody(props: PostBodyProps) {
    return (
        <div
            className={styles['markdown']}
            dangerouslySetInnerHTML={{ __html: props.contentHtml }}
        />
    );
}
