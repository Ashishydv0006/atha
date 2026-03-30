const lastUpdated = "March 15, 2026"

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#f6f4ef]">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),_transparent_60%)]">
        <div className="absolute -left-28 top-10 h-72 w-72 rounded-full bg-emerald-200/70 blur-3xl" />
        <div className="absolute -right-28 top-14 h-80 w-80 rounded-full bg-teal-300/50 blur-3xl" />

        <div className="mx-auto max-w-5xl px-4 py-20">
          <p className="text-xs font-semibold tracking-[0.35em] text-emerald-700">
            ATHA
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 max-w-3xl text-base text-slate-700">
            This Privacy Policy explains how Atha collects, uses, and protects
            your personal information when you visit our website or purchase
            our products.
          </p>
          <p className="mt-3 text-sm font-semibold text-emerald-900">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white via-emerald-50/50 to-white py-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4">
          <div className="rounded-3xl border border-emerald-200/70 bg-white/90 p-8 shadow-[0_20px_50px_-32px_rgba(15,23,42,0.7)]">
            <h2 className="text-2xl font-semibold text-slate-900">
              1. Information We Collect
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>
                Information you provide: name, email address, phone number,
                shipping address, and order details.
              </li>
              <li>
                Payment details: payments are processed by secure payment
                providers; we do not store full card details.
              </li>
              <li>
                Automatically collected data: device information, browser type,
                IP address, and usage analytics.
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-emerald-200/70 bg-white/90 p-8 shadow-[0_20px_50px_-32px_rgba(15,23,42,0.7)]">
            <h2 className="text-2xl font-semibold text-slate-900">
              2. How We Use Your Information
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>To process and deliver your orders.</li>
              <li>To provide customer support and order updates.</li>
              <li>To improve our products, services, and website experience.</li>
              <li>
                To send marketing communications when you opt in, and to honor
                your preferences.
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-emerald-200/70 bg-white/90 p-8 shadow-[0_20px_50px_-32px_rgba(15,23,42,0.7)]">
            <h2 className="text-2xl font-semibold text-slate-900">
              3. How We Share Information
            </h2>
            <p className="mt-3 text-sm text-slate-700">
              We share information only with trusted service providers who help
              us operate our business, such as payment processors, shipping
              partners, analytics providers, and customer support tools. We may
              also share information when required by law or as part of a
              business transfer.
            </p>
          </div>

          <div className="rounded-3xl border border-emerald-200/70 bg-white/90 p-8 shadow-[0_20px_50px_-32px_rgba(15,23,42,0.7)]">
            <h2 className="text-2xl font-semibold text-slate-900">
              4. Cookies and Tracking
            </h2>
            <p className="mt-3 text-sm text-slate-700">
              We use cookies and similar technologies to remember preferences,
              enable site functionality, and understand how visitors use our
              website. You can control cookies through your browser settings.
            </p>
          </div>

          <div className="rounded-3xl border border-emerald-200/70 bg-white/90 p-8 shadow-[0_20px_50px_-32px_rgba(15,23,42,0.7)]">
            <h2 className="text-2xl font-semibold text-slate-900">
              5. Data Retention
            </h2>
            <p className="mt-3 text-sm text-slate-700">
              We retain personal information only as long as needed for the
              purposes described in this policy, to comply with legal
              obligations, and to resolve disputes.
            </p>
          </div>

          <div className="rounded-3xl border border-emerald-200/70 bg-white/90 p-8 shadow-[0_20px_50px_-32px_rgba(15,23,42,0.7)]">
            <h2 className="text-2xl font-semibold text-slate-900">
              6. Data Security
            </h2>
            <p className="mt-3 text-sm text-slate-700">
              We use reasonable administrative, technical, and physical
              safeguards to protect your information. No method of transmission
              or storage is completely secure, but we work hard to protect your
              data.
            </p>
          </div>

          <div className="rounded-3xl border border-emerald-200/70 bg-white/90 p-8 shadow-[0_20px_50px_-32px_rgba(15,23,42,0.7)]">
            <h2 className="text-2xl font-semibold text-slate-900">
              7. Your Choices and Rights
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>Request access, correction, or deletion of your information.</li>
              <li>Opt out of marketing communications at any time.</li>
              <li>
                We do not sell your personal information as defined by
                applicable law.
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-emerald-200/70 bg-white/90 p-8 shadow-[0_20px_50px_-32px_rgba(15,23,42,0.7)]">
            <h2 className="text-2xl font-semibold text-slate-900">
              8. Children&apos;s Privacy
            </h2>
            <p className="mt-3 text-sm text-slate-700">
              Our website is not intended for children under 13. We do not
              knowingly collect personal information from children.
            </p>
          </div>

          <div className="rounded-3xl border border-emerald-200/70 bg-white/90 p-8 shadow-[0_20px_50px_-32px_rgba(15,23,42,0.7)]">
            <h2 className="text-2xl font-semibold text-slate-900">
              9. Changes to This Policy
            </h2>
            <p className="mt-3 text-sm text-slate-700">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with a revised last updated date.
            </p>
          </div>

          <div className="rounded-3xl border border-emerald-200/70 bg-white/90 p-8 shadow-[0_20px_50px_-32px_rgba(15,23,42,0.7)]">
            <h2 className="text-2xl font-semibold text-slate-900">
              10. Contact Us
            </h2>
            <p className="mt-3 text-sm text-slate-700">
              If you have questions about this Privacy Policy, please reach out
              using the contact information provided on our website.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
