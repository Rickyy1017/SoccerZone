import React from "react";
import QRCode from "qrcode.react";

const QrCodeDisplay: React.FC = () => {
  const foodMenuUrl = window.location.origin + "/food-menu";

  return (
    <div className="p-4 flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Scan to view our Food Menu</h2>
      <QRCode value={foodMenuUrl} size={200} />
      <p className="mt-2 text-center text-sm text-gray-600">{foodMenuUrl}</p>
    </div>
  );
};

export default QrCodeDisplay;
