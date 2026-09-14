<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function __invoke(Request $request, string $locale): RedirectResponse
    {
        App::setLocale($locale);

        $data = $request->validate([
            'name' => ['required', 'string', 'max:120'],
            'email' => ['required', 'email', 'max:180'],
            'organization' => ['nullable', 'string', 'max:180'],
            'message' => ['required', 'string', 'max:3000'],
        ]);

        $recipient = config('brand.contact_email');

        if ($recipient) {
            Mail::raw(
                "Name: {$data['name']}\nEmail: {$data['email']}\nOrganisation: ".($data['organization'] ?? '-')."\n\n{$data['message']}",
                fn ($message) => $message
                    ->to($recipient)
                    ->replyTo($data['email'], $data['name'])
                    ->subject('CareSignal Pilot / Website Anfrage')
            );
        } else {
            // Safe fallback while the mail transport is not configured yet.
            Log::info('CareSignal website inquiry', $data);
        }

        return back()->with('success', __('site.contact.success'));
    }
}
