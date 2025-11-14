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

    const getCities = async (p) => {
        try {
            const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${p}/municipios`);
            if (!response.ok) {
                throw new Error('Ocorreu um erro:', response.statusText);
            }
            const data = await response.json();
            console.log('Cidades', data);
            setCidades(data)

        } catch (e) {
            console.log('Ocorreu um erro ao buscar as cidades:', e.message);
        }
    }

    const selectUf = (ev) => {
        const p = ev.target.value;
        setPais(p);
        setPais(p);
        getCities(p);
    }

    useEffect(() => {
        getUfs();
    }, [])

    return (
        <div>
            <h1>Localidades</h1>
            <select
                value={pais}
                onChange={ev => selectUf(ev)}
            >
                <option value='' disabled>Selecione o estado</option>
                {ufs.map(uf => (
                    <option 
                    value = {uf.id} 
                    key = {uf.id}
                    >
                        {`${uf.id} - ${uf.sigla} - ${uf.nome}`}
                    </option>
                )
                )}
            </select>
        </div>
    )
}
