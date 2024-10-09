// src/components/CadastrarReceita.js
import React, { useState } from 'react'; // Importa o React e o hook useState para gerenciar o estado.
// useState é um hook usado para gerenciar o estado local do componente, aqui ele vai ser usado para armazenar o nome e a descrição da receita.

const CadastrarReceita = () => {
    const [nome, setNome] = useState(''); // Estado para armazenar o nome da receita. Inicialmente uma string vazia. setNome é a função associada ao estado nome, que permite atualizar o valor do nome.
    const [descricao, setDescricao] = useState(''); // Estado para armazenar a descrição Inicialmente uma string vazia.

    const handleSubmit = (e) => {
        e.preventDefault(); // Evita o comportamento padrão do formulário de recarregar a página ao submeter o formulário.
        console.log('Receita:', { nome, descricao }); // Exibe no console os valores de nome e descricao da receita. Essa função é útil no futuro para enviar esses dados a uma API para armazenamento em um servidor.
        // Aqui podemos enviar os dados para uma API futuramente
    };

    return (
        // <form onSubmit={handleSubmit}> Inicia o formulário com o event onSubmite, vinculado à função handleSubmit, que será disparada quando o formulário for enviado.
        <div className="form-container">
            <h2>Cadastrar Receita</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome da Receita:</label>
                    <input 
                        type="text" 
                        value={nome} 
                        onChange={(e) => setNome(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Descrição da Receita:</label>
                    <textarea 
                        value={descricao} 
                        onChange={(e) => setDescricao(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default CadastrarReceita;
