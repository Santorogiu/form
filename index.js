const perguntas = [
    {
      pergunta: "O que o método `push()` faz em um array?",
      respostas: [
        "Adiciona um ou mais elementos no início do array",
        "Adiciona um ou mais elementos no final do array",
        "Remove o último elemento do array"
      ],
      correta: 1
    },
    {
      pergunta: "Qual a saída de `console.log(typeof null)`?",
      respostas: [
        "'null'",
        "'object'",
        "'undefined'"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o resultado de `2 + '2'` em JavaScript?",
      respostas: [
        "'22'",
        "4",
        "'NaN'"
      ],
      correta: 0
    },
    {
      pergunta: "Como você declara uma função chamada `minhaFuncao` em JavaScript?",
      respostas: [
        "function minhaFuncao()",
        "var minhaFuncao = new Function()",
        "let minhaFuncao()"
      ],
      correta: 0
    },
    {
      pergunta: "O que o operador '===' verifica?",
      respostas: [
        "Se dois valores são iguais em valor",
        "Se dois valores são iguais em tipo e valor",
        "Se dois valores são diferentes"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o valor padrão de uma variável não inicializada em JavaScript?",
      respostas: [
        "null",
        "undefined",
        "0"
      ],
      correta: 1
    },
    {
      pergunta: "Qual estrutura de controle é usada para realizar uma repetição em JavaScript?",
      respostas: [
        "if",
        "for",
        "switch"
      ],
      correta: 1
    },
    {
      pergunta: "Como você pode converter uma string em um número inteiro em JavaScript?",
      respostas: [
        "parseInt()",
        "toString()",
        "parseFloat()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual o escopo de variáveis declaradas com `var` em JavaScript?",
      respostas: [
        "Escopo de bloco",
        "Escopo de função",
        "Escopo global"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a maneira correta de acessar o terceiro elemento de um array `arr`?",
      respostas: [
        "arr[2]",
        "arr(3)",
        "arr[3]"
      ],
      correta: 0
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // Adiciona pergunta
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
  
  // loop ou laço de repetição
  for(let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true) //clonando o modelo HTML para JS
    dt.querySelector('span').textContent = resposta //span do HTML = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item)) //atribuindo valor
    dt.querySelector('input').value = item.respostas.indexOf(resposta) //colocando valor em cada opção
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta //um evento onde, se a resposta selecionada (que possui um valor de 0 a 2)  for igual a "correta" (que possui um valor de 0 a 2), então é true, caso não, é false. 
  
      corretas.delete(item)
      if (estaCorreta){
        corretas.add(item)
      } //somando as corretas 
  
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    } 
  
  
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  //remove o que está fixo no HTML
  quizItem.querySelector('dl dt').remove()
  
  // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
  