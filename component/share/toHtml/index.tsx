'use client';

import ReactMarkdown from 'react-markdown';
import { Prism } from 'react-syntax-highlighter';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';

type Props = {
  content: string;
  className: string;
};

export default function ToHtml(props: Props) {
  const { content, className } = props;

  return (
    <ReactMarkdown
      className={`${className} markdown-body`}
      remarkPlugins={[
        remarkBreaks,
        remarkGfm,
        remarkRehype,
        rehypeRaw,
        rehypeStringify,
      ]}
      components={{
        code(props) {
          const { children, className, ...rest } = props;
          const match = /language-(\w+)/.exec(className || '');
          return match ? (
            <Prism language={match[1]} PreTag="div" showLineNumbers>
              {String(children).replace(/\n$/, '')}
            </Prism>
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
