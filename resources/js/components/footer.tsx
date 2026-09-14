import type { SiteCopy } from '@/types/site';

export function Footer({ copy }: { copy: SiteCopy }) {
    return (
        <footer className="border-t border-slate-200 bg-[#f8fbfd]">
            <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-9 sm:flex-row sm:items-center sm:justify-between lg:px-8">
                <div>
                    <img src="/images/caresignal-logo.png" alt="CareSignal AI" className="h-8 w-[190px] object-cover object-center" />
                    <p className="mt-2 text-sm text-slate-500">{copy.footer.statement}</p>
                </div>
                <p className="text-xs text-slate-400">© {new Date().getFullYear()} CareSignal AI · {copy.footer.rights}</p>
            </div>
        </footer>
    );
}
