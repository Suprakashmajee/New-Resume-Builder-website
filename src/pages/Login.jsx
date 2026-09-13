import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex w-full justify-center px-4 py-16">
      <form
        className="w-full max-w-md rounded-3xl bg-white p-8 shadow-md"
        onSubmit={(e) => {
          e.preventDefault();
          localStorage.setItem("ard_user", JSON.stringify({ email: email || "you@airesumedraft.com" }));
          nav("/builder");
        }}
      >
        <h1 className="heading-display text-3xl">Login</h1>
        <p className="mt-2 text-gray530">Continue to AiResumeDraft at airesumedraft.com</p>
        <label className="mt-6 block text-sm font-bold">Email</label>
        <input
          className="mt-1 h-12 w-full rounded-xl border border-gray-300 px-3"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
        />
        <label className="mt-4 block text-sm font-bold">Password</label>
        <input
          className="mt-1 h-12 w-full rounded-xl border border-gray-300 px-3"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="mt-6 h-12 w-full rounded-xl bg-ink font-bold text-white">
          Continue
        </button>
        <p className="mt-4 text-center text-sm text-gray530">
          No account yet?{" "}
          <Link className="font-bold underline" to="/builder">
            Start now — it's free
          </Link>
        </p>
      </form>
    </div>
  );
}
