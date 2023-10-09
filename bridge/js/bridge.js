
// Bridge tiene una clase que está más cercana al modelo de negocio e implementadores que
// la complementan. Los implementadores no tienen nada que ver entre sí.
class EncoderTextAbstraction{
    constructor(encoder){
        this.encoder = encoder
    }

    encode(str){
        return this.encoder.encode(str);
    }    

    decode(str){
        return this.encoder.decode(str);
    }
}
// Implementor 1
class Base64EncoderImplementor{

    encode(str){
        return window.btoa(unescape(encodeURIComponent( str )));
    }
    decode(str){
        return decodeURIComponent(escape(window.atob( str )));
    }
}

class HTMLEncoderImplementor{
    encode(str){
        return str.split(/\./g).reduce((ac, e)=>{
            return ac + `<p>${e.trim()}</p>`
        }, '');
    }

    decode(str){
        return str.split('</p>').reduce((ac, e)=>{
            return e!=='' ?
            ac + e.replace('<p>', '')+ '. ':
            ac + '';
        }, '');
    }
}

const encoder1 = new EncoderTextAbstraction(new Base64EncoderImplementor());
console.log(encoder1.encode("pato"));
console.log(encoder1.decode("cGF0bw=="));

const encoder2 = new EncoderTextAbstraction(new HTMLEncoderImplementor);
console.log(encoder2.encode('esto y lo otro. y esto, y aquello. y lo otro'))
console.log(encoder2.decode('<p>esto y lo otro</p><p>y esto, y aquello</p><p>y lo otro</p>'))

