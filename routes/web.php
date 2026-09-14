<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\LandingPageController;
use Illuminate\Support\Facades\Route;

Route::redirect('/', '/de')->name('home');

Route::get('/{locale}', LandingPageController::class)
    ->whereIn('locale', ['de', 'en'])
    ->name('landing');

Route::post('/{locale}/contact', ContactController::class)
    ->whereIn('locale', ['de', 'en'])
    ->middleware('throttle:5,1')
    ->name('contact');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__ . '/settings.php';
