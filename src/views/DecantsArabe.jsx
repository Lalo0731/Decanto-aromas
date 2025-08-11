import React from "react";
import '../styles/decantsArabe.scss';
import PerfumesGrid from "../components/PerfumesGrid";

const DecantsArabe = () =>{
    return <PerfumesGrid title="Decants Árabe" filterFn={(p) => p.category === 'arabe'} />;
}

export default DecantsArabe;