"use client"
import { useState } from 'react';
import styles from './page.module.css';

export default function Produtos() {
    const produtos = [
        { id: 1, nome: "Notebook", preco: 4500 },
        { id: 2, nome: "Mouse", preco: 80 },
        { id: 3, nome: "Teclado", preco: 150 },
        { id: 4, nome: "Monitor", preco: 1200 },
        { id: 5, nome: "Impressora", preco: 900 },
        { id: 6, nome: "Cadeira Gamer", preco: 1800 },
        { id: 7, nome: "Headset", preco: 300 },
        { id: 8, nome: "Webcam", preco: 600 },
        { id: 9, nome: "HD Externo", preco: 400 },
        { id: 10, nome: "Mesa Digitalizadora", preco: 750 }
    ];

    const [busca, setBusca] = useState('');
    const produtosFiltro = produtos.filter( prod => prod.nome.toLowerCase().includes(busca.toLowerCase()));
    //console.log(produtosFiltro)

    return (
        <div>
            <div className={styles.divTitulo}>
                <h1>Produtos</h1>
                <input 
                    type="text" 
                    onChange={e => setBusca(e.target.value)}
                    value={busca}
                />
            </div>
                <table className={styles.tbl}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOME</th>
                            <th>PREÇO</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtosFiltro.map((p) => (
                            <tr key={p.id}>
                                <td>{p.id}</td>
                                <td>{p.nome}</td>
                                <td>{p.preco.toLocaleString('pt-br', {
                                    style: 'currency',
                                    currency: 'BRL'
                                })}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </div>
    )
}