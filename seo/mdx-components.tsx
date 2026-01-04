import type { MDXComponents } from 'mdx/types'
import { Typography } from '@/components/atoms'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <Typography variant="h1" className="mb-6 mt-8 font-bold">
        {children}
      </Typography>
    ),
    h2: ({ children }) => (
      <Typography variant="h2" className="mb-4 mt-8 font-bold">
        {children}
      </Typography>
    ),
    h3: ({ children }) => (
      <Typography variant="h3" className="mb-3 mt-6 font-semibold">
        {children}
      </Typography>
    ),
    p: ({ children }) => (
      <Typography variant="p" className="mb-4 leading-relaxed">
        {children}
      </Typography>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 ml-4">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="leading-relaxed">{children}</li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-muted-foreground">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
        {children}
      </pre>
    ),
    a: ({ href, children }) => (
      <a 
        href={href} 
        className="text-primary hover:underline"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
    hr: () => <hr className="my-8 border-border" />,
    table: ({ children }) => (
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border border-border">
          {children}
        </table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border border-border px-4 py-2 bg-muted font-semibold text-left">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border border-border px-4 py-2">
        {children}
      </td>
    ),
    ...components,
  }
}
