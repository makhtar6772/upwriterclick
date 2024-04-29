import React from "react";

function ServiceCard({ title, onClick }) {
  return (
    <div
      onClick={onClick}
      className="project-card bg-white rounded-lg shadow-lg mb-[-0.75rem] flex items-center justify-center h-[70px] hover:bg-blue-50 cursor-pointer"
    >
      <h4 className="text-lg font-semibold">{title}</h4>
    </div>
  );
}

export default ServiceCard;
