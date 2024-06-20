import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

function MarkdownRenderer({ children }) {
    return (
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{children}</ReactMarkdown>
    );
}

export default MarkdownRenderer;
