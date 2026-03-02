import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getResourceById } from "../services/resourceApi";

export default function ResourceDetailsPage() {
  const { id } = useParams();
  const [resource, setResource] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await getResourceById(id);
        setResource(res.data);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) {
    return (
      <p className="text-xs text-slate-400">
        Loading resource…
      </p>
    );
  }

  if (!resource) {
    return (
      <div className="rounded-2xl border border-rose-500/40 bg-rose-950/40 px-4 py-3 text-sm text-rose-100">
        Resource not found.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">
            {resource.name}
          </h2>
          <p className="mt-1 text-xs text-slate-400">
            Detailed information about this resource.
          </p>
        </div>

        <span className="inline-flex items-center rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-slate-200">
          ID: {resource.id}
        </span>
      </div>

      <div className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 text-sm text-slate-100 sm:grid-cols-2">
        <div className="space-y-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
              Type
            </p>
            <p className="mt-1 inline-flex rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-200">
              {resource.type}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
              Capacity
            </p>
            <p className="mt-1 text-slate-100">{resource.capacity}</p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
              Location
            </p>
            <p className="mt-1 text-slate-100">{resource.location}</p>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
              Availability
            </p>
            <p className="mt-1 text-slate-100">
              {resource.availabilityStart} – {resource.availabilityEnd}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
              Status
            </p>
            <p className="mt-1">
              <span
                className={
                  "inline-flex rounded-full px-3 py-1 text-xs font-semibold " +
                  (resource.status === "ACTIVE"
                    ? "bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/40"
                    : "bg-amber-500/10 text-amber-300 ring-1 ring-amber-500/40")
                }
              >
                {resource.status}
              </span>
            </p>
          </div>
        </div>
      </div>

      <Link
        to="/resources"
        className="inline-flex items-center text-xs font-medium text-slate-300 hover:text-slate-100"
      >
        ← Back to resources
      </Link>
    </div>
  );
}