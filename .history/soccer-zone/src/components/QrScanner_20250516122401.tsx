import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { QrReader } from "react-qr-reader";

const QrScanner: React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const handleScan = (result: string | null) => {
    if (result) {
      // Assuming the QR code contains a URL or a keyword to navigate to FoodMenu
      if (result.includes("/food-menu")) {
        navigate("/food-menu");
      } else {
        setError("Invalid QR code scanned.");
      }
    }
  };

  const handleError = (err: Error) => {
    setError(err?.message || "Error scanning QR code");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Scan QR Code</h1>
      <QrReader
        onResult={(result: any, error: any) => {
          if (!!result) {
            handleScan(result?.getText());
          }
          if (!!error) {
            handleError(error);
          }
        }}
        constraints={{ facingMode: "environment" }}
        containerStyle={{ width: "100%" }}
      />
      {error && <p className="text-red-600 mt-4">{error}</p>}
    </div>
  );
};

export default QrScanner;
