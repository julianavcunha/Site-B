class SiteRoupas {
    constructor(tipo, tamanho, preço) {
        this._tipo = tipo;
        this._tamanho = tamanho;
        this._preço = preço;
    }

    get tipo() {
        return this._tipo;
    }
    get tamanho() {
        return this._tamanho;
    }
    get preço() {
        return this._preço;
    }
}

class Blusas extends SiteRoupas {
    constructor(tipo, tamanho, preço, cor) {
        super(tipo, tamanho, preço);
        this._cor = cor;
    }

    get cor() {
        return this._cor;
    }
}


class Calças extends SiteRoupas {
    constructor(tipo, tamanho, preço, material) {
        super(tipo, tamanho, preço);
        this._material = material;
    }

    get material() {
        return this._material;
    }
}

class Vestidos extends SiteRoupas {
    constructor(tipo, tamanho, preço, estilo) {
        super(tipo, tamanho, preço);
        this._estilo = estilo;
    }

    get estilo() {
        return this._estilo;
    }
}