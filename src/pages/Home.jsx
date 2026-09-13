import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ResumePreview from "../components/ResumePreview.jsx";
import { FAQS, REVIEWS, SAMPLE_RESUME, TEMPLATES } from "../data/content.js";

export default function Home() {
  const [faqOpen, setFaqOpen] = useState(null);
  const [reviewIdx, setReviewIdx] = useState(0);
  const [tplIdx, setTplIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTplIdx((i) => (i + 1) % Math.max(TEMPLATES.length - 3, 1)), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex w-full max-w-full flex-col items-center overflow-x-hidden pb-40">
      <section className="landing-section grid grid-cols-1 items-start pt-6 md:grid-cols-[55%_45%] md:pt-8 lg:grid-cols-[57%_42%] lg:pt-12">
        <div className="flex w-full justify-center md:order-2">
          <div className="relative max-w-[280px] sm:max-w-[320px] lg:max-w-[460px] xl:max-w-[480px]">
            <div className="aspect-[2560/3313] overflow-hidden rounded-lg border border-solid border-gray-200 shadow-hero md:rounded-xl">
              <ResumePreview resume={SAMPLE_RESUME} template={TEMPLATES[1]} />
            </div>
            <div className="absolute bottom-20 -left-8 grid w-[180px] grid-cols-[1fr_min-content] items-center gap-4 rounded-lg border border-solid border-gray-100 bg-white px-4 py-3 shadow-comment xs:w-[200px] lg:bottom-[28%] lg:-left-32 lg:w-[203px] lg:rounded-[20px]">
              <div>
                <div className="block text-[12.8px] font-bold leading-tight text-ink lg:text-base">Andrew Irwin</div>
                <p className="text-[9.6px] leading-none text-cream lg:text-xs">Product Manager</p>
                <p className="mt-[3px] text-amber-500">★★★★★</p>
              </div>
              <div className="grid h-9 w-9 place-items-center rounded-full bg-[#FF6154] text-sm font-black text-white">P</div>
            </div>
            <div className="absolute -bottom-4 left-6 grid w-[288px] grid-cols-[1fr_auto] items-center gap-3 rounded-lg border border-solid border-gray-100 bg-white px-4 py-3 shadow-comment lg:bottom-[6%] lg:-left-[20%] lg:w-[360px] lg:px-5 lg:py-4">
              <div>
                <p className="text-[11.2px] leading-snug lg:text-[14px]">
                  Powerful websites I wish I knew earlier: This one is a LIFESAVER 🤩
                </p>
                <p className="mt-2 text-[9.6px] leading-tight text-cream lg:text-[12px]">@maedeh.davami | 1.8 million views</p>
              </div>
              <div className="text-center text-[10px] font-black">
                <span className="block text-lg">♪</span>TikTok
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 w-full md:mt-4">
          <h1 className="text-[15px] font-semibold uppercase tracking-[-0.1px] text-gray-700 lg:text-lg xl:text-xl 2xl:text-2xl">
            Free Online Resume Builder
          </h1>
          <h2 className="heading-display mt-3 text-4xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-[80px]">
            Build a job-winning resume&nbsp;for&nbsp;free
          </h2>
          <p className="mt-4 max-w-[400px] text-lg leading-[1.6] text-gray-600 lg:mt-6 lg:max-w-[500px] lg:text-[20px] lg:leading-[1.8]">
            Your first resume is 100% free forever. Unlimited&nbsp;downloads. No hidden fees.
            <span className="block">Yes,&nbsp;really 🚀</span>
          </p>
          <Link
            to="/builder"
            className="mt-7 flex h-14 w-max items-center justify-center rounded-xl bg-ink pl-8 pr-7 text-base font-semibold text-white lg:mt-10 lg:h-20 lg:text-xl"
          >
            Get started for free ✨
          </Link>
          <div className="mt-10 flex flex-col">
            <div className="-ml-1 flex">
              {["#E8B298", "#C9A06A", "#8D6E63", "#6D8B8A", "#7A9BB8"].map((c, i) => (
                <div
                  key={c}
                  className="-ml-3 h-12 w-12 overflow-hidden rounded-full border-2 border-sand"
                  style={{ background: `radial-gradient(circle at 35% 30%, #fff6, transparent 40%), ${c}`, zIndex: 5 - i }}
                />
              ))}
            </div>
            <p className="-mt-1 text-base font-bold text-ink lg:mt-2 lg:text-lg">Trusted by job seekers worldwide</p>
          </div>
        </div>
      </section>

      <section className="landing-section mt-20 flex w-full justify-center md:mt-28 lg:mt-32">
        <div className="grid w-full max-w-5xl grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-1 lg:max-w-6xl">
          <FeatureIcon title={<>1st resume,<br className="hidden sm:block" /> free forever</>} />
          <FeatureIcon title={<>Privacy & <br className="hidden sm:block" /> GDPR&nbsp;compliant</>} />
          <FeatureIcon title={<>Professional<br className="hidden sm:block" /> Templates</>} />
        </div>
      </section>

      <section className="landing-section mt-24 md:mt-28 lg:mt-32">
        <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl">Create a professional resume in minutes</h2>
        <p className="mt-2 text-base text-gray530 sm:mt-3 sm:text-lg lg:mt-5 lg:text-xl lg:leading-relaxed">
          AiResumeDraft makes it easy to create and edit your resume (CV). Here's how it works:
        </p>
        <div className="mt-10 space-y-14 lg:mt-14 lg:space-y-16">
          {[
            {
              n: "1. Choose a template",
              p: "Select one of AiResumeDraft's 50+ professionally designed resume templates or design your own resume template and save it.",
              shot: "templates",
            },
            {
              n: "2. Add your experience",
              p: "Fill your resume with content. We'll guide you along the way. You can also import an existing resume to start even faster.",
              shot: "editor",
            },
            {
              n: "3. Customize layout & design",
              p: "Adjust layout and design until your resume feels like you. AiResumeDraft gives you full control while keeping things easy.",
              shot: "design",
            },
            {
              n: "4. Download unlimited PDFs",
              p: "Your resume draft is automatically saved in your account. Update and download unlimited PDFs whenever you need.",
              shot: "pdf",
            },
          ].map((step) => (
            <div key={step.n} className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[minmax(0,560px)_minmax(0,1fr)] lg:gap-16">
              <HowShot kind={step.shot} />
              <div>
                <h3 className="text-2xl leading-none tracking-[-1px] text-ink sm:text-3xl lg:text-4xl lg:tracking-[-2px] xl:text-5xl">
                  {step.n}
                </h3>
                <p className="mt-3 max-w-[560px] text-base text-gray530 sm:text-lg lg:mt-5 lg:text-xl lg:leading-[1.75]">{step.p}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24 flex w-full flex-col items-center md:mt-28 lg:mt-32">
        <div className="landing-section">
          <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl">Choose from 50+ Resume Templates</h2>
          <p className="mt-2 text-base text-gray530 sm:text-lg lg:mt-5 lg:text-xl">
            Our{" "}
            <Link to="/resume-templates" className="underline">
              free resume templates
            </Link>{" "}
            help you create a professional resume that stands out.
          </p>
        </div>
        <div className="mt-8 w-full overflow-hidden px-4 md:mt-12">
          <div className="flex gap-4 md:gap-6" style={{ transform: `translateX(-${tplIdx * 22}%)`, transition: "transform 0.5s ease" }}>
            {TEMPLATES.map((t) => (
              <Link key={t.id} to={`/builder?template=${t.id}`} className="group relative w-[50%] shrink-0 md:w-[30vw] lg:w-[24vw] xl:max-w-[320px]">
                <div className="aspect-[1/1.414] overflow-hidden rounded-lg bg-white shadow-lg transition-shadow group-hover:shadow-xl">
                  <ResumePreview resume={SAMPLE_RESUME} template={t} compact />
                </div>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="rounded-lg bg-ink px-4 py-2 text-sm text-white">See Template</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-4 flex justify-center gap-2.5">
          {Array.from({ length: 8 }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setTplIdx(i)}
              className={`size-2.5 rounded-full ${i === tplIdx % 8 ? "bg-ink" : "bg-ink/20"}`}
              aria-label={`Template slide ${i + 1}`}
            />
          ))}
        </div>
        <Link
          to="/resume-templates"
          className="mt-6 rounded-xl border-2 border-solid border-ink bg-white px-6 py-3 font-bold shadow-sm hover:bg-gray-100 md:mt-10 md:px-8 md:py-4 md:text-lg"
        >
          All Resume Templates
        </Link>
      </section>

      <section className="landing-section mt-24 w-full md:mt-28 lg:mt-32">
        <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl">What's included in AiResumeDraft's Free Plan</h2>
        <p className="mt-3 text-lg text-gray530 lg:mt-5 lg:max-w-[1020px] lg:text-xl lg:leading-[1.7]">
          You won't find a more generous free plan among resume builders.
          <br className="hidden md:block" />
          Here's what you get with AiResumeDraft's free plan.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-14 md:grid-cols-2 md:mt-14 xl:grid-cols-3 lg:mt-20">
          {[
            ["Your First Resume Is Free Forever", "Create, edit, and save one resume for free for life. No trial period. No credit card. No auto-upgrade."],
            ["Just You on Your Resume", "We never brand your resume. No AiResumeDraft logo and no watermarks. Your resume is your place to shine."],
            ["Unlimited PDF Downloads", "Update, edit, and download your one free resume as often as you like. There are no download limits."],
            ["50+ Customizable Templates", "Choose from professional, ATS-friendly templates and fully customize structure, layout, and design."],
            ["Import Content or Start From Scratch", "Paste content from an existing resume, or start from a blank page."],
            ["We Respect Your Privacy", "AiResumeDraft is privacy-first and GDPR-compliant. We don't share your personal data, and you can delete it anytime."],
          ].map(([title, body]) => (
            <div key={title} className="flex flex-col items-start">
              <div className="flex size-10 items-center justify-center rounded-md bg-ink md:size-12">
                <span className="text-lg text-sand">✦</span>
              </div>
              <h3 className="mt-3 text-xl font-bold text-ink lg:mt-4">{title}</h3>
              <p className="mt-1.5 max-w-[420px] text-gray530 lg:mt-2">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="landing-section mt-24 w-full pr-0 md:mt-28 lg:mt-32">
        <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl">
          Loved & Trusted
          <br className="md:hidden" /> by Millions of Users
        </h2>
        <p className="mt-4 max-w-4xl text-base text-gray530 sm:text-lg lg:mt-8 lg:text-xl lg:leading-relaxed">
          Used by job seekers worldwide, AiResumeDraft is built to the same standard as top-rated resume builders — with a
          generous free plan, ATS-friendly templates, and no watermarks.
        </p>
        <div className="relative mt-4 lg:mt-8">
          <button
            type="button"
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-2xl border border-solid border-gray-100 bg-white p-3 shadow-lg lg:left-4"
            onClick={() => setReviewIdx((i) => Math.max(0, i - 1))}
            aria-label="Previous"
          >
            ←
          </button>
          <button
            type="button"
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-2xl border border-solid border-gray-100 bg-white p-3 shadow-lg"
            onClick={() => setReviewIdx((i) => Math.min(REVIEWS.length - 1, i + 1))}
            aria-label="Next"
          >
            →
          </button>
          <div className="scrollbar-none w-full overflow-x-scroll">
            <ul className="flex w-max -ml-4" style={{ transform: `translateX(-${reviewIdx * 360}px)`, transition: "transform 0.35s" }}>
              {REVIEWS.map((r) => (
                <li key={r.name} className="min-w-0 p-4">
                  <div className="flex h-full max-w-[380px] flex-col justify-between rounded-2xl bg-sand98 p-5 opacity-90 shadow-md lg:max-w-[440px] lg:p-8">
                    <p className="text-[15px] italic leading-[1.8] text-gray-700 lg:text-base">{r.text}</p>
                    <div className="mt-6">
                      <p className="text-base font-bold leading-[1.4] text-ink lg:text-lg">{r.name}</p>
                      <p className="text-sm text-gray-700 underline">{r.source}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="landing-section mt-24 w-full max-w-5xl md:mt-28 lg:mt-32">
        <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
        <div className="mt-8 md:mt-12">
          {FAQS.map((item, i) => (
            <div key={item.q} className="cursor-pointer border-t-2 border-solid border-gray-50" onClick={() => setFaqOpen(faqOpen === i ? null : i)}>
              <div className="flex items-center justify-between py-6 text-base font-bold text-ink hover:opacity-80">
                <p>{item.q}</p>
                <span className="text-2xl">{faqOpen === i ? "−" : "+"}</span>
              </div>
              {faqOpen === i && <p className="cursor-default pb-9 -mt-1 text-base leading-relaxed text-gray-700 lg:pr-16">{item.a}</p>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function FeatureIcon({ title }) {
  return (
    <div className="flex items-center space-x-5 sm:flex-col sm:space-x-0 sm:space-y-3 md:space-y-4">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="#1E3050" className="size-10 lg:size-12">
        <path
          opacity="0.5"
          d="M0 0L224 0c0 53.3 0 106.7 0 160l160 0 0 352L0 512 0 0z"
        />
        <path d="M384 160L224 0l0 160 160 0zM305 281l17-17L288 230.1l-17 17-111 111-47-47-17-17L62.1 328l17 17 64 64 17 17 17-17L305 281z" />
      </svg>
      <p className="text-xl font-bold leading-tight tracking-tight text-ink sm:text-center sm:text-lg md:text-xl lg:text-2xl lg:leading-snug">
        {title}
      </p>
    </div>
  );
}

function HowShot({ kind }) {
  return (
    <div className="w-full max-w-[560px] overflow-hidden rounded-[30px] bg-white shadow-shot">
      <div className="flex items-center gap-2 border-b border-gray-100 bg-[#faf8f4] px-4 py-3">
        <span className="size-2.5 rounded-full bg-red-300" />
        <span className="size-2.5 rounded-full bg-amber-300" />
        <span className="size-2.5 rounded-full bg-emerald-300" />
        <span className="ml-3 text-xs text-gray-400">airesumedraft.com/{kind}</span>
      </div>
      <div className="grid min-h-[220px] grid-cols-5 gap-3 p-4">
        <div className="col-span-2 space-y-2">
          {Array.from({ length: kind === "templates" ? 6 : 5 }).map((_, i) => (
            <div key={i} className="h-6 rounded-md bg-sandMuted" />
          ))}
        </div>
        <div className="col-span-3 overflow-hidden rounded-md border border-gray-200">
          <ResumePreview
            resume={SAMPLE_RESUME}
            template={TEMPLATES[kind === "design" ? 5 : kind === "pdf" ? 0 : 1]}
            compact
          />
        </div>
      </div>
    </div>
  );
}
