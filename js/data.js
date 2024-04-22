const data = [{
    id: 0,
    questDescription: "I-or  är en nedstämd, men snäll åsna. Han är känd för sin oro och ironiska humor. I-or har en negativ syn på det mesta och tror att det värsta kommer att hända. Han gillar allt som är grönt och att äta gröna saker såsom gräs.",
    alternativeType: "image",
    alternatives: [
        {
            id: 0,
            name: "calippo cola",
            imgSrc: "ice-cream-calippo-cola.png",
            correct: "false"
        }, {
            id: 1,
            name: "daimstrut",
            imgSrc: "ice-cream-daimstrut.png",
            correct: "false"
        }, {
            id: 2,
            name: "piggelin",
            imgSrc: "ice-cream-piggelin.png",
            correct: "true"
        }, {
            id: 3,
            name: "magnum",
            imgSrc: "ice-cream-magnum.png",
            correct: "false"
        }
    ],
    character: {
        name: "I-or",
        description: "I-or  är en nedstämd, men snäll åsna. Han är känd för sin oro och ironiska humor. I-or har en negativ syn på det mesta och tror att det värsta kommer att hända. Han gillar allt som är grönt och att äta gröna saker såsom gräs.",
    },
    tipsFromPreviousCharacter: "Svara rätt på frågan så kan du få ett tips från I-or.",
    tipsFromCurrentCharacter: "Tack så mycket för tipset om glassen, den verkar jättegod! Jag har däremot inte sett honungsburken men såg Ru borta vid terrariet innan. Jag vill helst inte vistas bland djuren, men har hört att djuren där är mycket förtjusta i honung. Kanske de har tagit och smakat lite på Nalle Puhs honung?",
    nameOfPreviousCharacter: "I-or",
    locationImg: "../media/animal-red-panda.jpg",
    locationName: "Kiosken"
}, {
    id: 1,
    questDescription: "Nämen! Är du här, utbrister Ru. Utmärkt, jag har inte sett någon honung för jag är upptagen med att titta på djuren. Jag älskar alla djur, om du svarar på vilket djur som är mitt favoritdjur så kan jag ge dig ett tips om var honungen kan vara.",
    alternativeType: "image",
    alternatives: [
        {
            id: 0,
            name: "fjäril",
            imgSrc: "animal-butterfly.jpeg",
            correct: "false"
        }, {
            id: 1,
            name: "apa",
            imgSrc: "animal-monkey.png",
            correct: "true"
        }, {
            id: 2,
            name: "katt",
            imgSrc: "animal-cat.jpeg",
            correct: "false"
        }, {
            id: 3,
            name: "röd panda.jpg",
            imgSrc: "animal-red-panda.jpg",
            correct: "false"
        }
    ],
    character: {
        name: "Ru",
        description: "Ru är en glad och energisk känguru. Han gillar att ge sig ut på äventyr utomhus och tycker därför om apor då de är äventyrliga. Ru har perioder då han är särskilt  intresserad i vissa ämnen och aktiviteter och är känslig för ljud och beröring.",
    },
    tipsFromPreviousCharacter: "Tack så mycket för tipset om glassen, den verkar jättegod! Jag har däremot inte sett honungsburken men såg Ru borta vid terrariet innan. Jag vill helst inte vistas bland djuren, men har hört att djuren där är mycket förtjusta i honung. Kanske de har tagit och smakat lite på Nalle Puhs honung?",
    tipsFromCurrentCharacter: "Du klickade rätt! Jag är ledsen att jag inte kunde hjälpa dig, men Nasse är bästa vän till Nalle Puh, så han borde veta var den är? Nasse befinner sig ofta i trädgården, kolla där!",
    nameOfPreviousCharacter: "I-or",
    locationImg: "../media/animal-red-panda.jpg",
    locationName: "Terrariet"
}, {
    id: 2,
    questDescription: "Hejsan, säger Nasse. Nasse är väldigt nervös för tillfället och kan inte föra ett samtal. När du frågar honom om honungsburken blir han ännu mer förtvivlad. Hitta ett sätt att hjälpa Nasse att lugna ner sig innan du frågar honom igen. Du vet att Nasse gillar blommor. Låt Nasse känna lukten av hans favoritblomma.",
    alternativeType: "image",
    alternatives: [
        {
            id: 0,
            name: "maskros",
            imgSrc: "flower-maskros.jpeg",
            correct: "true"
        }, {
            id: 1,
            name: "lilja",
            imgSrc: "flower-lilja.jpeg",
            correct: "false"
        }, {
            id: 2,
            name: "tulpaner",
            imgSrc: "flower-tulpaner.jpeg",
            correct: "false"
        }, {
            id: 3,
            name: "vitsippa",
            imgSrc: "flower-vitsippa.jpeg",
            correct: "false"
        }
    ],
    character: {
        name: "Nasse",
        description: "Nasse är Nalle Puh bästa vän. Han är ofta bekymrad och rädd för nästan allt. Däremot ställer han alltid upp för sina vänner. Nasse älskar trädgårdsarbete och blommor. Hans favoritblomma är maskros.",
    },
    tipsFromPreviousCharacter: "Du klickade rätt! Jag är ledsen att jag inte kunde hjälpa dig, men Nasse är bästa vän till Nalle Puh, så han borde veta var den är? Nasse befinner sig ofta i trädgården, kolla där!",
    tipsFromCurrentCharacter: "Jag vet att honungsburken en gång satt fast i ett hål. Minigolfen har många hål i marken, kika där!",
    nameOfPreviousCharacter: "Ru",
    locationImg: "../media/animal-red-panda.jpg",
    locationName: "Trädgården"
}, {
    id: 3,
    questDescription: "Du kommer till minigolfbanan och här befinner sig Kanin. Kanin har fastnat för sina okontrollerbara och återkommande tankar. Han räknar hur många banor det finns på minigolfbanan men han behöver lite hjälp. Han tappar alltid räkningen efter bana tre. Räkna hur många banor det finns på efter hål tre och plussa ihop det med 3.",
    alternativeType: "text",
    alternatives: [
        {
            id: 0,
            text: "6",
            correct: "false"
        }, {
            id: 1,
            text: "9",
            correct: "false"
        }, {
            id: 2,
            text: "18",
            correct: "false"
        }, {
            id: 3,
            text: "14",
            correct: "true"
        }
    ],
    character: {
        name: "Kanin",
        description: "Kanin är organiserad och tar alltid ledarrollen. Utöver det gillar han att göra planer och odla. När saker inte går enligt Kanins planer blir han ofta irriterad och tappar bort sina egna tankar. Han älskar att ha kontrollen. "
    },
    tipsFromPreviousCharacter: "Jag vet att honungsburken en gång satt fast i ett hål. Minigolfen har många hål i marken, kika där!",
    tipsFromCurrentCharacter: "Jag ser inte honungsburken i något hål här. Nalle Puh kollade på uppträdanden tidigare idag på barnens scen, kan honungen kanske vara där?",
    nameOfPreviousCharacter: "Nasse",
    locationImg: "../media/animal-red-panda.jpg",
    locationName: "Minigolfen"
}, {
    id: 4,
    questDescription: "Tjohooo skriker Tiger högt! Du kommer fram till ingången till barnscenen där Tiger försöker dansa sig in på barnscenen. Tiger är i sin egen värld och har inte tid att uppmärksamma dig och dina frågor med honungsburken. Du behöver därför lugna ner Tiger. Detta gör du enklast genom att dansa med Tiger för att få ut hans energi. Dansa med honom och klicka på det antalet hopp som du tror Tiger tog med sin svans under tiden ni dansade tillsammans.",
    alternativeType: "text",
    alternatives: [
        {
            id: 0,
            text: "50",
            correct: "false"
        }, {
            id: 1,
            text: "10",
            correct: "false"
        }, {
            id: 2,
            text: "17",
            correct: "false"
        }, {
            id: 3,
            text: "20",
            correct: "true"
        }
    ],
    character: {
        name: "Tiger",
        description: "Tiger är självsäker, energisk och tycker om att hoppa på sin svans 20 gånger när han är exalterad. Tiger är också känd för att ha en stor personlighet som ofta är i centrum och att få mycket uppmärksamhet.",
    },
    tipsFromPreviousCharacter: "Jag ser inte honungsburken i något hål här. Nalle Puh kollade på uppträdanden tidigare idag på barnens scen, kan honungen kanske vara där?",
    tipsFromCurrentCharacter: "WOW! Jag blev så hungrig av allt dansande, tur att jag har gömt Nalle Puhs goda honung på baksidan av barnscenen, uppe vid kullen vid ett av träden viskar Tiger till dig. Nämn inget till Nalle Puh, men jag åt lite tidigare idag också. Det var nog den som gav mig så mycket energi.",
    nameOfPreviousCharacter: "Kanin",
    locationImg: "../media/animal-red-panda.jpg",
    locationName: "Barnens Scen"
}, {
    id: 5,
    questDescription: "Nu har du äntligen hittat Nalle Puhs honung. Klicka på den bilden som liknar stället som du hittade honungen på för att säkerställa att du verkligen hittade Nalle Puhs honung.",
    alternatives: [
        {
            id: 0,
            name: "elefant staty",
            imgSrc: "location-elephant-statue.jpg",
            correct: "false"
        }, {
            id: 1,
            name: "lekplats",
            imgSrc: "location-playground.jpg",
            correct: "false"
        }, {
            id: 2,
            name: "hål",
            imgSrc: "location-hole.jpg",
            correct: "false"
        }, {
            id: 3,
            name: "träd",
            imgSrc: "location-tree.png",
            correct: "true"
        }
    ],
}]
