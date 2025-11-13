'use client';
import { useEffect, useState } from 'react';
import styles from './page.module.css';

export default function Localidades() {

    const [ufs, setUfs] = useState([]);
    const [pais, setPais] = useState('')
    const [cidades, setCidades] = useState('');

    const getUfs = async () => {
        try {
            const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome');
            if (!response.ok) {
                throw new Error('Ocorreu um erro:', response.statusText);
            }
            const data = await response.json();
            console.log('dados', data);
            setUfs(data)

        } catch (e) {
            console.log('Ocorreu um erro ao buscar os estados:', e.message);
        }
    }

    const getCities = async () => {
        try {
            const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${pais}/municipios`);
            if (!response.ok) {
                throw new Error('Ocorreu um erro:', response.statusText);
            }
            const data = await response.json();
            console.log('dados', data);
            setCidades(data)

        } catch (e) {
            console.log('Ocorreu um erro ao buscar as cidades:', e.message);
        }
    }

    const selectUf = (ev) => {
        setPais(ev.target.value);
        console.log(pais)
    }

    useEffect(() => {
        getUfs();
    }, [])

    return (
        <div>
            <h1>Localidades</h1>
            {/* <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>SIGLA</th>
                            <th>NOME</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ufs.map(uf => (
                            <tr key={uf.id}>
                                <td>{uf.id}</td>
                                <td>{uf.sigla}</td>
                                <td>{uf.nome}</td>
                            </tr>
                        ))}
                    </tbody>
            </table> */}

            <select
                onClick={ev => selectUf(ev)}
            >
                {ufs.map(uf => (
                    <option 
                    value = {uf.id} 
                    key = {uf.id}

                    >
                        {`${uf.sigla} - ${uf.nome}`}
                    </option>
                )
                )}
            </select>
        </div>
    )
}
