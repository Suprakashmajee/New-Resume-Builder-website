export default function Legal({ kind }) {
  const title = kind === "privacy" ? "Privacy Policy" : "Terms of Service";
  return (
    <div className="landing-section w-full max-w-3xl pb-24 pt-10">
      <h1 className="heading-display text-4xl">{title}</h1>
      <p className="mt-6 leading-relaxed text-gray530">
        AiResumeDraft (airesumedraft.com) is privacy-first. We store resume drafts in your browser unless you choose to
        create an account. We do not sell personal data. You can delete your content at any time.
      </p>
      <p className="mt-4 leading-relaxed text-gray530">
        Contact: support@airesumedraft.com. This site is provided as-is to help you create professional, ATS-friendly
        resumes.
      </p>
    </div>
  );
}
