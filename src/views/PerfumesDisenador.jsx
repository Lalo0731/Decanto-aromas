import React from "react";
import PerfumesGrid from "../components/PerfumesGrid";

const PerfumesDisenador = () => {
  // return <PerfumesGrid title="Perfumes de Diseñador" filterFn={(p) => p.category === 'diseñador' && !p.isDecant && !p.isDecantOnly} />;
  return <PerfumesGrid title="Perfumes de Diseñador" filterFn={(p) => p.category === 'disenador' && !p.isDecantOnly} />;
}

export default PerfumesDisenador;

