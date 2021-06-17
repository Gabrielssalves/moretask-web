import React, { useState } from 'react'

const HelpAdmin = () => {
    const [isActiveFaq1, setActiveFaq1] = useState("false");
    const [isActiveFaq2, setActiveFaq2] = useState("false");
    const [isActiveFaq3, setActiveFaq3] = useState("false");
    const [isActiveFaq4, setActiveFaq4] = useState("false");
    const [isActiveFaq5, setActiveFaq5] = useState("false");
    const [isActiveFaq6, setActiveFaq6] = useState("false");

    const handleToggleFaq1 = () => {setActiveFaq1(!isActiveFaq1);};
    const handleToggleFaq2 = () => {setActiveFaq2(!isActiveFaq2);};
    const handleToggleFaq3 = () => {setActiveFaq3(!isActiveFaq3);};
    const handleToggleFaq4 = () => {setActiveFaq4(!isActiveFaq4);};
    const handleToggleFaq5 = () => {setActiveFaq5(!isActiveFaq5);};
    const handleToggleFaq6 = () => {setActiveFaq6(!isActiveFaq6);};

    //ta feio mas não consegui encontrar outra forma de iterar, infelizmente

    return (
        <div>
            <h2 className="text-center mb-2 fw-bold">Administrador</h2>

            <ul className="faq-container">
                <li className={`faq ${!isActiveFaq1 ? "active" : null}`}>
                    <h5 className="fw-bold faq-title">Q1. Como visualizo as tarefas?</h5>
                    <p className="faq-text">
                        R: As tarefas disponíveis em seu Workflow estarão dispostas no formato Kanban, conforme imagem abaixo:
                    </p>
                    <img
                        className="border border-light border-1 rounded faq-text"
                        alt="Você pode localizar a aba de tarefas clicando no primeiro ícone da barra lateral. Geralmente esta é a primeira tela que você será direcionado."
                        width="92%"
                        src="admin_faq_1.png">
                    </img>
                    <button className="faq-toggle" onClick={handleToggleFaq1}>
                        <i className="fas fa-chevron-down text-light"></i>
                        <i className="fas fa-times"></i>
                    </button>
                </li>

                <li className={`faq ${!isActiveFaq2 ? "active" : null}`}>
                    <h5 className="fw-bold faq-title">Q2. Onde vejo minha equipe?</h5>
                    <p className="faq-text">
                        R: Na mesma tela de tarefas (Workflow), disponibilizamos um botão no canto inferior direito, o qual ao ser clicado te trará 2 opções. Selecione a opção "Ver Staff" para encontrar a listagem de usuários disponíveis.
                    </p>
                    <img
                        className="border border-light border-1 rounded faq-text"
                        alt="Localize o botão com o texto Ver Staff para abrir o modal de equipe"
                        width="92%"
                        src="admin_faq_2.png">
                    </img>
                    <button className="faq-toggle" onClick={handleToggleFaq2}>
                        <i className="fas fa-chevron-down text-light"></i>
                        <i className="fas fa-times"></i>
                    </button>
                </li>

                <li className={`faq ${!isActiveFaq3 ? "active" : null}`}>
                    <h5 className="fw-bold faq-title">Q3. Como crio uma tarefa?</h5>
                    <p className="faq-text">
                        R: Na mesma tela de tarefas (Workflow), disponibilizamos um botão no canto inferior direito, o qual ao ser clicado te trará 2 opções. Selecione a opção "Add tarefa" para criar uma nova tarefa.
                    </p>
                    <img
                        className="border border-light border-1 rounded faq-text"
                        alt="Localize o botão com o texto Add Tarefa para abrir o modal de criação de tarefa"
                        width="92%"
                        src="admin_faq_3.png">
                    </img>
                    <p className="faq-text mt-4">
                        R: O próximo passo agora é preencher os dados da tarefa, conforme imagem abaixo:
                    </p>
                    <img
                        className="border border-light border-1 rounded faq-text"
                        alt="Preencha todos os campos do modal, e então clique em Criar"
                        width="92%"
                        src="admin_faq_4.png">
                    </img>
                    <button className="faq-toggle" onClick={handleToggleFaq3}>
                        <i className="fas fa-chevron-down text-light"></i>
                        <i className="fas fa-times"></i>
                    </button>
                </li>

                <li className={`faq ${!isActiveFaq4 ? "active" : null}`}>
                    <h5 className="fw-bold faq-title">Q4. Como edito uma tarefa?</h5>
                    <p className="faq-text">
                        R: Para abrir o modal de edição de uma tarefa, clique no <strong>nome</strong> da mesma, dentro do card da tarefa no kanban.
                    </p>
                    <img
                        className="border border-light border-1 rounded faq-text"
                        alt="Clique (ou dê enter) no nome de uma tarefa para abrir o modal de edição de tarefa. Em seguida edite os campos, e finalmente clique em Atualizar"
                        width="92%"
                        src="admin_faq_5.png">
                    </img>
                    <button className="faq-toggle" onClick={handleToggleFaq4}>
                        <i className="fas fa-chevron-down text-light"></i>
                        <i className="fas fa-times"></i>
                    </button>
                </li>

                <li className={`faq ${!isActiveFaq5 ? "active" : null}`}>
                    <h5 className="fw-bold faq-title">Q5. Posso deletar uma tarefa?</h5>
                    <p className="faq-text">
                        R: Para deletar uma tarefa, clique no ícone de cesta de lixo, dentro do card da tarefa no kanban.
                    </p>
                    <img
                        className="border border-light border-1 rounded faq-text"
                        alt="A imagem descreve um modal perguntando ao usuário se ele deseja realmente deletar a tarefa"
                        width="92%"
                        src="admin_faq_6.png">
                    </img>
                    <button className="faq-toggle" onClick={handleToggleFaq5}>
                        <i className="fas fa-chevron-down text-light"></i>
                        <i className="fas fa-times"></i>
                    </button>
                </li>

                <li className={`faq ${!isActiveFaq6 ? "active" : null}`}>
                    <h5 className="fw-bold faq-title">Q6. Como deixo uma mensagem em uma tarefa?</h5>
                    <p className="faq-text">
                        R: Primeiro navegue pela barra lateral até a tela de "Tarefa", e siga as instruções da imagem abaixo para adicionar um comentário.
                    </p>
                    <img
                        className="border border-light border-1 rounded faq-text"
                        alt="A imagem apresenta uma tarefa detalhada, onde um usuário pode ler todos os comentários anteriores, ou adicionar um, clicando em Enviar"
                        width="92%"
                        src="admin_faq_7.png">
                    </img>
                    <button className="faq-toggle" onClick={handleToggleFaq6}>
                        <i className="fas fa-chevron-down text-light"></i>
                        <i className="fas fa-times"></i>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default HelpAdmin
