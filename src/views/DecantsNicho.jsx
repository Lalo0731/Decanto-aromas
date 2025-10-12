import React from "react";
import PerfumesGrid from "../components/PerfumesGrid";

const DecantsNicho = () => {
  return <PerfumesGrid title="Decants Nicho" filterFn={(p) => p.category === 'nicho'} />;
}

export default DecantsNicho;

