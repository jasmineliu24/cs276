export default function AboutPage() {
  return (
    <article className="max-w-3xl space-y-10">
      <header className="space-y-6">
        <p className="section-mark">§ About</p>
        <h1 className="serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
          A program built around the people it's for.
        </h1>
      </header>

      <div className="space-y-6 text-lg leading-relaxed text-ink/85">
        <p>
          AIPath was developed by Harvard researchers working to expand access to AI literacy for first-generation and
          low-income college students. The program is grounded in participatory design — surveys and semi-structured
          interviews with students from inside the community we're serving.
        </p>
        <p>
          The goal is to make AI fluency accessible without assuming prior technical knowledge. Every concept is defined
          from scratch, and activities are short, modular, and async-friendly for students balancing jobs, family, and
          coursework.
        </p>
        <p>
          The team brings a mix of computer science, economics, and public policy backgrounds, including members with FGLI
          identity. We built this because access shouldn't be the reason talented students get left out of AI work.
        </p>
      </div>
    </article>
  );
}
