import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="landing-section w-full max-w-4xl pb-24 pt-10">
      <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl">Why We Created AiResumeDraft</h1>
      <p className="mt-6 text-lg leading-relaxed text-gray530">
        Writing a resume shouldn't be frustrating. Yet most people still use Word or Google Docs, losing hours to formatting
        issues and design struggles. Meanwhile, free apps and AI have made many everyday tasks easier — so why is resume
        creation still stuck in the past?
      </p>
      <p className="mt-4 text-lg leading-relaxed text-gray530">
        That's why we built AiResumeDraft — a free, easy-to-use online resume builder at{" "}
        <a className="underline" href="https://airesumedraft.com/">
          airesumedraft.com
        </a>
        . Our goal: a fast, intuitive tool that's actually enjoyable to use. You focus on the content — we handle structure,
        layout, and design.
      </p>
      <h2 className="heading-display mt-14 text-3xl">Built by a Small, Independent Team</h2>
      <p className="mt-4 text-lg leading-relaxed text-gray530">
        We're not backed by investors or driven by maximizing returns. We're a small, quality-oriented team with a user-first
        approach, committed to building the best truly free resume builder, for everyone, everywhere.
      </p>
      <ul className="mt-6 space-y-3 text-lg text-ink">
        <li>👉 No paywalls, no watermarks, no surprises when downloading your resume</li>
        <li>👉 Your first resume is free forever, with full access to all design features</li>
        <li>👉 You only pay if you want to manage multiple versions or unlock advanced AI features</li>
      </ul>
      <h2 className="heading-display mt-14 text-3xl">Why AiResumeDraft Is Different</h2>
      <p className="mt-4 text-lg leading-relaxed text-gray530">
        Unlike multi-purpose design tools like Canva, Word, or Adobe, AiResumeDraft is built specifically for resume
        creation. That means structured guidance, recruiter-ready templates, full design control, and no design skills
        required.
      </p>
      <p className="mt-8 text-lg">
        📧 Reach out to{" "}
        <a className="underline" href="mailto:support@airesumedraft.com">
          support@airesumedraft.com
        </a>
      </p>
      <Link to="/builder" className="mt-10 inline-flex h-14 items-center rounded-xl bg-ink px-8 text-lg font-semibold text-white">
        Let's get started
      </Link>
    </div>
  );
}
