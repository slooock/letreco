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
    response: "b",
  },
  "2022-03-29": {
    edition: "002",
    date: "2022-03-29",
    word: "NENYA",
    question: "DICA: Anel de água forjado por Celebrimbor?",
    response: "b",
  },
  "2022-03-30": {
    edition: "003",
    date: "2022-03-30",
    word: "ERU",
    question: "DICA: Criador de Arda.",
    response: "b",
  },
  "2022-03-31": {
    edition: "004",
    date: "2022-03-31",
    word: "JANEIRO",
    question: "DICA: Mês do primeiro beijo",
    response: "b",
  },
  "2022-04-01": {
    edition: "005",
    date: "2022-04-01",
    word: "KEREN",
    question: "DICA: Todos keren mas um tem. A oitava maravilha do mundo.",
    response: "b",
  },
};
