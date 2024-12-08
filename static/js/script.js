function generateRandomInteger(min = 100, max = 3000) {
    let number = Math.random()
    number = number * (max - min + 1) + min
    return Math.floor(number)
}

let verde = 0
let reazioneConsentita = false

function handleClick(event) {
    document.querySelector("#result").innerHTML = ""
    let startTimer = generateRandomInteger(500, 1000)
    verde = 0
    reazioneConsentita = false
    resetLuci()

    setTimeout(function() {
        luce1.classList.remove("light-gray");
        luce1.classList.add("light-red");
        l2ce1.classList.remove("light-gray");
        l2ce1.classList.add("light-red");
        l3ce1.classList.remove("light-gray");
        l3ce1.classList.add("light-red");
        l4ce1.classList.remove("light-gray");
        l4ce1.classList.add("light-red");
    }, startTimer);

    setTimeout(function() {
        luce2.classList.remove("light-gray");
        luce2.classList.add("light-red");
        l2ce2.classList.remove("light-gray");
        l2ce2.classList.add("light-red");
        l3ce2.classList.remove("light-gray");
        l3ce2.classList.add("light-red");
        l4ce2.classList.remove("light-gray");
        l4ce2.classList.add("light-red");
    }, startTimer * 2);

    setTimeout(function() {
        luce3.classList.remove("light-gray");
        luce3.classList.add("light-red");
        l2ce3.classList.remove("light-gray");
        l2ce3.classList.add("light-red");
        l3ce3.classList.remove("light-gray");
        l3ce3.classList.add("light-red");
        l4ce3.classList.remove("light-gray");
        l4ce3.classList.add("light-red");
    }, startTimer * 3);

    setTimeout(function() {
        luce1.classList.remove("light-red");
        luce1.classList.add("light-gray");
        l2ce1.classList.remove("light-red");
        l2ce1.classList.add("light-gray");
        l3ce1.classList.remove("light-red");
        l3ce1.classList.add("light-gray");
        l4ce1.classList.remove("light-red");
        l4ce1.classList.add("light-gray");
    }, startTimer * 4);

    setTimeout(function() {
        luce2.classList.remove("light-red");
        luce2.classList.add("light-gray");
        l2ce2.classList.remove("light-red");
        l2ce2.classList.add("light-gray");
        l3ce2.classList.remove("light-red");
        l3ce2.classList.add("light-gray");
        l4ce2.classList.remove("light-red");
        l4ce2.classList.add("light-gray");
    }, startTimer * 4);

    setTimeout(function() {
        luce3.classList.remove("light-red");
        luce3.classList.add("light-gray");
        l2ce3.classList.remove("light-red");
        l2ce3.classList.add("light-gray");
        l3ce3.classList.remove("light-red");
        l3ce3.classList.add("light-gray");
        l4ce3.classList.remove("light-red");
        l4ce3.classList.add("light-gray");
    }, startTimer * 4);

    setTimeout(function() {
        luce4.classList.remove("light-gray");
        luce4.classList.add("light-green");
        l2ce4.classList.remove("light-gray");
        l2ce4.classList.add("light-green");
        l3ce4.classList.remove("light-gray");
        l3ce4.classList.add("light-green");
        l4ce4.classList.remove("light-gray");
        l4ce4.classList.add("light-green");
        verde = Date.now();
        reazioneConsentita = true;  // La reazione è ora consentita solo quando la luce verde si accende
    }, startTimer * 4);
}

function calcolaReazione(event) {
    if (!reazioneConsentita) {
        document.querySelector("#result").innerHTML = "Falsa Partenza!"; // Mostra "Falsa Partenza" solo se clicchi prima delle luci verdi
    } else {
        let tempoReazione = (Date.now() - verde) / 1000;
        document.querySelector("#result").innerHTML = `Tempo di reazione: ${tempoReazione.toFixed(3)} secondi.`
        reazioneConsentita = false;  // Dopo il click resettiamo il permesso
    }
}

function resetLuci() {
    luce1.classList.remove("light-red");
    luce2.classList.remove("light-red");
    luce3.classList.remove("light-red");
    luce4.classList.remove("light-green");

    luce1.classList.add("light-gray");
    luce2.classList.add("light-gray");
    luce3.classList.add("light-gray");
    luce4.classList.add("light-gray");

    l2ce1.classList.remove("light-red");
    l2ce2.classList.remove("light-red");
    l2ce3.classList.remove("light-red");
    l2ce4.classList.remove("light-green");

    l2ce1.classList.add("light-gray");
    l2ce2.classList.add("light-gray");
    l2ce3.classList.add("light-gray");
    l2ce4.classList.add("light-gray");

    l3ce1.classList.remove("light-red");
    l3ce2.classList.remove("light-red");
    l3ce3.classList.remove("light-red");
    l3ce4.classList.remove("light-green");

    l3ce1.classList.add("light-gray");
    l3ce2.classList.add("light-gray");
    l3ce3.classList.add("light-gray");
    l3ce4.classList.add("light-gray");

    l4ce1.classList.remove("light-red");
    l4ce2.classList.remove("light-red");
    l4ce3.classList.remove("light-red");
    l4ce4.classList.remove("light-green");

    l4ce1.classList.add("light-gray");
    l4ce2.classList.add("light-gray");
    l4ce3.classList.add("light-gray");
    l4ce4.classList.add("light-gray");
}

let luce4 = document.querySelector("#red-1-2")
let luce3 = document.querySelector("#red-1")
let luce2 = document.querySelector("#green-1-2")
let luce1 = document.querySelector("#green-1")

let l2ce4 = document.querySelector("#red-2-2")
let l2ce3 = document.querySelector("#red-2")
let l2ce2 = document.querySelector("#green-2-2")
let l2ce1 = document.querySelector("#green-2")

let l3ce4 = document.querySelector("#red-3-2")
let l3ce3 = document.querySelector("#red-3")
let l3ce2 = document.querySelector("#green-3-2")
let l3ce1 = document.querySelector("#green-3")

let l4ce4 = document.querySelector("#red-4-2")
let l4ce3 = document.querySelector("#red-4")
let l4ce2 = document.querySelector("#green-4-2")
let l4ce1 = document.querySelector("#green-4")

let btn = document.querySelector("#btn")
btn.addEventListener("click", handleClick)
let bg = document.querySelector("#he")
bg.addEventListener("click", calcolaReazione)


