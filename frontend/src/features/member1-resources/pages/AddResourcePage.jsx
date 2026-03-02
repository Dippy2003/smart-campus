import { useNavigate } from "react-router-dom";
import ResourceForm from "../components/ResourceForm";
import { createResource } from "../services/resourceApi";

export default function AddResourcePage() {
  const nav = useNavigate();

  const submit = async (data) => {
    await createResource(data);
    nav("/admin/resources");
  };

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">
          Add resource
        </h2>
        <p className="mt-1 text-xs text-slate-400">
          Fill in the details below to create a new resource.
        </p>
      </div>

      <ResourceForm onSubmit={submit} submitText="Create resource" />
    </div>
  );
}