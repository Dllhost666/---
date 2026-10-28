import { ArrowUpRight } from "lucide-react";

type Project = { number: string; name: string; category: string; year: string; className: string; label: string };
export function ProjectCard({ project }: { project: Project }) {
  return <article className="group">
    <div className={`project-art ${project.className} relative flex aspect-[1.12/1] items-center justify-center overflow-hidden rounded-[1.65rem]`}>
      <span className="absolute left-5 top-5 text-xs font-medium tracking-[0.16em] text-black/55">{project.number} / 03</span>
      <div className="project-object transition-transform duration-500 group-hover:scale-[1.04]">{project.label}</div>
      <span className="absolute bottom-5 right-5 grid h-10 w-10 place-items-center rounded-full bg-white/75 backdrop-blur transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"><ArrowUpRight size={18} /></span>
    </div>
    <div className="flex items-start justify-between gap-4 pt-4">
      <div><h3 className="text-lg font-semibold tracking-tight">{project.name}</h3><p className="mt-1 text-sm text-zinc-500">{project.category}</p></div>
      <span className="pt-1 text-sm text-zinc-500">{project.year}</span>
    </div>
  </article>;
}
