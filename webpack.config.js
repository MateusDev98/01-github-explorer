const path = require("path"); // Como o webpack roda dentro do node o node entende apenas o formato de importação usando require;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebPackPlugin = require("@pmmmwh/react-refresh-webpack-plugin"); // Faz o refresh da nossa aplicação porém não perde o estado dos componentes

const isDevelopment = process.env.NODE_ENV !== "production"; // Configurando os ambientes conforme variável de ambiente;

module.exports = {
  mode: isDevelopment ? "development" : "production", // mode = development é mais rápida a execução porém deixa de fazer alguns tratamentos/otimizações e compilações, já o mode = production é mais lento pois faz uma série de validações e tratamentos/compilações/otimizações;
  devtool: isDevelopment ? "eval-source-map" : "source-map",
  entry: path.resolve(__dirname, "src", "index.jsx"), // Arquivo principal da nossa aplicação (index.jsx), __dirname pega o diretório onde está o meu arquivo wepack.config, ou seja ele sempre pega o diretório do arquivo que adicionei a instrução (__dirname)
  output: {
    // Arquivo que vai ser gerado com o webpack a partir da nossa index.jsx
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"], // Define quais arquivos o webpack pode ler por meio de sua extensão
  },
  devServer: {
    static: path.resolve(__dirname, "public"), // Informamos onde está o nosso conteúdo estático da nossa aplicação
    hot: true,
  },
  plugins: [
    isDevelopment && new ReactRefreshWebPackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"), // Informamos qual arquivo de template nesse nosso caso é o index.html que está na pasta public do projeto que vai ser usado para gerar o nosso html da pasta dist, dessa maneira evitamos alguns retrabalhos.
    }),
  ].filter(Boolean), // Um tratamento para poder adicionar plugins de forma condicional dentro do webpack removendo tudo que for boolean falsy, ou seja remove (0, false, '', undefined, null), pois o nosso condicional acima pode retornar false uma vez que não estivermos em ambiente de desenvolvimento
  module: {
    // Onde fica as configurações/regras de como a nossa aplicação vai ser comportar quando estiver sendo importado cada um dos tipos de arquivos
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Babel loader é basicamente a integração entre o babel e o webpack, ou seja baseado na nossa configuração que verificar o arquivos que o webpack quer importar e faz a conversão do mesmo para que o browser/web entenda.
          options: {
            plugins: [
              isDevelopment && require.resolve("react-refresh/babel"),
            ].filter(Boolean),
          },
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
