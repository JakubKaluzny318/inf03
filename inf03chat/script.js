function sendText() {
    let text = document.getElementById('chatMessage').value;
    let chatWindow = document.getElementById('chatWindow');

    let jolkaDiv = document.createElement('div');
    jolkaDiv.classList.add('jolkaChat');

    let jolkaImg = document.createElement('img');
    jolkaImg.src = 'Jolka.jpg';

    let jolkaP = document.createElement('p');
    jolkaP.textContent = text;

    jolkaDiv.appendChild(jolkaImg);
    jolkaDiv.appendChild(jolkaP);
    chatWindow.appendChild(jolkaDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}
    const answers = ["Świetnie!",
"Kto gra główną rolę?",
"Lubisz filmy Tego reżysera?",
"Będę 10 minut wcześniej",
"Może kupimy sobie popcorn?",
"Ja wolę Colę",
"Zaproszę jeszcze Grześka",
"Tydzień temu też byłem w kinie na Diunie",
"Ja funduję bilety"];
function generateRandomAnswer() {

let randomIndex = Math.floor(Math.random() * answers.length);
let randomResponse = answers[randomIndex];
let chatWindow = document.getElementById('chatWindow');

    let krzysiekDiv = document.createElement('div');
    krzysiekDiv.classList.add('krzysiekChat');

    let krzysiekImg = document.createElement('img');
    krzysiekImg.src = 'Krzysiek.jpg';

    let krzysiekP = document.createElement('p');
    krzysiekP.textContent = randomResponse;

    krzysiekDiv.appendChild(krzysiekImg);
    krzysiekDiv.appendChild(krzysiekP);
    chatWindow.appendChild(krzysiekDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
    console.log(randomIndex)
}