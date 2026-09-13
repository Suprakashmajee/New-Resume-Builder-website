import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";

export default function Footer() {
  return (
    <footer className="mt-24 w-full border-t border-gray-200 bg-sand px-6 py-16 md:px-12">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo className="w-48" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-gray530">
            We are indie developers building AiResumeDraft for job seekers worldwide. Our mission:
            empower careers with a truly free, ATS-friendly resume builder at{" "}
            <a className="underline" href="https://airesumedraft.com/">
              airesumedraft.com
            </a>
            .
          </p>
        </div>
        <div>
          <p className="mb-4 font-bold text-ink">Product</p>
          <ul className="space-y-2 text-gray530">
            <li>
              <Link to="/resume-templates">Resume Templates</Link>
            </li>
            <li>
              <Link to="/builder">AI Resume Writer</Link>
            </li>
            <li>
              <Link to="/cover-letter">Cover Letter</Link>
            </li>
            <li>
              <Link to="/builder">Job Tracker</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-4 font-bold text-ink">Company</p>
          <ul className="space-y-2 text-gray530">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/terms">Terms of Service</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-4 font-bold text-ink">Get in touch</p>
          <a className="text-gray530 underline" href="mailto:support@airesumedraft.com">
            support@airesumedraft.com
          </a>
          <p className="mt-4 text-sm text-gray530">USA · India · Europe · Worldwide</p>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-6xl text-sm text-gray-500">
        © {new Date().getFullYear()} AiResumeDraft · airesumedraft.com
      </p>
    </footer>
  );
}
