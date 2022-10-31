import { micromark } from 'micromark';
import { gfm, gfmHtml } from 'micromark-extension-gfm';

export function parseMarkdownContent(content: string) {
    const htmlContent = micromark(content, {
        extensions: [gfm()],
        htmlExtensions: [gfmHtml()]
    });
    return htmlContent.toString();
}
