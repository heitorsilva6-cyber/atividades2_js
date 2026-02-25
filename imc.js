const pesoInput = prompt("Digite seu peso (kg)");
if (pesoInput === null) {
    Document.write('<h2>Operação cancelada.</h2>');
} else {
    const alturaInput = prompt("Digite sua altura (m)");
    if (alturaInput === null) {
        Document.write('<h2>Operação cancelada.</h2>');
    } else {
        const peso = parseFloat(pesoInput.trim().replace(',', '.'));
        const altura = parseFloat(alturaInput.trim().replace(',', '.'));
        if (isNaN(peso) || isNaN(altura) || altura === 0) {
            Document.write('<h2>Entrada inválida. Insira números válidos para peso e altura.</h2>');
        } else {
            const imc = peso / (altura * altura);
            const imcFixed = imc.toFixed(2);
            Document.write('<h2>Peso: ' + peso + ' kg</h2>');
            Document.write('<h2>Altura: ' + altura + ' m</h2>');
            Document.write('<h2>IMC: ' + imcFixed + '</h2>');

            if (imc < 17) {
                Document.write('<h1>Classificação: Muito abaixo do peso</h1>');
            } else if (imc < 18.5) {
                Document.write('<h1>Classificação: Abaixo do peso</h1>');
            } else if (imc < 25) {
                Document.write('<h1>Classificação: Peso normal</h1>');
            } else if (imc < 30) {
                Document.write('<h1>Classificação: Acima do peso</h1>');
            } else if (imc < 35) {
                Document.write('<h1>Classificação: Obesidade 1</h1>');
            } else if (imc < 40) {
                Document.write('<h1>Classificação: Obesidade 2</h1>');
            } else {
                Document.write('<h1>Classificação: Obesidade 3</h1>');
            }
        }
    }
}