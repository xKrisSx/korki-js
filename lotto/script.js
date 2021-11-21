let numbers = [];
let random = [];

while (numbers.length !== 6) {
    let n = Number(prompt("Podaj liczbę"));
    if (n > 0 && n < 50) { // sprawdzanie przedziału
        if (!isNaN(n)) { // sprawdzanie, czy to jest liczba
            if (!numbers.includes(n)) { // sprawdzanie, czy liczba już występuje
                numbers.push(n);
            } else {
                alert("ta liczba już występuje");
            }
        } else {
            alert("ta liczba nie jest liczą");
        }
    } else {
        alert("Liczba nie jest w przedziale 1-49");
    }
}

document.write("Twoje wybrane liczby: ");
for (let i = 0; i < numbers.length; i++) {
    /*
    if (i === 3) {
        document.write("<br>");
    }
    */
    document.write(numbers[i] + " ");
}
// i++ == i += 1

while (random.length !== 6) {
    let n = Math.floor(Math.random() * 49) + 1;
    if (!random.includes(n)) {
        random.push(n);
    }
}

document.write("<br>");
document.write("Wylosowane liczby: ");
for (let i = 0; i < random.length; i++) {
    /*
    if (i === 3) {
        document.write("<br>");
    }
    */
    document.write(random[i] + " ");
}

let good = [];
let bad = [];

numbers.forEach(n => {
    if (random.includes(n)) {
        good.push(n);
    } else {
        bad.push(n);
    }
})

document.write("<br>");
document.write("Trafione liczby (" + good.length + "): ");
if (good.length === 0) {
    document.write("brak");
} else {
    for (let i = 0; i < good.length; i++) {
        document.write(good[i] + " ");
    }
}

document.write("<br>");
document.write("Nietrafione liczby (" + bad.length + "): ");
if (bad.length === 0) {
    document.write("brak");
} else {
    for (let i = 0; i < bad.length; i++) {
        document.write(bad[i] + " ");
    }
}

