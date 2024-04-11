const data = [{
    id: 0,
    questDescription: "Börja resan i kiosken där I-or är! I-or känner sig deppig och ledsen, som vanligt, hur ska du muntra upp honom? I-or berättar att han har tandvärk och att han behöver något som hjälper mot det, eftersom ni är vid kiosken kanske du kan ge förslag på en glass som skulle kunna lindra hans tandvärk. I-or har tidigare berättat han blir glad av färgen grön.",
    alternativeType: "image",
    alternatives: [
        {
            id: 0,
            imgSrc: "sökväg",
            correct: true
        }, {
            id: 1,
            imgSrc: "sökväg",
            correct: false
        }, {
            id: 2,
            imgSrc: "sökväg",
            correct: false
        }, {
            id: 3,
            imgSrc: "sökväg",
            correct: false
        }
    ],
    character: {
        name: "I-or",
        description: "I-or  är en nedstämd, men snäll och pessimistisk åsna. Han är känd för sin oro och filosofiska tankar samt sin ironiska humor. I-or har en negativ syn på det mesta och tror att det värsta alltid kommer att hända. Trots det är han också intelligent och ger kloka råd. När han talar har han en monoton och lugn röst och använder sig av korta meningar.",
        imgSrc: ""
    },
    map: "??"

}, {
    id: 1,
    questDescription: "Nämen! Är du här, utbrister Ru. Utmärkt, jag har inte sett någon honung för jag är upptagen med att titta på djuren. Jag älskar alla djur, om du svarar på vilka dina 3 favoritdjur är så kan jag ge dig ett tips om var honungen kan vara.",
    alternativeType: "text",
    alternatives: [
        {
            id: 0,
            text: "",
            correct: true
        }, {
            id: 1,
            text: "",
            correct: false
        }, {
            id: 2,
            text: "",
            correct: false
        }, {
            id: 3,
            text: "",
            correct: false
        }
    ],
    character: {
        name: "Ru",
        description: "Ru är en glad, nyfiken och energisk ung känguru. Han gillar att leka och ge sig ut på äventyr utomhus. Ru har intensiva intressen för specifika ämnen och aktiviteter, samtidigt som han är känslig för sensoriska stimuli, som ljud, beröring eller textur. Vissa säger att Ru har svårt med social kommunikation och förståelse för sociala signaler i vissa situationer när han umgås med sina vänner.",
        imgSrc: ""
    },
    tip: "Tack så mycket för tipset om glassen, den verkar jättegod! Jag har däremot inte sett honungsburken men såg Ru borta vid terrariet innan. Jag vill helst inte vistas bland djuren, men har hört att djuren där är mycket förtjusta i honung. Kanske de har tagit och smakat lite på Nalle Puhs honung?",
    nameOfPreviousCharacter: "I-or",
    map: "??"
}, {
    id: 2,
    questDescription: "Hejsan, säger Nasse. Nasse är väldigt nervös för tillfället och kan inte föra ett samtal. När du frågar honom om honungsburken blir han ännu mer förtvivlad. Hitta ett sätt att hjälpa Nasse att lugna ner sig innan du frågar honom igen. Du vet att Nasse gillar trädgårdsarbete och blommor.Låt Nasse känna lukten av tre blommor och ge honom namnen på dessa tre blommor.",
    alternativeType: "image",
    alternatives: [
        {
            id: 0,
            imgSrc: "sökväg",
            correct: true
        }, {
            id: 1,
            imgSrc: "sökväg",
            correct: false
        }, {
            id: 2,
            imgSrc: "sökväg",
            correct: false
        }, {
            id: 3,
            imgSrc: "sökväg",
            correct: false
        }
    ],
    character: {
        name: "Nasse",
        description: "Nasse är Nalle Puhs bästa vän och är mycket glad för att ställa olika frågor till Nalle Puh. Han karakteriseras av att ofta vara ängslig och att vara rädd för nästan allt samt att han lider av ångest. Däremot ställer han alltid upp för sina vänner och har ett stort mod och lojalitet för dem. Nasses favoritmat är hallon",
        imgSrc: ""
    },
    tip: "Jag är ledsen att jag inte kunde hjälpa dig, men Nasse är bästa vän till Nalle Puh, så han borde veta var den är? Nasse befinner sig ofta i trädgården, kolla där!",
    nameOfPreviousCharacter: "I-or",
    map: "??",
}, {
    id: 3,
    questDescription: "Du kommer till minigolfbanan och här befinner sig Kanin. Kanin har fastnat för sina okontrollerbara och återkommande tankar. Han räknar hur många banor det finns på minigolfbanan men han behöver lite hjälp. Han tappar alltid räkningen efter bana tre. Räkna hur många banor det finns på efter hål tre och plussa ihop det med 3.",
    alternativeType: "text",
    alternatives: [
        {
            id: 0,
            text: "",
            correct: true
        }, {
            id: 1,
            text: "",
            correct: false
        }, {
            id: 2,
            text: "",
            correct: false
        }, {
            id: 3,
            text: "",
            correct: false
        }
    ],
    character: {
        name: "Kanin",
        description: "Kanin är känd för att vara organiserad och tar alltid ledarrollen inom sin vängrupp. Han gillar att göra planer, arrangera sammankomster och evenemang, samt att odla. När saker inte går enligt Kanins planer eller hans vänner stör hans scheman blir han ofta irriterad och frustrerad. Han har en stark önskan om kontroll och förutsägbarhet."
    },
    tip: "Jag vet att honungsburken en gång satt fast i ett hål. Minigolfen har många hål i marken, kika där!",
    nameOfPreviousCharacter: "I-or",
    map: "??"
}, {
    id: 4,
    questDescription: "Tjohooo skriker Tiger högt! Du kommer fram till ingången till barnscenen där Tiger försöker dansa sig in på barnscenen. Tiger är i sin egen värld och har inte tid att uppmärksamma dig och dina frågor med honungsburken. Du behöver därför lugna ner Tiger. Detta gör du enklast genom att dansa med Tiger för att få ut hans energi. Dansa med honom och skriv ner antalet hopp som du tror Tiger tog med sin svans under tiden ni dansade tillsammans.",
    alternativeType: "text",
    alternatives: [
        {
            id: 0,
            text: "",
            correct: true
        }, {
            id: 1,
            text: "",
            correct: false
        }, {
            id: 2,
            text: "",
            correct: false
        }, {
            id: 3,
            text: "",
            correct: false
        }
    ],
    character: {
        name: "Tiger",
        description: "Tiger är självcentrerad och självsäker, han tycker om att skutta och är känd för sin energiska natur. Han är också väldigt överdriven och impulsiv. Tiger är också känd för att ha en stor personlighet som ofta är i centrum och får mycket uppmärksamhet för sin höga energinivå. Han tänker oftast inte på konsekvenserna och har en tendens att använda invecklade ord, även om han inte förstår deras betydelse."
    },
    tip: "Jag ser inte honungsburken i något hål här. Nalle Puh kollade på uppträdanden tidigare idag på barnens scen, kan honungen kanske vara där?",
    nameOfPreviousCharacter: "I-or",
    map: "??"
}, {
    id: 4,
    questDescription: "Tjohooo skriker Tiger högt! Du kommer fram till ingången till barnscenen där Tiger försöker dansa sig in på barnscenen. Tiger är i sin egen värld och har inte tid att uppmärksamma dig och dina frågor med honungsburken. Du behöver därför lugna ner Tiger. Detta gör du enklast genom att dansa med Tiger för att få ut hans energi. Dansa med honom och skriv ner antalet hopp som du tror Tiger tog med sin svans under tiden ni dansade tillsammans.",
    alternativeType: "text",
    alternatives: [
        {
            id: 0,
            text: "",
            correct: true
        }, {
            id: 1,
            text: "",
            correct: false
        }, {
            id: 2,
            text: "",
            correct: false
        }, {
            id: 3,
            text: "",
            correct: false
        }
    ],
    character: {
        name: "Tiger",
        description: "Tiger är självcentrerad och självsäker, han tycker om att skutta och är känd för sin energiska natur. Han är också väldigt överdriven och impulsiv. Tiger är också känd för att ha en stor personlighet som ofta är i centrum och får mycket uppmärksamhet för sin höga energinivå. Han tänker oftast inte på konsekvenserna och har en tendens att använda invecklade ord, även om han inte förstår deras betydelse."
    },
    tip: "Jag ser inte honungsburken i något hål här. Nalle Puh kollade på uppträdanden tidigare idag på barnens scen, kan honungen kanske vara där?",
    nameOfPreviousCharacter: "I-or",
    map: "??"
}, {
    id: 5,
    questDescription: "Nu har du äntligen hittat Nalle Puhs honung. Klick på bilden var du hittade honungen? ",
    alternativeType: "image",
    alternatives: [
        {
            id: 0,
            imgSrc: "sökväg",
            correct: true
        }, {
            id: 1,
            imgSrc: "sökväg",
            correct: false
        }, {
            id: 2,
            imgSrc: "sökväg",
            correct: false
        }, {
            id: 3,
            imgSrc: "sökväg",
            correct: false
        }
    ],
    tip: "WOW! Jag blev så hungrig av allt dansande, tur att jag har gömt Nalle Puhs goda honung på baksidan av barnscenen, uppe vid kullen vid ett av träden viskar Tiger till dig. Nämn inget till Nalle Puh, men jag åt lite tidigare idag också. Det var nog den som gav mig så mycket energi.",
    nameOfPreviousCharacter: "I-or",
    map: "??"
},]

// jag tänker att tipset som gäller Ru får ligga under Ru och inte I-or. Alltså den det gäller, inte den som ger tipset.