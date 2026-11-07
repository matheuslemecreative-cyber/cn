
"use strict";

// ========================================
// AS CRÔNICAS DE NÁRNIA
// O DESAFIO DO GRANDE LEÃO
// 50 PERGUNTAS | 3 DIFICULDADES
// ========================================

const QUESTIONS = [

  // ========== FÁCIL (15) ==========

  {
    level: "easy",
    category: "PERSONAGENS",
    question: "Qual é o nome do grande leão que protege Nárnia?",
    options: ["Aslan", "Caspian", "Tumnus", "Rilian"],
    answer: 0,
    explanation: "Aslan é o grande leão e uma das figuras centrais de toda a história de Nárnia."
  },
  {
    level: "easy",
    category: "O GUARDA-ROUPA",
    question: "Por qual objeto as crianças entram em Nárnia no primeiro filme?",
    options: ["Espelho", "Porta de pedra", "Guarda-roupa", "Livro mágico"],
    answer: 2,
    explanation: "Lúcia encontra Nárnia ao entrar em um guarda-roupa na casa do professor Kirke."
  },
  {
    level: "easy",
    category: "OS PEVENSIE",
    question: "Qual é o nome da irmã mais nova dos Pevensie?",
    options: ["Susana", "Lúcia", "Jadis", "Edmundo"],
    answer: 1,
    explanation: "Lúcia Pevensie é a mais nova dos quatro irmãos."
  },
  {
    level: "easy",
    category: "O LEÃO E A FEITICEIRA",
    question: "Quem é a principal vilã do primeiro filme?",
    options: ["Feiticeira Branca", "Feiticeira Verde", "Rainha Prunaprismia", "Dama da Ilha"],
    answer: 0,
    explanation: "Jadis, a Feiticeira Branca, governa Nárnia durante um inverno interminável."
  },
  {
    level: "easy",
    category: "PERSONAGENS",
    question: "Qual criatura Lúcia encontra primeiro ao entrar em Nárnia?",
    options: ["Centauro", "Anão", "Fauno", "Dragão"],
    answer: 2,
    explanation: "Lúcia encontra o fauno Sr. Tumnus perto do lampião."
  },
  {
    level: "easy",
    category: "OS PEVENSIE",
    question: "Qual é o nome do irmão mais velho dos Pevensie?",
    options: ["Pedro", "Edmundo", "Eustáquio", "Caspian"],
    answer: 0,
    explanation: "Pedro Pevensie é o irmão mais velho."
  },
  {
    level: "easy",
    category: "OS PEVENSIE",
    question: "Quantos irmãos Pevensie entram em Nárnia no primeiro filme?",
    options: ["Dois", "Três", "Quatro", "Cinco"],
    answer: 2,
    explanation: "Pedro, Susana, Edmundo e Lúcia são os quatro irmãos Pevensie."
  },
  {
    level: "easy",
    category: "O LEÃO E A FEITICEIRA",
    question: "Qual alimento a Feiticeira Branca oferece a Edmundo?",
    options: ["Chocolate", "Manjar turco", "Bolo de frutas", "Maçãs douradas"],
    answer: 1,
    explanation: "Edmundo é tentado pelo manjar turco oferecido pela Feiticeira Branca."
  },
  {
    level: "easy",
    category: "PRÍNCIPE CASPIAN",
    question: "Qual é o nome do príncipe que busca recuperar o trono de Nárnia?",
    options: ["Rilian", "Miraz", "Caspian", "Cornelius"],
    answer: 2,
    explanation: "Príncipe Caspian é o herdeiro do trono dos telmarinos."
  },
  {
    level: "easy",
    category: "A VIAGEM DO PEREGRINO",
    question: "Qual é o nome do navio usado na grande viagem do terceiro filme?",
    options: ["Peregrino da Alvorada", "Dragão Dourado", "Estrela do Norte", "Aurora Real"],
    answer: 0,
    explanation: "O Peregrino da Alvorada é o navio comandado pelo rei Caspian."
  },
  {
    level: "easy",
    category: "OS PEVENSIE",
    question: "Qual irmão inicialmente trai os outros ao procurar a Feiticeira Branca?",
    options: ["Pedro", "Edmundo", "Susana", "Lúcia"],
    answer: 1,
    explanation: "Edmundo procura a Feiticeira Branca, mas depois se arrepende e ajuda a salvar Nárnia."
  },
  {
    level: "easy",
    category: "PERSONAGENS",
    question: "Qual é o nome do primo dos Pevensie que aparece no terceiro filme?",
    options: ["Rilian", "Eustáquio", "Miraz", "Digory"],
    answer: 1,
    explanation: "Eustáquio Mísero acompanha Lúcia e Edmundo na viagem pelo mar de Nárnia."
  },
  {
    level: "easy",
    category: "PRÍNCIPE CASPIAN",
    question: "Quem é o tio de Caspian que deseja manter o poder?",
    options: ["Miraz", "Tumnus", "Trumpkin", "Reepicheep"],
    answer: 0,
    explanation: "Miraz é tio de Caspian e toma o poder de Nárnia."
  },
  {
    level: "easy",
    category: "PERSONAGENS",
    question: "Qual personagem é um pequeno rato espadachim?",
    options: ["Ripchip (Reepicheep)", "Tumnus", "Trufflehunter", "Glozelle"],
    answer: 0,
    explanation: "Ripchip, também conhecido como Reepicheep, é um rato corajoso e habilidoso com a espada."
  },
  {
    level: "easy",
    category: "A VIAGEM DO PEREGRINO",
    question: "Em qual criatura Eustáquio se transforma no terceiro filme?",
    options: ["Lobo", "Dragão", "Águia", "Urso"],
    answer: 1,
    explanation: "Eustáquio se transforma em dragão após encontrar um tesouro amaldiçoado."
  },

  // ========== MÉDIO (20) ==========

  {
    level: "medium",
    category: "O LEÃO E A FEITICEIRA",
    question: "Qual é o nome do professor que recebe os irmãos Pevensie durante a guerra?",
    options: ["Cornelius", "Digory Kirke", "Andrew Ketterley", "Rilian"],
    answer: 1,
    explanation: "O professor Digory Kirke abriga as crianças em sua casa no campo."
  },
  {
    level: "medium",
    category: "O LEÃO E A FEITICEIRA",
    question: "Qual é o nome do local onde Aslan se sacrifica?",
    options: ["Mesa de Pedra", "Cair Paravel", "Castelo de Miraz", "Monte Pira"],
    answer: 0,
    explanation: "Aslan é sacrificado sobre a Mesa de Pedra para salvar Edmundo."
  },
  {
    level: "medium",
    category: "O LEÃO E A FEITICEIRA",
    question: "Qual personagem entrega presentes mágicos às crianças?",
    options: ["Aslan", "Papai Noel", "Sr. Tumnus", "Professor Kirke"],
    answer: 1,
    explanation: "Papai Noel entrega armas e presentes especiais aos irmãos durante o primeiro filme."
  },
  {
    level: "medium",
    category: "OS PEVENSIE",
    question: "Qual arma especial Susana recebe?",
    options: ["Espada e escudo", "Arco e flechas", "Lança", "Machado"],
    answer: 1,
    explanation: "Susana recebe um arco e flechas, além de uma trompa mágica."
  },
  {
    level: "medium",
    category: "OS PEVENSIE",
    question: "Qual presente de Lúcia possui propriedades curativas?",
    options: ["Um anel", "Uma poção mágica", "Um frasco de cordial", "Uma pedra"],
    answer: 2,
    explanation: "Lúcia recebe um frasco com cordial capaz de curar ferimentos."
  },
  {
    level: "medium",
    category: "O LEÃO E A FEITICEIRA",
    question: "Qual é o nome do castelo onde os Pevensie são coroados?",
    options: ["Cair Paravel", "Anvard", "Miraz", "Tashbaan"],
    answer: 0,
    explanation: "Os quatro irmãos são coroados reis e rainhas em Cair Paravel."
  },
  {
    level: "medium",
    category: "PRÍNCIPE CASPIAN",
    question: "Qual povo domina Nárnia no início do segundo filme?",
    options: ["Calormanos", "Telmarinos", "Gigantes", "Arquenlandeses"],
    answer: 1,
    explanation: "Os telmarinos conquistaram Nárnia e passaram a perseguir seus antigos habitantes."
  },
  {
    level: "medium",
    category: "PRÍNCIPE CASPIAN",
    question: "Qual objeto mágico Caspian usa para pedir ajuda aos antigos reis?",
    options: ["Espelho", "Trompa de Susana", "Anel verde", "Cajado de Aslan"],
    answer: 1,
    explanation: "Caspian sopra a trompa de Susana, que havia sido guardada em Nárnia."
  },
  {
    level: "medium",
    category: "PRÍNCIPE CASPIAN",
    question: "Qual é o nome do tutor de Caspian?",
    options: ["Cornelius", "Trumpkin", "Nikabrik", "Glozelle"],
    answer: 0,
    explanation: "Doutor Cornelius ensina Caspian e o ajuda a escapar do castelo."
  },
  {
    level: "medium",
    category: "PRÍNCIPE CASPIAN",
    question: "Quem é o anão que acompanha os Pevensie em sua jornada?",
    options: ["Nikabrik", "Trumpkin", "Glozelle", "Sopespian"],
    answer: 1,
    explanation: "Trumpkin é o anão que ajuda os Pevensie a encontrar Caspian."
  },
  {
    level: "medium",
    category: "PRÍNCIPE CASPIAN",
    question: "Quem derrota Miraz no duelo individual?",
    options: ["Caspian", "Edmundo", "Pedro", "Aslan"],
    answer: 2,
    explanation: "Pedro vence o duelo contra Miraz, mas o rei telmarino é morto depois por Lorde Sopespian."
  },
  {
    level: "medium",
    category: "PRÍNCIPE CASPIAN",
    question: "Quem faz as árvores despertarem e participarem da batalha final?",
    options: ["Aslan", "Lúcia", "Caspian", "Cornelius"],
    answer: 0,
    explanation: "Aslan desperta as árvores e outras forças da natureza durante a libertação de Nárnia."
  },
  {
    level: "medium",
    category: "A VIAGEM DO PEREGRINO",
    question: "Quantos lordes desaparecidos Caspian procura no terceiro filme?",
    options: ["Cinco", "Seis", "Sete", "Oito"],
    answer: 2,
    explanation: "Caspian procura os sete lordes desaparecidos, antigos aliados de seu pai."
  },
  {
    level: "medium",
    category: "A VIAGEM DO PEREGRINO",
    question: "Qual é o nome do capitão do Peregrino da Alvorada?",
    options: ["Drinian", "Rilian", "Glozelle", "Bern"],
    answer: 0,
    explanation: "Lorde Drinian é o capitão do navio Peregrino da Alvorada."
  },
  {
    level: "medium",
    category: "A VIAGEM DO PEREGRINO",
    question: "Qual objeto transporta Lúcia, Edmundo e Eustáquio para Nárnia?",
    options: ["Guarda-roupa", "Espelho", "Pintura de um navio", "Baú antigo"],
    answer: 2,
    explanation: "Os três entram em Nárnia através de uma pintura de um navio navegando no mar."
  },
  {
    level: "medium",
    category: "A VIAGEM DO PEREGRINO",
    question: "Qual ameaça sobrenatural se espalha pelas ilhas no terceiro filme?",
    options: ["Névoa verde", "Neve eterna", "Chuva de fogo", "Escuridão vermelha"],
    answer: 0,
    explanation: "Uma névoa verde maligna ameaça os habitantes e influencia os personagens."
  },
  {
    level: "medium",
    category: "A VIAGEM DO PEREGRINO",
    question: "Quem ajuda Eustáquio a recuperar sua forma humana?",
    options: ["Caspian", "Ripchip", "Aslan", "Lúcia"],
    answer: 2,
    explanation: "Aslan liberta Eustáquio da forma de dragão."
  },
  {
    level: "medium",
    category: "O LEÃO E A FEITICEIRA",
    question: "Qual criatura é o principal chefe militar da Feiticeira Branca?",
    options: ["Maugrim", "Oreius", "Tumnus", "Ripchip"],
    answer: 0,
    explanation: "Maugrim é o lobo que lidera a polícia secreta da Feiticeira Branca."
  },
  {
    level: "medium",
    category: "OS PEVENSIE",
    question: "Qual título é dado a Pedro quando se torna rei?",
    options: ["Pedro, o Justo", "Pedro, o Magnífico", "Pedro, o Valente", "Pedro, o Gentil"],
    answer: 1,
    explanation: "Pedro recebe o título de Rei Pedro, o Magnífico."
  },
  {
    level: "medium",
    category: "OS PEVENSIE",
    question: "Qual título é dado a Edmundo ao ser coroado?",
    options: ["O Justo", "O Magnífico", "O Valente", "O Gentil"],
    answer: 0,
    explanation: "Edmundo recebe o título de Rei Edmundo, o Justo."
  },

  // ========== DIFÍCIL (15) ==========

  {
    level: "hard",
    category: "O LEÃO E A FEITICEIRA",
    question: "Qual é o nome do centauro que serve como comandante do exército de Aslan?",
    options: ["Oreius", "Glenstorm", "Roonwit", "Drinian"],
    answer: 0,
    explanation: "Oreius é o centauro que lidera tropas de Aslan durante a grande batalha do primeiro filme."
  },
  {
    level: "hard",
    category: "O LEÃO E A FEITICEIRA",
    question: "Qual animal o Sr. Tumnus diz que deveria entregar à Feiticeira Branca ao encontrar Lúcia?",
    options: ["Uma filha de Eva", "Um centauro", "Um anão", "Uma dríade"],
    answer: 0,
    explanation: "Tumnus deveria capturar qualquer humano encontrado, incluindo uma filha de Eva como Lúcia."
  },
  {
    level: "hard",
    category: "O LEÃO E A FEITICEIRA",
    question: "Qual é o nome do casal de castores que ajuda as crianças?",
    options: [
      "Sr. e Sra. Castor",
      "Sr. e Sra. Brandybuck",
      "Sr. e Sra. Digory",
      "Sr. e Sra. Pevensie"
    ],
    answer: 0,
    explanation: "O casal é chamado simplesmente de Sr. Castor e Sra. Castor nos filmes."
  },
  {
    level: "hard",
    category: "O LEÃO E A FEITICEIRA",
    question: "Quem quebra a varinha da Feiticeira Branca durante a batalha?",
    options: ["Pedro", "Edmundo", "Oreius", "Aslan"],
    answer: 1,
    explanation: "Edmundo quebra a varinha da Feiticeira, impedindo que ela continue transformando inimigos em pedra."
  },
  {
    level: "hard",
    category: "PRÍNCIPE CASPIAN",
    question: "Qual é o nome do centauro que aconselha Caspian e os antigos narnianos?",
    options: ["Glenstorm", "Oreius", "Roonwit", "Cornelius"],
    answer: 0,
    explanation: "Glenstorm é um centauro que participa da resistência narniana em Príncipe Caspian."
  },
  {
    level: "hard",
    category: "PRÍNCIPE CASPIAN",
    question: "Qual anão tenta trazer a Feiticeira Branca de volta à vida?",
    options: ["Trumpkin", "Nikabrik", "Duffle", "Glozelle"],
    answer: 1,
    explanation: "Nikabrik participa da tentativa de ressuscitar a Feiticeira Branca."
  },
  {
    level: "hard",
    category: "PRÍNCIPE CASPIAN",
    question: "Qual personagem telmarino mata Miraz após o duelo com Pedro?",
    options: ["Lorde Sopespian", "General Glozelle", "Doutor Cornelius", "Príncipe Caspian"],
    answer: 0,
    explanation: "Lorde Sopespian assassina Miraz e culpa os narnianos para iniciar o ataque."
  },
  {
    level: "hard",
    category: "PRÍNCIPE CASPIAN",
    question: "Qual é o nome da criatura semelhante a um texugo que ajuda Caspian?",
    options: ["Trufflehunter", "Glenstorm", "Bulgy Bear", "Tumnus"],
    answer: 0,
    explanation: "Trufflehunter é um texugo falante que protege e ajuda Caspian."
  },
  {
    level: "hard",
    category: "PRÍNCIPE CASPIAN",
    question: "Qual é o nome do irmão de Miraz e pai de Caspian?",
    options: ["Caspian IX", "Caspian X", "Rilian", "Bern"],
    answer: 0,
    explanation: "O pai de Caspian X foi o rei Caspian IX, morto por Miraz."
  },
  {
    level: "hard",
    category: "A VIAGEM DO PEREGRINO",
    question: "Qual lorde é encontrado na Ilha Solitária e ajuda Caspian contra os traficantes de escravos?",
    options: ["Lorde Bern", "Lorde Rhoop", "Lorde Restimar", "Lorde Octesian"],
    answer: 0,
    explanation: "Lorde Bern é encontrado nas Ilhas Solitárias e auxilia Caspian."
  },
  {
    level: "hard",
    category: "A VIAGEM DO PEREGRINO",
    question: "Qual é o nome do lorde que desaparece ao entrar em uma piscina que transforma objetos em ouro?",
    options: ["Lorde Bern", "Lorde Restimar", "Lorde Rhoop", "Lorde Argoz"],
    answer: 1,
    explanation: "Lorde Restimar é associado à piscina de água que transforma tudo em ouro."
  },
  {
    level: "hard",
    category: "A VIAGEM DO PEREGRINO",
    question: "Qual é o nome do mago que vive na ilha dos seres invisíveis?",
    options: ["Coriakin", "Cornelius", "Ramandu", "Rilian"],
    answer: 0,
    explanation: "Coriakin é o mago que governa a ilha habitada pelos seres invisíveis."
  },
  {
    level: "hard",
    category: "A VIAGEM DO PEREGRINO",
    question: "Qual personagem enfrenta o monstro marinho no clímax do terceiro filme?",
    options: ["Edmundo", "Pedro", "Cornelius", "Miraz"],
    answer: 0,
    explanation: "Edmundo enfrenta o monstro marinho e usa a espada para derrotá-lo."
  },
  {
    level: "hard",
    category: "A VIAGEM DO PEREGRINO",
    question: "Qual personagem decide seguir em direção ao País de Aslan no final do terceiro filme?",
    options: ["Eustáquio", "Ripchip", "Caspian", "Drinian"],
    answer: 1,
    explanation: "Ripchip decide continuar sua viagem até o País de Aslan."
  },
  {
    level: "hard",
    category: "A VIAGEM DO PEREGRINO",
    question: "Qual é o nome da estrela aposentada que aparece na forma de um velho no terceiro filme?",
    options: ["Ramandu", "Coriakin", "Rilian", "Glenstorm"],
    answer: 0,
    explanation: "Ramandu é uma estrela que assumiu forma humana e vive na ilha próxima ao fim do mundo."
  }

];

// ========================================
// CONFIGURAÇÕES
// ========================================

const CONFIG = {
  easyPoints: 10,
  mediumPoints: 20,
  hardPoints: 30,
  hardTime: 15,
  recordKey: "narniaQuizRecordV1",
  nameKey: "narniaQuizPlayerV1"
};

const TOTAL = QUESTIONS.length;

function getPoints(level) {
  if (level === "easy") return CONFIG.easyPoints;
  if (level === "medium") return CONFIG.mediumPoints;
  return CONFIG.hardPoints;
}

const MAX_SCORE = QUESTIONS.reduce(
  (sum, q) => sum + getPoints(q.level), 0
);

// ========================================
// ELEMENTOS
// ========================================

const $ = id => document.getElementById(id);

const screens = {
  home: $("homeScreen"),
  quiz: $("quizScreen"),
  result: $("resultScreen")
};

const els = {
  playerName: $("playerName"),
  soundBtn: $("soundBtn"),
  scoreValue: $("scoreValue"),
  questionCounter: $("questionCounter"),
  progressPercent: $("progressPercent"),
  progressFill: $("progressFill"),
  questionCard: $("questionCard"),
  difficultyBadge: $("difficultyBadge"),
  questionCategory: $("questionCategory"),
  questionText: $("questionText"),
  answersContainer: $("answersContainer"),
  timerBox: $("timerBox"),
  timerValue: $("timerValue"),
  timerFill: $("timerFill"),
  feedback: $("feedback"),
  feedbackTitle: $("feedbackTitle"),
  feedbackText: $("feedbackText"),
  streakValue: $("streakValue"),
  nextBtn: $("nextBtn"),
  playerLabel: $("playerLabel"),
  resultTrophy: $("resultTrophy"),
  resultTitle: $("resultTitle"),
  resultMessage: $("resultMessage"),
  finalScore: $("finalScore"),
  correctCount: $("correctCount"),
  wrongCount: $("wrongCount"),
  accuracyValue: $("accuracyValue"),
  performanceDetails: $("performanceDetails"),
  newRecord: $("newRecord"),
  recordText: $("recordText"),
  toast: $("toast")
};

// ========================================
// ESTADO
// ========================================

let player = "Explorador";
let gameQuestions = [];
let currentIndex = 0;
let score = 0;
let correct = 0;
let wrong = 0;
let streak = 0;
let bestStreak = 0;
let answered = false;

let timerInterval = null;
let timerDeadline = 0;
let soundEnabled = false;
let audioContext = null;
let toastTimeout = null;

let stats = createStats();

function createStats() {
  return {
    easy: { correct: 0, total: 0 },
    medium: { correct: 0, total: 0 },
    hard: { correct: 0, total: 0 }
  };
}

// ========================================
// AUXILIARES
// ========================================

function shuffle(array) {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

function prepareQuestions() {
  const easy = shuffle(QUESTIONS.filter(q => q.level === "easy"));
  const medium = shuffle(QUESTIONS.filter(q => q.level === "medium"));
  const hard = shuffle(QUESTIONS.filter(q => q.level === "hard"));

  return [...easy, ...medium, ...hard].map(q => {
    const options = shuffle(
      q.options.map((text, index) => ({
        text,
        correct: index === q.answer
      }))
    );

    return {
      ...q,
      options: options.map(item => item.text),
      answer: options.findIndex(item => item.correct)
    };
  });
}

function showScreen(name) {
  Object.values(screens).forEach(screen => {
    screen.classList.remove("active");
  });

  screens[name].classList.add("active");
  window.scrollTo(0, 0);
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    els.toast.classList.remove("show");
  }, 2800);
}

function storageGet(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function storageSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // O jogo continua sem armazenamento.
  }
}

// ========================================
// SONS MÁGICOS
// ========================================

function playSound(type) {
  if (!soundEnabled) return;

  try {
    const AudioCtx =
      window.AudioContext || window.webkitAudioContext;

    if (!AudioCtx) return;
    if (!audioContext) audioContext = new AudioCtx();

    if (audioContext.state === "suspended") {
      audioContext.resume();
    }

    const now = audioContext.currentTime;
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();

    osc.connect(gain);
    gain.connect(audioContext.destination);

    const sounds = {
      correct: [520, 880, .26],
      wrong: [260, 160, .3],
      finish: [440, 1000, .55]
    };

    const [start, end, duration] = sounds[type] || sounds.correct;

    osc.type = type === "wrong" ? "triangle" : "sine";

    osc.frequency.setValueAtTime(start, now);
    osc.frequency.exponentialRampToValueAtTime(
      Math.max(1, end), now + duration
    );

    gain.gain.setValueAtTime(.0001, now);
    gain.gain.exponentialRampToValueAtTime(.07, now + .015);
    gain.gain.exponentialRampToValueAtTime(.0001, now + duration);

    osc.start(now);
    osc.stop(now + duration + .02);
  } catch {
    // Som opcional.
  }
}

els.soundBtn.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  els.soundBtn.textContent = soundEnabled ? "♫" : "♪";
  els.soundBtn.setAttribute(
    "aria-label",
    soundEnabled ? "Desativar sons" : "Ativar sons"
  );

  showToast(soundEnabled ? "Sons ativados!" : "Sons desativados!");
  if (soundEnabled) playSound("correct");
});

// ========================================
// PARTÍCULAS DE NEVE
// ========================================

function createParticles() {
  const container = $("particles");
  container.innerHTML = "";

  const count = window.innerWidth < 600 ? 24 : 48;

  for (let i = 0; i < count; i++) {
    const particle = document.createElement("span");
    particle.className = "particle";

    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${9 + Math.random() * 13}s`;
    particle.style.animationDelay = `${-Math.random() * 20}s`;

    const size = 1 + Math.random() * 4;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    container.appendChild(particle);
  }
}

// ========================================
// INICIAR JOGO
// ========================================

function startGame() {
  player = els.playerName.value.trim() || "Explorador";
  storageSet(CONFIG.nameKey, player);

  gameQuestions = prepareQuestions();
  currentIndex = 0;
  score = 0;
  correct = 0;
  wrong = 0;
  streak = 0;
  bestStreak = 0;
  answered = false;
  stats = createStats();

  clearTimer();

  els.scoreValue.textContent = "0";
  els.streakValue.textContent = "0";
  els.playerLabel.textContent = `EXPLORADOR: ${player.toUpperCase()}`;

  showScreen("quiz");
  renderQuestion();
}

// ========================================
// MOSTRAR PERGUNTA
// ========================================

function renderQuestion() {
  clearTimer();

  if (currentIndex >= gameQuestions.length) {
    finishGame();
    return;
  }

  answered = false;

  const q = gameQuestions[currentIndex];
  const number = currentIndex + 1;
  const percent = Math.round(number / TOTAL * 100);

  els.feedback.classList.add("hidden");
  els.nextBtn.classList.add("hidden");
  els.timerBox.classList.add("hidden");
  els.timerBox.classList.remove("urgent");

  els.questionCounter.textContent =
    `DESAFIO ${String(number).padStart(2, "0")} / ${TOTAL}`;

  els.progressPercent.textContent = `${percent}%`;
  els.progressFill.style.width = `${percent}%`;

  const names = {
    easy: "FÁCIL",
    medium: "MÉDIO",
    hard: "DIFÍCIL"
  };

  els.difficultyBadge.textContent = names[q.level];
  els.difficultyBadge.className = `difficulty-badge ${q.level}`;
  els.questionCategory.textContent = q.category;
  els.questionText.textContent = q.question;

  els.answersContainer.innerHTML = "";

  q.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-btn";

    const letter = document.createElement("span");
    letter.className = "answer-letter";
    letter.textContent = "ABCD"[index];

    const text = document.createElement("span");
    text.className = "answer-text";
    text.textContent = option;

    const icon = document.createElement("span");
    icon.className = "answer-icon";

    button.append(letter, text, icon);
    button.addEventListener("click", () => selectAnswer(index));

    els.answersContainer.appendChild(button);
  });

  els.questionCard.classList.remove("question-enter");
  void els.questionCard.offsetWidth;
  els.questionCard.classList.add("question-enter");

  if (q.level === "hard") startTimer();
}

// ========================================
// CRONÔMETRO DE 15 SEGUNDOS
// ========================================

function now() {
  return window.performance.now();
}

function clearTimer() {
  if (timerInterval !== null) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function startTimer() {
  els.timerBox.classList.remove("hidden");
  els.timerValue.textContent = `${CONFIG.hardTime}s`;
  els.timerFill.style.width = "100%";

  timerDeadline = now() + CONFIG.hardTime * 1000;

  timerInterval = setInterval(() => {
    if (answered) {
      clearTimer();
      return;
    }

    const remaining = Math.max(0, timerDeadline - now());
    const seconds = Math.ceil(remaining / 1000);

    els.timerValue.textContent = `${seconds}s`;
    els.timerFill.style.width =
      `${remaining / (CONFIG.hardTime * 1000) * 100}%`;

    if (seconds <= 5) {
      els.timerBox.classList.add("urgent");
    }

    if (remaining <= 0) {
      clearTimer();
      selectAnswer(-1);
    }
  }, 50);
}

// ========================================
// RESPONDER
// ========================================

function selectAnswer(selected) {
  if (answered) return;

  const q = gameQuestions[currentIndex];

  if (
    q.level === "hard" &&
    selected !== -1 &&
    now() >= timerDeadline
  ) {
    selected = -1;
  }

  answered = true;
  clearTimer();

  const isCorrect = selected === q.answer;
  const timedOut = selected === -1;

  stats[q.level].total++;

  if (isCorrect) {
    correct++;
    streak++;
    bestStreak = Math.max(bestStreak, streak);
    stats[q.level].correct++;

    score += getPoints(q.level);
    els.scoreValue.textContent = score;
    playSound("correct");
  } else {
    wrong++;
    streak = 0;
    playSound("wrong");
  }

  els.streakValue.textContent = streak;

  const buttons =
    els.answersContainer.querySelectorAll(".answer-btn");

  buttons.forEach((button, index) => {
    button.disabled = true;
    const icon = button.querySelector(".answer-icon");

    if (index === q.answer) {
      button.classList.add("correct");
      icon.textContent = "✓";
    } else if (index === selected) {
      button.classList.add("wrong");
      icon.textContent = "✕";
    } else {
      button.classList.add("dimmed");
    }
  });

  els.feedback.classList.remove("hidden");

  if (isCorrect) {
    els.feedbackTitle.textContent =
      `✦ Excelente! +${getPoints(q.level)} pontos`;
  } else if (timedOut) {
    els.feedbackTitle.textContent =
      "⌛ O tempo se esgotou, explorador!";
  } else {
    els.feedbackTitle.textContent =
      "✕ Essa não era a resposta correta!";
  }

  els.feedbackText.textContent = q.explanation;

  els.nextBtn.textContent =
    currentIndex === TOTAL - 1
      ? "VER RESULTADO FINAL ➜"
      : "PRÓXIMO DESAFIO ➜";

  els.nextBtn.classList.remove("hidden");
}

function nextQuestion() {
  if (!answered) return;

  currentIndex++;

  if (currentIndex >= TOTAL) {
    finishGame();
  } else {
    renderQuestion();
    if (window.innerWidth < 700) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
}

// ========================================
// CLASSIFICAÇÕES
// ========================================

function getRank(accuracy) {
  if (accuracy >= 90) {
    return {
      title: "LENDA DE NÁRNIA",
      trophy: "👑",
      message:
        `${player}, seu conhecimento é digno dos grandes reis e rainhas! ` +
        "Você conhece os mistérios de Nárnia e suas histórias como poucos."
    };
  }

  if (accuracy >= 75) {
    return {
      title: "GUARDIÃO DE CAIR PARAVEL",
      trophy: "🦁",
      message:
        `${player}, sua coragem e sabedoria impressionariam Aslan. ` +
        "Você está entre os maiores conhecedores de Nárnia!"
    };
  }

  if (accuracy >= 55) {
    return {
      title: "CAVALEIRO DE NÁRNIA",
      trophy: "⚔️",
      message:
        `${player}, você demonstrou grande conhecimento! ` +
        "Mas ainda existem segredos além das montanhas e dos mares."
    };
  }

  if (accuracy >= 35) {
    return {
      title: "EXPLORADOR DO GUARDA-ROUPA",
      trophy: "🗝️",
      message:
        `${player}, você começou sua jornada e descobriu parte ` +
        "das maravilhas de Nárnia. Continue explorando!"
    };
  }

  return {
    title: "VISITANTE DE NÁRNIA",
    trophy: "❄️",
    message:
      `${player}, sua aventura está apenas começando! ` +
      "Reveja os filmes e prepare-se para atravessar o guarda-roupa novamente."
  };
}

// ========================================
// FINALIZAR
// ========================================

function finishGame() {
  clearTimer();

  const accuracy = Math.round(correct / TOTAL * 100);
  const rank = getRank(accuracy);

  els.resultTrophy.textContent = rank.trophy;
  els.resultTitle.textContent = rank.title;
  els.resultMessage.textContent = rank.message;

  els.finalScore.textContent = score;
  els.correctCount.textContent = correct;
  els.wrongCount.textContent = wrong;
  els.accuracyValue.textContent = `${accuracy}%`;

  renderPerformance();

  const previousRecord =
    Number(storageGet(CONFIG.recordKey)) || 0;

  const isNewRecord = score > previousRecord;

  if (isNewRecord) {
    storageSet(CONFIG.recordKey, String(score));
  }

  const record = Math.max(score, previousRecord);

  els.newRecord.classList.toggle("hidden", !isNewRecord);

  els.recordText.textContent =
    `Seu recorde: ${record}/${MAX_SCORE} pontos • ` +
    `Maior sequência: ${bestStreak}`;

  showScreen("result");
  playSound("finish");
}

// ========================================
// DESEMPENHO
// ========================================

function renderPerformance() {
  els.performanceDetails.innerHTML = "";

  const levels = [
    { key: "easy", label: "Fácil" },
    { key: "medium", label: "Médio" },
    { key: "hard", label: "Difícil" }
  ];

  levels.forEach(level => {
    const data = stats[level.key];
    const percent = data.total
      ? Math.round(data.correct / data.total * 100)
      : 0;

    const row = document.createElement("div");
    row.className = "performance-row";

    const label = document.createElement("div");
    label.className = "performance-label";

    const title = document.createElement("span");
    title.textContent = level.label;

    const count = document.createElement("span");
    count.textContent = `${data.correct} / ${data.total}`;

    label.append(title, count);

    const track = document.createElement("div");
    track.className = "performance-track";

    const fill = document.createElement("div");
    fill.className = `performance-fill ${level.key}`;
    fill.style.width = `${percent}%`;

    track.appendChild(fill);
    row.append(label, track);

    els.performanceDetails.appendChild(row);
  });
}

// ========================================
// COMPARTILHAR
// ========================================

async function shareResult() {
  const accuracy = Math.round(correct / TOTAL * 100);
  const rank = getRank(accuracy);

  const message =
    `🦁 AS CRÔNICAS DE NÁRNIA - QUIZ 🦁\n\n` +
    `👑 Explorador: ${player}\n` +
    `🏆 Classificação: ${rank.title}\n` +
    `✨ Pontuação: ${score}/${MAX_SCORE}\n` +
    `✅ Acertos: ${correct}/${TOTAL}\n` +
    `🎯 Precisão: ${accuracy}%\n` +
    `⚔️ Maior sequência: ${bestStreak}\n\n` +
    `Você conhece os segredos de Nárnia?`;

  if (navigator.share) {
    try {
      await navigator.share({
        title: "As Crônicas de Nárnia - Quiz",
        text: message
      });
      return;
    } catch (error) {
      if (error.name === "AbortError") return;
    }
  }

  try {
    await navigator.clipboard.writeText(message);
    showToast("Resultado copiado!");
  } catch {
    const field = document.createElement("textarea");
    field.value = message;
    field.style.position = "fixed";
    field.style.opacity = "0";

    document.body.appendChild(field);
    field.select();

    let copied = false;
    try {
      copied = document.execCommand("copy");
    } catch {}

    field.remove();
    showToast(copied ? "Resultado copiado!" : "Não foi possível copiar.");
  }
}

// ========================================
// EVENTOS
// ========================================

$("startBtn").addEventListener("click", startGame);
$("nextBtn").addEventListener("click", nextQuestion);
$("restartBtn").addEventListener("click", startGame);
$("shareBtn").addEventListener("click", shareResult);

els.playerName.addEventListener("keydown", event => {
  if (event.key === "Enter") startGame();
});

$("brand").addEventListener("click", event => {
  event.preventDefault();

  if (screens.quiz.classList.contains("active")) {
    const leave = confirm(
      "Deseja sair de Nárnia? Seu progresso será perdido."
    );
    if (!leave) return;
  }

  clearTimer();
  showScreen("home");
});

// ========================================
// INICIALIZAÇÃO
// ========================================

function init() {
  createParticles();

  const savedName = storageGet(CONFIG.nameKey);
  if (savedName) els.playerName.value = savedName;

  const savedRecord =
    Number(storageGet(CONFIG.recordKey)) || 0;

  if (savedRecord > 0) {
    showToast(`Seu recorde é ${savedRecord} pontos!`);
  }

  const levels = {
    easy: QUESTIONS.filter(q => q.level === "easy").length,
    medium: QUESTIONS.filter(q => q.level === "medium").length,
    hard: QUESTIONS.filter(q => q.level === "hard").length
  };

  if (
    TOTAL !== 50 ||
    levels.easy !== 15 ||
    levels.medium !== 20 ||
    levels.hard !== 15
  ) {
    console.warn("Confira o banco de perguntas:", levels);
  }

  console.log(
    `Nárnia Quiz: ${TOTAL} perguntas, ` +
    `${MAX_SCORE} pontos possíveis.`
  );
}

init();
