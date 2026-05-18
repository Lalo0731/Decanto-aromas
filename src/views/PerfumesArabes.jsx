import React from "react";
// import PerfumesGrid from "../components/PerfumesGrid";
import PerfumesFull from "../components/PerfumesFull";

const PerfumesArabes = () => {
  // return <PerfumesGrid title="Perfumes Árabes" filterFn={(p) => p.category === 'arabe' && !p.isDecant && !p.isDecantOnly} />;
  return <PerfumesFull title="Perfumes Árabes" filterFn={(p) => p.category === 'arabes' && !p.isDecantOnly} />;
}

export default PerfumesArabes;

