/*
visibilityId is responsable for setting flashcard visibility and styles/logic
possibles input => output {
    front-cover => shows card front-face: "Pergunta 1, 2, 3"
    question => shows corresponding flashcard question
    answer => shows corresponding flashcard answer
}

label is responsable for getting if user already answered the flashcard and set styles/logic
possibles input => output {
    none => user didnt answered yet
    wrong => user forgot answer
    almost => user almost forget anser
    zap => user zapped
}
*/

const defaultFlashcards = [
  {
    question: "O que é JSX?",
    answer: "Uma extensão de linguagem do JavaScript",
    visibilityId: "front-cover",
    label: "none",
  },

  {
    question: "O React é ____",
    answer: "uma biblioteca JavaScript para construção de interfaces",
    visibilityId: "front-cover",
    label: "none",
  },

  {
    question: "Componentes devem iniciar com ____",
    answer: "letra maiúscula",
    visibilityId: "front-cover",
    label: "none",
  },

  {
    question: "Podemos colocar ____ dentro do JSX",
    answer: "expressões",
    visibilityId: "front-cover",
    label: "none",
  },

  {
    question: "O React DOM nos ajuda ____",
    answer: "interagindo com a DOM para colocar os componentes React na mesma",
    visibilityId: "front-cover",
    label: "none",
  },

  {
    question: "Usamos o npm para ____",
    answer: "gerenciar os pacotes necessários e suas dependências",
    visibilityId: "front-cover",
    label: "none",
  },

  {
    question: "Usamos props para ____",
    answer: "passar diferentes informações para componentes",
    visibilityId: "front-cover",
    label: "none",
  },

  {
    question: "Usamos o estado (state) para ____",
    answer:
      "dizer para o React quais informações quando atualizadas devem renderizar na tela novamente",
    visibilityId: "front-cover",
    label: "none",
  },
];

export default defaultFlashcards;
