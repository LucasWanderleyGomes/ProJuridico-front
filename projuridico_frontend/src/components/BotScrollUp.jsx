import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import "../styles/components/scrollUp.css"

const BotScrollUp = () => {

    const voltarTopo = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        console.log('botao clicado')
    }

    return (
        <div className="scroll-to-top">
            <button onClick={voltarTopo} className="scroll-to-top-btn">
                <FaArrowUp />
            </button>
        </div>
    )
}

export default BotScrollUp;