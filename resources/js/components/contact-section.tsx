import type { Locale, SiteCopy } from '@/types/site';
import { useForm, usePage } from '@inertiajs/react';
import { Send } from 'lucide-react';
import { Reveal } from './reveal';
import { SectionHeading } from './section-heading';

export function ContactSection({ copy, locale }: { copy: SiteCopy; locale: Locale }) {
    const { flash } = usePage<{ flash?: { success?: string } }>().props;
    const form = useForm({ name: '', email: '', organization: '', message: '' });

    const submit = (event: React.FormEvent) => {
        event.preventDefault();
        form.post(`/${locale}/contact`, { preserveScroll: true, onSuccess: () => form.reset() });
    };

    return (
        <section id="contact" className="section-pad bg-white">
            <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
                <SectionHeading eyebrow={copy.contact.eyebrow} title={copy.contact.title} body={copy.contact.body} />
                <Reveal>
                    <form onSubmit={submit} className="rounded-[2rem] border border-slate-200 bg-[#f8fbfd] p-5 sm:p-7">
                        {flash?.success && <div className="mb-5 rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">{flash.success}</div>}
                        <div className="grid gap-4 sm:grid-cols-2">
                            <Field label={copy.contact.name} value={form.data.name} error={form.errors.name} onChange={(value) => form.setData('name', value)} />
                            <Field label={copy.contact.email} type="email" value={form.data.email} error={form.errors.email} onChange={(value) => form.setData('email', value)} />
                        </div>
                        <div className="mt-4"><Field label={copy.contact.organization} value={form.data.organization} error={form.errors.organization} onChange={(value) => form.setData('organization', value)} /></div>
                        <div className="mt-4">
                            <label className="text-sm font-medium text-slate-700">{copy.contact.message}</label>
                            <textarea rows={5} value={form.data.message} onChange={(e) => form.setData('message', e.target.value)} className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-teal-400 focus:ring-4 focus:ring-teal-100" />
                            {form.errors.message && <p className="mt-1 text-xs text-rose-600">{form.errors.message}</p>}
                        </div>
                        <button disabled={form.processing} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-600 disabled:opacity-60">
                            {form.processing ? copy.contact.sending : copy.contact.submit} <Send size={16} />
                        </button>
                    </form>
                </Reveal>
            </div>
        </section>
    );
}

function Field({ label, value, onChange, error, type = 'text' }: { label: string; value: string; onChange: (value: string) => void; error?: string; type?: string }) {
    return (
        <label className="block text-sm font-medium text-slate-700">
            {label}
            <input type={type} value={value} onChange={(e) => onChange(e.target.value)} className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-teal-400 focus:ring-4 focus:ring-teal-100" />
            {error && <span className="mt-1 block text-xs text-rose-600">{error}</span>}
        </label>
    );
}
