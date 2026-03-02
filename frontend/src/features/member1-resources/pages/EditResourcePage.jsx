import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ResourceForm from "../components/ResourceForm";
import { getResourceById, updateResource } from "../services/resourceApi";

export default function EditResourcePage() {
  const { id } = useParams();
  const nav = useNavigate();
  const [initialValues, setInitialValues] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getResourceById(id);
      setInitialValues(res.data);
    })();
  }, [id]);

  const submit = async (data) => {
    await updateResource(id, data);
    nav("/admin/resources");
  };

  if (!initialValues) {
    return (
      <p className="text-xs text-slate-400">
        Loading resource…
      </p>
    );
  }

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">
          Edit resource
        </h2>
        <p className="mt-1 text-xs text-slate-400">
          Update the fields below and save your changes.
        </p>
      </div>

      <ResourceForm initialValues={initialValues} onSubmit={submit} submitText="Save changes" />
    </div>
  );
}