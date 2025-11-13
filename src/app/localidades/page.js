'use client';
import { useEffect } from 'react';
import styles from './page.module.css';

export default function Localidades() {

    const getPaises = async () => {
        try {
            const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/paises?orderBy=nome');
            if (!response.ok) {
                throw new Error('Ocorreu um erro:', response.statusText);
            }
            const data = await response.json();
            console.log('dados', data);

        } catch (e) {
            console.log('Ocorreu um erro ao buscar os países:', e.message);
        }
    }

    useEffect(() => {
        getPaises();
    }, [])

    return (
        <div>
            <h1>Localidades</h1>
            <table className={styles.tbl}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOME</th>
                            <th>REGIÃO</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paises.map(p => (
                            <tr key={p.id}>
                                <td>{p.id}</td>
                                <td>{p.nome}</td>
                                <td>{p.regiao}</td>
                                </tr>
                            ))}
                    </tbody>
            </table>
        </div>
    )
}
