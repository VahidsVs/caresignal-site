import { Head } from '@inertiajs/react';
import { AlertsSection } from '@/components/alerts-section';
import { ContactSection } from '@/components/contact-section';
import { FlowSection } from '@/components/flow-section';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';
import { Navbar } from '@/components/navbar';
import { PilotSection } from '@/components/pilot-section';
import { PressSection } from '@/components/press-section';
import { ProblemSection } from '@/components/problem-section';
import { ProductShowcase } from '@/components/product-showcase';
import { RoadmapSection } from '@/components/roadmap-section';
import { TaskAutomation } from '@/components/task-automation';
import type { BrandConfig, Locale, SiteCopy } from '@/types/site';

export default function Home({ locale, copy, brand, urls }: { locale: Locale; copy: SiteCopy; brand: BrandConfig; urls: Record<Locale, string> }) {
    return (
        <>
            <Head title={copy.meta.title}>
                <meta name="description" content={copy.meta.description} />
                <link rel="alternate" hrefLang="de" href={urls.de} />
                <link rel="alternate" hrefLang="en" href={urls.en} />
                <link rel="alternate" hrefLang="x-default" href={urls.de} />
            </Head>
            <Navbar locale={locale} copy={copy} urls={urls} />
            <main>
                <Hero copy={copy} brand={brand} />
                <ProblemSection copy={copy} />
                <FlowSection copy={copy} />
                <ProductShowcase copy={copy} />
                <TaskAutomation copy={copy} />
                <AlertsSection copy={copy} />
                <RoadmapSection copy={copy} />
                <PressSection copy={copy} brand={brand} />
                <PilotSection copy={copy} brand={brand} />
                <ContactSection copy={copy} locale={locale} />
            </main>
            <Footer copy={copy} />
        </>
    );
}
