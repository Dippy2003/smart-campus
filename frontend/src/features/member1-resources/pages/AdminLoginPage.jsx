import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAdminAuth } from "../../../shared/auth/AdminAuthContext";

export default function AdminLoginPage() {
  const { login } = useAdminAuth();
  const nav = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const from = location.state?.from?.pathname || "/admin/resources";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    const result = await login(username, password);
    setSubmitting(false);

    if (!result.success) {
      setError(result.message || "Login failed.");
      return;
    }

    nav(from, { replace: true });
  };

  return (
    <div className="mx-auto max-w-md space-y-6">
      <div className="space-y-1">
        <h2 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">
          Resource admin login
        </h2>
        <p className="text-xs text-slate-400">
          Only resource administrators can access the admin area.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/70 p-5 shadow-lg shadow-slate-950/60"
      >
        {error && (
          <div className="rounded-xl border border-rose-500/40 bg-rose-950/40 px-3 py-2 text-xs text-rose-100">
            {error}
          </div>
        )}

        <div className="space-y-1">
          <label className="text-xs font-medium uppercase tracking-wide text-slate-400">
            Username
          </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            className="h-10 w-full rounded-lg border border-slate-800 bg-slate-900/70 px-3 text-sm text-slate-100 outline-none ring-0 transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50"
            placeholder="admin"
            required
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-medium uppercase tracking-wide text-slate-400">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            className="h-10 w-full rounded-lg border border-slate-800 bg-slate-900/70 px-3 text-sm text-slate-100 outline-none ring-0 transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50"
            placeholder="admin123"
            required
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-emerald-950 shadow-sm shadow-emerald-500/40 transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? "Signing in…" : "Sign in"}
        </button>

        <p className="mt-2 text-[11px] leading-snug text-slate-500">
          Demo credentials: <span className="font-mono">admin / admin123</span>.
        </p>
      </form>
    </div>
  );
}

