export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository?.name ?? "Default"}</strong> 
      {/* operador(??) desconsidera que o número zero é um valor inválido https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator */}
      {/* operador(?.) verifica se a propriedade a esquerda está nulo se estiver ele nem irá considerar a variável a direito e o meu valor será null nesse nosso caso abaixo por exemplo ele verificaria que não existe a prop name porque o objeto repository está vazio e vai rotornar undefined, porém no caso acima temos duas verificações, uma que valida se a propriedade se repository é nulo e outra que verificar se o valor da prop name é nula, mas como temos uma verificação anterior caso ela retorne null ele nem vai considerar o valor de name e sim considerar o valor que veio da primeira validação  */}
      <p>{props.repository?.description}</p>
      <a href={props.repository?.link}>Acessar repositório</a>
    </li>
  );
}
