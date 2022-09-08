module.exports = {
  presets: [
    "@babel/preset-env", // Identifica em qual ambiente a aplicação está sendo executada para converter o código da melhor maneira possível
    ["@babel/preset-react", { runtime: "automatic" }], // A configuração de runtime setada como 'automatic' remove a necessidade de importação do react em cada componente/função
  ],
};
