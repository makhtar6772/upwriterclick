import React from "react";

function DownloadCard({ logo, name }) {
  return (
    <div>
      <div className="grid grid-cols-auto gap-15 mt-2">
        <div className="bg-white p-15 rounded-md shadow-md flex flex-row items-center gap-2 p-4 hover:bg-blue-50 cursor-pointer">
          <img width="30" src={logo} alt={name} />
          <a href="#" className="ml-2 text-[20px]">
            {name}
          </a>
        </div>
      </div>
    </div>
  );
}

export default DownloadCard;
