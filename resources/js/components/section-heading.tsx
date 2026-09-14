import { Reveal } from './reveal';

export function SectionHeading({ eyebrow, title, body, centered = false }: { eyebrow: string; title: string; body?: string; centered?: boolean }) {
    return (
        <Reveal className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-teal-600">{eyebrow}</p>
            <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">{title}</h2>
            {body && <p className="mt-5 text-pretty text-base leading-7 text-slate-600 sm:text-lg">{body}</p>}
        </Reveal>
    );
}
