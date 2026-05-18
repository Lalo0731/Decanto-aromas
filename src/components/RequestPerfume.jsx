import React from "react";
import { useState } from "react";
import "../styles/components/requestPerfume.scss";

export default function RequestPerfume(){
    
    const [perfume, setPerfume] = useState("");
    
    const handleWhatsApp = () => {
        if(!perfume.trim()) return;

        const phone = "529617602165";

        const message = `Hola, estoy buscando este perfume:\n${perfume}`;

        const encodedMessage = encodeURIComponent(message);

        window.open(
            `https://wa.me/${phone}?text=${encodedMessage}`,
            "_blank"
        );
    }

    return(
        <section className="request">
            <div className="request__container">
                <h1 className="request__title">
                    ¿No encuentras tu perfune?
                </h1>
                <p className="request__subtitle">
                    Nosotros te ayudamos a conseguirlo
                </p>
                <div className="request__box">
                    <input 
                        type="text" 
                        placeholder="Ejemplo: Baccarat Rouge 540"
                        value={perfume}
                        onChange={(e) => setPerfume(e.target.value)}
                        className="request__input" 
                    />
                    <button 
                        className="request__btn"
                        onClick={handleWhatsApp}
                    >
                        Buscar por WhatsApp
                    </button>
                </div>
                <div className="request__examples">
                    <p>Ejemplos:</p>
                    <span>9PM</span>
                    <span>Erba Pura</span>
                    <span>Yara candy</span>
                    <span>Sauvage Dior</span>
                </div>
            </div>
        </section>
    );
};