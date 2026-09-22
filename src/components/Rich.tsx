import { Fragment } from 'react';

/**
 * Renders a plain string where *word* becomes an accent-colored
 * non-italic <em class="hi"> — the devin.ai emphasized-word pattern.
 */
export default function Rich({ text }: { text: string }) {
  const parts = text.split(/\*([^*]+)\*/g);
  if (parts.length === 1) return <>{text}</>;
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <em key={i} className="hi">
            {part}
          </em>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
