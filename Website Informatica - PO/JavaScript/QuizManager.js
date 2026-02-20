// Quiz Database
const quizzes = {
  les1: {
    title: "HTML Les 1: HTML Basis",
    niveau: "Beginner",
    duration: 900, // 15 minuten
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "Wat betekent HTML?",
        options: [
          "Hyper Text Markup Language",
          "High Tech Modern Language",
          "Home Tool Markup Language"
        ],
        correct: 0,
        modelAnswer: "Hyper Text Markup Language",
        explanation: "HTML staat voor HyperText Markup Language - dit is de standaard taal voor webpagina's."
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "Welke tag wordt gebruikt voor de grootste kop?",
        options: ["<h6>", "<h1>", "<h3>"],
        correct: 1,
        modelAnswer: "<h1>",
        explanation: "<h1> is de grootste kop in HTML."
      },
      {
        id: 3,
        type: "code",
        question: "Schrijf een HTML pagina met de titel 'Mijn Website' en een kop 'Welkom'",
        hint: "Gebruik <!DOCTYPE html>, <html>, <head>, <title>, <h1> tags",
        testCode: (answer) => {
          return answer.includes("<!DOCTYPE") && answer.includes("<h1>") && answer.includes("Welkom");
        },
        modelAnswer: "<!DOCTYPE html>\n<html>\n  <head>\n    <title>Mijn Website</title>\n  </head>\n  <body>\n    <h1>Welkom</h1>\n  </body>\n</html>",
        explanation: "Een basis HTML pagina moet DOCTYPE, html, head, title, en body tags hebben."
      },
      {
        id: 4,
        type: "multiple-choice",
        question: "Wat is de juiste volgorde van HTML elementen?",
        options: [
          "<!DOCTYPE>, <html>, <head>, <title>, <body>",
          "<html>, <!DOCTYPE>, <body>, <head>",
          "<body>, <html>, <head>, <title>"
        ],
        correct: 0,
        modelAnswer: "<!DOCTYPE>, <html>, <head>, <title>, <body>",
        explanation: "De correcte volgorde voorkomeert structuurproblemen."
      },
      {
        id: 5,
        type: "text",
        question: "Noem 3 HTML tags die je hebt geleerd",
        expectedKeywords: ["h1", "p", "div", "span", "body", "head"],
        minKeywords: 2,
        modelAnswer: "<h1>, <p>, <div> (of andere tags zoals <span>, <body>, <head>)",
        explanation: "Er zijn veel HTML tags, zolang je 2 of meer juiste tags noemt is het goed."
      }
    ]
  },
  les2: {
    title: "HTML Les 2: Tekst maken",
    niveau: "Beginner",
    duration: 1200, // 20 minuten
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "Met welke tag maak je een paragraaf?",
        options: ["<p>", "<par>", "<paragraph>"],
        correct: 0,
        modelAnswer: "<p>",
        explanation: "<p> staat voor paragraph (paragraaf)."
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "Wat is het verschil tussen <strong> en <bold>?",
        options: [
          "<bold> bestaat niet in HTML5",
          "<strong> en <bold> doen hetzelfde",
          "<bold> is ouder dan <strong>"
        ],
        correct: 0,
        modelAnswer: "<bold> bestaat niet in HTML5",
        explanation: "<bold> is niet standaard HTML. Gebruik <strong> voor nadruk."
      },
      {
        id: 3,
        type: "code",
        question: "Maak een lijst met 3 voordelen van HTML",
        hint: "Gebruik <ul>, <li>, en <strong> tags",
        testCode: (answer) => {
          return answer.includes("<ul>") && answer.includes("<li>") && (answer.match(/<li>/g) || []).length >= 3;
        },
        modelAnswer: "<ul>\n  <li>Structuur voor webpagina's</li>\n  <li>Eenvoudig te leren</li>\n  <li>Universeel ondersteund</li>\n</ul>",
        explanation: "Een unordered list gebruikt <ul> en <li> tags."
      },
      {
        id: 4,
        type: "multiple-choice",
        question: "Hoe maak je een geordende lijst?",
        options: ["<ol>", "<ul>", "<list>"],
        correct: 0,
        modelAnswer: "<ol>",
        explanation: "<ol> staat voor ordered list (genummerde lijst)."
      },
      {
        id: 5,
        type: "text",
        question: "Noem 2 semantische HTML tags voor tekst",
        expectedKeywords: ["em", "strong", "mark", "small", "code", "kbd"],
        minKeywords: 2,
        modelAnswer: "<strong>, <em>, <mark>, <small>, <code>, <kbd>",
        explanation: "Semantische tags geven betekenis aan de tekst."
      }
    ]
  },
  les3: {
    title: "HTML Les 3: Afbeeldingen toevoegen",
    niveau: "Beginner",
    duration: 1200,
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "Met welke tag voeg je een afbeelding in?",
        options: ["<img>", "<image>", "<picture>"],
        correct: 0,
        modelAnswer: "<img>",
        explanation: "<img> is de correcte tag voor afbeeldingen in HTML5."
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "Welk attribuut is essentieel voor de <img> tag?",
        options: ["src", "alt", "title"],
        correct: 0,
        modelAnswer: "src",
        explanation: "src geeft het pad naar de afbeelding aan."
      },
      {
        id: 3,
        type: "code",
        question: "Voeg een afbeelding in met alt tekst 'Mijn Foto'",
        hint: "Gebruik <img src='pad' alt='beschrijving'>",
        testCode: (answer) => {
          return answer.includes("<img") && answer.includes("alt") && answer.includes("Mijn Foto");
        },
        modelAnswer: "<img src='fotopad.jpg' alt='Mijn Foto'>",
        explanation: "Alt tekst is belangrijk voor accessibility."
      },
      {
        id: 4,
        type: "multiple-choice",
        question: "Waarom is het alt attribuut belangrijk?",
        options: [
          "Voor accessibility en SEO",
          "Omdat het verplicht is",
          "Voor styling afbeeldingen"
        ],
        correct: 0,
        modelAnswer: "Voor accessibility en SEO",
        explanation: "Alt tekst helpers gebruikers met visuele beperkingen."
      },
      {
        id: 5,
        type: "text",
        question: "Noem 2 afbeeldingsformaten die op het web gebruikt worden",
        expectedKeywords: ["jpg", "png", "gif", "webp", "svg"],
        minKeywords: 2,
        modelAnswer: "JPG, PNG, GIF, WebP, SVG",
        explanation: "Veel formaten zijn geschikt voor webafbeeldingen."
      }
    ]
  },
  les4: {
    title: "CSS Les 4: Basis CSS",
    niveau: "Intermediair",
    duration: 1500,
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "Wat betekent CSS?",
        options: [
          "Cascading Style Sheets",
          "Computer Style System",
          "Creative Styling Software"
        ],
        correct: 0,
        modelAnswer: "Cascading Style Sheets",
        explanation: "CSS staat voor Cascading Style Sheets en wordt gebruikt voor het stylen van HTML elementen."
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "Welke CSS property verandert de tekstkleur?",
        options: ["color", "background", "font-size"],
        correct: 0,
        modelAnswer: "color",
        explanation: "De 'color' property bepaalt de kleur van de tekst."
      },
      {
        id: 3,
        type: "code",
        question: "Stijl een paragraaf met rode tekst en Arial font",
        hint: "Gebruik color en font-family properties",
        testCode: (answer) => {
          return answer.includes("color") && answer.includes("red") && answer.includes("font-family") && answer.includes("Arial");
        },
        modelAnswer: "p {\n  color: red;\n  font-family: Arial;\n}",
        explanation: "CSS regels worden geschreven tussen accolades met property: value; syntax."
      },
      {
        id: 4,
        type: "multiple-choice",
        question: "Wat is het verschil tussen padding en margin?",
        options: [
          "Padding is ruimte binnen de border, margin is ruimte buiten de border",
          "Margin is ruimte binnen de border, padding is ruimte buiten de border",
          "Ze zijn hetzelfde"
        ],
        correct: 0,
        modelAnswer: "Padding is ruimte binnen de border, margin is ruimte buiten de border",
        explanation: "Padding voegt ruimte toe binnen het element, margin buiten het element."
      },
      {
        id: 5,
        type: "text",
        question: "Noem 3 manieren om CSS toe te voegen aan HTML",
        expectedKeywords: ["inline", "intern", "extern", "internal", "external", "style tag", "link tag"],
        minKeywords: 3,
        modelAnswer: "Inline (style attribute), internal (<style> tag), external (link naar .css bestand)",
        explanation: "CSS kan inline, internal of external worden toegevoegd."
      }
    ]
  },
  les5: {
    title: "CSS Les 5: Layout in CSS",
    niveau: "Intermediair",
    duration: 1500,
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "Wat is flexbox in CSS?",
        options: [
          "Een layout module voor flexible en responsief design",
          "Een type font",
          "Een afbeeldingsformat"
        ],
        correct: 0,
        modelAnswer: "Een layout module voor flexible en responsief design",
        explanation: "Flexbox helpt met flexibele layouts."
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "Welke property start een flex container?",
        options: [
          "display: flex",
          "layout: flex",
          "flex: container"
        ],
        correct: 0,
        modelAnswer: "display: flex",
        explanation: "display: flex maakt een element een flex container."
      },
      {
        id: 3,
        type: "code",
        question: "Maak een flex container die items horizontaal rangschikt met ruimte ertussen",
        hint: "Gebruik display: flex; justify-content: space-between;",
        testCode: (answer) => {
          return answer.includes("display") && answer.includes("flex") && answer.includes("justify-content");
        },
        modelAnswer: ".container {\n  display: flex;\n  justify-content: space-between;\n}",
        explanation: "Flexbox eigenschappen configureren de layout."
      },
      {
        id: 4,
        type: "multiple-choice",
        question: "Wat doet 'gap' property in flexbox?",
        options: [
          "Voegt ruimte toe tussen flex items",
          "Verbergt items",
          "Verandert de achtergrondkleur"
        ],
        correct: 0,
        modelAnswer: "Voegt ruimte toe tussen flex items",
        explanation: "Gap voegt ruimte toe tussen flex items."
      },
      {
        id: 5,
        type: "text",
        question: "Noem 2 voordelen van Flexbox layout",
        expectedKeywords: ["responsief", "flexible", "makkelijk", "alignment", "centering"],
        minKeywords: 2,
        modelAnswer: "Responsief design, flexibele layouts, eenvoudig alignment, gemakkelijk centering",
        explanation: "Flexbox maakt responsieve layouts makkelijk."
      }
    ]
  },
  les6: {
    title: "CSS Les 6: Responsive design",
    niveau: "Intermediair",
    duration: 1500,
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "Wat is responsive design?",
        options: [
          "Design dat zich aanpast aan verschillende schermgroottes",
          "Design dat snel laadt",
          "Design met veel animaties"
        ],
        correct: 0,
        modelAnswer: "Design dat zich aanpast aan verschillende schermgroottes",
        explanation: "Responsive design past zich aan aan verschillende apparaten."
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "Welke CSS feature is essentieel voor responsive design?",
        options: [
          "Media queries",
          "JavaScript loops",
          "HTML5 tags"
        ],
        correct: 0,
        modelAnswer: "Media queries",
        explanation: "Media queries passen stijlen aan op basis van screen size."
      },
      {
        id: 3,
        type: "code",
        question: "Schrijf een media query die tekst vergroot op schermen > 768px",
        hint: "Gebruik: @media (min-width: 768px) { ... }",
        testCode: (answer) => {
          return answer.includes("@media") && answer.includes("768") && answer.includes("font-size");
        },
        modelAnswer: "@media (min-width: 768px) {\n  p {\n    font-size: 18px;\n  }\n}",
        explanation: "Media queries reageren op schermagroottes."
      },
      {
        id: 4,
        type: "multiple-choice",
        question: "Welke viewport meta tag is belangrijk voor responsive design?",
        options: [
          '<meta name="viewport" content="width=device-width">',
          '<meta viewport="responsive">',
          '<meta responsive="true">'
        ],
        correct: 0,
        modelAnswer: '<meta name="viewport" content="width=device-width">',
        explanation: "De viewport meta tag is essentieel voor mobiele devices."
      },
      {
        id: 5,
        type: "text",
        question: "Noem 2 breakpoints die veel gebruikt worden in responsive design",
        expectedKeywords: ["480", "600", "768", "992", "1200", "mobile", "tablet", "desktop"],
        minKeywords: 2,
        modelAnswer: "768px, 992px, 1200px (of 480px, 600px voor mobile breakpoints)",
        explanation: "Breakpoints zijn screen sizes waar je design verandert."
      }
    ]
  },
  les7: {
    title: "CSS Les 7: Grid & Animations",
    niveau: "Intermediair",
    duration: 1200,
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "Wat is CSS Grid vooral handig voor?",
        options: [
          "Tweedimensionale layouts (rijen en kolommen)",
          "Alleen horizontale layouts",
          "Mobile responsive design"
        ],
        correct: 0,
        modelAnswer: "Tweedimensionale layouts (rijen en kolommen)",
        explanation: "Grid is perfect voor complex layouts met rijen EN kolommen."
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "Welke CSS property maakt een container een grid?",
        options: [
          "display: grid",
          "layout: grid",
          "grid: container"
        ],
        correct: 0,
        modelAnswer: "display: grid",
        explanation: "display: grid maakt een element een grid container."
      },
      {
        id: 3,
        type: "code",
        question: "Maak een grid met 3 kolommen van gelijke breedte",
        hint: "Gebruik grid-template-columns",
        testCode: (answer) => {
          return answer.includes("grid-template-columns") && answer.includes("1fr");
        },
        modelAnswer: ".container {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n}",
        explanation: "1fr is een fractional unit die gelijke delen verdeelt."
      },
      {
        id: 4,
        type: "multiple-choice",
        question: "Welke @keyframes waarden definieer je voor een animatie?",
        options: [
          "0%, 100% en andere percentages",
          "Alleen 0% en 100%",
          "Alleen 50%"
        ],
        correct: 0,
        modelAnswer: "0%, 100% en andere percentages",
        explanation: "@keyframes spreekt momenten in de animatie aan met percentages."
      },
      {
        id: 5,
        type: "text",
        question: "Noem 3 transform properties die je in animaties kunt gebruiken",
        expectedKeywords: ["scale", "rotate", "translate", "skew"],
        minKeywords: 3,
        modelAnswer: "scale, rotate, translateX/Y, skew",
        explanation: "Transform properties veranderen de vorm en positie van elementen."
      }
    ]
  },
  les8: {
    title: "JavaScript Les 8: Introductie",
    niveau: "Beginner",
    duration: 1200,
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "Wat is JavaScript vooral nuttig voor?",
        options: [
          "Interactiviteit en dynamisme toevoegen aan websites",
          "HTML structuur bepalen",
          "Kleuren en fonts van websites bepalen"
        ],
        correct: 0,
        modelAnswer: "Interactiviteit en dynamisme toevoegen aan websites",
        explanation: "JavaScript voegt gedrag en interactiviteit toe aan websites."
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "Wat is het verschil tussen let en const?",
        options: [
          "let kan veranderd worden, const niet",
          "const is sneller dan let",
          "Ze zijn hetzelfde"
        ],
        correct: 0,
        modelAnswer: "let kan veranderd worden, const niet",
        explanation: "let is voor variabelen die veranderen, const voor constanten."
      },
      {
        id: 3,
        type: "code",
        question: "Schrijf een functie die twee getallen optelt",
        hint: "Gebruik function sum(a, b) { ... }",
        testCode: (answer) => {
          return answer.includes("function") && answer.includes("return") && answer.includes("+");
        },
        modelAnswer: "function sum(a, b) {\n  return a + b;\n}",
        explanation: "Functies hebben parameters en kunnen waarden returneren."
      },
      {
        id: 4,
        type: "multiple-choice",
        question: "Welke methode voeg je toe aan een element voor click events?",
        options: [
          "addEventListener('click', ...)",
          "onClick = ...",
          "element.click = function() { ... }"
        ],
        correct: 0,
        modelAnswer: "addEventListener('click', ...)",
        explanation: "addEventListener is de moderne manier voor events."
      },
      {
        id: 5,
        type: "text",
        question: "Noem 3 gegevenstypen in JavaScript",
        expectedKeywords: ["string", "number", "boolean", "array", "object"],
        minKeywords: 3,
        modelAnswer: "String, Number, Boolean, Array, Object",
        explanation: "JavaScript heeft verschillende gegevenstypen voor verschillende data."
      }
    ]
  },
  les9: {
    title: "JavaScript Les 9: DOM Manipulatie",
    niveau: "Intermediair",
    duration: 1200,
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "Wat betekent DOM?",
        options: [
          "Document Object Model",
          "Data Object Management",
          "Dynamic Online Module"
        ],
        correct: 0,
        modelAnswer: "Document Object Model",
        explanation: "DOM is hoe JavaScript je HTML-pagina ziet."
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "Welke methode gebruik je om een element te selecteren met ID?",
        options: [
          "document.getElementById('idNaam')",
          "document.getElement('idNaam')",
          "document.find('#idNaam')"
        ],
        correct: 0,
        modelAnswer: "document.getElementById('idNaam')",
        explanation: "getElementById is de methode voor ID selectie."
      },
      {
        id: 3,
        type: "code",
        question: "Selecteer een element met de klasse 'myClass' en verander de achtergrondkleur naar blauw",
        hint: "Gebruik querySelector en style.backgroundColor",
        testCode: (answer) => {
          return answer.includes("querySelector") && answer.includes("backgroundColor");
        },
        modelAnswer: "let element = document.querySelector('.myClass');\nelement.style.backgroundColor = 'blue';",
        explanation: "querySelector werkt met CSS selectors."
      },
      {
        id: 4,
        type: "multiple-choice",
        question: "Wat is het verschil tussen innerHTML en textContent?",
        options: [
          "innerHTML kan HTML bevatten, textContent niet",
          "innerHTML is sneller",
          "Ze doen hetzelfde"
        ],
        correct: 0,
        modelAnswer: "innerHTML kan HTML bevatten, textContent niet",
        explanation: "textContent is veiliger voor platte tekst."
      },
      {
        id: 5,
        type: "text",
        question: "Noem 3 methoden om elementen te selecteren met JavaScript",
        expectedKeywords: ["getElementById", "querySelector", "getElementsByClassName", "querySelectorAll"],
        minKeywords: 3,
        modelAnswer: "getElementById, querySelector, querySelectorAll, getElementsByClassName",
        explanation: "JavaScript biedt veel manieren om elementen te selecteren."
      }
    ]
  },
  les10: {
    title: "JavaScript Les 10: Data Opslaan",
    niveau: "Intermediair",
    duration: 1200,
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "Wat is localStorage?",
        options: [
          "Persoonlijk geheugen van de browser per website",
          "Server geheugen voor je website",
          "RAM van de computer"
        ],
        correct: 0,
        modelAnswer: "Persoonlijk geheugen van de browser per website",
        explanation: "localStorage slaat data op in de browser die blijft bestaan."
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "Hoe sla je data op in localStorage?",
        options: [
          "localStorage.setItem('key', 'value')",
          "localStorage.save('key', 'value')",
          "localStorage['key'] = 'value'"
        ],
        correct: 0,
        modelAnswer: "localStorage.setItem('key', 'value')",
        explanation: "setItem() is de standaard methode voor opslaan."
      },
      {
        id: 3,
        type: "code",
        question: "Haal een waarde op uit localStorage met de key 'username'",
        hint: "Gebruik localStorage.getItem()",
        testCode: (answer) => {
          return answer.includes("getItem") && answer.includes("username");
        },
        modelAnswer: "let username = localStorage.getItem('username');",
        explanation: "getItem() haalt opgeslagen waarden op."
      },
      {
        id: 4,
        type: "multiple-choice",
        question: "Wat doen JSON.stringify() en JSON.parse()?",
        options: [
          "stringify maakt object->string, parse maakt string->object",
          "Ze doen hetzelfde",
          "stringify is sneller"
        ],
        correct: 0,
        modelAnswer: "stringify maakt object->string, parse maakt string->object",
        explanation: "Deze functies converteren tussen objects en JSON strings."
      },
      {
        id: 5,
        type: "text",
        question: "Noem 3 praktische toepassingen van localStorage",
        expectedKeywords: ["thema", "todo", "formulier", "voorkeur", "instellingen", "profile"],
        minKeywords: 3,
        modelAnswer: "Dark mode/thema voorkeur, todo-lijsten, formuliergegevens, gebruikersprofielen",
        explanation: "localStorage is handig voor allerlei gebruikersinstellingen."
      }
    ]
  },
  les11: {
    title: "JavaScript Les 11: Geavanceerd",
    niveau: "Geavanceerd",
    duration: 1500,
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "Wat is een closure in JavaScript?",
        options: [
          "Een functie die toegang heeft tot variabelen van zijn parent scope",
          "Een manier om code sneller uit te voeren",
          "Een HTML element verbergen"
        ],
        correct: 0,
        modelAnswer: "Een functie die toegang heeft tot variabelen van zijn parent scope",
        explanation: "Closures zijn een krachtig concept in JavaScript."
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "Wat zijn callbacks in JavaScript?",
        options: [
          "Functies die als argument aan andere functies worden doorgegeven",
          "Berichten die teruggaan naar de server",
          "CSS classes die geactiveerd kunnen worden"
        ],
        correct: 0,
        modelAnswer: "Functies die als argument aan andere functies worden doorgegeven",
        explanation: "Callbacks zijn essentieel voor asynchrone code."
      },
      {
        id: 3,
        type: "code",
        question: "Maak een closure functie die een teller beheert",
        hint: "Maak een functie die een andere functie returnt",
        testCode: (answer) => {
          return answer.includes("function") && answer.includes("return") && answer.includes("++");
        },
        modelAnswer: "function createCounter() {\n  let count = 0;\n  return function() {\n    return ++count;\n  }\n}",
        explanation: "Closures behouden state tussen functie calls."
      },
      {
        id: 4,
        type: "multiple-choice",
        question: "Wat is 'this' binding in JavaScript?",
        options: [
          "De context waarnaar het object verwijst waar een functie wordt aangeroepen",
          "Een HTML binding attribute",
          "De verbinding met een database"
        ],
        correct: 0,
        modelAnswer: "De context waarnaar het object verwijst waar een functie wordt aangeroepen",
        explanation: "'this' verwijst naar het object dat de functie aanroept."
      },
      {
        id: 5,
        type: "text",
        question: "Noem 3 geavanceerde JavaScript concepten",
        expectedKeywords: ["closure", "hoisting", "scope", "prototype", "this", "event", "callback"],
        minKeywords: 3,
        modelAnswer: "Closures, Hoisting, Scope, Prototypes, this binding, Event handling, Callbacks",
        explanation: "Deze concepten zijn belangrijk voor professionele JavaScript!"
      }
    ]
  },
  les12: {
    title: "JavaScript Les 12: API & Asynchronous Programming",
    niveau: "Geavanceerd",
    duration: 1500,
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "Wat is een API?",
        options: [
          "Application Programming Interface - een manier om data uit te wisselen",
          "Advanced Programming Interface",
          "A Personal Interface"
        ],
        correct: 0,
        modelAnswer: "Application Programming Interface - een manier om data uit te wisselen",
        explanation: "APIs verbinden verschillende applicaties met elkaar."
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "Welke methode gebruik je om data van een API op te halen?",
        options: [
          "fetch(url)",
          "getAPI(url)",
          "request(url)"
        ],
        correct: 0,
        modelAnswer: "fetch(url)",
        explanation: "fetch() is de moderne manier om API requests te maken."
      },
      {
        id: 3,
        type: "code",
        question: "Maak een eenvoudige fetch request",
        hint: "Gebruik: fetch(url).then(response => response.json()).then(data => ...)",
        testCode: (answer) => {
          return answer.includes("fetch") && answer.includes(".then") && answer.includes("json");
        },
        modelAnswer: "fetch('https://api.voorbeeld.com/data')\n  .then(response => response.json())\n  .then(data => console.log(data))",
        explanation: "fetch retourneert een Promise die je met .then() verwerkt."
      },
      {
        id: 4,
        type: "multiple-choice",
        question: "Wat is async/await?",
        options: [
          "Een modernere syntaxis voor Promises",
          "Een type HTML element",
          "Een CSS animation property"
        ],
        correct: 0,
        modelAnswer: "Een modernere syntaxis voor Promises",
        explanation: "async/await maakt asynchrone code leesbaarder."
      },
      {
        id: 5,
        type: "text",
        question: "Noem 3 stappen van een typische API workflow",
        expectedKeywords: ["fetch", "request", "response", "parse", "json", "error", "data"],
        minKeywords: 3,
        modelAnswer: "1. Fetch request sturen, 2. Response ontvangen, 3. Data parsen (JSON), 4. Data verwerken",
        explanation: "API calls volgen altijd deze basisstappen."
      }
    ]
  }
};

// Quiz State
let currentQuiz = null;
let currentQuestion = 0;
let answers = {};
let quizStartTime = 0;
let timerInterval = null;
let isQuizActive = false;
let isReviewMode = false;
let quizScore = 0;

// Initialize opgaven pagina
function initializePage() {
  loadOpdravenCards();
}

// Load all available quizzes
function loadOpdravenCards() {
  const container = document.getElementById('opgavenContainer');
  container.innerHTML = '';

  for (const [key, quiz] of Object.entries(quizzes)) {
    const card = document.createElement('div');
    card.className = 'opgave-card';
    card.innerHTML = `
      <h3>${quiz.title}</h3>
      <div class="niveau">${quiz.niveau}</div>
      <div class="beschrijving">
        ${quiz.questions.length} vragen<br>
        ${Math.floor(quiz.duration / 60)} minuten
      </div>
      <button class="start-btn" onclick="startQuiz('${key}')">Start Toets</button>
    `;
    container.appendChild(card);
  }
}

// Start a quiz
function startQuiz(quizKey) {
  if (!quizzes[quizKey]) return;

  currentQuiz = { key: quizKey, ...quizzes[quizKey] };
  currentQuestion = 0;
  answers = {};
  quizStartTime = Date.now();
  isQuizActive = true;

  // Setup security first
  preventSwitching();

  // Enter fullscreen
  const modal = document.getElementById('quizModal');
  modal.classList.add('show');

  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen().catch(() => {
      console.log("Fullscreen not available");
    });
  }

  showQuestion();
  startTimer();
}

// Show current question
function showQuestion() {
  const container = document.getElementById('questionsContainer');
  container.innerHTML = '';

  const question = currentQuiz.questions[currentQuestion];
  const questionDiv = document.createElement('div');
  questionDiv.className = 'question';

  let questionHTML = `
    <div class="question-type">${question.type === 'multiple-choice' ? '📝 Meerkeuze' : question.type === 'code' ? '💻 Code' : '✏️ Vrij antwoord'}</div>
    <h4>Vraag ${currentQuestion + 1}: ${question.question}</h4>
  `;

  if (question.type === 'multiple-choice') {
    questionHTML += '<div class="multiple-choice">';
    question.options.forEach((option, index) => {
      const isSelected = answers[currentQuestion] === index || String(answers[currentQuestion]) === String(index);
      let labelClass = 'choice';
      
      // In review mode, mark correct/incorrect answers
      if (isReviewMode) {
        if (index === question.correct) {
          labelClass += ' correct-choice';
        }
        if (isSelected && index !== question.correct) {
          labelClass += ' incorrect-choice';
        }
      }
      
      questionHTML += `
        <label class="${labelClass}">
          <input type="radio" name="q${currentQuestion}" value="${index}" ${isSelected ? 'checked' : ''} onchange="setAnswer(${currentQuestion}, this.value)">
          ${escapeHtml(option)}
        </label>
      `;
    });
    questionHTML += '</div>';
  } else if (question.type === 'code') {
    const savedCode = answers[currentQuestion] || '';
    questionHTML += `
      <textarea class="code-input" id="codeInput${currentQuestion}" oninput="setAnswer(${currentQuestion}, this.value)">${escapeHtml(savedCode)}</textarea>
      <div class="code-hint">💡 ${escapeHtml(question.hint)}</div>
      <button class="test-btn" onclick="testCode(${currentQuestion})">Test Code</button>
      <div class="test-result" id="result${currentQuestion}"></div>
    `;
  } else if (question.type === 'text') {
    const savedAnswer = answers[currentQuestion] || '';
    questionHTML += `
      <input type="text" class="text-input" id="textInput${currentQuestion}" value="${escapeHtml(savedAnswer)}" oninput="setAnswer(${currentQuestion}, this.value)" placeholder="Je antwoord hier...">
    `;
  }

  questionDiv.innerHTML = questionHTML;
  
  // Disable inputs in review mode
  if (isReviewMode) {
    questionDiv.querySelectorAll('input[type="radio"], textarea, input[type="text"]').forEach(elem => {
      elem.disabled = true;
    });
    
    // Remove onchange/oninput handlers
    questionDiv.querySelectorAll('[onchange], [oninput]').forEach(elem => {
      elem.removeAttribute('onchange');
      elem.removeAttribute('oninput');
    });
  }
  
  container.appendChild(questionDiv);
  
  // Show model answer in review mode
  if (isReviewMode) {
    const isCorrect = checkAnswerCorrect(question, answers[currentQuestion]);
    const reviewDiv = document.createElement('div');
    reviewDiv.className = 'review-section';
    
    let reviewHTML = `
      <div class="review-header">📖 Modelantwoord:</div>
      <div class="model-answer">${escapeHtml(question.modelAnswer || 'Modelantwoord niet beschikbaar')}</div>
    `;
    
    if (question.explanation) {
      reviewHTML += `<div class="review-explanation">💡 ${escapeHtml(question.explanation)}</div>`;
    }
    
    reviewHTML += `<div class="review-result ${isCorrect ? 'correct-answer' : 'incorrect-answer'}">
      ${isCorrect ? '✅ Je had dit goed!' : '❌ Dit antwoord was niet correct.'}
    </div>`;
    
    reviewDiv.innerHTML = reviewHTML;
    container.appendChild(reviewDiv);
  }

  updateProgress();
  updateButtons();
}

function setAnswer(questionIndex, answer) {
  // Store answer as string, handle conversion in scoring
  answers[questionIndex] = String(answer);
}

function testCode(questionIndex) {
  const question = currentQuiz.questions[questionIndex];
  const textarea = document.getElementById(`codeInput${questionIndex}`);
  const code = textarea ? textarea.value : (answers[questionIndex] || '');
  const resultDiv = document.getElementById(`result${questionIndex}`);

  // Save the code first
  setAnswer(questionIndex, code);

  if (CodeValidator.validateCode(question, code)) {
    resultDiv.className = 'test-result success';
    resultDiv.innerHTML = '✅ Code klopt! Goed bezig!';
  } else {
    resultDiv.className = 'test-result error';
    resultDiv.innerHTML = '❌ Code is niet correct. Probeer het opnieuw.';
  }
}

function updateProgress() {
  const progress = ((currentQuestion + 1) / currentQuiz.questions.length) * 100;
  document.getElementById('progressText').textContent = 
    `Vraag ${currentQuestion + 1} van ${currentQuiz.questions.length}`;
  document.getElementById('progressFill').style.width = progress + '%';
}

function updateButtons() {
  document.getElementById('prevBtn').style.display = currentQuestion > 0 ? 'block' : 'none';
  document.getElementById('nextBtn').style.display = currentQuestion < currentQuiz.questions.length - 1 ? 'block' : 'none';
  
  const submitBtn = document.getElementById('submitBtn');
  if (isReviewMode) {
    if (currentQuestion === currentQuiz.questions.length - 1) {
      submitBtn.style.display = 'block';
      submitBtn.textContent = 'Quiz Sluiten';
      submitBtn.onclick = closeQuiz;
    } else {
      submitBtn.style.display = 'none';
    }
  } else {
    submitBtn.style.display = currentQuestion === currentQuiz.questions.length - 1 ? 'block' : 'none';
    submitBtn.textContent = 'Inleveren';
    submitBtn.onclick = submitQuiz;
  }
}

function nextQuestion() {
  if (currentQuestion < currentQuiz.questions.length - 1) {
    currentQuestion++;
    showQuestion();
  }
}

function previousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion();
  }
}

function startTimer() {
  let timeLeft = currentQuiz.duration;
  const timerEl = document.getElementById('timer');

  timerInterval = setInterval(() => {
    timeLeft--;
    const minutes = Math.floor(timeLeft / 60);
    const seconds = Math.max(0, timeLeft % 60);
    timerEl.textContent = `${String(Math.max(0, minutes)).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      submitQuiz();
    }
  }, 1000);
}

function submitQuiz() {
  clearInterval(timerInterval);
  isQuizActive = false;

  let score = 0;

  currentQuiz.questions.forEach((question, index) => {
    const answer = answers[index];
    if (question.type === 'multiple-choice') {
      const selectedIndex = parseInt(answer);
      if (selectedIndex === question.correct) {
        score++;
      }
    } else if (question.type === 'code' && CodeValidator.validateCode(question, answer)) {
      score++;
    } else if (question.type === 'text' && answer && typeof answer === 'string') {
      // Basic text validation
      const keywordCount = question.expectedKeywords.filter(kw => 
        String(answer).toLowerCase().includes(kw.toLowerCase())
      ).length;
      if (keywordCount >= question.minKeywords) {
        score++;
      }
    }
  });

  const percentage = Math.round((score / currentQuiz.questions.length) * 100);
  showResults(score, percentage);
}

function showResults(score, percentage) {
  quizScore = score;
  const container = document.getElementById('questionsContainer');
  container.innerHTML = `
    <div class="quiz-results">
      <h2>Toets Afgerond! 🎉</h2>
      <div class="score-display">${score}/${currentQuiz.questions.length}</div>
      <div class="result-message">${percentage}%</div>
      <p>${
        percentage >= 80 ? 'Uitstekend! Je hebt dit onderdeel goed begrepen.' :
        percentage >= 60 ? 'Goed gedaan! Je hebt voldoende gescoord.' :
        percentage >= 40 ? 'Je bent goed bezig, maar veel meer oefenen helpt!' :
        'Bestudeer het materiaal nog eens en probeer de toets opnieuw.'
      }</p>
      <button class="btn-next" onclick="startReview()" style="margin-top: 20px;">📖 Nakijken</button>
    </div>
  `;

  // Hide prev/next buttons
  document.getElementById('prevBtn').style.display = 'none';
  document.getElementById('nextBtn').style.display = 'none';
  document.getElementById('submitBtn').style.display = 'none';
}

function closeQuiz() {
  if (isQuizActive && !isReviewMode && !confirm('Weet je zeker dat je de toets wilt afsluiten zonder in te leveren?')) {
    return;
  }

  clearInterval(timerInterval);
  isQuizActive = false;
  isReviewMode = false;
  currentQuestion = 0;
  answers = {};
  document.getElementById('quizModal').classList.remove('show');

  if (document.fullscreenElement) {
    document.exitFullscreen().catch(() => {
      console.log("Could not exit fullscreen");
    });
  }
}

function startReview() {
  isReviewMode = true;
  currentQuestion = 0;
  
  // Update header
  document.getElementById('quizTitel').textContent = currentQuiz.title + ' - Nakijken';
  
  showQuestion();
}

function checkAnswerCorrect(question, answer) {
  if (question.type === 'multiple-choice') {
    const selectedIndex = parseInt(answer);
    return selectedIndex === question.correct;
  } else if (question.type === 'code') {
    return CodeValidator.validateCode(question, answer);
  } else if (question.type === 'text') {
    if (!answer || typeof answer !== 'string') return false;
    const keywordCount = question.expectedKeywords.filter(kw => 
      String(answer).toLowerCase().includes(kw.toLowerCase())
    ).length;
    return keywordCount >= question.minKeywords;
  }
  return false;
}

// Utility function to escape HTML entities
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

// Security Measures
let securityEventsAdded = false;

function preventSwitching() {
  if (securityEventsAdded) return; // Don't add listeners multiple times
  securityEventsAdded = true;

  // Prevent tab switching
  document.addEventListener('keydown', (e) => {
    if (!isQuizActive) return;
    if ((e.ctrlKey || e.metaKey) && (e.key === 'Tab' || e.key === 'q' || e.key === 'w')) {
      e.preventDefault();
      showSecurityWarning();
    }
  }, true);

  // Prevent right-click
  document.addEventListener('contextmenu', (e) => {
    if (isQuizActive) {
      e.preventDefault();
      showSecurityWarning();
    }
  }, true);

  // Prevent F12 developer tools
  document.addEventListener('keydown', (e) => {
    if (!isQuizActive) return;
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
      e.preventDefault();
      showSecurityWarning();
    }
  }, true);

  // Warn on page visibility change
  document.addEventListener('visibilitychange', () => {
    if (isQuizActive && document.hidden) {
      showSecurityWarning();
    }
  }, true);
}

function showSecurityWarning() {
  const warning = document.getElementById('securityWarning');
  warning.classList.add('show');
  setTimeout(() => warning.classList.remove('show'), 3000);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initializePage);
