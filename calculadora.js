const pantalla = document.querySelector('.pantalla');
const botones = document.querySelectorAll('.btn');

let numeroAnterior = '';
let numeroActual = '';
let operador = null;

botones.forEach(boton => {
  boton.addEventListener('click', () => {
    const valorBoton = boton.textContent;

    if (!isNaN(valorBoton) || valorBoton === '.') {
      numeroActual += valorBoton;
      pantalla.textContent = numeroActual;
    }

    else if (valorBoton === '+' || valorBoton === '-' || valorBoton === '*' || valorBoton === '/') {
      operador = valorBoton;
      numeroAnterior = numeroActual;
      numeroActual = '';
    }

    else if (valorBoton === 'C') {
      numeroAnterior = '';
      numeroActual = '';
      operador = null;
      pantalla.textContent = '0';
    }
    
    else if (valorBoton === '←') {
      numeroActual = numeroActual.slice(0, -1);
      pantalla.textContent = numeroActual || '0';
    }


    else if (valorBoton === '=') {
      if (numeroAnterior !== '' && numeroActual !== '' && operador !== null) {
        let resultado;

        const num1 = parseFloat(numeroAnterior);
        const num2 = parseFloat(numeroActual);

        switch (operador) {
          case '+':
            resultado = num1 + num2;
            break;
          case '-':
            resultado = num1 - num2;
            break;
          case '*':
            resultado = num1 * num2;
            break;
          case '/':
            resultado = num2 !== 0 ? num1 / num2 : 'Error';
            break;
        }

        pantalla.textContent = resultado;
        numeroAnterior = resultado.toString();
        numeroActual = '';
        operador = null;
      }
    }
  });
});
