import { useState } from "react";

// Sempre que uma função do react iniciar com use ela é chamada um hook -> gancho

// Curiosidade do js
// Nós temos a declaração de variável por meio de const = constante e let = let it change ou sejá traduzindo é "Deixe isso mudar"

export function Counter() {
  const [counter, setCounter] = useState(0); // o useState ele não retorna somente o valor da variável como temos em uma declaração de uma variável 'tradicional' e sim retorna duas coisas dentro um único array, então pra pegar esses dois valores digamos assim, teremos que acessá-los via indice do array sendo o primeiro indice [0] o valor e o segundo [1] a função que altera esse valor, nós até mesmo podemos acessar esse valores via indice porém a melhor maneira e mais recomendada e acessá-los via desestruturação [counter, setCounter] - Mais recomendado ou (counter[0], counter[1] - Menos recomendado), o conceito de desestruturação no javascript funciona da seguinte maneira, eu vou ter lá meu objeto/array e o mesmo tem seus valores e etc, A sintaxe de atribuição via desestruturação (destructuring assignment) é uma expressão JavaScript que possibilita extrair dados de arrays ou objetos em variáveis distintas. Ou seja posso extrair esses dados e incrementá-los com outros, posso extrai-los e atribuir a outras variáveis a outros arrays/objeto
  function increment() {
    console.log("Incrementing");
    setCounter(counter + 1);
  }
  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  );
}
