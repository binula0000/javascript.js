let num = prompt("Сан енгізіңіз:");
for (let i = 1; i <= num; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i);
        if (i % 2 == 0) {
            break;
        }
    }
}
