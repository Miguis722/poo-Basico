//Creamos la clase de Persona, donde se pedira nombre, la edad y el sexo de la persona
class Persona {
    nombre;
    edad;
    sexo;

    constructor(nombre, edad, sexo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }

    // Método getter para saludar
    get saludar() {
        return `¡¡Hola ${this.nombre}!!, Veo que tienes ${this.edad}, ¡¡Felicitaciones!! y eres ${this.sexo}`;
    }
}


let saveButton = document.querySelector(".button_send")

saveButton.addEventListener('click', () => {
    // Constante del placeholder que guarda la información del NOMBRE
    const nameInfo = document.querySelector('.name_of_the_person_placeholder').value;
    console.log(nameInfo);
    // Constante del placeholder que guarda la EDAD
    const ageInfo = document.querySelector('.age_of_the_person_placeholder').value;
    console.log(ageInfo);
    // Constante del placeholder que guarda el GENERO
    const genderInfo = document.querySelector('.gender_of_the_person_selector').value;
    console.log(genderInfo);


    // Ahora hacemos función para que guarde la información al hacer clic en el botón de "Enviar"
    // Creamos la instancia de la persona con los datos actuales
    const persona1 = new Persona(nameInfo, ageInfo, genderInfo);

    // Mostramos el saludo de la clase de Personas
    alert(persona1.saludar);
});



