import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Logo from "../components/Logo.jsx";
import ResumePreview from "../components/ResumePreview.jsx";
import { SAMPLE_RESUME, TEMPLATES } from "../data/content.js";

const empty = {
  name: "",
  title: "",
  email: "",
  phone: "",
  location: "",
  website: "",
  linkedin: "",
  summary: "",
  experience: [{ company: "", role: "", dates: "", bullets: [""] }],
  education: [{ school: "", degree: "", dates: "" }],
  skills: [""],
  languages: [{ name: "English", level: 5 }],
};

function polish(text) {
  if (!text.trim()) return text;
  let t = text.replace(/\bi\b/g, "I").replace(/\s+/g, " ").trim();
  if (!/[.!?]$/.test(t)) t += ".";
  if (!/^(I |Led |Built |Developed |Managed |Created |Designed )/.test(t)) {
    t = t.charAt(0).toUpperCase() + t.slice(1);
  }
  return t;
}

export default function Builder() {
  const [params] = useSearchParams();
  const initialId = params.get("template") || "atlantic-blue";
  const [templateId, setTemplateId] = useState(initialId);
  const [tab, setTab] = useState("content");
  const [resume, setResume] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("ard_resume")) || { ...SAMPLE_RESUME };
    } catch {
      return { ...SAMPLE_RESUME };
    }
  });

  const template = useMemo(
    () => TEMPLATES.find((t) => t.id === templateId) || TEMPLATES[1],
    [templateId]
  );

  useEffect(() => {
    localStorage.setItem("ard_resume", JSON.stringify(resume));
  }, [resume]);

  const set = (patch) => setResume((r) => ({ ...r, ...patch }));

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#f7f5f2]">
      <header className="no-print flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3">
        <Link to="/">
          <Logo className="h-9 w-44" />
        </Link>
        <div className="flex gap-2">
          {["content", "design"].map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={`rounded-lg px-4 py-2 text-sm font-bold capitalize ${tab === t ? "bg-ink text-white" : "bg-sand"}`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-bold"
            onClick={() => setResume({ ...empty })}
          >
            Start blank
          </button>
          <button
            type="button"
            className="rounded-xl bg-ink px-4 py-2 text-sm font-bold text-white"
            onClick={() => window.print()}
          >
            Download PDF
          </button>
        </div>
      </header>
      <div className="grid flex-1 lg:grid-cols-[minmax(320px,42%)_1fr]">
        <aside className="no-print max-h-[calc(100vh-64px)] overflow-y-auto p-5">
          {tab === "content" ? (
            <div className="space-y-5">
              <h2 className="text-xl font-black">Add your experience</h2>
              <Field label="Full name" value={resume.name} onChange={(v) => set({ name: v })} />
              <Field label="Title" value={resume.title} onChange={(v) => set({ title: v })} />
              <Field label="Email" value={resume.email} onChange={(v) => set({ email: v })} />
              <Field label="Phone" value={resume.phone} onChange={(v) => set({ phone: v })} />
              <Field label="Location" value={resume.location} onChange={(v) => set({ location: v })} />
              <Field label="LinkedIn" value={resume.linkedin} onChange={(v) => set({ linkedin: v })} />
              <Field label="Website" value={resume.website} onChange={(v) => set({ website: v })} />
              <label className="block text-sm font-bold">
                Profile
                <textarea
                  className="mt-1 h-28 w-full rounded-xl border border-gray-300 p-3 text-sm"
                  value={resume.summary}
                  onChange={(e) => set({ summary: e.target.value })}
                />
              </label>
              <button
                type="button"
                className="rounded-lg bg-ink px-3 py-2 text-sm font-bold text-white"
                onClick={() => set({ summary: polish(resume.summary) })}
              >
                AI polish summary ✨
              </button>
              <h3 className="font-black">Work experience</h3>
              {resume.experience.map((job, i) => (
                <div key={i} className="rounded-2xl bg-white p-4 shadow-sm">
                  <Field
                    label="Role"
                    value={job.role}
                    onChange={(v) => {
                      const experience = [...resume.experience];
                      experience[i] = { ...job, role: v };
                      set({ experience });
                    }}
                  />
                  <Field
                    label="Company"
                    value={job.company}
                    onChange={(v) => {
                      const experience = [...resume.experience];
                      experience[i] = { ...job, company: v };
                      set({ experience });
                    }}
                  />
                  <Field
                    label="Dates"
                    value={job.dates}
                    onChange={(v) => {
                      const experience = [...resume.experience];
                      experience[i] = { ...job, dates: v };
                      set({ experience });
                    }}
                  />
                  <label className="mt-2 block text-sm font-bold">
                    Bullets (one per line)
                    <textarea
                      className="mt-1 h-24 w-full rounded-xl border border-gray-300 p-3 text-sm"
                      value={(job.bullets || []).join("\n")}
                      onChange={(e) => {
                        const experience = [...resume.experience];
                        experience[i] = { ...job, bullets: e.target.value.split("\n") };
                        set({ experience });
                      }}
                    />
                  </label>
                </div>
              ))}
              <button
                type="button"
                className="text-sm font-bold underline"
                onClick={() => set({ experience: [...resume.experience, { company: "", role: "", dates: "", bullets: [""] }] })}
              >
                + Add role
              </button>
              <h3 className="font-black">Education</h3>
              {resume.education.map((ed, i) => (
                <div key={i} className="rounded-2xl bg-white p-4 shadow-sm">
                  <Field
                    label="Degree"
                    value={ed.degree}
                    onChange={(v) => {
                      const education = [...resume.education];
                      education[i] = { ...ed, degree: v };
                      set({ education });
                    }}
                  />
                  <Field
                    label="School"
                    value={ed.school}
                    onChange={(v) => {
                      const education = [...resume.education];
                      education[i] = { ...ed, school: v };
                      set({ education });
                    }}
                  />
                  <Field
                    label="Dates"
                    value={ed.dates}
                    onChange={(v) => {
                      const education = [...resume.education];
                      education[i] = { ...ed, dates: v };
                      set({ education });
                    }}
                  />
                </div>
              ))}
              <h3 className="font-black">Skills</h3>
              <textarea
                className="h-24 w-full rounded-xl border border-gray-300 p-3 text-sm"
                value={(resume.skills || []).join("\n")}
                onChange={(e) => set({ skills: e.target.value.split("\n") })}
              />
            </div>
          ) : (
            <div>
              <h2 className="text-xl font-black">Customize layout & design</h2>
              <p className="mt-2 text-sm text-gray530">All templates are free. Pick one — your content stays in place.</p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {TEMPLATES.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTemplateId(t.id)}
                    className={`overflow-hidden rounded-lg border-2 ${templateId === t.id ? "border-ink" : "border-transparent"}`}
                  >
                    <div className="aspect-[1/1.2] bg-white">
                      <ResumePreview resume={resume} template={t} compact />
                    </div>
                    <p className="bg-white py-1 text-xs font-bold">{t.name}</p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </aside>
        <div className="flex justify-center bg-sand p-6 print-area">
          <div className="aspect-[1/1.414] w-full max-w-[720px] overflow-hidden bg-white shadow-hero">
            <ResumePreview resume={resume} template={template} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, value, onChange }) {
  return (
    <label className="block text-sm font-bold">
      {label}
      <input
        className="mt-1 h-11 w-full rounded-xl border border-gray-300 px-3 text-sm font-normal"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}
