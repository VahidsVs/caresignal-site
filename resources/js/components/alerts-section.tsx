import type { SiteCopy } from '@/types/site';
import { AlertTriangle, BellRing, CircleCheckBig } from 'lucide-react';
import { Reveal } from './reveal';
import { SectionHeading } from './section-heading';

export function AlertsSection({ copy }: { copy: SiteCopy }) {
    const levels = [
        [CircleCheckBig, copy.alerts.low, 'bg-emerald-50 text-emerald-700 border-emerald-100'],
        [BellRing, copy.alerts.high, 'bg-amber-50 text-amber-700 border-amber-100'],
        [AlertTriangle, copy.alerts.critical, 'bg-rose-50 text-rose-700 border-rose-100'],
    ] as const;

    return (
        <section className="section-pad">
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
                <SectionHeading eyebrow={copy.alerts.eyebrow} title={copy.alerts.title} body={copy.alerts.body} />
                <div className="space-y-3">
                    {levels.map(([Icon, label, classes], index) => (
                        <Reveal key={label} delay={index * 0.08} className={`rounded-3xl border p-5 ${classes}`}>
                            <div className="flex items-center gap-4">
                                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/80"><Icon size={20} /></div>
                                <div className="min-w-0 flex-1">
                                    <div className="flex items-center justify-between gap-3">
                                        <span className="text-sm font-bold uppercase tracking-[0.15em]">{label}</span>
                                        <span className="h-2 w-2 rounded-full bg-current opacity-70" />
                                    </div>
                                    <p className="mt-1 truncate text-sm opacity-80">{copy.alerts.examples[index]}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
