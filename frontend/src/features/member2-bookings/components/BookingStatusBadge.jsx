// frontend/src/features/member2-bookings/components/BookingStatusBadge.jsx

import React from "react";

const statusStyles = {
  PENDING:   { background: "#fff7e6", color: "#b45309", border: "1px solid #fcd34d" },
  APPROVED:  { background: "#ecfdf5", color: "#065f46", border: "1px solid #6ee7b7" },
  REJECTED:  { background: "#fef2f2", color: "#991b1b", border: "1px solid #fca5a5" },
  CANCELLED: { background: "#f3f4f6", color: "#374151", border: "1px solid #d1d5db" },
};

export default function BookingStatusBadge({ status }) {
  const style = statusStyles[status] || statusStyles.PENDING;
  return (
    <span
      style={{
        ...style,
        padding: "3px 10px",
        borderRadius: "999px",
        fontSize: "12px",
        fontWeight: 600,
        display: "inline-block",
        whiteSpace: "nowrap",
      }}
    >
      {status}
    </span>
  );
}
