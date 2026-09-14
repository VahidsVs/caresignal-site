import type { BrandConfig, SiteCopy } from '@/types/site';
import { ArrowUpRight, Newspaper } from 'lucide-react';
import { Reveal } from './reveal';

export function PressSection({ copy, brand }: { copy: SiteCopy; brand: BrandConfig }) {
    return (
        <section id="press" className="section-pad bg-white">
            <div className="mx-auto max-w-6xl px-5 lg:px-8">
                <Reveal className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-[#f8fbfd] p-7 sm:p-10 lg:p-12">
                    <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-teal-200/40 blur-3xl" />
                    <div className="relative grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:items-center">
                        <div>
                            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-slate-950 text-white"><Newspaper size={24} /></div>
                            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">{copy.press.eyebrow}</p>
                            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-950">{copy.press.title}</h2>
                        </div>
                        <div>
                            <blockquote className="text-balance text-2xl font-medium leading-9 tracking-[-0.025em] text-slate-800 sm:text-3xl">“{copy.press.quote}”</blockquote>
                            <p className="mt-5 max-w-2xl leading-7 text-slate-600">{copy.press.body}</p>
                            <a href={brand.pressUrl} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition hover:text-teal-600">{copy.press.button} <ArrowUpRight size={17} /></a>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
