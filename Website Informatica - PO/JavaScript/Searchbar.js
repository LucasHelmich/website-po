// Zoekgegevens - alle lessen met keywords en content snippets
const lessenData = [
  {
    titel: "HTML Les 1: HTML Basis",
    url: "les1.html",
    keywords: ["html", "basis", "structuur", "tags", "elementen", "document", "browser", "basisstructuur", "pagina", "inhoud", "betekenis", "fouten", "head", "body", "title", "h1", "p", "tekst", "opbouw", "semantisch", "doctype", "html5", "webpagina", "ontwikkeling", "markup", "hypertext", "webontwikkeling", "frontend", "website", "internet", "browsers", "chrome", "firefox", "safari", "edge", "validator", "syntax", "attributen", "nesting", "hiërarchie"],
    beschrijving: "Leer de basis van HTML, tags en de structuur van een webpagina",
    content: {
      "html": "HTML staat voor HyperText Markup Language en is de taal die wordt gebruikt...",
      "tags": "Tags zijn gespecificeerde labels die de structuur van een HTML-document definiëren...",
      "elementen": "Elementen zijn de bouwstenen van een webpagina en bestaan uit opening en sluitingtags...",
      "structuur": "De structuur van HTML bestaat uit de head en body secties..." 
    }
  },
  {
    titel: "HTML Les 2: Tekst maken",
    url: "les2.html",
    keywords: ["html", "tekst", "koppen", "paragrafen", "lijsten", "h1", "h2", "h3", "p", "strong", "em", "b", "i", "ul", "ol", "li", "opmaak", "formatting", "nadruk", "titel", "content", "inhoud", "structureren", "semantisch", "bold", "italic", "headings", "paragraphs", "lists", "unordered", "ordered", "emphasis", "strikethrough", "del", "ins", "mark", "highlight", "blockquote", "cite", "abbr", "dfn", "code", "pre", "kbd", "samp", "var", "sub", "sup"],
    beschrijving: "Leer hoe je tekst structureert met koppen, paragrafen en lijsten",
    content: {
      "paragrafen": "Paragrafen maak je met de <p> tag. Deze tag groepeerd tekst in blokken...",
      "koppen": "Koppen gebruik je om titels en ondertitels te maken met h1 tot h6 tags...",
      "lijsten": "Lijsten maak je met <ul> voor ongeordende en <ol> voor geordende lijsten..."
    }
  },
  {
    titel: "HTML Les 3: Afbeeldingen toevoegen",
    url: "les3.html",
    keywords: ["html", "afbeeldingen", "img", "alt", "foto", "plaatje", "src", "bron", "tekst", "beschrijving", "bestand", "format", "jpg", "png", "gif", "svg", "content", "inhoud", "media", "image", "responsive", "width", "height", "dimensions", "aspect ratio", "loading", "lazy", "figure", "figcaption", "caption", "thumbnail", "gallery", "icon", "logo", "banner", "background", "sprite", "optimization", "compressie", "webP", "avif"],
    beschrijving: "Leer hoe je afbeeldingen toevoegt en op de juiste manier gebruikt",
    content: {
      "afbeeldingen": "Afbeeldingen voeg je toe met de <img> tag. Deze tag heeft attributen zoals src en alt...",
      "img": "De img tag is zelfsluitend en bevat attributen voor de bron en beschrijving...",
      "alt": "Het alt-attribuut bevat een tekstbeschrijving van de afbeelding voor toegankelijkheid..."
    }
  },
  {
    titel: "CSS Les 4: Basis CSS",
    url: "les4.html",
    keywords: ["css", "styling", "kleuren", "fonts", "margin", "padding", "achtergrond", "ontwerp", "opmaak", "eigenschap", "waarde", "inline", "extern", "selectors", "color", "background", "font-family", "size", "spacing", "afstand", "lettertype", "style", "cascading style sheets", "rule", "stylesheet", "link", "style tag", "id", "class", "element", "universal", "attribute", "pseudo", "hover", "active", "focus", "visited", "first-child", "last-child", "nth-child", "before", "after", "content", "border", "outline", "box-shadow", "text-shadow", "opacity", "visibility", "display", "position", "float", "clear", "z-index", "overflow"],
    beschrijving: "Leer de basis van CSS en hoe je elementen kan stylen",
    content: {
      "css": "CSS staat voor Cascading Style Sheets en wordt gebruikt om het uiterlijk van webpagina's te bepalen...",
      "margin": "Margin is de ruimte buiten de border van een element en zorgt voor afstand tussen elementen...",
      "padding": "Padding is de ruimte tussen de content en de border van een element...",
      "kleuren": "Je kunt kleuren instellen met de color eigenschap voor tekst en background voor achtergronden...",
      "fonts": "Lettertypen stel je in met font-family en je kunt voorgedefinieerde of custom fonts gebruiken..."
    }
  },
  {
    titel: "CSS Les 5: Layout in CSS",
    url: "les5.html",
    keywords: ["css", "layout", "flexbox", "grid", "positionering", "div", "container", "flex", "items", "justify", "align", "row", "column", "gap", "display", "arrange", "margin", "padding", "spacing", "afstand", "ontwerp", "styling", "box model", "border", "content", "static", "relative", "absolute", "fixed", "position", "blok", "sectie", "flex-direction", "flex-wrap", "flex-flow", "justify-content", "align-items", "align-content", "order", "flex-grow", "flex-shrink", "flex-basis", "grid-template", "grid-area", "grid-column", "grid-row", "fr", "repeat", "minmax", "auto-fit", "auto-fill", "grid-gap", "centering", "vertical", "horizontal", "sticky", "transform", "translate"],
    beschrijving: "Leer hoe je layouts maakt met flexbox en CSS grid",
    content: {
      "flexbox": "Flexbox is een moderne manier om layouts te maken met flex containers en flex items...",
      "grid": "CSS Grid is een geavanceerde layout module waarmee je 2D layouts kunt maken...",
      "layout": "Layouts bepaal je met display properties zoals flexbox, grid en positioning...",
      "box model": "Het CSS Box Model bestaat uit content, padding, border en margin lagen...",
      "position": "Positionering van elementen doe je met static, relative, absolute of fixed waarden..."
    }
  },
  {
    titel: "CSS Les 6: Responsive design",
    url: "les6.html",
    keywords: ["css", "responsive", "media queries", "mobiel", "tablet", "desktop", "schermgrootte", "viewport", "breakpoints", "mobile first", "adaptief", "flexibel", "aanpassend", "device", "margin", "padding", "spacing", "afstand", "layout", "ontwerp", "procentueel", "max-width", "breedtes", "apparaat", "scherm", "gebruikerservaring", "em", "rem", "vh", "vw", "vmin", "vmax", "fluid", "scalable", "touch", "gesture", "orientation", "portrait", "landscape", "retina", "hidpi", "accessibility", "usability", "performance", "loading", "bandwidth", "optimization"],
    beschrijving: "Leer hoe je responsive websites maakt voor alle apparaten",
    content: {
      "responsive": "Responsive design zorg ervoor dat je website er goed uitziet op alle schermgroottes...",
      "media queries": "Media queries gebruiken je om CSS regels toe te passen op basis van schermgrootte...",
      "mobiel": "Voor mobiele apparaten maak je vaak een aanpaste layout met lagere breedtes...",
      "viewport": "De viewport is het zichtbare gedeelte van de browser en kan met meta tags ingesteld worden...",
      "breakpoints": "Breakpoints zijn schermgroottes waar je de layout aanpast met media queries..."
    }
  },
  {
    titel: "CSS Les 7: Grid & Animations",
    url: "les7.html",
    keywords: ["css", "grid", "animations", "keyframes", "transition", "transform", "rotate", "scale", "translate", "skew", "matrix", "perspective", "3d", "animation", "duration", "delay", "timing", "ease", "linear", "cubic-bezier", "grid-template-columns", "grid-template-rows", "grid-auto", "grid-area", "span", "named lines", "implicit", "explicit", "subgrid", "masonry", "hover", "active", "focus", "motion", "performance", "gpu", "will-change"],
    beschrijving: "Leer geavanceerde CSS technieken met grid layouts en animaties",
    content: {
      "grid": "CSS Grid is een krachtige layout module voor 2D layouts met rijen en kolommen...",
      "animations": "CSS animaties maak je met @keyframes en animation properties...",
      "keyframes": "@keyframes definieert de stappen van een animatie...",
      "transition": "Transitions zorgen voor vloeiende overgangen tussen states..."
    }
  },
  {
    titel: "JavaScript Les 8: Introductie",
    url: "les8.html",
    keywords: ["javascript", "js", "programmeren", "scripting", "variabelen", "functies", "events", "dom", "interactie", "dynamisch", "client-side", "browser", "console", "alert", "prompt", "confirm", "var", "let", "const", "scope", "hoisting", "string", "number", "boolean", "array", "object", "null", "undefined", "typeof", "operators", "comparison", "logical", "arithmetic", "assignment", "conditionals", "if", "else", "switch", "loops", "for", "while", "do-while", "break", "continue"],
    beschrijving: "Leer de basis van JavaScript programmeren",
    content: {
      "javascript": "JavaScript is een programmeertaal voor webontwikkeling...",
      "variabelen": "Variabelen slaan data op met var, let of const...",
      "functies": "Functies zijn herbruikbare codeblokken...",
      "events": "Events zijn acties zoals klikken of hoveren..."
    }
  },
  {
    titel: "JavaScript Les 9: DOM Manipulatie",
    url: "les9.html",
    keywords: ["javascript", "dom", "manipulatie", "elementen", "selecteren", "wijzigen", "toevoegen", "verwijderen", "events", "listeners", "querySelector", "getElementById", "getElementsByClassName", "innerHTML", "textContent", "style", "classList", "add", "remove", "toggle", "attributes", "setAttribute", "getAttribute", "createElement", "appendChild", "removeChild", "insertBefore", "parentNode", "childNodes", "nextSibling", "previousSibling", "event bubbling", "event capturing", "preventDefault", "stopPropagation"],
    beschrijving: "Leer hoe je de DOM kunt manipuleren met JavaScript",
    content: {
      "dom": "DOM staat voor Document Object Model en vertegenwoordigt de HTML structuur...",
      "manipulatie": "DOM manipulatie betekent elementen selecteren en wijzigen...",
      "events": "Event listeners reageren op gebruikersacties...",
      "elementen": "Elementen zijn de bouwstenen van de DOM..."
    }
  },
  {
    titel: "JavaScript Les 10: Data Opslaan",
    url: "les10.html",
    keywords: ["javascript", "localStorage", "sessionStorage", "cookies", "data", "opslaan", "persistent", "tijdelijk", "browser", "client-side", "storage", "setItem", "getItem", "removeItem", "clear", "key", "length", "json", "stringify", "parse", "object", "array", "serialize", "deserialize", "expiration", "security", "privacy", "quota", "limits", "synchronization", "async", "callbacks", "promises", "async/await"],
    beschrijving: "Leer hoe je data kunt opslaan in de browser",
    content: {
      "localStorage": "localStorage slaat data op die blijft bestaan tussen sessies...",
      "sessionStorage": "sessionStorage slaat data op die verdwijnt bij het sluiten van het tabblad...",
      "json": "JSON is een formaat voor data uitwisseling...",
      "cookies": "Cookies zijn kleine tekstbestanden voor data opslag..."
    }
  },
  {
    titel: "JavaScript Les 11: Geavanceerd",
    url: "les11.html",
    keywords: ["javascript", "geavanceerd", "closures", "prototypes", "inheritance", "this", "context", "bind", "call", "apply", "arrow functions", "destructuring", "spread", "rest", "modules", "import", "export", "classes", "constructor", "methods", "static", "getters", "setters", "async", "await", "promises", "fetch", "api", "error handling", "try", "catch", "finally", "throw", "custom errors", "debugging", "console", "breakpoints", "performance", "optimization"],
    beschrijving: "Leer geavanceerde JavaScript concepten",
    content: {
      "closures": "Closures zijn functies die toegang hebben tot variabelen van hun parent scope...",
      "prototypes": "Prototypes zijn het mechanisme voor object inheritance in JavaScript...",
      "this": "this verwijst naar de context waarin een functie wordt uitgevoerd...",
      "async": "Async programming maakt niet-blokkerende code mogelijk..."
    }
  },
  {
    titel: "JavaScript Les 12: API & Asynchronous Programming",
    url: "les12.html",
    keywords: ["javascript", "api", "asynchronous", "async", "await", "promises", "fetch", "xhr", "xmlhttprequest", "ajax", "json", "rest", "http", "get", "post", "put", "delete", "headers", "status codes", "cors", "authentication", "tokens", "oauth", "endpoints", "requests", "responses", "parsing", "error handling", "loading states", "caching", "offline", "service workers", "pwa", "web sockets", "real-time", "streaming"],
    beschrijving: "Leer werken met APIs en asynchrone programmering",
    content: {
      "api": "APIs zijn interfaces voor data uitwisseling tussen applicaties...",
      "fetch": "fetch is een moderne API voor HTTP requests...",
      "promises": "Promises vertegenwoordigen de uiteindelijke voltooiing van een async operatie...",
      "async/await": "async/await maakt async code leesbaarder..."
    }
  },
  {
    titel: "Python Les 13: Introductie en Installatie",
    url: "les13.html",
    keywords: ["python", "introductie", "installatie", "programmeren", "taal", "interpreter", "ide", "omgeving", "ontwikkeling", "syntax", "hello world", "basis", "beginnen", "leren", "tutorial", "handleiding", "gids", "starters", "nieuwkomers", "fundamentals", "grondbeginselen", "opzetten", "setup", "download", "installeren", "omgeving", "ontwikkelomgeving", "code editor", "visual studio code", "pycharm", "idle", "jupyter", "notebook", "interactive", "shell", "command line", "terminal", "path", "environment variables", "pip", "package manager", "libraries", "modules"],
    beschrijving: "Leer Python kennen, installeren en je eerste programma schrijven",
    content: {
      "python": "Python is een veelzijdige programmeertaal die bekend staat om zijn eenvoud en leesbaarheid...",
      "installatie": "Python installeren kan via de officiële website python.org...",
      "ide": "Een IDE (Integrated Development Environment) helpt bij het schrijven van code...",
      "hello world": "Het traditionele eerste programma dat 'Hello, World!' afdrukt..."
    }
  },
  {
    titel: "Python Les 14: Variabelen en Datatypes",
    url: "les14.html",
    keywords: ["python", "variabelen", "datatypes", "strings", "integers", "floats", "booleans", "type conversie", "input", "output", "print", "data types", "string operations", "concatenation", "indexing", "slicing", "methods", "len", "upper", "lower", "strip", "replace", "format", "f-strings", "casting", "int", "str", "float", "bool", "type checking", "isinstance", "user input", "raw_input", "validation", "escape sequences", "special characters", "multiline strings", "string formatting", "variables", "assignment", "naming conventions", "keywords", "reserved words"],
    beschrijving: "Leer werken met variabelen, verschillende datatypes en string operaties",
    content: {
      "variabelen": "Variabelen zijn containers voor het opslaan van data waarden...",
      "strings": "Strings zijn sequenties van karakters tussen aanhalingstekens...",
      "datatypes": "Python heeft verschillende ingebouwde datatypes zoals int, float, str en bool...",
      "type conversie": "Type conversie betekent het omzetten van één datatype naar een ander..."
    }
  },
  {
    titel: "Python Les 15: Control Structures",
    url: "les15.html",
    keywords: ["python", "control structures", "if", "else", "elif", "comparison operators", "logical operators", "for loops", "while loops", "break", "continue", "nested loops", "conditionals", "boolean logic", "and", "or", "not", "range", "iteration", "loop control", "infinite loops", "loop variables", "indentation", "code blocks", "decision making", "conditional statements", "comparisons", "equality", "greater than", "less than", "truthy", "falsy", "short circuit", "ternary operator", "list comprehensions", "generator expressions"],
    beschrijving: "Leer beslissingen nemen en herhalende taken uitvoeren met control structures",
    content: {
      "if-else": "If-else statements worden gebruikt om beslissingen te nemen gebaseerd op voorwaarden...",
      "for loops": "For loops worden gebruikt om over sequenties te itereren...",
      "while loops": "While loops blijven uitvoeren zolang een voorwaarde waar is...",
      "logical operators": "Logische operatoren combineren voorwaarden met AND, OR en NOT..."
    }
  },
  {
    titel: "Python Les 16: Functies",
    url: "les16.html",
    keywords: ["python", "functies", "def", "parameters", "arguments", "return", "scope", "local", "global", "built-in functions", "lambda", "anonymous functions", "default parameters", "keyword arguments", "arbitrary arguments", "*args", "**kwargs", "function definition", "function call", "return values", "void functions", "recursive functions", "recursion", "stack overflow", "base case", "call stack", "function scope", "variable scope", "name resolution", "LEGB rule", "closures", "nested functions", "decorators", "higher-order functions", "map", "filter", "reduce", "functools"],
    beschrijving: "Leer functies definiëren en gebruiken voor herbruikbare code",
    content: {
      "functies": "Functies zijn herbruikbare blokken code die een specifieke taak uitvoeren...",
      "def": "Het def keyword wordt gebruikt om een functie te definiëren...",
      "parameters": "Parameters zijn variabelen die in de functie definitie worden gedefinieerd...",
      "return": "Return geeft een waarde terug van een functie naar de caller..."
    }
  },
  {
    titel: "Python Les 17: Lists en Tuples",
    url: "les17.html",
    keywords: ["python", "lists", "tuples", "sequences", "mutable", "immutable", "indexing", "slicing", "list methods", "append", "extend", "insert", "remove", "pop", "sort", "reverse", "list comprehensions", "tuple unpacking", "packing", "nested lists", "2d lists", "matrices", "iteration", "enumerate", "zip", "list operations", "concatenation", "repetition", "membership", "count", "index", "min", "max", "sum", "len", "any", "all", "sorted", "reversed", "copy", "deep copy", "shallow copy"],
    beschrijving: "Leer werken met lists en tuples voor het organiseren van data",
    content: {
      "lists": "Lists zijn veranderlijke sequenties die meerdere waarden kunnen bevatten...",
      "tuples": "Tuples zijn onveranderlijke sequenties die meerdere waarden kunnen bevatten...",
      "indexing": "Indexing geeft toegang tot individuele elementen via hun positie...",
      "slicing": "Slicing geeft toegang tot subreeksen van elementen..."
    }
  },
  {
    titel: "Python Les 18: Dictionaries en Sets",
    url: "les18.html",
    keywords: ["python", "dictionaries", "dict", "sets", "key-value pairs", "hash tables", "associative arrays", "unordered", "unique values", "dict methods", "keys", "values", "items", "get", "setdefault", "update", "pop", "popitem", "clear", "set operations", "union", "intersection", "difference", "symmetric difference", "subset", "superset", "disjoint", "frozenset", "dict comprehensions", "set comprehensions", "hashable", "immutable keys", "lookup", "search", "mapping", "associations", "collections", "counter", "defaultdict", "ordereddict"],
    beschrijving: "Leer werken met dictionaries voor key-value opslag en sets voor unieke waarden",
    content: {
      "dictionaries": "Dictionaries slaan data op als key-value paren voor snelle lookups...",
      "sets": "Sets zijn ongeordende collecties van unieke elementen...",
      "key-value": "In dictionaries worden waarden opgeslagen onder unieke sleutels...",
      "hashing": "Sets en dict keys gebruiken hashing voor snelle toegang..."
    }
  },
  {
    titel: "Python Les 19: File Handling",
    url: "les19.html",
    keywords: ["python", "file handling", "open", "read", "write", "close", "with statement", "context manager", "text files", "binary files", "csv", "json", "encoding", "utf-8", "file modes", "r", "w", "a", "x", "b", "t", "readline", "readlines", "writelines", "seek", "tell", "flush", "file objects", "file paths", "os module", "pathlib", "directories", "folders", "file system", "permissions", "error handling", "file not found", "io errors", "parsing", "serialization", "data persistence", "logging", "configuration files"],
    beschrijving: "Leer bestanden lezen, schrijven en beheren in Python",
    content: {
      "open": "De open() functie wordt gebruikt om bestanden te openen...",
      "with statement": "Het with statement zorgt voor automatisch sluiten van bestanden...",
      "read": "Bestanden lezen kan regel voor regel of in één keer...",
      "write": "Bestanden schrijven kan met write() of writelines()..."
    }
  },
  {
    titel: "Python Les 20: Object-Oriented Programming",
    url: "les20.html",
    keywords: ["python", "oop", "object-oriented programming", "classes", "objects", "instances", "attributes", "methods", "init", "constructor", "self", "inheritance", "polymorphism", "encapsulation", "abstraction", "super", "method overriding", "method overloading", "class variables", "instance variables", "private", "protected", "public", "properties", "getters", "setters", "decorators", "@property", "@staticmethod", "@classmethod", "magic methods", "dunder methods", "__str__", "__repr__", "__eq__", "__add__", "operator overloading", "multiple inheritance", "method resolution order", "mro", "composition", "aggregation"],
    beschrijving: "Leer object-georiënteerd programmeren met klassen en objecten",
    content: {
      "classes": "Klassen zijn blauwdrukken voor het maken van objecten...",
      "objects": "Objecten zijn instanties van klassen met hun eigen data...",
      "inheritance": "Overerving stelt klassen in staat eigenschappen over te nemen...",
      "polymorphism": "Polymorfisme stelt objecten in staat op verschillende manieren te reageren..."
    }
  },
  {
    titel: "Python Les 21: Modules en Libraries",
    url: "les21.html",
    keywords: ["python", "modules", "libraries", "import", "from", "as", "packages", "__init__.py", "standard library", "built-in modules", "math", "datetime", "os", "sys", "json", "csv", "random", "collections", "itertools", "functools", "pip", "pypi", "requirements.txt", "virtual environments", "venv", "conda", "third-party libraries", "numpy", "pandas", "matplotlib", "requests", "flask", "django", "pygame", "tkinter", "turtle", "scikit-learn", "tensorflow", "pytorch", "opencv", "pillow", "beautifulsoup", "selenium", "pytest", "unittest"],
    beschrijving: "Leer werken met modules, libraries en externe packages",
    content: {
      "modules": "Modules zijn bestanden met Python code die je kunt hergebruiken...",
      "import": "Import stelt je in staat om code van andere modules te gebruiken...",
      "libraries": "Libraries zijn collecties van modules voor specifieke doeleinden...",
      "pip": "pip is de package installer voor Python..."
    }
  }
];

let selectedSuggestieIndex = -1;

// Haal alle unieke keywords op
function getAllKeywords() {
  const allKeywords = new Set();
  lessenData.forEach(les => {
    les.keywords.forEach(kw => allKeywords.add(kw));
  });
  return Array.from(allKeywords).sort();
}

// Zoekfunctie - toont suggesties van keywords terwijl je typt
function showSuggesties(zoekterm) {
  console.log('showSuggesties called with:', zoekterm);
  const suggestiesDiv = document.getElementById("suggesties");
  selectedSuggestieIndex = -1;
  
  if (!zoekterm.trim()) {
    suggestiesDiv.classList.remove("show");
    return;
  }
  
  const zoektermLower = zoekterm.toLowerCase();
  const allKeywords = getAllKeywords();
  console.log('All keywords:', allKeywords.length);
  
  // Filter keywords die beginnen met of bevatten de zoekterm
  const matchedKeywords = allKeywords.filter(kw => 
    kw.toLowerCase().includes(zoektermLower)
  ).slice(0, 8); // Toon max 8 suggesties
  
  console.log('Matched keywords:', matchedKeywords);
  
  if (matchedKeywords.length === 0) {
    suggestiesDiv.classList.remove("show");
    return;
  }
  
  // Maak suggestielijst met keywords
  let html = "";
  matchedKeywords.forEach((keyword, index) => {
    html += `
      <div class="suggestie-item" onclick="zoekMetKeyword('${keyword}')" data-index="${index}">
        <span class="suggestie-titel">${keyword}</span>
        <span style="font-size: 12px; color: #8f93ff;">→</span>
      </div>
    `;
  });
  
  suggestiesDiv.innerHTML = html;
  suggestiesDiv.classList.add("show");
}

// Navigeer door suggesties met pijltjestoetsen
function navigateSuggesties(event) {
  const suggestiesDiv = document.getElementById("suggesties");
  const items = suggestiesDiv.querySelectorAll(".suggestie-item");
  
  if (items.length === 0) return;
  
  switch(event.key) {
    case "ArrowDown":
      event.preventDefault();
      selectedSuggestieIndex = Math.min(selectedSuggestieIndex + 1, items.length - 1);
      updateSelectedSuggestie(items);
      break;
    case "ArrowUp":
      event.preventDefault();
      selectedSuggestieIndex = Math.max(selectedSuggestieIndex - 1, -1);
      updateSelectedSuggestie(items);
      break;
    case "Enter":
      event.preventDefault();
      const zoekterm = document.getElementById("zoekInput").value.trim();
      if (zoekterm) {
        window.location.href = `search-results.html?q=${encodeURIComponent(zoekterm)}`;
      }
      break;
    case "Escape":
      suggestiesDiv.classList.remove("show");
      break;
  }
}

// Update visuele selectie
function updateSelectedSuggestie(items) {
  items.forEach((item, index) => {
    item.classList.toggle("selected", index === selectedSuggestieIndex);
  });
}

// Ga naar zoekresultaten met geselecteerd keyword
function zoekMetKeyword(keyword) {
  window.location.href = `search-results.html?q=${encodeURIComponent(keyword)}`;
}

// Toggle zoekbalk
function toggleSearch() {
  const input = document.getElementById("zoekInput");
  input.classList.toggle("open");
  if (input.classList.contains("open")) {
    input.focus();
  }
}

// Zoekfunctie voor zoekresultaten pagina
function voerZoekUit() {
  const urlParams = new URLSearchParams(window.location.search);
  const zoekterm = urlParams.get("q");
  
  if (!zoekterm) {
    document.getElementById("zoekResultaten").innerHTML = '<p class="geen-resultaten">Geen zoekterm ingevoerd.</p>';
    return;
  }
  
  const zoektermLower = zoekterm.toLowerCase();
  document.getElementById("zoekTerm").textContent = zoekterm;
  
  // Filter lessen op basis van zoekterm
  const resultaten = lessenData
    .map(les => {
      const tekstZoeken = `${les.titel} ${les.beschrijving} ${les.keywords.join(" ")}`.toLowerCase();
      
      // Vind welke keywords matchen
      const matchedKeywords = les.keywords.filter(kw => 
        kw.toLowerCase().includes(zoektermLower)
      );
      
      // Zoek bijpassende content snippet
      let contentSnippet = "";
      let snippetKeyword = "";
      
      for (const [keyword, snippet] of Object.entries(les.content || {})) {
        if (keyword.toLowerCase().includes(zoektermLower)) {
          contentSnippet = snippet;
          snippetKeyword = keyword;
          break;
        }
      }
      
      // Fallback naar eerste keyword snippet
      if (!contentSnippet && matchedKeywords.length > 0) {
        const firstKeyword = matchedKeywords[0];
        if (les.content && les.content[firstKeyword.toLowerCase()]) {
          contentSnippet = les.content[firstKeyword.toLowerCase()];
          snippetKeyword = firstKeyword;
        }
      }
      
      // Controleer of zoekterm in tekst voorkomt
      const isMatch = tekstZoeken.includes(zoektermLower);
      
      return {
        ...les,
        isMatch,
        matchedKeywords,
        contentSnippet,
        snippetKeyword
      };
    })
    .filter(les => les.isMatch);
  
  const resultatenDiv = document.getElementById("zoekResultaten");
  
  if (resultaten.length === 0) {
    resultatenDiv.innerHTML = '<p class="geen-resultaten">Geen resultaten gevonden. Probeer andere zoektermen.</p>';
    return;
  }
  
  let html = "";
  resultaten.forEach(les => {
    const matchInfo = les.matchedKeywords.length > 0 
      ? `<div class="match-woorden">Gematcht op: <strong>${les.matchedKeywords.join(", ")}</strong></div>`
      : '';
    
    const snippetDiv = les.contentSnippet 
      ? `<div class="content-snippet">"${les.contentSnippet}"</div>`
      : '';
    
    html += `
      <a href="${les.url}" class="zoek-resultaat-item">
        <div class="resultaat-titel">${les.titel}</div>
        <div class="resultaat-beschrijving">${les.beschrijving}</div>
        ${snippetDiv}
        ${matchInfo}
      </a>
    `;
  });
  
  resultatenDiv.innerHTML = html;
}

// Zoeken uitvoeren wanneer search-results.html ingeladen is
document.addEventListener("DOMContentLoaded", function() {
  // Voer zoeken uit als we op zoekresultaten pagina zijn
  if (document.getElementById("zoekResultaten")) {
    voerZoekUit();
  }
  
  // Sluit suggesties als je ergens anders klikt
  if (document.querySelector(".search-container")) {
    document.addEventListener("click", function(event) {
      const searchContainer = document.querySelector(".search-container");
      const suggestiesDiv = document.getElementById("suggesties");
      
      if (searchContainer && !searchContainer.contains(event.target) && suggestiesDiv) {
        suggestiesDiv.classList.remove("show");
      }
    });
  }
});


