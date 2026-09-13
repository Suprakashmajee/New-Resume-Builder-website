import { Link } from "react-router-dom";
import ResumePreview from "../components/ResumePreview.jsx";
import { SAMPLE_RESUME, TEMPLATES } from "../data/content.js";

const groups = ["Simple", "Modern", "Creative", "Compact"];

export default function Templates() {
  return (
    <div className="landing-section w-full pb-24 pt-8">
      <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl">100+ Free Resume Templates</h1>
      <p className="mt-4 max-w-3xl text-lg text-gray530 lg:text-xl">
        Choose a professional resume template in your preferred style and format. Use our free online resume builder to add
        content and customize easily.
      </p>
      <p className="mt-3 text-ink">Unlimited PDF downloads • No watermarks • No paywalls • No hidden fees • Yes, really 🚀</p>
      {groups.map((g) => (
        <section key={g} className="mt-16">
          <h2 className="heading-display text-3xl lg:text-4xl">{g} Resume Templates</h2>
          <p className="mt-3 max-w-3xl text-gray530">
            {g === "Simple" &&
              "Our simple resume templates focus on clarity, readability, and clean professional layouts without distractions."}
            {g === "Modern" &&
              "Our modern resume templates combine a clean layout with contemporary design elements for a polished resume."}
            {g === "Creative" &&
              "Our creative resume templates use distinctive design elements to help you show personality and stay memorable."}
            {g === "Compact" &&
              "Our compact resume templates are designed to fit more content on one page without sacrificing clarity."}
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
            {TEMPLATES.filter((t) => t.category === g).map((t) => (
              <Link key={t.id} to={`/builder?template=${t.id}`} className="group">
                <div className="aspect-[1/1.414] overflow-hidden rounded-lg bg-white shadow-lg transition group-hover:shadow-xl">
                  <ResumePreview resume={SAMPLE_RESUME} template={t} compact />
                </div>
                <p className="mt-3 font-bold text-ink">{t.name}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
