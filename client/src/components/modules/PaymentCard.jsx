import React, { useState } from "react";

function PaymentCard() {
  return (
    <div class="bg-white rounded-lg shadow-lg p-6 flex flex-row justify-between w-[90%] m-auto">
      {/* JazCash */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Jmeel Ahmad</h2>
        <p className="text-sm">03477046772</p>
        <p className="text-sm">JazCash</p>
      </div>

      {/* EasyPaisa */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Jameel Ahmad</h2>
        <p className="text-sm">03477046772</p>
        <p className="text-sm">EasyPaisa</p>
      </div>

      {/* Bank Transfer */}
      <div>
        <h2 className="text-lg font-semibold">Muhammad Akhtar</h2>
        <p className="text-sm">Meezan Bank PK89MEZN0022020103631833</p>
        <p className="text-sm">Bank Transfer</p>
      </div>
    </div>
  );
}

export default PaymentCard;
