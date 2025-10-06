import React from "react";
import PerfumesGrid from "../components/PerfumesGrid";

const PerfumesArabes = () => {
  // return <PerfumesGrid title="Perfumes Árabes" filterFn={(p) => p.category === 'arabe' && !p.isDecant && !p.isDecantOnly} />;
  return <PerfumesGrid title="Perfumes Árabes" filterFn={(p) => p.category === 'arabes' && !p.isDecantOnly} />;
}

export default PerfumesArabes;

