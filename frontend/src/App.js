import { Routes, Route, Link } from "react-router-dom";

import ResourcesPage from "./features/member1-resources/pages/ResourcesPage";
import ResourceDetailsPage from "./features/member1-resources/pages/ResourceDetailsPage";
import AdminResourcesPage from "./features/member1-resources/pages/AdminResourcesPage";
import AddResourcePage from "./features/member1-resources/pages/AddResourcePage";
import EditResourcePage from "./features/member1-resources/pages/EditResourcePage";
import AdminLoginPage from "./features/member1-resources/pages/AdminLoginPage";
import AdminRoute from "./shared/auth/AdminRoute";
import { useAdminAuth } from "./shared/auth/AdminAuthContext";
import HomePage from "./shared/pages/HomePage";
import PlaceholderModulePage from "./shared/pages/PlaceholderModulePage";

export default function App() {
  const { isAdmin, logout } = useAdminAuth();

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-6 lg:py-10">
        <header className="mb-8 flex flex-col gap-4 border-b border-slate-800 pb-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Resource Management
            </h1>
            <p className="mt-1 text-sm text-slate-400">
              Browse, administer, and keep track of all your resources.
            </p>
          </div>

          <nav className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 p-1 text-sm">
            <Link
              to="/"
              className="rounded-full px-4 py-2 font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              Home
            </Link>
            <Link
              to="/resources"
              className="rounded-full px-4 py-2 font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              Resources
            </Link>

            {isAdmin ? (
              <>
                <Link
                  to="/admin/resources"
                  className="rounded-full px-4 py-2 font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
                >
                  Admin
                </Link>
                <Link
                  to="/admin/resources/new"
                  className="rounded-full bg-emerald-500 px-4 py-2 font-medium text-emerald-950 shadow-sm transition hover:bg-emerald-400"
                >
                  Add resource
                </Link>
                <button
                  type="button"
                  onClick={logout}
                  className="rounded-full px-3 py-2 text-xs font-medium text-slate-400 hover:bg-slate-800 hover:text-slate-100"
                >
                  Log out
                </button>
              </>
            ) : (
              <Link
                to="/admin/login"
                className="rounded-full px-4 py-2 font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
              >
                Admin login
              </Link>
            )}
          </nav>
        </header>

        <main className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4 shadow-[0_18px_60px_rgba(15,23,42,0.85)] backdrop-blur-sm sm:p-6 lg:p-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/resources/:id" element={<ResourceDetailsPage />} />

            <Route path="/admin/login" element={<AdminLoginPage />} />

            <Route
              path="/admin/resources"
              element={
                <AdminRoute>
                  <AdminResourcesPage />
                </AdminRoute>
              }
            />
            <Route
              path="/admin/resources/new"
              element={
                <AdminRoute>
                  <AddResourcePage />
                </AdminRoute>
              }
            />
            <Route
              path="/admin/resources/:id/edit"
              element={
                <AdminRoute>
                  <EditResourcePage />
                </AdminRoute>
              }
            />

            <Route path="/member2" element={<PlaceholderModulePage title="Member 2 Module" />} />
            <Route path="/member3" element={<PlaceholderModulePage title="Member 3 Module" />} />
            <Route path="/member4" element={<PlaceholderModulePage title="Member 4 Module" />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}