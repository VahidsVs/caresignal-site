export type Locale = 'de' | 'en';

export interface SiteCopy {
    meta: { title: string; description: string };
    nav: Record<string, string>;
    hero: {
        eyebrow: string;
        titleLead: string;
        titleAccent: string;
        body: string;
        primary: string;
        secondary: string;
        press: string;
        stat1Label: string;
        stat2Label: string;
        stat3Label: string;
    };
    problem: { eyebrow: string; title: string; body: string; cards: Array<{ title: string; body: string }> };
    flow: { eyebrow: string; title: string; body: string; steps: Array<{ number: string; title: string; body: string }> };
    product: { eyebrow: string; title: string; body: string; tags: string[] };
    automation: { eyebrow: string; title: string; body: string; template: string; schedule: string; generated: string; templateExample: string; scheduleExample: string; generatedExample: string; footnote: string };
    alerts: { eyebrow: string; title: string; body: string; low: string; high: string; critical: string; examples: string[] };
    roadmap: { eyebrow: string; title: string; body: string; live: string; next: string; later: string; vision: string; items: Array<{ stage: string; title: string; body: string; features: string[] }> };
    press: { eyebrow: string; title: string; body: string; button: string; quote: string };
    pilot: { eyebrow: string; title: string; body: string; priceSuffix: string; included: string[]; cta: string };
    contact: { eyebrow: string; title: string; body: string; name: string; email: string; organization: string; message: string; submit: string; sending: string; success: string };
    footer: { statement: string; rights: string };
}

export interface BrandConfig {
    name: string;
    pricePerBed: number;
    pilotMonths: number;
    pressUrl: string;
}
