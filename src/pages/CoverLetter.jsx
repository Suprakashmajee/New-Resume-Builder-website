import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo.jsx";

export default function CoverLetter() {
  const [letter, setLetter] = useState(
    "Dear Hiring Manager,\n\nI am writing to express my interest in the open role. My background in product and business development has prepared me to contribute immediately.\n\nThank you for your time and consideration.\n\nSincerely,\nBrian T. Wayne"
  );

  return (
    <div className="min-h-screen w-full bg-sand">
      <header className="no-print flex items-center justify-between border-b bg-white px-4 py-3">
        <Link to="/">
          <Logo className="h-9 w-44" />
        </Link>
        <button type="button" className="rounded-xl bg-ink px-4 py-2 text-sm font-bold text-white" onClick={() => window.print()}>
          Download PDF
        </button>
      </header>
      <div className="grid lg:grid-cols-2">
        <textarea
          className="no-print m-4 min-h-[70vh] rounded-2xl border p-6"
          value={letter}
          onChange={(e) => setLetter(e.target.value)}
        />
        <div className="m-4 min-h-[70vh] whitespace-pre-wrap bg-white p-12 shadow-hero print-area">{letter}</div>
      </div>
    </div>
  );
}
