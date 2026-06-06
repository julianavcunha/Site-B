import React from './react';
import { handleSearch } from './HandleSearch';
import {SiteRoupas} from './class SiteRoupas ';

function getProduct(handleSearch) {
    return <article className="product-card">
        <img src={handleSearch().imagens[0]} alt={handleSearch().tipo} />
        <h3>{handleSearch().tipo}</h3>
        <p>Tamanho: {handleSearch().tamanho}</p>
        <p>Preço: R$ {handleSearch().preço.toFixed(2)}</p>
        <p>Marca: {handleSearch().marca}</p>
    </article>;
}

export { getProduct };