import React from "react";
import PerfumesGrid from "../components/PerfumesGrid";

const PerfumesArabes = () => {
  return <PerfumesGrid title="arabe" filterFn={(p) => p.isNew} />;
}

export default PerfumesArabes;

