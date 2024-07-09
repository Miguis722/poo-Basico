
// Función para traer la data, o información de los elementos, manejo por medio del DOM
document.addEventListener('DOMContentLoaded', () => {
    // Constante del placeholder que guarda la información del NOMBRE
    const nameInfo = document.getElementsByClassName('name_of_the_person_placeholder')[0];
    // Constante del placeholder que guarda la EDAD
    const ageInfo = document.getElementsByClassName('age_of_the_person_placeholder')[0];
    // Constante del placeholder que guarda el GENERO
    const genderInfo = document.getElementsByClassName('gender_of_the_person_selector')[0];
    // Constante del botón de enviar información
    const saveButton = document.getElementsByClassName('button_send')[0];


    // Vamos a guardar la información (si existe, en otra variable para poder manipularla)
    // Usamos la constante de guardar nombre para almacenar en el almacenamiento de la sesión el elemento de "Nameinfo"
    const savedName = sessionStorage.getItem('nameInfo');
    const savedAge = sessionStorage.getItem('ageInfo');
    const savedGender = sessionStorage.getItem('genderInfo');

    if (savedName) nameInfo.value = savedName;
    if (savedAge) ageInfo.value = savedAge;
    if (savedGender) genderInfo.value = savedGender;


// Creamos la instancia de la persona con los datos actuales
const persona1 = new Persona(nameInfo.value, ageInfo.value, genderInfo.value);

// Mostramos el saludo de la clase de Personas
console.log(persona1.saludar);

    // Ahora hacemos función para que guarde la información al hacer clic en el botón de "Enviar"
    saveButton.addEventListener('click', () => {
        const nameValue = nameInfo.value;
        const ageValue = ageInfo.value;
        const genderValue = genderInfo.value;

        sessionStorage.setItem('nameInfo', nameValue);
        sessionStorage.setItem('ageInfo', ageValue);
        sessionStorage.setItem('genderInfo', genderValue);

        console.log("Se ha guardado la info")
    });
});




//Creamos la clase de Persona, donde se pedira nombre, la edad y el sexo de la persona
class Persona {
    #nombre;
    #edad;
    #sexo;

    constructor(nombre, edad, sexo) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#sexo = sexo;
    }

    // Método getter para saludar
    get saludar() {
        return `¡¡Hola ${this.#nombre}!!, Veo que tienes ${this.#edad}, ¡¡Felicitaciones!! y eres ${this.#sexo}`;
    }
}