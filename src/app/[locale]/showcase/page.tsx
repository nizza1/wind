import type { Metadata } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import showcaseDE from "@/app/content/showcase/showcaseDE";
import showcaseEN from "@/app/content/showcase/showcaseEN";
import ProjectShowcase from "@/app/components/showcase/ProjectShowcase";

export const metadata: Metadata = {
  title: "Showcase — Nizar",
  description: "Selected work — products built end-to-end, from database to deployment.",
};

type Props = {
  params: Params;
};

export default function ShowcasePage({ params }: Props) {
  const content = params.locale === "de" ? showcaseDE : showcaseEN;
  const { page, projects } = content;

  return (
    <main className="min-h-screen bg-[var(--color-bg)]">
      {/* Page header */}
      <section className="max-w-[1100px] mx-auto px-5 pt-16 pb-10 md:pt-20">
        <span className="inline-block font-raleway text-xs text-[var(--color-accent)] tracking-[0.1em] uppercase mb-4">
          {page.eyebrow}
        </span>
        <h1 className="font-mona font-extrabold text-[clamp(2.25rem,6vw,3.5rem)] leading-[1.05] tracking-[-0.04em] text-[var(--color-text)]">
          {page.heading}{" "}
          <em className="text-[var(--color-accent)] not-italic">{page.headingAccent}</em>
        </h1>
        <p className="mt-5 text-sm text-[var(--color-text-muted)] leading-[1.7] max-w-[52ch]">
          {page.intro}
        </p>
      </section>

      {projects.map((project) => (
        <ProjectShowcase key={project.slug} project={project} copy={page} />
      ))}
    </main>
  );
}
