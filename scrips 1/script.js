const respuestas = {
    "Hola": "Hola como estas en que puedo ayudarte el dia de hoy.",
    "Muchas gracias": "No hay de que, Si necesitas mas respuestas solo pregunta.",
    "¿Cuál es el videojuego más vendido de todos los tiempos?": "El videojuego más vendido de todos los tiempos es Minecraft.",
    "¿En qué año se lanzó el primer Call of Duty?": "El primer juego de Call of Duty se lanzó en 2003.",
    "¿Quién es el personaje principal de la serie The Legend of Zelda?": "El personaje principal de la serie The Legend of Zelda es Link.",
    "¿Cuál es el juego de arcade más exitoso?": "El juego de arcade más exitoso es Pac-Man.",
    "¿Quién es el creador de Mario Bros?": "El creador de Mario Bros es Shigeru Miyamoto.",
    "¿Cuál es el primer videojuego en tener un easter egg?": "El primer videojuego en tener un easter egg fue Adventure, lanzado en 1980 para Atari 2600.",
    "¿Cuál es el juego más premiado de 2020?": "El juego más premiado de 2020 es The Last of Us Part II.",
    "¿Qué consola de videojuegos es la más vendida de la historia?": "La consola de videojuegos más vendida de la historia es la PlayStation 2 de Sony.",
    "¿En qué año se lanzó la primera consola de Nintendo?": "La primera consola de Nintendo, la Nintendo Entertainment System (NES), se lanzó en 1983 en Japón.",
    "¿Cuál es el juego de rol más popular de todos los tiempos?": "El juego de rol más popular de todos los tiempos es The Elder Scrolls V: Skyrim.",
    "¿Qué juego popular se desarrolla en una galaxia muy, muy lejana?": "El juego popular que se desarrolla en una galaxia muy, muy lejana es Star Wars: Knights of the Old Republic.",
    "¿Cuál es el nombre del villano principal en la serie de juegos Sonic the Hedgehog?": "El nombre del villano principal en la serie de juegos Sonic the Hedgehog es Dr. Eggman o Dr. Robotnik.",
    "¿Cuál es el primer juego de disparos en primera persona?": "El primer juego de disparos en primera persona es Wolfenstein 3D, lanzado en 1992.",
    "¿Cuál es el nombre del héroe en la serie de juegos Halo?": "El nombre del héroe en la serie de juegos Halo es el Jefe Maestro o Master Chief.",
    "¿Qué juego de Nintendo tiene como protagonista a un granjero que hereda una granja?": "El juego de Nintendo que tiene como protagonista a un granjero que hereda una granja es Stardew Valley.",
    "¿Cuál es el personaje principal de la serie de juegos Metroid?": "El personaje principal de la serie de juegos Metroid es Samus Aran.",
    "¿Qué juego popular de supervivencia tiene como lema 'Sobrevive, explora, construye'?": "El juego popular de supervivencia con el lema 'Sobrevive, explora, construye' es Minecraft.",
    "¿En qué juego puedes encontrar a personajes como Ryu, Ken y Chun-Li?": "En el juego Street Fighter puedes encontrar a personajes como Ryu, Ken y Chun-Li.",
    "¿Qué juego de mundo abierto se desarrolla en la ciudad ficticia de Los Santos?": "El juego de mundo abierto que se desarrolla en la ciudad ficticia de Los Santos es Grand Theft Auto V.",
    "¿Qué juego tiene como villano principal a Bowser?": "El juego que tiene como villano principal a Bowser es la serie de Super Mario Bros.",
};

function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    const messages = document.getElementById('messages');
    
    if (userInput.trim() !== "") {
        const userMessage = document.createElement('div');
        userMessage.textContent = `Tú: ${userInput}`;
        userMessage.style.color = "#ff9";
        messages.appendChild(userMessage);

        const responseMessage = document.createElement('div');
        responseMessage.textContent = `IA: ${respuestas[userInput] || "Lo siento, no sé la respuesta a esa pregunta."}`;
        responseMessage.style.color = "#6f6";
        messages.appendChild(responseMessage);
        
        messages.scrollTop = messages.scrollHeight;
        document.getElementById('userInput').value = "";
    }
}

document.getElementById('userInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function displayQuestions() {
    const questionsList = document.getElementById('questionsList');
    Object.keys(respuestas).forEach(question => {
        const li = document.createElement('li');
        li.textContent = question;
        questionsList.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', displayQuestions);
