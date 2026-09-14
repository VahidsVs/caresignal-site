import type { Locale, SiteCopy } from '@/types/site';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar({ locale, copy, urls }: { locale: Locale; copy: SiteCopy; urls: Record<Locale, string> }) {
    const [open, setOpen] = useState(false);
    const links = [
        ['#product', copy.nav.product],
        ['#automation', copy.nav.automation],
        ['#roadmap', copy.nav.roadmap],
        ['#press', copy.nav.press],
    ];

    return (
        <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
            <div className="mx-auto max-w-7xl rounded-2xl border border-white/70 bg-white/80 px-4 shadow-[0_10px_40px_rgba(14,42,76,0.08)] backdrop-blur-xl sm:px-6">
                <div className="flex h-16 items-center justify-between">
                    <a href="#top" className="flex items-center gap-3" aria-label="CareSignal AI">
                        <img src="/images/caresignal-logo.png" alt="CareSignal AI" className="h-9 w-[180px] object-cover object-center sm:w-[220px]" />
                    </a>

                    <nav className="hidden items-center gap-7 lg:flex">
                        {links.map(([href, label]) => (
                            <a key={href} href={href} className="text-sm font-medium text-slate-600 transition hover:text-slate-950">{label}</a>
                        ))}
                    </nav>

                    <div className="hidden items-center gap-2 sm:flex">
                        <div className="flex rounded-full border border-slate-200 bg-slate-50 p-1 text-xs font-semibold">
                            <a href={urls.de} className={`rounded-full px-2.5 py-1.5 ${locale === 'de' ? 'bg-white text-slate-950 shadow-sm' : 'text-slate-500'}`}>DE</a>
                            <a href={urls.en} className={`rounded-full px-2.5 py-1.5 ${locale === 'en' ? 'bg-white text-slate-950 shadow-sm' : 'text-slate-500'}`}>EN</a>
                        </div>
                        <a href="#contact" className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-600">{copy.nav.pilot}</a>
                    </div>

                    <button className="rounded-xl p-2 text-slate-700 sm:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
                        {open ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

                {open && (
                    <div className="border-t border-slate-100 py-4 sm:hidden">
                        <div className="flex flex-col gap-3">
                            {links.map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">{label}</a>)}
                            <div className="mt-2 flex gap-2">
                                <a href={urls.de} className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold">DE</a>
                                <a href={urls.en} className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold">EN</a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
