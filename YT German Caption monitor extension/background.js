// background.js
// this list has 1000 most common german words where the even index(starting from zero 0) is german, and the next corresponding odd index is english
let germanWordList = ["German","English",
"wie","as",
"ich","I",
"seine","his",
"dass","that",
"er","he",
"war","was",
"für","for",
"auf","on",
"sind","are",
"mit","with",
"sie","they",
"sein","be",
"bei","at",
"ein","one",
"haben","have",
"dies","this",
"aus","from",
"durch","by",
"heiß","hot",
"Wort","word",
"aber","but",
"was","what",
"einige","some",
"ist","is",
"es","it",
"Sie","you",
"oder","or",
"hatte","had",
"die","the",
"von","of",
"zu","to",
"und","and",
"ein","a",
"bei","in",
"wir","we",
"können","can",
"aus","out",
"andere","other",
"waren","were",
"die","which",
"tun","do",
"ihre","their",
"Zeit","time",
"wenn","if",
"werden","will",
"wie","how",
"sagte","said",
"ein","an",
"jeder","each",
"sagen","tell",
"tut","does",
"Satz","set",
"drei","three",
"wollen","want",
"Luft","air",
"gut","well",
"auch","also",
"spielen","play",
"klein","small",
"Ende","end",
"setzen","put",
"Zuhause","home",
"lesen","read",
"seits","hand",
"Hafen","port",
"groß","large",
"buchstabieren","spell",
"hinzufügen","add",
"auch","even",
"Lande","land",
"hier","here",
"muss","must",
"groß","big",
"hoch","high",
"so","such",
"folgen","follow",
"Akt","act",
"warum","why",
"fragen","ask",
"Männer","men",
"Veränderung","change",
"ging","went",
"Licht","light",
"Art","kind",
"aus","off",
"müssen","need",
"Haus","house",
"Bild","picture",
"versuchen","try",
"uns","us",
"wieder","again",
"Tier","animal",
"Punkt","point",
"Mutter","mother",
"Welt","world",
"in der Nähe von","near",
"bauen","build",
"selbst","self",
"Erde","earth",
"Vater","father",
"jeder","any",
"neu","new",
"Arbeit","work",
"Teil","part",
"nehmen","take",
"erhalten","get",
"Ort","place",
"gemacht","made",
"leben","live",
"wo","where",
"nach","after",
"zurück","back",
"wenig","little",
"nur","only",
"Runde","round",
"Mann","man",
"Jahr","year",
"kam","came",
"zeigen","show",
"jeder","every",
"gut","good",
"mir","me",
"geben","give",
"unsere","our",
"unter","under",
"Name","name",
"sehr","very",
"durch","through",
"nur","just",
"Formular","form",
"Satz","sentence",
"groß","great",
"denken","think",
"sagen","say",
"Hilfe","help",
"niedrig","low",
"Linie","line",
"abweichen","differ",
"wiederum","turn",
"Ursache","cause",
"viel","much",
"bedeuten","mean",
"vor","before",
"Umzug","move",
"Recht","right",
"Junge","boy",
"alt","old",
"zu","too",
"gleich","same",
"sie","she",
"alle","all",
"da","there",
"wenn","when",
"nach oben","up",
"Verwendung","use",
"Ihre","your",
"Weg","way",
"über","about",
"viele","many",
"dann","then",
"sie","them",
"schreiben","write",
"würde","would",
"wie","like",
"so","so",
"diese","these",
"sie","her",
"lange","long",
"machen","make",
"Sache","thing",
"sehen","see",
"ihm","him",
"zwei","two",
"hat","has",
"suchen","look",
"mehr","more",
"Tag","day",
"könnte","could",
"gehen","go",
"kommen","come",
"tat","did",
"Anzahl","number",
"klingen","sound",
"nicht","no",
"am meisten","most",
"Menschen","people",
"meine","my",
"über","over",
"wissen","know",
"Wasser","water",
"als","than",
"Anruf","call",
"erste","first",
"die","who",
"können","may",
"nach unten","down",
"Seite","side",
"gewesen","been",
"jetzt","now",
"finden","find",
"Kopf","head",
"stehen","stand",
"besitzen","own",
"Seite","page",
"sollte","should",
"Land","country",
"gefunden","found",
"Antwort","answer",
"Schule","school",
"wachsen","grow",
"Studie","study",
"noch","still",
"lernen","learn",
"Anlage","plant",
"Abdeckung","cover",
"Lebensmittel","food",
"Sonne","sun",
"vier","four",
"zwischen","between",
"Zustand","state",
"halten","keep",
"Auge","eye",
"nie","never",
"letzte","last",
"lassen","let",
"Gedanken","thought",
"Stadt","city",
"Baum","tree",
"überqueren","cross",
"Bauernhof","farm",
"schwer","hard",
"Beginn","start",
"Macht","might",
"Geschichte","story",
"Säge","saw",
"weit","far",
"Meer","sea",
"ziehen","draw",
"links","left",
"spät","late",
"laufen","run",
"unterlassen Sie","don’t",
"während","while",
"Presse","press",
"Schließen","close",
"Nacht","night",
"realen","real",
"Leben","life",
"wenige","few",
"Norden","north",
"Buch","book",
"tragen","carry",
"nahm","took",
"Wissenschaft","science",
"essen","eat",
"Zimmer","room",
"Freund","friend",
"begann","began",
"Idee","idea",
"Fisch","fish",
"berg","mountain",
"Stopp","stop",
"einmal","once",
"Basis","base",
"hören","hear",
"Pferd","horse",
"Schnitt","cut",
"sicher","sure",
"beobachten","watch",
"Farbe","color",
"Gesicht","face",
"Holz","wood",
"Haupt-","main",
"geöffnet","open",
"scheinen","seem",
"zusammen","together",
"nächste","next",
"weiß","white",
"Kinder","children",
"Start","begin",
"bekam","got",
"gehen","walk",
"Beispiel","example",
"erleichtern","ease",
"Papier","paper",
"Gruppe","group",
"immer","always",
"Musik","music",
"diejenigen","those",
"beide","both",
"Marke","mark",
"oft","often",
"Schreiben","letter",
"bis","until",
"Meile","mile",
"Fluss","river",
"Auto","car",
"Füße","feet",
"Pflege","care",
"zweite","second",
"genug","enough",
"Ebene","plain",
"Mädchen","girl",
"üblich","usual",
"jung","young",
"bereit","ready",
"oben","above",
"je","ever",
"rot","red",
"Liste","list",
"obwohl","though",
"fühlen","feel",
"Vortrag","talk",
"Vogel","bird",
"bald","soon",
"Körper","body",
"Hund","dog",
"Familie","family",
"direkt","direct",
"Pose","pose",
"verlassen","leave",
"Lied","song",
"messen","measure",
"Tür","door",
"Produkt","product",
"schwarz","black",
"kurz","short",
"Zahl","numeral",
"Klasse","class",
"Wind","wind",
"Frage","question",
"passieren","happen",
"vollständig","complete",
"Schiff","ship",
"Bereich","area",
"Hälfte","half",
"Stein","rock",
"bestellen","order",
"Feuer","fire",
"Süden","south",
"Problem","problem",
"Stück","piece",
"sagte","told",
"wusste","knew",
"passieren","pass",
"seit","since",
"obere","top",
"ganze","whole",
"König","king",
"Straße","street",
"Zoll","inch",
"multiplizieren","multiply",
"nichts","nothing",
"Kurs","course",
"bleiben","stay",
"Rad","wheel",
"voll","full",
"Kraft","force",
"blau","blue",
"Objekt","object",
"entscheiden","decide",
"Oberfläche","surface",
"tief","deep",
"Mond","moon",
"Insel","island",
"Fuß","foot",
"System","system",
"beschäftigt","busy",
"Prüfung","test",
"Rekord","record",
"Boot","boat",
"gemeinsam","common",
"goldenen","gold",
"möglich","possible",
"Flugzeug","plane",
"statt","stead",
"trocken","dry",
"Wunder","wonder",
"Lachen","laugh",
"tausend","thousand",
"vor","ago",
"lief","ran",
"überprüfen","check",
"Spiel","game",
"Form","shape",
"gleichsetzen","equate",
"heiß","hot",
"Fehl","miss",
"gebracht","brought",
"Wärme","heat",
"Schnee","snow",
"Reifen","tire",
"bringen","bring",
"ja","yes",
"entfernt","distant",
"füllen","fill",
"Osten","east",
"malen","paint",
"Sprache","language",
"unter","among",
"Einheit","unit",
"Macht","power",
"Stadt","town",
"fein","fine",
"sicher","certain",
"fliegen","fly",
"fallen","fall",
"führen","lead",
"Schrei","cry",
"dunkel","dark",
"Maschine","machine",
"note","note",
"warten","wait",
"Plan","plan",
"Abbildung","figure",
"Stern","star",
"Kasten","box",
"Nomen","noun",
"Feld","field",
"Rest","rest",
"richtig","correct",
"fähig","able",
"Pfund","pound",
"getan","done",
"Schönheit","beauty",
"Antriebs","drive",
"stand","stood",
"enthalten","contain",
"Front","front",
"lehren","teach",
"Woche","week",
"Finale","final",
"gab","gave",
"grün","green",
"oh","oh",
"schnell","quick",
"entwickeln","develop",
"Ozean","ocean",
"warme","warm",
"kostenlos","free",
"Minute","minute",
"stark","strong",
"besondere","special",
"Geist","mind",
"hinter","behind",
"klar","clear",
"Schwanz","tail",
"produzieren","produce",
"Tatsache","fact",
"Raum","space",
"gehört","heard",
"beste","best",
"Stunde","hour",
"besser","better",
"wahr","TRUE",
"während","during",
"hundert","hundred",
"fünf","five",
"merken","remember",
"Schritt","step",
"früh","early",
"halten","hold",
"Westen","west",
"Boden","ground",
"Interesse","interest",
"erreichen","reach",
"schnell","fast",
"Verbum","verb",
"singen","sing",
"hören","listen",
"sechs","six",
"Tabelle","table",
"Reise","travel",
"weniger","less",
"Morgen","morning",
"zehn","ten",
"einfach","simple",
"mehrere","several",
"Vokal","vowel",
"auf","toward",
"Krieg","war",
"legen","lay",
"gegen","against",
"Muster","pattern",
"schleppend","slow",
"Zentrum","center",
"Liebe","love",
"Person","person",
"Geld","money",
"dienen","serve",
"erscheinen","appear",
"Straße","road",
"Karte","map",
"regen","rain",
"Regel","rule",
"regieren","govern",
"ziehen","pull",
"Kälte","cold",
"Hinweis","notice",
"Stimme","voice",
"Energie","energy",
"Jagd","hunt",
"wahrscheinlich","probable",
"Bett","bed",
"Bruder","brother",
"Ei","egg",
"Fahrt","ride",
"Zelle","cell",
"glauben","believe",
"vielleicht","perhaps",
"pflücken","pick",
"plötzlich","sudden",
"zählen","count",
"Platz","square",
"Grund","reason",
"Dauer","length",
"vertreten","represent",
"Kunst","art",
"Thema","subject",
"Region","region",
"Größe","size",
"variieren","vary",
"regeln","settle",
"sprechen","speak",
"Gewicht","weight",
"allgemein","general",
"Eis","ice",
"Materie","matter",
"Kreis","circle",
"Paar","pair",
"umfassen","include",
"Kluft","divide",
"Silbe","syllable",
"Filz","felt",
"groß","grand",
"Kugel","ball",
"noch","yet",
"Welle","wave",
"fallen","drop",
"Herz","heart",
"Uhr","am",
"vorhanden","present",
"schwer","heavy",
"Tanz","dance",
"Motor","engine",
"Position","position",
"Arm","arm",
"breit","wide",
"Segel","sail",
"Material","material",
"Fraktion","fraction",
"Wald","forest",
"sitzen","sit",
"Rennen","race",
"Fenster","window",
"Speicher","store",
"Sommer","summer",
"Zug","train",
"Schlaf","sleep",
"beweisen","prove",
"einsam","lone",
"Bein","leg",
"Übung","exercise",
"Wand","wall",
"Fang","catch",
"Berg","mount",
"wünschen","wish",
"Himmel","sky",
"Board","board",
"Freude","joy",
"Winter","winter",
"sa","sat",
"geschrieben","written",
"wilden","wild",
"Instrument","instrument",
"gehalten","kept",
"Glas","glass",
"Gras","grass",
"Kuh","cow",
"Arbeit","job",
"Rand","edge",
"Zeichen","sign",
"Besuch","visit",
"Vergangenheit","past",
"weich","soft",
"Spaß","fun",
"hell","bright",
"Gases","gas",
"Wetter","weather",
"Monat","month",
"Million","million",
"tragen","bear",
"Finish","finish",
"glücklich","happy",
"hoffen","hope",
"blume","flower",
"kleiden","clothe",
"seltsam","strange",
"Vorbei","gone",
"Handel","trade",
"Melodie","melody",
"Reise","trip",
"Büro","office",
"empfangen","receive",
"Reihe","row",
"Mund","mouth",
"genau","exact",
"Zeichen","symbol",
"sterben","die",
"am wenigsten","least",
"Ärger","trouble",
"Schrei","shout",
"außer","except",
"schrieb","wrote",
"Samen","seed",
"Ton","tone",
"beitreten","join",
"vorschlagen","suggest",
"sauber","clean",
"Pause","break",
"Dame","lady",
"Hof","yard",
"steigen","rise",
"schlecht","bad",
"Schlag","blow",
"Öl","oil",
"Blut","blood",
"berühren","touch",
"wuchs","grew",
"Cent","cent",
"mischen","mix",
"Mannschaft","team",
"Draht","wire",
"Kosten","cost",
"verloren","lost",
"braun","brown",
"tragen","wear",
"Garten","garden",
"gleich","equal",
"gesendet","sent",
"wählen","choose",
"fiel","fell",
"passen","fit",
"fließen","flow",
"Messe","fair",
"Bank","bank",
"sammeln","collect",
"sparen","save",
"Kontrolle","control",
"dezimal","decimal",
"Ohr","ear",
"sonst","else",
"ganz","quite",
"pleite","broke",
"Fall","case",
"Mitte","middle",
"töten","kill",
"Sohn","son",
"See","lake",
"Moment","moment",
"Maßstab","scale",
"laut","loud",
"Frühling","spring",
"beobachten","observe",
"Kind","child",
"gerade","straight",
"Konsonant","consonant",
"Nation","nation",
"Wörterbuch","dictionary",
"milch","milk",
"Geschwindigkeit","speed",
"Verfahren","method",
"Orgel","organ",
"zahlen","pay",
"Alter","age",
"Abschnitt","section",
"Kleid","dress",
"Wolke","cloud",
"Überraschung","surprise",
"ruhig","quiet",
"Stein","stone",
"winzig","tiny",
"Aufstieg","climb",
"kühlen","cool",
"Entwurf","design",
"arm","poor",
"Menge","lot",
"Versuch","experiment",
"Boden","bottom",
"Schlüssel","key",
"Eisen","iron",
"Einzel","single",
"Stick","stick",
"Wohnung","flat",
"zwanzig","twenty",
"Haut","skin",
"Lächeln","smile",
"Falte","crease",
"Loch","hole",
"springen","jump",
"Kind","baby",
"acht","eight",
"Dorf","village",
"treffen","meet",
"Wurzel","root",
"kaufen","buy",
"erhöhen","raise",
"lösen","solve",
"Metall","metal",
"ob","whether",
"drücken","push",
"sieben","seven",
"Absatz","paragraph",
"dritte","third",
"wird","shall",
"Hand","held",
"Haar","hair",
"beschreiben","describe",
"Koch","cook",
"Boden","floor",
"entweder","either",
"Ergebnis","result",
"brennen","burn",
"Hügel","hill",
"sicher","safe",
"Katze","cat",
"Jahrhundert","century",
"betrachten","consider",
"Typ","type",
"Gesetz","law",
"Bit","bit",
"Küste","coast",
"Kopie","copy",
"Ausdruck","phrase",
"still","silent",
"hoch","tall",
"Sand","sand",
"Boden","soil",
"Rolle","roll",
"Temperatur","temperature",
"Finger","finger",
"Industrie","industry",
"Wert","value",
"Kampf","fight",
"Lüge","lie",
"schlagen","beat",
"begeistern","excite",
"natürlich","natural",
"Blick","view",
"Sinn","sense",
"Hauptstadt","capital",
"wird nicht","won’t",
"Stuhl","chair",
"Achtung","danger",
"Obst","fruit",
"reich","rich",
"dick","thick",
"Soldat","soldier",
"Prozess","process",
"betreiben","operate",
"Praxis","practice",
"trennen","separate",
"schwierig","difficult",
"Arzt","doctor",
"Bitte","please",
"schützen","protect",
"Mittag","noon",
"Ernte","crop",
"modernen","modern",
"Elementes","element",
"treffen","hit",
"Schüler","student",
"Ecke","corner",
"Partei","party",
"Versorgung","supply",
"deren","whose",
"lokalisieren","locate",
"Rings","ring",
"Charakter","character",
"insekt","insect",
"gefangen","caught",
"Zeit","period",
"zeigen","indicate",
"Funk","radio",
"Speiche","spoke",
"Atom","atom",
"Mensch","human",
"Geschichte","history",
"Wirkung","effect",
"elektrisch","electric",
"erwarten","expect",
"Knochen","bone",
"Schiene","rail",
"vorstellen","imagine",
"bieten","provide",
"zustimmen","agree",
"so","thus",
"sanft","gentle",
"Frau","woman",
"Kapitän","captain",
"erraten","guess",
"erforderlich","necessary",
"scharf","sharp",
"Flügel","wing",
"schaffen","create",
"Nachbar","neighbor",
"Wasch","wash",
"Fledermaus","bat",
"eher","rather",
"Menge","crowd",
"mais","corn",
"vergleichen","compare",
"Gedicht","poem",
"Schnur","string",
"Glocke","bell",
"abhängen","depend",
"Fleisch","meat",
"einreiben","rub",
"Rohr","tube",
"berühmt","famous",
"Dollar","dollar",
"Strom","stream",
"Angst","fear",
"Blick","sight",
"dünn","thin",
"Dreieck","triangle",
"Erde","planet",
"Eile","hurry",
"Chef","chief",
"Kolonie","colony",
"Uhr","clock",
"Mine","mine",
"Krawatte","tie",
"eingeben","enter",
"Dur","major",
"frisch","fresh",
"Suche","search",
"senden","send",
"gelb","yellow",
"Pistole","gun",
"erlauben","allow",
"Druck","print",
"tot","dead",
"Stelle","spot",
"Wüste","desert",
"Anzug","suit",
"Strom","current",
"Aufzug","lift",
"stiegen","rose",
"ankommen","arrive",
"Stamm","master",
"Spur","track",
"Elternteil","parent",
"Ufer","shore",
"Teilung","division",
"Blatt","sheet",
"Substanz","substance",
"begünstigen","favor",
"verbinden","connect",
"nach","post",
"verbringen","spend",
"Akkord","chord",
"Fett","fat",
"froh","glad",
"Original","original",
"Aktie","share",
"Station","station",
"Papa","dad",
"Brot","bread",
"aufladen","charge",
"richtig","proper",
"Leiste","bar",
"Angebot","offer",
"Segment","segment",
"Sklave","slave",
"ente","duck",
"Augenblick","instant",
"Markt","market",
"Grad","degree",
"besiedeln","populate",
"küken","chick",
"liebe","dear",
"Feind","enemy",
"antworten","reply",
"Getränk","drink",
"auftreten","occur",
"Unterstützung","support",
"Rede","speech",
"Natur","nature",
"Angebot","range",
"Dampf","steam",
"Bewegung","motion",
"Weg","path",
"Flüssigkeit","liquid",
"protokollieren","log",
"gemeint","meant",
"Quotient","quotient",
"Gebiss","teeth",
"Schale","shell",
"Hals","neck",
"Sauerstoff","oxygen",
"Zucker","sugar",
"Tod","death",
"ziemlich","pretty",
"Geschicklichkeit","skill",
"Frauen","women",
"Saison","season",
"Lösung","solution",
"Magnet","magnet",
"Silber","silver",
"danken","thank",
"Zweig","branch",
"Spiel","match",
"Suffix","suffix",
"insbesondere","especially",
"Feige","fig",
"ängstlich","afraid",
"riesig","huge",
"Schwester","sister",
"Stahl","steel",
"diskutieren","discuss",
"vorwärts","forward",
"ähnlich","similar",
"führen","guide",
"Erfahrung","experience",
"Partitur","score",
"apfel","apple",
"gekauft","bought",
"geführt","led",
"Tonhöhe","pitch",
"Mantel","coat",
"Masse","mass",
"Karte","card",
"Band","band",
"Seil","rope",
"Rutsch","slip",
"gewinnen","win",
"träumen","dream",
"Abend","evening",
"Zustand","condition",
"Futtermittel","feed",
"Werkzeug","tool",
"gesamt","total",
"Basis","basic",
"Geruch","smell",
"Tal","valley",
"noch","nor",
"doppelt","double",
"Sitz","seat",
"fortsetzen","continue",
"Block","block",
"Tabelle","chart",
"Hut","hat",
"verkaufen","sell",
"Erfolg","success",
"Firma","company",
"subtrahieren","subtract",
"Veranstaltung","event",
"besondere","particular",
"viel","deal",
"schwimmen","swim",
"Begriff","term",
"Gegenteil","opposite",
"Frau","wife",
"Schuh","shoe",
"Schulter","shoulder",
"Verbreitung","spread",
"arrangieren","arrange",
"Lager","camp",
"erfinden","invent",
"Baumwolle","cotton",
"geboren","born",
"bestimmen","determine",
"Quart","quart",
"neun","nine",
"Lastwagen","truck",
"Lärm","noise",
"Ebene","level",
"Chance","chance",
"sammeln","gather",
"Geschäft","shop",
"Stretch","stretch",
"werfen","throw",
"Glanz","shine",
"Immobilien","property",
"Spalte","column",
"Molekül","molecule",
"wählen","select",
"falsch","wrong",
"grau","gray",
"Wiederholung","repeat",
"erfordern","require",
"breit","broad",
"vorbereiten","prepare",
"Salz","salt",
"Nase","nose",
"mehreren","plural",
"Zorn","anger",
"Anspruch","claim",
"Kontinent","continent"]

// this function would extract words only out of a string, while excluding all special characters and spaces and return them as an array
function extractWords(str) {
    // Remove special characters and numbers
    const cleanedStr = str.replace(/[^\p{L}\s]/gu, '');
  
    // Split the cleaned string into an array of words
    const words = cleanedStr.split(/\s+/).filter(word => word !== '');
  
    return words;
  }

//   here the parameter is an array which the words that need to be translated and the german word list
function findGermanMeaning(wordsToFind){
    let translatedSentence = ''
    // make it efficient
    for(i=0; i<wordsToFind.length; i++){
        // this is the loop where the german word list is being checked
        for(j=0; j<germanWordList.length; j=j+2){
            if(germanWordList[j].includes(wordsToFind[i])){
                wordsToFind[i] = wordsToFind[i] + `(${germanWordList[j+1]}) `
                translatedSentence = translatedSentence + wordsToFind[i]
            } 
        }
    }
   
}

// listen for messages
chrome.runtime.onMessage.addListener((message, sender, sendResponse)=>{
    console.log(message.message)
    sendResponse({message: `hi from background: ${message.message}`})
})
