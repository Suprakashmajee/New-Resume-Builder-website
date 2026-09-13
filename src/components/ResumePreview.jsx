function Avatar() {
  return (
    <img
      alt=""
      src="https://api.dicebear.com/9.x/adventurer/svg?seed=Brian"
      className="mx-auto mb-3 h-16 w-16 rounded-full bg-white object-cover"
    />
  );
}

export default function ResumePreview({ resume, template, compact = false }) {
  const accent = template?.accent || "#1B4F72";
  const layout = template?.layout || "sidebar";
  const scale = compact ? "text-[5.2px] leading-[1.35]" : "text-[8.5px] leading-[1.4]";
  const pad = compact ? "p-3" : "p-5";

  if (layout === "sidebar") {
    return (
      <div className={`grid h-full min-h-0 grid-cols-[34%_66%] overflow-hidden bg-white ${scale}`}>
        <aside className={`${pad} text-white`} style={{ background: accent }}>
          <Avatar />
          <p className="text-center text-[1.55em] font-bold leading-tight">{resume.name}</p>
          <p className="mt-1 text-center text-[1.05em] opacity-90">{resume.title}</p>
          <div className="mt-4 space-y-1 opacity-90">
            <p>{resume.email}</p>
            <p>{resume.phone}</p>
            <p>{resume.location}</p>
            <p>{resume.linkedin}</p>
            <p>{resume.website}</p>
          </div>
          <p className="mt-5 mb-1 text-[0.95em] font-semibold tracking-[0.18em]">PROFILE</p>
          <p className="opacity-90">{resume.summary}</p>
          <p className="mt-5 mb-1 text-[0.95em] font-semibold tracking-[0.18em]">LANGUAGES</p>
          {(resume.languages || []).map((l) => (
            <div key={l.name} className="mb-1 flex items-center justify-between">
              <span>{l.name}</span>
              <span>{"●".repeat(l.level)}{"○".repeat(5 - l.level)}</span>
            </div>
          ))}
        </aside>
        <div className={`${pad} text-slate-800`}>
          <Section title="WORK EXPERIENCE" accent={accent} />
          {(resume.experience || []).map((job) => (
            <div key={job.company + job.dates} className="mb-3">
              <p className="font-bold">{job.company}</p>
              <p className="italic">{job.role}</p>
              <p className="opacity-70">{job.dates}</p>
              <ul className="mt-1 list-disc pl-3">
                {(job.bullets || []).map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
          <Section title="EDUCATION" accent={accent} />
          {(resume.education || []).map((ed) => (
            <div key={ed.degree + ed.dates} className="mb-2">
              <p className="font-bold">{ed.degree}</p>
              <p>{ed.school}</p>
              <p className="opacity-70">{ed.dates}</p>
            </div>
          ))}
          <Section title="SKILLS" accent={accent} />
          <ul className="list-disc pl-3">
            {(resume.skills || []).map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  if (layout === "banner") {
    return (
      <div className={`h-full bg-white ${scale}`}>
        <div className={`${pad} text-white`} style={{ background: accent }}>
          <p className="text-[2em] font-bold">{resume.name}</p>
          <p className="opacity-90">{resume.title}</p>
          <p className="mt-1 opacity-80">
            {resume.email} · {resume.phone} · {resume.location}
          </p>
        </div>
        <div className={pad}>
          <p className="mb-3">{resume.summary}</p>
          {(resume.experience || []).map((job) => (
            <div key={job.company} className="mb-2">
              <p className="font-bold">
                {job.role} — {job.company}
              </p>
              <p className="opacity-70">{job.dates}</p>
              <ul className="list-disc pl-3">
                {(job.bullets || []).map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`h-full bg-white ${pad} ${scale} text-slate-800`}>
      <p className="text-[2.1em] font-bold tracking-tight" style={{ color: accent }}>
        {resume.name}
      </p>
      <p className="text-[1.15em]">{resume.title}</p>
      <p className="mt-1 opacity-70">
        {resume.email} · {resume.phone} · {resume.location}
      </p>
      {layout === "rule" && <div className="my-2 h-[1.5px]" style={{ background: accent }} />}
      <p className="mt-2">{resume.summary}</p>
      <p className="mt-3 font-bold tracking-[0.14em]" style={{ color: accent }}>
        EXPERIENCE
      </p>
      {(resume.experience || []).map((job) => (
        <div key={job.company} className="mb-2">
          <div className="flex justify-between gap-2">
            <p className="font-bold">{job.role}</p>
            <p className="opacity-70">{job.dates}</p>
          </div>
          <p className="italic">{job.company}</p>
          <ul className="list-disc pl-3">
            {(job.bullets || []).map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
      <p className="mt-2 font-bold tracking-[0.14em]" style={{ color: accent }}>
        EDUCATION
      </p>
      {(resume.education || []).map((ed) => (
        <p key={ed.degree}>
          <b>{ed.degree}</b> — {ed.school} ({ed.dates})
        </p>
      ))}
      <p className="mt-2 font-bold tracking-[0.14em]" style={{ color: accent }}>
        SKILLS
      </p>
      <p>{(resume.skills || []).join(" · ")}</p>
    </div>
  );
}

function Section({ title, accent }) {
  return (
    <p className="mb-2 border-b pb-1 text-[1.05em] font-bold tracking-[0.16em]" style={{ borderColor: accent, color: accent }}>
      {title}
    </p>
  );
}
