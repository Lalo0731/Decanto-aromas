import React from "react";
import PerfumesGrid from "../components/PerfumesGrid";

const PerfumesDisenador = () => {
  return <PerfumesGrid title="Decants de Diseñador" filterFn={(p) => p.category === 'diseñador'} />;
}

export default PerfumesDisenador;

