const data = [{
    id: 0,
    questDescription: "I-or känner sig deppig och ledsen, muntra upp honom genom att välja hans favoritglass på menyn.",
    questionType: "image",
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
        description: "I-or är en nedstämd, men snäll åsna. Han är känd för sin oro och ironiska humor. I-or har en negativ syn på det mesta och tror att det värsta kommer att hända. Han gillar allt som är grönt och att äta gröna saker såsom gräs.",
    },
    tipsFromPreviousCharacter: "Svara rätt på frågan så kan du få ett tips från I-or.",
    tipsFromCurrentCharacter: "Tack så mycket för tipset om glassen, den verkar jättegod! Jag har däremot inte sett honungsburken men såg Ru borta vid terrariet innan. Jag har hört att djuren där är mycket förtjusta i honung. Kanske har de smakat lite på Nalle Puhs honung?",
    nameOfPreviousCharacter: "I-or",
    locationImg: "../media/location-kiosken.jpg",
    locationName: "Kiosken"
}, {
    id: 1,
    questDescription: "Jag har inte sett honungen för jag är upptagen med att titta på djuren. Jag älskar alla djur, om du svarar på vilket djur som är mitt favoritdjur så kan jag ge dig ett tips om var honungen kan vara.",
    questionType: "image",
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
        description: "Ru är en glad och energisk känguru. Han gillar att ge sig ut på äventyr utomhus och tycker därför om apor då de är äventyrliga. Ru har perioder då han är särskilt intresserad i vissa ämnen och aktiviteter och är känslig för ljud och beröring.",
    },
    tipsFromPreviousCharacter: "Tack så mycket för tipset om glassen, den verkar jättegod! Jag har däremot inte sett honungsburken men såg Ru borta vid terrariet innan. Jag har hört att djuren där är mycket förtjusta i honung. Kanske har de smakat lite på Nalle Puhs honung?",
    tipsFromCurrentCharacter: "Jag är ledsen att jag inte kunde hjälpa dig, men Christoffer-Robin är bästa vän till Nalle Puh, så han vet kanske? Han var den som gav Nalle Puh honungsburken. Han måste kunna berätta var den är nu. Han står vid cykelsafarin, gå och prata med honom!",
    nameOfPreviousCharacter: "I-or",
    locationImg: "../media/location-terrariet.jpg",
    locationName: "Terrariet"
}, {
    id: 2,
    questDescription: "Christoffer-Robin står på cykelsafarin och letar efter elefanten eftersom han misstänker att elefanten har tagit honungsburken. Hitta elefanten på cykelsafarin och titta under den för att kolla så att den inte gömmer honungsburken.",
    questionType: "challenge",
    character: {
        name: "Christoffer-Robin",
        description: "En äventyrlig, intelligent pojke som bor i Sjumilaskogen. Han har en livlig fantasi och spenderar den mesta av sin tid med att gå på äventyr i skogen.",
    },
    tipsFromPreviousCharacter: "Jag är ledsen att jag inte kunde hjälpa dig, men Christoffer-Robin är bästa vän till Nalle Puh, så han vet kanske? Han var den som gav Nalle Puh honungsburken. Han måste kunna berätta var den är nu. Han står vid cykelsafarin, gå och prata med honom!",
    tipsFromCurrentCharacter: "Honungsburken är inte hos elefanten. Nu kommer jag ihåg att honungsburken en gång satt fast i ett hål. Minigolfen har många hål i marken, kika där!",
    nameOfPreviousCharacter: "Ru",
    locationImg: "../media/location-cykelsafarin.jpg",
    locationName: "Cykelsafarin"
}, {
    id: 3,
    questDescription: "Kanin har fastnat i sina tankar. Han försöker räkna golfbanorna men tappar alltid räkningen efter bana tre. Räkna hur många banor det finns efter hål tre och plussa ihop det med 3.",
    questionType: "text",
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
        description: "Kanin är organiserad och tar alltid ledarrollen. Utöver det gillar han att göra planer och odla. När saker inte går enligt Kanins planer blir han ofta irriterad och tappar bort sina egna tankar. Han älskar att ha kontrollen."
    },
    tipsFromPreviousCharacter: "Honungsburken är inte hos elefanten. Nu kommer jag ihåg att honungsburken en gång satt fast i ett hål. Minigolfen har många hål i marken, kika där!",
    tipsFromCurrentCharacter: "Jag ser inte honungsburken i något hål här. Tiger kollade på uppträdanden tidigare idag på danstävlingen, kan honungsburken kanske vara där?",
    nameOfPreviousCharacter: "Christoffer-Robin",
    locationImg: "../media/location-minigolfbanan.jpg",
    locationName: "Minigolfbanan"
}, {
    id: 4,
    questDescription: "Tiger försöker dansa sig in på danstävlingen. Lugna ner Tiger för att få veta var honungsburken är genom att dansa med honom i danstävlingen. Hoppa från nummer 1 till 9 i ordning inom 15 sekunder.",
    questionType: "challenge",
    character: {
        name: "Tiger",
        description: "Tiger är självsäker, energisk och tycker om att hoppa i ordning. Tiger är också känd för att ha en stor personlighet som ofta är i centrum och att få mycket uppmärksamhet.",
    },
    tipsFromPreviousCharacter: "Jag ser inte honungsburken i något hål här. Tiger kollade på uppträdanden tidigare idag på danstävlingen, kan honungsburken kanske vara där?",
    tipsFromCurrentCharacter: "Nasse letar efter clownen i parken. Om du hjälper honom att hitta clownen kanske han kan ge dig ett tips!",
    nameOfPreviousCharacter: "Kanin",
    locationImg: "../media/location-danstävlingen.jpg",
    locationName: "Danstävlingen"
}, {
    id: 5,
    questDescription: "Nasse är väldigt nervös just nu, han blir lugn av att krama clownen. Hitta clownen i parken och ge den en kram åt Nasse.",
    questionType: "challenge",
    character: {
        name: "Nasse",
        description: "Nasse är Nalle Puh bästa vän. Han är ofta bekymrad och rädd för nästan allt. Däremot ställer han alltid upp för sina vänner. Nasse älskar clownföreställningar. Han blir lugn när han är nära clowner.",
    },
    tipsFromPreviousCharacter: "Nasse letar efter clownen i parken. Om du hjälper honom att hitta clownen kanske han kan ge dig ett tips!",
    tipsFromCurrentCharacter: "Tack för hjälpen! Jag är en gris och vi har väldigt bra luktsinne. Vänta lite, det luktar som att honungen kanske är uppe vid kullen bakom barnens scen.",
    nameOfPreviousCharacter: "Tiger",
    locationImg: "../media/location-clownen.jpg",
    locationName: "Clownen"
}, {
    id: 6,
    questDescription: "Nu har du/ni äntligen hittat Nalle Puhs honungsburk. Klicka på den bilden som liknar stället som du/ni hittade honungen på för att säkerställa att du/ni verkligen hittade Nalle Puhs honungsburk. ",
    alternatives: [
        {
            id: 0,
            name: "cykelsafarin",
            imgSrc: "location-cykelsafarin.jpg",
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
