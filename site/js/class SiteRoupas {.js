class SiteRoupas {
    constructor(tipo, tamanho, preço, marca) {
        this._tipo = tipo;
        this._tamanho = tamanho;
        this._preço = preço;
        this._marca = marca;
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
    get marca() {
        if (this._marca === true) {
            return this._marca;
        }
            return "Marca não informada";
    }
}

class Blusas extends SiteRoupas {
    constructor(tipo, tamanho, preço, cor, marca) {
        super(tipo, tamanho, preço, marca);
        this._cor = cor;
    }

    get cor() {
        return this._cor;
    }
}


class Calças extends SiteRoupas {
    constructor(tipo, tamanho, preço, material, marca) {
        super(tipo, tamanho, preço, marca);
        this._material = material;
    }

    get material() {
        return this._material;
    }
}

class Vestidos extends SiteRoupas {
    constructor(tipo, tamanho, preço, estilo, marca) {
        super(tipo, tamanho, preço, marca);
        this._estilo = estilo;
    }

    get estilo() {
        return this._estilo;
    }
}

const calça1 = new Calças("Calça Jeans Preta", "46", 70, "Jeans", "C&A");



export default SiteRoupas;