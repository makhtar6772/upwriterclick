import React from "react";

function UserMessage({ message }) {
  return (
    <div className="bg-gray-200 p-4 rounded-md mt-4">
      <p className="text-gray-800">{message}</p>
    </div>
  );
}

export default UserMessage;
