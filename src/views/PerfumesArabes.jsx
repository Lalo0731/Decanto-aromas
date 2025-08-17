import React from "react";
import PerfumesGrid from "../components/PerfumesGrid";

const PerfumesArabes = () => {
  return <PerfumesGrid title="Perfumes Árabes" filterFn={(p) => p.category === 'arabe'} />;
}

export default PerfumesArabes;

