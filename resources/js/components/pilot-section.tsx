import type { BrandConfig, SiteCopy } from '@/types/site';
import { CheckCircle2 } from 'lucide-react';
import { Reveal } from './reveal';

export function PilotSection({ copy, brand }: { copy: SiteCopy; brand: BrandConfig }) {
    return (
        <section className="section-pad">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
                <Reveal className="overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-slate-950 via-[#082443] to-[#093652] p-7 text-white shadow-[0_35px_100px_rgba(8,36,67,0.22)] sm:p-10 lg:p-14">
                    <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-center">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">{copy.pilot.eyebrow}</p>
                            <h2 className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">{copy.pilot.title}</h2>
                            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{copy.pilot.body}</p>
                            <div className="mt-7 grid gap-3 sm:grid-cols-2">
                                {copy.pilot.included.map((item) => <div key={item} className="flex items-center gap-2 text-sm text-slate-200"><CheckCircle2 size={16} className="text-teal-300" /> {item}</div>)}
                            </div>
                        </div>
                        <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-7 backdrop-blur-sm">
                            <p className="text-sm text-slate-300">Pilot</p>
                            <div className="mt-2 flex items-end gap-2"><span className="text-6xl font-semibold tracking-[-0.06em]">{brand.pilotMonths}</span><span className="pb-2 text-slate-300">Monate</span></div>
                            <div className="my-6 h-px bg-white/10" />
                            <p className="text-sm text-slate-300">Danach</p>
                            <div className="mt-2 flex items-end gap-2"><span className="text-4xl font-semibold">{brand.pricePerBed} €</span><span className="pb-1 text-sm text-slate-300">{copy.pilot.priceSuffix}</span></div>
                            <a href="#contact" className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-teal-300">{copy.pilot.cta}</a>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
