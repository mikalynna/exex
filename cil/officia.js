let ratios = [0.5, 0.2, 0.75, 0.1, 0.3];
let minRatio = ratios[0];

for (let i = 0; i < ratios.length; i++) {
    let newRatio = ratios[i];
    if (newRatio < minRatio) {
        minRatio = newRatio;
    }
}

console.log("The minimum ratio is:", minRatio);
