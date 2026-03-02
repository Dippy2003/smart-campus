import { Link } from "react-router-dom";

export default function ResourceCard({ resource }) {
  return (
    <div className="flex w-full max-w-sm flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950/70 p-4 shadow-lg shadow-slate-950/60">
      <div className="space-y-2">
        <h3 className="text-base font-semibold tracking-tight text-slate-50">
          {resource.name}
        </h3>

        <div className="flex flex-wrap gap-2 text-xs">
          <span className="inline-flex items-center rounded-full bg-slate-900 px-2 py-1 font-semibold uppercase tracking-wide text-[11px] text-slate-300">
            {resource.type}
          </span>
          <span className="inline-flex items-center rounded-full bg-slate-900 px-2 py-1 text-slate-300">
            Capacity: {resource.capacity}
          </span>
          <span
            className={
              "inline-flex items-center rounded-full px-2 py-1 text-xs font-semibold " +
              (resource.status === "ACTIVE"
                ? "bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/40"
                : "bg-amber-500/10 text-amber-300 ring-1 ring-amber-500/40")
            }
          >
            {resource.status}
          </span>
        </div>

        <p className="mt-1 text-xs text-slate-400">
          <span className="font-medium text-slate-300">Location:</span> {resource.location}
        </p>
      </div>

      <div className="mt-4 flex justify-between text-xs text-slate-400">
        <div>
          <p className="text-[11px] uppercase tracking-wide text-slate-500">
            Availability
          </p>
          <p className="font-medium text-slate-200">
            {resource.availabilityStart} – {resource.availabilityEnd}
          </p>
        </div>

        <Link
          to={`/resources/${resource.id}`}
          className="inline-flex items-center rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-100 hover:bg-slate-700"
        >
          View details
        </Link>
      </div>
    </div>
  );
}