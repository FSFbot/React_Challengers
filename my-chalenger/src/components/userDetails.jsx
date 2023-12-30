import React from 'react';

const UserDetails = () =>{
    const pessoas = [
        {nome: 'João', idade: 25, profissão: 'Desenvolvedor'},
        {nome:'Maria', idade: 15, profissão: 'Estudante'},
        {nome: 'Carlos', idade: 40, profissão: 'Engenheiro'}
    ];
    return(
        <div>
            {
                pessoas.map(pessoa =>(
                    <div key={pessoa.nome}>
                        <h2>{pessoa.nome}</h2>
                        <p> Idade: {pessoa.idade}</p>
                        <p>Profissão: {pessoa.profissão}</p>
                        {
                            pessoa.idade >= 18 ?
                            <p>Esta pessoa pode tirar carteira de habilitação.</p> : <p>Esta pessoa não pode tirar carteira de habilitação.</p>
                        }
                    </div>
                ))
            }
        </div>
    );
};

export default UserDetails;