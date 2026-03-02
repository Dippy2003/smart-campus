import { Link } from "react-router-dom";

export default function ResourceTable({ resources, showAdminActions, onDelete }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 shadow-lg shadow-slate-950/60">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-800 text-sm">
          <thead className="bg-slate-900/80">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                ID
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                Name
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                Type
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                Capacity
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                Location
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                Availability
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                Status
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                View
              </th>
              {showAdminActions && (
                <>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Edit
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Delete
                  </th>
                </>
              )}
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-800 bg-slate-950/40">
            {resources.map((r) => (
              <tr key={r.id} className="hover:bg-slate-900/80 transition-colors">
                <td className="whitespace-nowrap px-4 py-3 text-slate-300">{r.id}</td>
                <td className="whitespace-nowrap px-4 py-3 font-medium text-slate-100">
                  {r.name}
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-xs font-semibold">
                  <span className="inline-flex rounded-full bg-slate-800/80 px-2 py-1 text-[11px] uppercase tracking-wide text-slate-300">
                    {r.type}
                  </span>
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-slate-300">{r.capacity}</td>
                <td className="whitespace-nowrap px-4 py-3 text-slate-300">{r.location}</td>
                <td className="whitespace-nowrap px-4 py-3 text-slate-300">
                  <span className="rounded-full bg-slate-900/80 px-2 py-1 text-xs text-slate-200">
                    {r.availabilityStart} – {r.availabilityEnd}
                  </span>
                </td>
                <td className="whitespace-nowrap px-4 py-3">
                  <span
                    className={
                      "inline-flex rounded-full px-2 py-1 text-xs font-semibold " +
                      (r.status === "ACTIVE"
                        ? "bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/40"
                        : "bg-amber-500/10 text-amber-300 ring-1 ring-amber-500/40")
                    }
                  >
                    {r.status}
                  </span>
                </td>
                <td className="whitespace-nowrap px-4 py-3">
                  <Link
                    to={`/resources/${r.id}`}
                    className="inline-flex items-center rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-100 hover:bg-slate-700"
                  >
                    Details
                  </Link>
                </td>

                {showAdminActions && (
                  <>
                    <td className="whitespace-nowrap px-4 py-3">
                      <Link
                        to={`/admin/resources/${r.id}/edit`}
                        className="inline-flex items-center rounded-full border border-slate-700 px-3 py-1 text-xs font-medium text-slate-200 hover:bg-slate-800"
                      >
                        Edit
                      </Link>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3">
                      <button
                        type="button"
                        onClick={() => onDelete?.(r.id)}
                        className="inline-flex items-center rounded-full bg-rose-600 px-3 py-1 text-xs font-medium text-rose-50 shadow-sm hover:bg-rose-500"
                      >
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}

            {resources.length === 0 && (
              <tr>
                <td
                  colSpan={showAdminActions ? 10 : 8}
                  className="px-4 py-10 text-center text-sm text-slate-400"
                >
                  No resources found. Try adjusting your filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}