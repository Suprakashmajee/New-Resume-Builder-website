import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo.jsx";

const links = [
  { to: "/", label: "Resume Builder" },
  { to: "/resume-templates", label: "Resume Templates" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[100] grid w-full max-w-none bg-transparent lg:px-2 lg:pt-4 xl:px-6">
      <div className="grid w-full grid-cols-[max-content_max-content] items-center justify-between gap-4 bg-sand/90 px-3 py-[10px] backdrop-blur md:px-6 md:py-3 lg:grid-cols-[max-content_1fr_max-content] lg:rounded-xl lg:px-4">
        <Link to="/" className="z-40 hover:opacity-90" aria-label="AiResumeDraft home">
          <Logo className="w-40 lg:w-56" />
        </Link>
        <nav className="mr-10 hidden justify-end gap-6 text-xl lg:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `p-3 hover:opacity-90 ${isActive ? "text-ink" : "text-gray-400"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/login"
            className="flex h-10 w-auto cursor-pointer items-center justify-center rounded-lg border-2 border-solid border-gray-700 px-3.5 text-sm font-bold text-ink hover:opacity-80 sm:px-5 lg:h-12 lg:rounded-xl lg:px-8 lg:text-base"
          >
            Login
          </Link>
          <Link
            to="/builder"
            className="flex h-10 w-auto cursor-pointer items-center justify-center rounded-lg border-none bg-ink px-3.5 text-sm font-bold text-white hover:opacity-80 sm:px-5 lg:h-12 lg:rounded-xl lg:px-8 lg:text-base"
          >
            Start now
          </Link>
          <button
            type="button"
            className="ml-1 grid h-10 w-10 place-items-center rounded-lg border border-gray-300 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
          >
            <span className="block h-0.5 w-5 bg-ink" />
            <span className="mt-1 block h-0.5 w-5 bg-ink" />
          </button>
        </div>
      </div>
      {open && (
        <div className="mx-3 mb-2 rounded-xl bg-white p-4 shadow-lg lg:hidden">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="block py-3 text-lg text-ink" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
