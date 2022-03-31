import { DailyWord, DailyWordDatabase } from "../models";

const MILISSECONDS_IN_A_MINUTE = 60 * 1000;

export function getToday(): string {
  const todayDate = new Date();
  const correctedDate = new Date(
    todayDate.valueOf() -
      todayDate.getTimezoneOffset() * MILISSECONDS_IN_A_MINUTE
  );

  return correctedDate.toISOString().split("T")[0];
}

export function getDailyWord(): DailyWord {
  return dailyWords[getToday()];
}

export const dailyWords: DailyWordDatabase = {
  "2022-03-28": {
    edition: "001",
    date: "2022-03-28",
    word: "AMOR",
    question: "DICA: Fruto do espírito.",
    fraseInicio:
      "Que haja uma luz nos lugares mais escuros, quando todas as outras luzes se apagarem.",
    response: "",
  },
  "2022-03-29": {
    edition: "002",
    date: "2022-03-29",
    word: "NENYA",
    question: "DICA: Anel de água forjado por Celebrimbor",
    fraseInicio:
      "E de todos os anéis élficos eram esses os que Sauron mais desejava possuir, pois \n quem os guardasse poderia afastar os estragos do tempo e adiar o cansaço do mundo. No entanto,\n Sauron não conseguiu descobri-los, pois eles haviam sido entregues nas mãos dos Sábios, que os\n ocultaram e nunca mais os usaram abertamente enquanto Sauron manteve o Anel Governante.\n Portanto, os três permaneceram imaculados, pois foram forjados somente por Celebrimbor, e a mão\n de Sauron nunca os tocou. \n",
    response: "",
  },
  "2022-03-30": {
    edition: "003",
    date: "2022-03-30",
    word: "ERU",
    question: "DICA: Criador de Arda.",
    fraseInicio:
      "No início, o Único, que no idioma élfico é chamado de Ilúvatar, gerou de seu pensamento os Ainur; e eles criaram uma Música magnífica diante dele. Nessa música, o Mundo teve início; pois Ilúvatar tornou visível a canção dos Ainur, e eles a contemplaram como uma luz nas trevas. E muitos dentre eles se enamoraram de sua beleza, e também ele sua história, cujo início e evolução testemunharam como numa visão. Então, Ilúvatar deu Vida a essa visão e a instalou no meio do Vazio; e o Fogo Secreto foi enviado para que ardesse no coração do Mundo; e ele se chamou Eä.",
    response: "",
  },
  "2022-03-31": {
    edition: "004",
    date: "2022-03-31",
    word: "JANEIRO",
    question: "DICA: Mês do primeiro beijo",
    fraseInicio: "O beijo é uma linha que liga dois corações 😘",
    response:
      "Seu desempenho até aqui foi ótimo. Busque sua recompensa em Rua Flor da Romã, 263 - Jardim Alvorada, Belo Horizonte - MG, 30810-430, no dia 31/03/2022 as 20 h",
  },
  "2022-04-01": {
    edition: "005",
    date: "2022-04-01",
    word: "KEREN",
    question: "DICA: Todos keren mas um tem. A oitava maravilha do mundo.",
    fraseInicio:
      "Tudo se resume a ultima pessoa que você pensa a noite, é exatamente lá que seu coração está.",
    response: "",
  },
};
