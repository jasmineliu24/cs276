import ReactMarkdown from "react-markdown";

function calloutStyles(kind: string) {
  if (kind.includes("KEY_TERM")) return "border-[#F5A623] bg-amber-50";
  if (kind.includes("COMMON_MISCONCEPTION")) return "border-red-300 bg-red-50";
  return "border-blue-300 bg-blue-50";
}

export function ModuleLesson({ markdown }: { markdown: string }) {
  return (
    <article className="prose prose-slate max-w-none">
      <ReactMarkdown
        components={{
          blockquote: ({ children }) => {
            const content = String(children).toUpperCase();
            return <blockquote className={`not-prose border-l-4 rounded-r-lg p-4 my-5 ${calloutStyles(content)}`}>{children}</blockquote>;
          }
        }}
      >
        {markdown}
      </ReactMarkdown>
    </article>
  );
}
