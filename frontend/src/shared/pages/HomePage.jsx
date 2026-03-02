import { Link } from "react-router-dom";
import { useAdminAuth } from "../auth/AdminAuthContext";

function ModuleCard({ title, description, to, cta }) {
  return (
    <Link
      to={to}
      className="group block rounded-2xl border border-slate-800 bg-slate-950/60 p-5 shadow-lg shadow-slate-950/60 transition hover:-translate-y-0.5 hover:border-slate-700 hover:bg-slate-950/80"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1">
          <h3 className="text-base font-semibold tracking-tight text-slate-50">
            {title}
          </h3>
          <p className="text-xs text-slate-400">
            {description}
          </p>
        </div>
        <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-[11px] font-semibold text-slate-300 transition group-hover:border-slate-600 group-hover:text-slate-200">
          {cta}
        </span>
      </div>
    </Link>
  );
}

export default function HomePage() {
  const { isAdmin } = useAdminAuth();

  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-950 to-emerald-950/30 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Welcome
            </h2>
            <p className="max-w-2xl text-sm text-slate-300">
              This is the main dashboard that combines all 4 members’ parts. Students can
              browse resources, and resource admins can manage the catalog.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Link
              to="/resources"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-emerald-950 shadow-sm shadow-emerald-500/40 transition hover:bg-emerald-400"
            >
              Find resources
            </Link>
            <Link
              to={isAdmin ? "/admin/resources" : "/admin/login"}
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950/40 px-5 py-2 text-sm font-semibold text-slate-100 transition hover:bg-slate-900/60"
            >
              {isAdmin ? "Go to admin" : "Admin login"}
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
            Modules (4 members)
          </h3>
          <p className="mt-1 text-xs text-slate-400">
            Member 1 is implemented. Member 2–4 tiles are placeholders you can replace with
            your real pages when ready.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ModuleCard
            title="Member 1 · Resources"
            description="Search, filter, and view resource details."
            to="/resources"
            cta="Open"
          />
          <ModuleCard
            title="Member 2 · Coming soon"
            description="Add your member 2 feature here."
            to="/member2"
            cta="Preview"
          />
          <ModuleCard
            title="Member 3 · Coming soon"
            description="Add your member 3 feature here."
            to="/member3"
            cta="Preview"
          />
          <ModuleCard
            title="Member 4 · Coming soon"
            description="Add your member 4 feature here."
            to="/member4"
            cta="Preview"
          />
        </div>
      </section>
    </div>
  );
}

