import React from "react";

const ProductViewer = () => {
  return (
    <div style={{ width: "100%", height: "600px" }}>
      <iframe
        src="/Configurateur_bidon_3L/index.html" 
        style={{ width: "100%", height: "100%", border: "none" }}
        title="Bidon 3L"
      ></iframe>
    </div>
  );
};

export default ProductViewer;