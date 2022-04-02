export interface Stages {
  [stage: string]: Stage;
}

export interface Stage {
  id: string;
  text: string;
  next: string;
}

export function getStage(stage: string): Stage {
  return listStages[stage];
}

export const listStages: Stages = {
  "1": {
    id: "1",
    text: "Depois dessa noite, do nosso primeiro beijo nossa amizade se tornou mais intima, começamos a fazer mais coisas juntos e uma das coisas era caminhar, este é um dos lugares que gastávamos horas conversando... Espero que na nossa história momentos como esses não acabem nunca.",
    next: "-19.9327547,-43.9388759",
  },
  "2": {
    id: "2",
    text: "Lembra da primeira vez em que saímos? foi um dia especial apesar de vc ter feito eu ficar esperando... Este foi o cenário pra um primeiro encontro em que ficou marcado para nós, espero que nossa jornada tenha mais dias como o dia em que nos encontramos aqui. Um dia simples, leve e tranquilo.",
    next: "Praça Tiradentes, 41 - Funcionários, Belo Horizonte - MG, 30130-020",
  },
  "3": {
    id: "3",
    text: "A conversa na praça da liberdade foi tão legal que a gente estendeu ela por aqui... Aqui a gente conversou sobre a igreja, sobre como você se sentia e sobre a vida... E também foi o lugar onde nos beijamos pela primeira vez. Como um bom amigo eu tive que me arriscar, o resultado foi uma surpresa pra mim e acredito pra você também.",
    next: "-19.890471,-43.9812522",
  },

  "4": {
    id: "4",
    text: "Aqui será onde vamos passar parte das nossas vidas, foi um passo muito importante para nós e dar esse passo foi uma maneira inconsciente de dizer que te amo e que quero passar o resto da minha vida com você...",
    next: "-19.8929019,-43.9854013",
  },
  "5": {
    id: "5",
    text: "fim",
    next: "-19.8929019,-43.9854013",
  },
};
