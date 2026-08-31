import React from "react";

// Minimal inline formatter: supports **bold** and *italic* only.
// Kept intentionally small so news entries can be plain data, not JSX.
export function RichText({ text }: { text: string }) {
  const tokens = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).filter(Boolean);

  return (
    <>
      {tokens.map((token, i) => {
        if (token.startsWith("**") && token.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-ink">
              {token.slice(2, -2)}
            </strong>
          );
        }
        if (token.startsWith("*") && token.endsWith("*")) {
          return (
            <em key={i} className="font-serif italic">
              {token.slice(1, -1)}
            </em>
          );
        }
        return <React.Fragment key={i}>{token}</React.Fragment>;
      })}
    </>
  );
}
