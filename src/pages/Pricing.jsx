import { Link } from "react-router-dom";
import { useState } from "react";

export default function Pricing() {
  const [yearly, setYearly] = useState(true);
  return (
    <div className="landing-section w-full pb-24 pt-10">
      <h1 className="heading-display text-center text-4xl md:text-5xl">Simple, honest pricing</h1>
      <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray530">
        Your first resume is free forever. Upgrade only if you want unlimited versions, cover letters, and AI extras.
      </p>
      <div className="mt-8 flex justify-center">
        <button
          type="button"
          onClick={() => setYearly((v) => !v)}
          className="rounded-full border border-gray-300 bg-white px-5 py-2 text-sm font-bold"
        >
          {yearly ? "Yearly billing −74%" : "Monthly billing"}
        </button>
      </div>
      <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-2">
        <div className="rounded-3xl bg-white p-8 shadow-md">
          <h2 className="text-2xl font-bold">Free</h2>
          <p className="mt-2 text-4xl font-black">$0/month</p>
          <p className="mt-2 text-gray530">Free forever. No credit card required.</p>
          <p className="mt-6 font-bold">Everything you need for a professional resume:</p>
          <ul className="mt-4 space-y-2 text-gray530">
            <li>• 1 resume and 1 cover letter</li>
            <li>• Unlimited PDF downloads</li>
            <li>• No watermarks or branding</li>
            <li>• All resume templates</li>
            <li>• Full design customization</li>
          </ul>
          <Link to="/builder" className="mt-8 flex h-12 items-center justify-center rounded-xl bg-ink font-bold text-white">
            Get started for free
          </Link>
        </div>
        <div className="rounded-3xl bg-ink p-8 text-white shadow-md">
          <h2 className="text-2xl font-bold">Pro</h2>
          <p className="mt-2 text-4xl font-black">{yearly ? "$5" : "$19"}/month</p>
          <p className="mt-2 text-white/70">{yearly ? "Billed yearly" : "Billed monthly"}</p>
          <p className="mt-6 font-bold">Includes all Free features, plus:</p>
          <ul className="mt-4 space-y-2 text-white/85">
            <li>• Unlimited resumes</li>
            <li>• Unlimited cover letters</li>
            <li>• Unlimited imports</li>
            <li>• Job Application Tracker</li>
            <li>• AI features ✨</li>
          </ul>
          <Link to="/builder" className="mt-8 flex h-12 items-center justify-center rounded-xl bg-white font-bold text-ink">
            Start Pro
          </Link>
        </div>
      </div>
    </div>
  );
}
