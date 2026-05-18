import React from "react";
import '../styles/decantsArabe.scss';
// import PerfumesGrid from "../components/PerfumesGrid";
import PerfumesDecants from "../components/PerfumesDecants";

const DecantsArabe = () =>{
    // return <PerfumesGrid title="Decants Árabe" filterFn={(p) => p.category === 'arabe' && p.isDecant} />;
    return <PerfumesDecants title="Decants Árabe" filterFn={(p) => p.category === 'arabes' && (p.isDecant || p.isDecantOnly)} />;
}

export default DecantsArabe;