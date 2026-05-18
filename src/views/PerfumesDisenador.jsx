import React from "react";
// import PerfumesGrid from "../components/PerfumesGrid";
import PerfumesFull from "../components/PerfumesFull";

const PerfumesDisenador = () => {
  return <PerfumesFull title="Perfumes de Diseñador" filterFn={(p) => p.category === 'disenador' && !p.isDecantOnly} />;

  // return <PerfumesGrid title="Perfumes de Diseñador" filterFn={(p) => p.category === 'disenador' && !p.isDecantOnly} />;
}

export default PerfumesDisenador;

