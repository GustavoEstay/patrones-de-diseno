
class DocumentContext{
    constructor(){
        this.content = '';
        this.state = new BlankState();
    }

    setState(state){
        this.state = state;
    }

    write(text){
        this.state.write(this, text);
    }
}

class BlankState{
    write(documentContext, text){
        documentContext.content = text;
        documentContext.setState(new WithContentState());
    }
}

class WithContentState{
    write(documentContext, text){
        documentContext.content += ' ' + text;
    }
}

class ApprovedState{
    write(documentContext, text){
        console.error('Documento aprobado, ya no se modifica');
    }
}

// Genero el estado
const doc = new DocumentContext();
console.log(doc.state);

// Cambio el estado con nuevo contenido
doc.write('Hola Mundo');
console.log(doc.content);
console.log(doc.state);

// Agrego contenido
doc.write('Hola 1');
doc.write('Hola 2');
console.log(doc.content);
console.log(doc.state);

// Agrego estado diferente - Aprobado
doc.setState(new ApprovedState());
console.log(doc.state);
doc.write('Hola 3');

// Cambio el estado al que tenía antes de Aprobado
doc.setState(new WithContentState());
console.log(doc.state);
doc.write('Ahora ya si se puede');
console.log(doc.content);


