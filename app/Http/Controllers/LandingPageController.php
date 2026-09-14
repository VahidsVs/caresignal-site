<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Lang;
use Inertia\Inertia;
use Inertia\Response;

class LandingPageController extends Controller
{
    public function __invoke(string $locale): Response
    {
        App::setLocale($locale);

        return Inertia::render('home', [
            'locale' => $locale,
            'copy' => Lang::get('site'),
            'brand' => [
                'name' => config('brand.name'),
                'pricePerBed' => config('brand.price_per_bed'),
                'pilotMonths' => config('brand.pilot_months'),
                'pressUrl' => config('brand.press_url'),
            ],
            'urls' => [
                'de' => url('/de'),
                'en' => url('/en'),
            ],
        ]);
    }
}
