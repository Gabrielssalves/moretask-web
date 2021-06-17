import React, { useState } from 'react'

const HelpUser = () => {
    const [isActiveFaq1, setActiveFaq1] = useState("false");
    const [isActiveFaq2, setActiveFaq2] = useState("false");
    const [isActiveFaq3, setActiveFaq3] = useState("false");
    const [isActiveFaq4, setActiveFaq4] = useState("false");

    const handleToggleFaq1 = () => {setActiveFaq1(!isActiveFaq1);};
    const handleToggleFaq2 = () => {setActiveFaq2(!isActiveFaq2);};
    const handleToggleFaq3 = () => {setActiveFaq3(!isActiveFaq3);};
    const handleToggleFaq4 = () => {setActiveFaq4(!isActiveFaq4);};

    //ta feio mas não consegui encontrar outra forma de iterar, infelizmente

    return (
        <div>
            <h2 className="text-center mb-2 fw-bold">Usuário</h2>

            <ul className="faq-container">
                <li className={`faq ${!isActiveFaq1 ? "active" : null}`}>
                    <h5 className="fw-bold faq-title">Q1. Onde visualizo minha tarefa?</h5>
                    <p className="faq-text">
                        R: Após realizar o logon no sistema, a primeira tela que você tem acesso é a própria tela de Tarefa, conforme imagem abaixo:
                    </p>
                    <img
                        className="border border-light border-1 rounded faq-text"
                        alt="Imagem descrevendo a tela inicial de tarefa"
                        width="92%"
                        src="user_faq_1.png">
                    </img>
                    <button className="faq-toggle" onClick={handleToggleFaq1}>
                        <i className="fas fa-chevron-down text-light"></i>
                        <i className="fas fa-times"></i>
                    </button>
                </li>

                <li className={`faq ${!isActiveFaq2 ? "active" : null}`}>
                    <h5 className="fw-bold faq-title">Q2. Como alterno entre tarefas?</h5>
                    <p className="faq-text">
                        R: Esta ferramenta tem como proposta te permitir a visualizar (e se focar) em apenas uma tarefa. Sendo assim, não é possível alternar entre tarefas. Contate seu gestor se você acreditar que a tarefa atual está errada.
                    </p>
                    <button className="faq-toggle" onClick={handleToggleFaq2}>
                        <i className="fas fa-chevron-down text-light"></i>
                        <i className="fas fa-times"></i>
                    </button>
                </li>

                <li className={`faq ${!isActiveFaq3 ? "active" : null}`}>
                    <h5 className="fw-bold faq-title">Q3. Como registro o progresso de uma tarefa?</h5>
                    <p className="faq-text">
                        R: Na mesma tela de Interface, você pode alterar o status de uma tarefa, conforme imagem abaixo:
                    </p>
                    <img
                        className="border border-light border-1 rounded faq-text"
                        alt="Imagem descrevendo o processo de alteração de status"
                        width="92%"
                        src="user_faq_2.png">
                    </img>
                    <button className="faq-toggle" onClick={handleToggleFaq3}>
                        <i className="fas fa-chevron-down text-light"></i>
                        <i className="fas fa-times"></i>
                    </button>
                </li>

                <li className={`faq ${!isActiveFaq4 ? "active" : null}`}>
                    <h5 className="fw-bold faq-title">Q4. Preciso comunicar algo na tarefa, como faço?</h5>
                    <p className="faq-text">
                        R: Para adicionar um comentário em uma tarefa, localize no final da página a área de texto de comentário. faça suas considerações e clique em "Enviar".
                    </p>
                    <img
                        className="border border-light border-1 rounded faq-text"
                        alt="Imagem descrevendo o processo de criação de comentário"
                        width="92%"
                        src="user_faq_3.png">
                    </img>
                    <button className="faq-toggle" onClick={handleToggleFaq4}>
                        <i className="fas fa-chevron-down text-light"></i>
                        <i className="fas fa-times"></i>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default HelpUser
