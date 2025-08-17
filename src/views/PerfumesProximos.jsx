import React from "react";
import PerfumesGrid from "../components/PerfumesGrid";

const PerfumesProximos = () => {
  return <PerfumesGrid title="Próximamente" filterFn={(p) => p.category === 'next'} />;
}

export default PerfumesProximos;

