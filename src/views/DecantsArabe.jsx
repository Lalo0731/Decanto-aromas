import React from "react";
import '../styles/decantsArabe.scss';
import PerfumesGrid from "../components/PerfumesGrid";

const DecantsArabe = () =>{
    // return <PerfumesGrid title="Decants Árabe" filterFn={(p) => p.category === 'arabe' && p.isDecant} />;
    return <PerfumesGrid title="Decants Árabe" filterFn={(p) => p.category === 'arabes' && (p.isDecant || p.isDecantOnly)} />;
}

export default DecantsArabe;