const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

let currentInput = '';
let lastResult = null;

function updateDisplay() {
    display.value = currentInput || '0';
}

function calculate(expression) {
    try {
        // Eval é perigoso mas para um projeto simples e controlado aqui é ok
        let result = Function(`"use strict"; return (${expression})`)();
        if (result === Infinity || result === -Infinity) {
            return 'Erro: Divisão por zero';
        }
        if (isNaN(result)) {
            return 'Erro';
        }
        return result;
    } catch {
        return 'Erro';
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const action = button.dataset.action;
        const value = button.textContent;

        if (!action) {
            // Número ou ponto
            if (value === '.' && currentInput.includes('.')) {
                // evita múltiplos pontos na mesma parte do número
                const parts = currentInput.split(/[\+\-\*\/]/);
                if (parts[parts.length -1].includes('.')) {
                    return;
                }
            }
            currentInput += value;
        } else {
            if (action === 'clear') {
                currentInput = '';
            } else if (action === 'backspace') {
                currentInput = currentInput.slice(0, -1);
            } else if (action === '=') {
                const res = calculate(currentInput);
                currentInput = String(res);
            } else {
                // Operadores + - * /
                if (currentInput === '') {
                    // evita começar com operador, exceto -
                    if (action === '-') {
                        currentInput = '-';
                    }
                    return;
                }
                // Evita operadores duplicados seguidos
                const lastChar = currentInput.slice(-1);
                if (['+', '-', '*', '/'].includes(lastChar)) {
                    currentInput = currentInput.slice(0, -1) + action;
                } else {
                    currentInput += action;
                }
            }
        }
        updateDisplay();
    });
});

updateDisplay();
