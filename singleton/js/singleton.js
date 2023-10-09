
// Puedo obtener de la clase un método instance
// Este se crea luego de la primera vez que se instancia la clase
// Hace que el objeto sea estático e invariable

class Singleton{

    // instance se puede definir de esta forma
    // para que funcione, solo se puede llamar a esta función después de hacer instanciado al menos una vez a la clase
    // de lo contrario da null
    static getInstance(){
        return Singleton.instance;
    }

    // Tambien se puede manejar así para una primera vez
    constructor(){
        if(Singleton.instance){
            console.log('si');
            return Singleton.instance
        }
        console.log('no, pero se crea');
        Singleton.instance = this;
    }

}

// Con esto compruebo que ambos objetos son iguales
// const singleton = new Singleton();
// const singleton2 = new Singleton();
// console.log(singleton === singleton2);

// Caso práctico
// Como hablamos de objetos inmutables, lo hacemos con datos inmutables, como los días de la semana
class WeekDays {
    daysEs = [
        'Lunes', 
        'Martes', 
        'Miercoles', 
        'Jueves', 
        'Viernes'
    ];

    dayEn=[
        'Monday', 
        'Tuesday', 
        'Wednesday', 
        'Thursday', 
        'Friday'
    ];

    constructor(lang){
        this.lang = lang;

        if(WeekDays.instance){
            return WeekDays.instance
        }

        WeekDays.instance = this;
    }

    // defino que devuelva los días por default en ingles
    getDays(){
        return this.lang === 'es' ?
        this.daysEs :
        this.dayEn;
    }
}

const weekDays = new WeekDays('es');
// Por default está en ingles
const weekDays2 = new WeekDays();

// Esto loguea 2 veces el mismo array porque ya lo instancie previamente y es inmutable
// se ignora la segunda configuración (en este caso ingles)
console.log(weekDays.getDays())
console.log(weekDays2.getDays())

