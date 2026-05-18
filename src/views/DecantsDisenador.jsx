import React from "react";
// import PerfumesGrid from "../components/PerfumesGrid";

import PerfumesDecants from "../components/PerfumesDecants";

const DecantsDisenador = () =>{
    return <PerfumesDecants title="Decants de Diseñador" filterFn={(p) => p.category === 'disenador' && (p.isDecant || p.isDecantOnly)} />;
    // return <PerfumesGrid title="Decants de Diseñador" filterFn={(p) => p.category === 'disenador' && (p.isDecant || p.isDecantOnly)} />;
}

export default DecantsDisenador;