
// Componente
class ProductComponente{

    constructor(name){
        this.name = name;
    }

    getDetail(){
        return `${this.name}`
    }
}

// Decorador
class ProductDecorator{

    constructor(productComponent){
        this.productComponent = productComponent;
    }

    getDetail(){
        return this.productComponent.getDetail();
    }

}

class CommercialInfoProductDecorator extends ProductDecorator{

    constructor(productComponent, tradename, brand){
        super(productComponent);

        this.tradename = tradename;
        this.brand = brand
    }

    getDetail(){
        return `${this.tradename} ${this.brand} `
        + super.getDetail();
    }
}

class StoreProductDecorator extends ProductDecorator{
    constructor(productComponent, price){
        super(productComponent);
        this.price = price;
    }

    getDetail(){
        return `$${this.price} `
        +super.getDetail();
    }
}

// Decorador 3
class HTMLProductDecorator extends ProductDecorator{
    getDetail(){
        return `
        <h1> Info del Producto </h1>
        <p>${super.getDetail()}</p>
        `
    }
}


// Ejecucion
// component

const productComponent = new ProductComponente('Cerveza');
console.log(productComponent.getDetail());

// decorador 1 con component
const commercialInfoProduct = 
    new CommercialInfoProductDecorator(productComponent, 'London', 'Quilmes');
console.log(commercialInfoProduct.getDetail());

// decorador 2 con component
const storeProductDecorator = new StoreProductDecorator(productComponent, 15);
console.log(storeProductDecorator.getDetail());

// decorador 2 con decorador 1
const product = new StoreProductDecorator(commercialInfoProduct, 15);
console.log(product.getDetail());

// decorador 3 con decorador 2 con decorador 1
const HTMLProduct = new HTMLProductDecorator(product);
myDiv.innerHTML = HTMLProduct.getDetail();
