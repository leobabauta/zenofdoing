import type { ContentBlock } from '../data/dayContent';

/** Renders a string with **bold** and *italic* markers into React nodes. */
export function renderInline(text: string): React.ReactNode {
  // Split on **bold** and *italic* patterns
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-semibold text-[var(--color-text-primary)]">{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    return part;
  });
}

/** Renders an array of ContentBlocks (strings and lists) into React elements. */
export function renderRichText(blocks: ContentBlock[]): React.ReactNode {
  return blocks.map((item, i) =>
    typeof item === 'string' ? (
      <p key={i} className="text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
        {renderInline(item)}
      </p>
    ) : (
      <ul key={i} className="space-y-3 pl-1">
        {item.items.map((li, j) => (
          <li key={j} className="flex gap-3 text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
            <span className="text-[var(--color-accent)] mt-0.5 flex-shrink-0">•</span>
            <span>{renderInline(li)}</span>
          </li>
        ))}
      </ul>
    )
  );
}
