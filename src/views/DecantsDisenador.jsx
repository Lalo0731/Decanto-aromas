import React from "react";
import PerfumesGrid from "../components/PerfumesGrid";

const DecantsDisenador = () =>{
    // return <PerfumesGrid title="Decants de Diseñador" filterFn={(p) => p.category === 'diseñador' && p.isDecant} />;
    return <PerfumesGrid title="Decants de Diseñador" filterFn={(p) => p.category === 'diseñador' && (p.isDecant || p.isDecantOnly)} />;
}

export default DecantsDisenador;