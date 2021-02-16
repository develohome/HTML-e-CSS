// Lista de Nomes
var nomes = [
   "Aaron",
   "Abel",
   "Abelardo",
   "Abigail",
   "Abílio",
   "Abner",
   "Abraão",
   "Abrahão",
   "Abrão",
   "Ada",
   "Adalberto",
   "Adalgisa",
   "Adam",
   "Adão",
   "Adauto",
   "Adela",
   "Adelaide",
   "Adelberto",
   "Adèle",
   "Adélia",
   "Adelina",
   "Ademar",
   "Adhemar",
   "Adolfo",
   "Adolpho",
   "Adoniram",
   "Adônis",
   "Adrian",
   "Adriana",
   "Adriane",
   "Adrianne",
   "Adriano",
   "Adriel",
   "Adriene",
   "Adrienne",
   "Afif",
   "Afonso",
   "Ágata",
   "Agatha",
   "Agenor",
   "Agnaldo",
   "Agnes",
   "Agostinho",
   "Aguinaldo",
   "Aída",
   "Aiko",
   "Aílton",
   "Aimar",
   "Aimée",
   "Airton",
   "Ajit",
   "Akahana",
   "Akako",
   "Akiva",
   "Alaíde",
   "Alan",
   "Alana",
   "Alane",
   "Alanna",
   "Alanne",
   "Alba",
   "Alberta",
   "Albertina",
   "Alberto",
   "Alceu",
   "Alcides",
   "Alcione",
   "Alcyone",
   "Alda",
   "Aldaberto",
   "Aldine",
   "Aldo",
   "Alec",
   "Alecsandra",
   "Alegra",
   "Alejandra",
   "Aleksandra",
   "Alessandra",
   "Alessandro",
   "Alex",
   "Alexa",
   "Alexandra",
   "Alexandre",
   "Aléxis",
   "Alfonso",
   "Alfredo",
   "Ali",
   "Alice",
   "Alicia",
   "Aline",
   "Alisha",
   "Alissa",
   "Allegra",
   "Alma",
   "Aloísio",
   "Alonso",
   "Aluísio",
   "Álvaro",
   "Alzira",
   "Amadeu",
   "Amadeus",
   "Amaia",
   "Amália",
   "Amanda",
   "Amar",
   "Amara",
   "Amarílis",
   "Amauri",
   "Amaury",
   "Amedeo",
   "Amélia",
   "Amélie",
   "América",
   "Américo",
   "Amílcar",
   "Amir",
   "Amisha",
   "Amita",
   "Amiti",
   "Amos",
   "Amy",
   "Ana",
   "Anabela",
   "Anahy",
   "Anaís",
   "Ananda",
   "Anastácia",
   "Anastasia",
   "André",
   "Andréa",
   "Andréia",
   "Andresa",
   "Andressa",
   "Andreza",
   "Andrezza",
   "Anete",
   "Angel",
   "Ângela",
   "Angeli",
   "Angélica",
   "Angelina",
   "Angelita",
   "Ângelo",
   "Angus",
   "Aníbal",
   "Anísio",
   "Anita",
   "Anna",
   "Anne",
   "Annete",
   "Anoush",
   "Anselmo",
   "Antenor",
   "Antonela",
   "Antonella",
   "Antônia",
   "Antonieta",
   "Antônio",
   "Aparecida",
   "Aquiles",
   "Arabela",
   "Araceli",
   "Aracema",
   "Araci",
   "Aracy",
   "Ararê",
   "Arari",
   "Areta",
   "Aretha",
   "Ari",
   "Ariadne",
   "Ariana",
   "Ariane",
   "Ariel",
   "Ariela",
   "Ariella",
   "Arielle",
   "Arion",
   "Arlene",
   "Arlete",
   "Armando",
   "Arnaldo",
   "Arthur",
   "Artur",
   "Asha",
   "Ashley",
   "Assunção",
   "Astrid",
   "Astride",
   "Ataúlfo",
   "Audrey",
   "Augusta",
   "Augustina",
   "Augustine",
   "Augusto",
   "Áurea",
   "Aurélia",
   "Aurélio",
   "Auro",
   "Aurora",
   "Auxiliadora",
   "Ava",
   "Axel",
   "Ayrton",
   "Ayumi",
   "Aziz",
   "Babette",
   "Balbina",
   "Balraj",
   "Baltazar",
   "Bárbara",
   "Barbie",
   "Barbra",
   "Bartira",
   "Bartolomeu",
   "Basílio",
   "Beata",
   "Beatrice",
   "Beatrix",
   "Beatriz",
   "Bela",
   "Belinda",
   "Bella",
   "Belle",
   "Benedicta",
   "Benedicto",
   "Benedita",
   "Benedito",
   "Benício",
   "Benito",
   "Benjamim",
   "Benjamin",
   "Bento",
   "Berenice",
   "Bernadete",
   "Bernadette",
   "Bernarda",
   "Bernardino",
   "Bernardo",
   "Berta",
   "Bertha",
   "Betânia",
   "Bete",
   "Beth",
   "Betina",
   "Bianca",
   "Biatriz",
   "Bibiana",
   "Blanche",
   "Bóris",
   "Branca",
   "Brás",
   "Brenda",
   "Breno",
   "Brian",
   "Briana",
   "Brianne",
   "Bridget",
   "Brígida",
   "Brigite",
   "Brigitte",
   "Brione",
   "Bruce",
   "Bruna",
   "Brunete",
   "Bruno",
   "Bryan",
   "Cacilda",
   "Cael",
   "Caetano",
   "Caio",
   "Caíque",
   "Caleb",
   "Calista",
   "Calixta",
   "Calixto",
   "Calvin",
   "Camélia",
   "Camellia",
   "Cameron",
   "Camila",
   "Camile",
   "Camilla",
   "Camille",
   "Camilo",
   "Candice",
   "Cândida",
   "Cândido",
   "Capitu",
   "Carina",
   "Carine",
   "Carissa",
   "Carla",
   "Carlo",
   "Carlos",
   "Carlota",
   "Carmel",
   "Carmela",
   "Carmelita",
   "Carmem",
   "Carmen",
   "Carmina",
   "Carmo",
   "Carol",
   "Carola",
   "Carolina",
   "Caroline",
   "Carolyn",
   "Carolyne",
   "Cassandra",
   "Cássia",
   "Cassiano",
   "Cassilda",
   "Cássio",
   "Catarina",
   "Caterina",
   "Catherine",
   "Cauan",
   "Cauê",
   "Ceci",
   "Cécile",
   "Cecília",
   "Celeste",
   "Célia",
   "Celina",
   "Céline",
   "Célio",
   "Celso",
   "Ceres",
   "César",
   "Chandra",
   "Chantal",
   "Charles",
   "Charlotte",
   "Chelsea",
   "Chiara",
   "Chloé",
   "Christal",
   "Christian",
   "Christiana",
   "Christiane",
   "Christina",
   "Christopher",
   "Chrystal",
   "Cibele",
   "Cícero",
   "Cid",
   "Cilene",
   "Cinara",
   "Cinira",
   "Cinthia",
   "Cíntia",
   "Cirilo",
   "Ciro",
   "Clair",
   "Claire",
   "Clara",
   "Clarice",
   "Clarissa",
   "Clarisse",
   "Claudete",
   "Claudette",
   "Cláudia",
   "Cláudio",
   "Clayton",
   "Cléa",
   "Cléber",
   "Cleide",
   "Clélia",
   "Cleusa",
   "Clodoaldo",
   "Cloé",
   "Clotilda",
   "Clotilde",
   "Clotildes",
   "Conceição",
   "Conrado",
   "Consuelo",
   "Cora",
   "Cordélia",
   "Corina",
   "Cornélia",
   "Cosette",
   "Cosme",
   "Creusa",
   "Creuza",
   "Cristal",
   "Cristiana",
   "Cristiane",
   "Cristiano",
   "Cristina",
   "Cristóvão",
   "Cynthia",
   "Cyntia",
   "Dafne",
   "Dagmar",
   "Dagmara",
   "Dagoberto",
   "Daiana",
   "Daiane",
   "Daisy",
   "Dália",
   "Dalila",
   "Dalton",
   "Dalva",
   "Damaris",
   "Damian",
   "Damião",
   "Dan",
   "Dana",
   "Danica",
   "Daniel",
   "Daniela",
   "Daniele",
   "Daniella",
   "Danielle",
   "Danilo",
   "Dante",
   "Daphne",
   "Dara",
   "Darci",
   "Darcy",
   "Daria",
   "Dario",
   "Darlene",
   "Davi",
   "David",
   "Daya",
   "Débora",
   "Deborah",
   "Décio",
   "Deepak",
   "Deeta",
   "Deise",
   "Delfina",
   "Délia",
   "Delma",
   "Demi",
   "Denice",
   "Dênis",
   "Denise",
   "Derek",
   "Desirée",
   "Deva",
   "Devi",
   "Dhara",
   "Diana",
   "Diane",
   "Diego",
   "Diella",
   "Dimitri",
   "Diná",
   "Dinah",
   "Diogo",
   "Diomar",
   "Dione",
   "Dionise",
   "Dionísio",
   "Dipak",
   "Dirce",
   "Dirceu",
   "Dita",
   "Diva",
   "Djalma",
   "Djane",
   "Dolores",
   "Dom",
   "Dominique",
   "Domitila",
   "Don",
   "Donata",
   "Donatella",
   "Dora",
   "Doralice",
   "Dóris",
   "Dorotéa",
   "Dorotéia",
   "Dorothy",
   "Douglas",
   "Dulce",
   "Dulcinéa",
   "Dulcineia",
   "Éder",
   "Edgar",
   "Édison",
   "Edite",
   "Edith",
   "Edmundo",
   "Edna",
   "Édson",
   "Eduarda",
   "Eduardo",
   "Elaine",
   "Elana",
   "Elba",
   "Elen",
   "Elena",
   "Elenice",
   "Eleonor",
   "Eleonora",
   "Eli",
   "Eliana",
   "Eliane",
   "Elias",
   "Élio",
   "Elis",
   "Elisa",
   "Elisabete",
   "Elisabeth",
   "Elisângela",
   "Eliseu",
   "Eliza",
   "Elizabete",
   "Elizabeth",
   "Elke",
   "Eloá",
   "Eloah",
   "Eloísa",
   "Eloy",
   "Elsa",
   "Elton",
   "Elvira",
   "Elvis",
   "Elza",
   "Elzira",
   "Ema",
   "Emanuel",
   "Emanuela",
   "Emanuele",
   "Emanuelle",
   "Émerson",
   "Emília",
   "Emílio",
   "Emily",
   "Emir",
   "Emma",
   "Enedina",
   "Enola",
   "Enrica",
   "Enrico",
   "Enrique",
   "Enzo",
   "Erasmo",
   "Eri",
   "Eriberto",
   "Eric",
   "Érica",
   "Érico",
   "Érika",
   "Ériko",
   "Ernesto",
   "Eron",
   "Esmeralda",
   "Esperança",
   "Estefânia",
   "Estéfano",
   "Estela",
   "Ester",
   "Estevão",
   "Esther",
   "Etel",
   "Etelvina",
   "Eugênia",
   "Eugênio",
   "Eulália",
   "Eunice",
   "Eva",
   "Evandro",
   "Evangelina",
   "Eve",
   "Évelin",
   "Evelina",
   "Eveline",
   "Evelyn",
   "Ezequiel",
   "Ézio",
   "Fábia",
   "Fabiana",
   "Fabiane",
   "Fabiano",
   "Fábio",
   "Fabíola",
   "Fabrícia",
   "Fabrício",
   "Fabrizio",
   "Fanny",
   "Fátima",
   "Fausta",
   "Faustina",
   "Fausto",
   "Felícia",
   "Felício",
   "Felipa",
   "Felipe",
   "Félix",
   "Ferdinando",
   "Fernanda",
   "Fernando",
   "Fernão",
   "Fidel",
   "Filipa",
   "Filipe",
   "Filippo",
   "Filomena",
   "Fiona",
   "Flávia",
   "Flávio",
   "Flor",
   "Flora",
   "Franca",
   "Frances",
   "Francesca",
   "Francesco",
   "Francine",
   "Francis",
   "Francisca",
   "Francisco",
   "Françoise",
   "Frank",
   "Franklin",
   "Fred",
   "Frederico",
   "Frida",
   "Gabriel",
   "Gabriela",
   "Gabriele",
   "Gabriella",
   "Gabrielle",
   "Gael",
   "Gaetano",
   "Gaia",
   "Gal",
   "Gália",
   "Gamal",
   "Ganesh",
   "Gaspar",
   "Gema",
   "Genji",
   "George",
   "Georgia",
   "Georgiana",
   "Georgina",
   "Geralda",
   "Geraldo",
   "Germano",
   "Gérson",
   "Gertrude",
   "Gertrudes",
   "Gervásio",
   "Gia",
   "Giacomo",
   "Gian",
   "Giancarlo",
   "Gianne",
   "Gil",
   "Gilberto",
   "Gilda",
   "Gildo",
   "Gilian",
   "Gilmar",
   "Gilmara",
   "Gilson",
   "Gina",
   "Gioconda",
   "Giorgio",
   "Giovana",
   "Giovanna",
   "Giovanni",
   "Gisela",
   "Giselda",
   "Gisele",
   "Gisella",
   "Giselle",
   "Gita",
   "Giulia",
   "Gizelda",
   "Gládis",
   "Gladys",
   "Gláuber",
   "Glauce",
   "Gláucia",
   "Glauco",
   "Glenda",
   "Glória",
   "Gonçalo",
   "Gonzalo",
   "Graça",
   "Grace",
   "Graciela",
   "Graziela",
   "Gregório",
   "Greice",
   "Greta",
   "Gretchen",
   "Guadalupe",
   "Guairá",
   "Guálter",
   "Guaraci",
   "Guido",
   "Guilherme",
   "Guiomar",
   "Gunther",
   "Gustavo",
   "Gyselle",
   "Hadassa",
   "Hadrián",
   "Haidê",
   "Haideé",
   "Halima",
   "Hamilton",
   "Hannah",
   "Hans",
   "Haroldo",
   "Harry",
   "Haya",
   "Haydê",
   "Hebe",
   "Hector",
   "Heidi",
   "Heitor",
   "Hélder",
   "Helen",
   "Helena",
   "Helenice",
   "Helga",
   "Hélio",
   "Heloísa",
   "Heloise",
   "Henrique",
   "Henriqueta",
   "Henry",
   "Hercília",
   "Herculano",
   "Hércules",
   "Heródoto",
   "Heron",
   "Hilário",
   "Hilda",
   "Hildegard",
   "Hiran",
   "Hiroshi",
   "Homero",
   "Horácio",
   "Horishi",
   "Hortênsia",
   "Hugo",
   "Humberto",
   "Iago",
   "Ian",
   "Ianna",
   "Iara",
   "Iasmin",
   "Iberê",
   "Ibrahim",
   "Ícaro",
   "Ida",
   "Idalina",
   "Ieda",
   "Iemanjá",
   "Ignácio",
   "Igor",
   "Ike",
   "Ilana",
   "Ilda",
   "Ileana",
   "Ilma",
   "Ilsa",
   "Inácio",
   "Inaiá",
   "Indira",
   "Indra",
   "Inês",
   "Inez",
   "Ingo",
   "Ingrid",
   "Íngride",
   "Iolanda",
   "Ioli",
   "Ioná",
   "Ionara",
   "Ione",
   "Iracema",
   "Iraci",
   "Irani",
   "Irapuã",
   "Irecê",
   "Irene",
   "Irina",
   "Irineu",
   "Íris",
   "Irma",
   "Isa",
   "Isaac",
   "Isabel",
   "Isabela",
   "Isabele",
   "Isabella",
   "Isabelle",
   "Isadora",
   "Isaías",
   "Isaura",
   "Isidora",
   "Isidoro",
   "Ísis",
   "Ismael",
   "Ismênia",
   "Isolda",
   "Israel",
   "Ítalo",
   "Itamar",
   "Iuri",
   "Ivã",
   "Ivan",
   "Ivete",
   "Ivette",
   "Ivo",
   "Ivone",
   "Ivonne",
   "Izabela",
   "Jaci",
   "Jaciara",
   "Jacina",
   "Jacinto",
   "Jacira",
   "Jacó",
   "Jacob",
   "Jacqueline",
   "Jacques",
   "Jacy",
   "Jacyra",
   "Jade",
   "Jaime",
   "Jair",
   "Jairo",
   "Jamal",
   "James",
   "Jamil",
   "Jamila",
   "Janaína",
   "Jandir",
   "Jandira",
   "Jandyr",
   "Jandyra",
   "Jane",
   "Janete",
   "Janice",
   "Jânio",
   "Janis",
   "Jaqueline",
   "Jasmim",
   "Jasmin",
   "Jasmina",
   "Jasmine",
   "Jasper",
   "Javier",
   "Jaya",
   "Jean",
   "Jefferson",
   "Jeni",
   "Jenifer",
   "Jennifer",
   "Jenny",
   "Jeremias",
   "Jessé",
   "Jéssica",
   "Jesus",
   "Jimena",
   "Jin",
   "Joana",
   "Joanna",
   "João",
   "Joaquim",
   "Joaquina",
   "Jocasta",
   "Joel",
   "Joelle",
   "John",
   "Jonas",
   "Jonatan",
   "Jônatas",
   "Jonathan",
   "Jora",
   "Jordana",
   "Jordão",
   "Jordi",
   "Jorge",
   "Josceline",
   "José",
   "Josefina",
   "Josephine",
   "Joshua",
   "Josias",
   "Josué",
   "Joy",
   "Juan",
   "Juarez",
   "Judah",
   "Judite",
   "Judith",
   "Júlia",
   "Juliana",
   "Juliano",
   "Julieta",
   "Júlio",
   "Juma",
   "Jun",
   "Júnior",
   "Jurandir",
   "Jurema",
   "Juscelino",
   "Jussara",
   "Justina",
   "Justino",
   "Kaila",
   "Kaio",
   "Kaique",
   "Kaleb",
   "Kalil",
   "Kalila",
   "Kaori",
   "Karen",
   "Karim",
   "Karina",
   "Karine",
   "Karla",
   "Karoline",
   "Kássia",
   "Kate",
   "Katerina",
   "Katerine",
   "Katharina",
   "Katherine",
   "Kátia",
   "Katya",
   "Kauã",
   "Kauan",
   "Kauana",
   "Kay",
   "ky",
   "Keiko",
   "Keila",
   "Keith",
   "Kelly",
   "Kelvin",
   "Kennedy",
   "Kenya",
   "Késia",
   "Kevin",
   "Khalil",
   "Kim",
   "Kimberly",
   "Kin",
   "Kirsten",
   "Klaus",
   "Kléber",
   "Kristal",
   "Kyara",
   "Kyoko",
   "Laércio",
   "Laerte",
   "Laila",
   "Lailah",
   "Laís",
   "Laísa",
   "Lala",
   "Lalita",
   "Lalo",
   "Lana",
   "Lara",
   "Larisa",
   "Larissa",
   "Lars",
   "László",
   "Lateefah",
   "Latifa",
   "Latiffa",
   "Laura",
   "Lauro",
   "Lavínia",
   "Layla",
   "Lázaro",
   "Léa",
   "Leandra",
   "Leandro",
   "Leda",
   "Léia",
   "Leila",
   "Leilah",
   "Leilane",
   "Lélio",
   "Lena",
   "Lenora",
   "Leocádia",
   "Leon",
   "Leona",
   "Leonardo",
   "Leôncio",
   "Leonel",
   "Leônidas",
   "Leonor",
   "Leonora",
   "Leopoldo",
   "Leslie",
   "Letícia",
   "Letizia",
   "Levi",
   "LiLia",
   "Liana",
   "Lícia",
   "Lídia",
   "Lien",
   "Lígia",
   "Lila",
   "Lili",
   "Lília",
   "Lilian",
   "Liliana",
   "Liliane",
   "Lin",
   "Lina",
   "Lincoln",
   "Linda",
   "Lindsay",
   "Linete",
   "Linette",
   "Lineu",
   "Lino",
   "Lisa",
   "Lisandra",
   "Lisandro",
   "Lívia",
   "Lívio",
   "Liza",
   "Lizandra",
   "Lizandro",
   "Lola",
   "Lolita",
   "Lorelei",
   "Lorena",
   "Lorenzo",
   "Loreta",
   "Lóri",
   "Lorraine",
   "Lourdes",
   "Lourenço",
   "Luan",
   "Luana",
   "Luca",
   "Lucas",
   "Luci",
   "Lúcia",
   "Luciana",
   "Luciane",
   "Luciano",
   "Luciene",
   "Lucila",
   "Lucille",
   "Lucina",
   "Lucinda",
   "Lúcio",
   "Lucíola",
   "Lucy",
   "Ludemila",
   "Ludmila",
   "Luigi",
   "Luís",
   "Luísa",
   "Luiz",
   "Luiza",
   "Luna",
   "Lurdes",
   "Luzia",
   "Lydia",
   "Lynn",
   "Mabel",
   "Mada",
   "Madalena",
   "Mafalda",
   "Magali",
   "Magda",
   "Magdalena",
   "Magno",
   "Magnólia",
   "Mahima",
   "Maia",
   "Maiara",
   "Maíra",
   "Maísa",
   "Maitê",
   "Malaquias",
   "Malika",
   "Mano",
   "Manoel",
   "Manoela",
   "Manon",
   "Manu",
   "Manuel",
   "Manuela",
   "Manuelle",
   "Maomé",
   "Mara",
   "Marc",
   "Marcel",
   "Marcela",
   "Marcele",
   "Marcella",
   "Marcello",
   "Marcelo",
   "Márcia",
   "Márcio",
   "Marco",
   "Marcos",
   "Marcus",
   "Margarete",
   "Margarida",
   "Margarita",
   "Margot",
   "Maria",
   "Mariah",
   "Mariana",
   "Mariângela",
   "Marianne",
   "Mariano",
   "Mariela",
   "Marília",
   "Marilu",
   "Marina",
   "Mário",
   "Maris",
   "Marisa",
   "Marise",
   "Marissol",
   "Maristela",
   "Mariza",
   "Marize",
   "Marjorie",
   "Marlene",
   "Marli",
   "Marlon",
   "Marly",
   "Marta",
   "Martha",
   "Martim",
   "Martina",
   "Marvin",
   "Mary",
   "Masculino",
   "Mateus",
   "Matheus",
   "Mathias",
   "Matias",
   "Matilda",
   "Matilde",
   "Matteo",
   "Maura",
   "Maurício",
   "Mauro",
   "Maximiano",
   "Maya",
   "Mayara",
   "Mayra",
   "Maysa",
   "Medéia",
   "Megan",
   "Meire",
   "Mel",
   "Melina",
   "Melinda",
   "Melissa",
   "Melquior",
   "Melvin",
   "Menelau",
   "Mercedes",
   "Messias",
   "Mia",
   "Micael",
   "Micaela",
   "Michael",
   "Michaela",
   "Michaella",
   "Michel",
   "Michele",
   "Michelle",
   "Midori",
   "Mieko",
   "Miguel",
   "Mika",
   "Mildred",
   "Milena",
   "Milton",
   "Mina",
   "Minerva",
   "Mingmei",
   "Miracema",
   "Miranda",
   "Miriam",
   "Mírian",
   "Mirna",
   "Mirtes",
   "Miyoko",
   "Moacir",
   "Moema",
   "Moira",
   "Moisés",
   "Mônica",
   "Monique",
   "Morgana",
   "Moysés",
   "Mozart",
   "Muriel",
   "Murilo",
   "Mustafá",
   "Nabi",
   "Nabor",
   "Nádia",
   "Nadine",
   "Nadir",
   "Nadira",
   "Nadya",
   "Naila",
   "Nailah",
   "Naim",
   "Nair",
   "Nájela",
   "Najma",
   "Nana",
   "Nancy",
   "Nani",
   "Naomi",
   "Napoleão",
   "Nara",
   "Narcisa",
   "Narciso",
   "Násser",
   "Natacha",
   "Natália",
   "Natalie",
   "Natan",
   "Natanael",
   "Nataniel",
   "Natasha",
   "Nathalia",
   "Nathalie",
   "Nathanael",
   "Naum",
   "Nayana",
   "Nazaré",
   "Nazira",
   "Neci",
   "Nei",
   "Neide",
   "Neil",
   "Neli",
   "Nélson",
   "Nereu",
   "Nestor",
   "Neusa",
   "Newton",
   "Ney",
   "Nice",
   "Nicholas",
   "Nicolas",
   "Nicolau",
   "Nicole",
   "Nika",
   "Nilo",
   "Nilse",
   "Nílson",
   "Nilton",
   "Nilza",
   "Nina",
   "Nisha",
   "Nivaldo",
   "Nívea",
   "Nívia",
   "Noah",
   "Noé",
   "Noel",
   "Noélia",
   "Noemi",
   "Noêmia",
   "Nora",
   "Norah",
   "Norberto",
   "Norma",
   "Nórton",
   "Núbia",
   "Nuno",
   "Octávia",
   "Octávio",
   "Odete",
   "Odette",
   "Odila",
   "Ofélia",
   "Olaf",
   "Olavo",
   "Olga",
   "Olímpia",
   "Olímpio",
   "Oliver",
   "Olívia",
   "Olívio",
   "Omar",
   "Onofre",
   "Ophelia",
   "Ordália",
   "Orestes",
   "Orfeu",
   "Oriana",
   "Orlando",
   "Orly",
   "Oscar",
   "Osíris",
   "Osmar",
   "Osvaldo",
   "Oswald",
   "Oswaldo",
   "Otávia",
   "Otávio",
   "Oto",
   "Otto",
   "Pablo",
   "Paco",
   "Paloma",
   "Pamela",
   "Pandora",
   "Paola",
   "Paolo",
   "Paris",
   "Pascoal",
   "Pasqual",
   "Patrícia",
   "Patrício",
   "Patrick",
   "Paula",
   "Paulina",
   "Paulo",
   "Pedro",
   "Penélope",
   "Percival",
   "Percy",
   "Peri",
   "Péricles",
   "Perla",
   "Perseu",
   "Peter",
   "Petúnia",
   "Phillip",
   "Phillippe",
   "Pia",
   "Pierre",
   "Pietra",
   "Pietro",
   "Pilar",
   "Plínio",
   "Poliana",
   "Priscila",
   "Priscilla",
   "Quincas",
   "Quirino",
   "Quitéria",
   "Rachel",
   "Radamés",
   "Rafael",
   "Rafaela",
   "Rafaella",
   "Raí",
   "Rai",
   "Raimi",
   "Raimundo",
   "Raísa",
   "Raíssa",
   "Raj",
   "Rajesh",
   "Ralf",
   "Ramiro",
   "Ramón",
   "Randal",
   "Rani",
   "Raphael",
   "Raquel",
   "Raul",
   "Ray",
   "Rebeca",
   "Rebecca",
   "Regiane",
   "Regina",
   "Reginaldo",
   "Reinaldo",
   "Renan",
   "Renata",
   "Renato",
   "Reneé",
   "Reynaldo",
   "Ricardo",
   "Richard",
   "Rita",
   "Robert",
   "Roberta",
   "Roberto",
   "Robinson",
   "Robson",
   "Rodolfo",
   "Rodrigo",
   "Roger",
   "Rogéria",
   "Rogério",
   "Rolando",
   "Romeo",
   "Romeu",
   "Rômulo",
   "Ronaldo",
   "Rosa",
   "Rosália",
   "Rosana",
   "Rosane",
   "Rosângela",
   "Rosário",
   "RoseRoseli",
   "Rossana",
   "Roxana",
   "Roxane",
   "Rubem",
   "Rubens",
   "Rúbia",
   "Rui",
   "Rute",
   "Ruth",
   "Ruy",
   "Ryan",
   "Sabina",
   "Sabrina",
   "Sacha",
   "Sachiel",
   "Sadi",
   "Safira",
   "Salatiel",
   "Salete",
   "Salim",
   "Salma",
   "Salomão",
   "Salomé",
   "Salvador",
   "Sálvio",
   "Sam",
   "Samanta",
   "Samantha",
   "Samara",
   "Samir",
   "Samira",
   "Samuel",
   "Sancho",
   "Sandra",
   "Sandro",
   "Sansão",
   "Santiago",
   "Sara",
   "Sarah",
   "Sasha",
   "Saul",
   "Saulo",
   "Scarlet",
   "Sebastião",
   "Selene",
   "Selina",
   "Selma",
   "Serafim",
   "Serafina",
   "Serena",
   "Sérgio",
   "Severiano",
   "Severino",
   "Severo",
   "Shakira",
   "Sharon",
   "Sheila",
   "Sheilla",
   "Shen",
   "Shirlei",
   "Shirley",
   "Sibele",
   "Sibila",
   "Sidnei",
   "Sidney",
   "Silas",
   "Silena",
   "Silmara",
   "Silvana",
   "Sílvia",
   "Sílvio",
   "Simão",
   "Simone",
   "Sion",
   "Socorro",
   "Sócrates",
   "Sofia",
   "Sol",
   "Solange",
   "Sólon",
   "Sônia",
   "Sophia",
   "Sophie",
   "Soraia",
   "Soraya",
   "Stefano",
   "Stella",
   "Sueli",
   "Suely",
   "Susana",
   "Syon",
   "Tabajara",
   "Tábata",
   "Tabita",
   "Taciana",
   "Tadeu",
   "Tainá",
   "Taís",
   "Takashi",
   "Tales",
   "Talita",
   "Tamara",
   "Tancredo",
   "Tânia",
   "Tarcila",
   "Tarcísio",
   "Tarik",
   "Tarsila",
   "Tarso",
   "Tassiana",
   "Tatiana",
   "Tatiane",
   "Tecla",
   "Ted",
   "Telma",
   "Telmo",
   "Teo",
   "Teobaldo",
   "Teodora",
   "Teodoro",
   "Teresa",
   "Thabita",
   "Thaís",
   "Thales",
   "Thalita",
   "Thelma",
   "Theo",
   "Theodoro",
   "Theresa",
   "Thiago",
   "Thomas",
   "Thomaz",
   "Tiago",
   "Tiana",
   "Tim",
   "Timóteo",
   "Tito",
   "Tobias",
   "Tom",
   "Tomás",
   "Tomaz",
   "Tomé",
   "Tônia",
   "Trajano",
   "Troy",
   "Trudy",
   "Túlio",
   "Ubaldo",
   "Ubirajara",
   "Ubiratan",
   "Ugo",
   "Ulisses",
   "Úlrica",
   "Ulrika",
   "Ulysses",
   "Umberto",
   "Urânia",
   "Urbano",
   "Uri",
   "Uriel",
   "Úrsula",
   "VVagner",
   "Valdemar",
   "Valdemir",
   "Valdir",
   "Valdo",
   "Valdomiro",
   "Valentim",
   "Valentina",
   "Valentino",
   "Valéria",
   "Valério",
   "Valeska",
   "Valfredo",
   "Valmir",
   "Valmor",
   "Valquíria",
   "Valter",
   "Vanda",
   "Vanderlei",
   "Vanderley",
   "Vando",
   "Vanessa",
   "Vânia",
   "Vanja",
   "Venâncio",
   "Venceslau",
   "Vera",
   "Verena",
   "Veridiana",
   "Verônica",
   "Vicente",
   "Victor",
   "Victória",
   "Victorio",
   "Vidal",
   "Vilma",
   "Vincent",
   "Vincenzo",
   "Vinício",
   "Vinícius",
   "Violante",
   "Violeta",
   "Virgílio",
   "Virgínia",
   "Viriato",
   "Vita",
   "Vital",
   "Vítor",
   "Vitória",
   "Vitório",
   "Vivian",
   "Viviana",
   "Viviane",
   "Vivien",
   "Vivienne",
   "Vladimir",
   "Wagner",
   "Waldemar",
   "Waldemir",
   "Waldemiro",
   "Waldir",
   "Waldo",
   "Waldomiro",
   "Waldyr",
   "Wallace",
   "Walmir",
   "Walquíria",
   "Walter",
   "Wanda",
   "Wanderley",
   "Wando",
   "Wanessa",
   "Wendy",
   "Wesley",
   "William",
   "Wilma",
   "Wilson",
   "Wilton",
   "Wladimir",
   "Wolfgang",
   "Xantipa",
   "Xavier",
   "Xaviera",
   "Xênia",
   "Ximena",
   "Xisto",
   "Yael",
   "Yara",
   "Yaron",
   "Yaslin",
   "Yasmim",
   "Yasmin",
   "Yasmina",
   "Yasmine",
   "Yoko",
   "Yola",
   "Yolanda",
   "Yoná",
   "Yone",
   "Yoshi",
   "Yukio",
   "Yumi",
   "Yuri",
   "Yves",
   "Yvette",
   "Yvone",
   "Zacarias",
   "Zaíra",
   "Zara",
   "Zeferino",
   "Zelda",
   "Zélia",
   "Zenaide",
   "Zenon",
   "Zilá",
   "Zilda",
   "Zion",
   "Zita",
   "Zoe",
   "Zoey",
   "Zora",
   "Zoraide",
   "Zuleica",
   "Zuleika",
   "Zulima",
   "Zulmira"
];

var descricao = []; // Declaração de Váriavel 
// Criação de Array Obj
for(let x = 0 ; x< nomes.length ; x++){
   descricao.push(
      {
         nome: nomes[x],
         autor: 'Jorge',
         msg: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis cupiditate dolore accusamus deserunt porro fuga ab tenetur, similique laudantium neque voluptates veniam, ex hic. Deleniti atque officia delectus numquam eius?'
      }
   )
}

var main = document.querySelector('#main'); // Seleção do campo principal

// Loop para a criação das colunas
for(let colX = 0 ; colX < 4;colX++){
   let colsX = document.createElement('div'); // Criação das divs 
   colsX.classList.add('colunas'); // Adiciona a classe colunas na div criada
   main.appendChild(colsX); // Adiciona a div colunas na seleção principal
   // Criação das imagens por coluna
   for(let colY = 0; colY < 100;colY++){
      let coluna = document.querySelectorAll('.colunas'); // Seleciona a coluna criada 
      let colsY = document.createElement('img'); // Cria o elemento img
      let tam = Math.floor(Math.random() * 3 + 1) // Cria um random entre 1 e 4
      let pos = Math.random() // Cria um número aleatório
      colsY.src = `https://picsum.photos/600/600?random= ${pos}`; // Passa o endereço da imagem para o elemento img criado. o pos é a posição da foto
      colsY.classList.add(`coluna--${tam}`); // Para o elemento criado é add uma class aleatório para a definição da altura
      coluna[colX].appendChild(colsY); // Cria o Elemento na coluna
      
   }
  
}
var posicaoImg;
var imgs = document.querySelectorAll('img')
var modal = document.querySelector("#modal").style;
var descricaoPhoto = document.querySelector('#Descphoto')

// Loop para a criação do evento click para cada img criada
for(let i=0; i<imgs.length; i++) {
   imgs[i].addEventListener("click", function() {
      posicaoImg = i; // A váriavel que armazena a posição da img que foi clicada
      let imgSelect = this.src;   // A váriavel que armazena a o caminho da img que foi clicada 
      modal.display = "block"; // Abre o modal
      modal.opacity = 1; // efeito para o modal
      let insetImg = document.querySelector('#imgMain'); // A váriavel que armazena o campo principal onde será mostrada a img
      let el_img = document.createElement('img'); // Cria um elemento img
      el_img.src = imgSelect; // É passado o caminho da imagem selecionada
      insetImg.appendChild(el_img); // Adiciona o elemento criado
      descricaoPhoto.innerHTML = `<h1>${descricao[i].nome}</h1>`; // no campo descrição é inserido o nome da foto
      descricaoPhoto.innerHTML += `<p>${descricao[i].msg}</p>`; // é inserido a descrição 
   });
}

document.querySelector('.fa-close').addEventListener('click', () => modal.display = 'none'); // fecha o modal

var voltarDescricao = document.querySelector('#voltar'); // Botão para voltar para a descrição 

// Função para rolar para os comentários
document.querySelector('.fa-comment-o').addEventListener('click', () => {
   document.querySelector('#MainMsg').style.marginLeft = '-100%'
   voltarDescricao.style.visibility = 'visible'
});

// Função para voltar para a descrição
voltarDescricao.addEventListener('click', () =>{
   document.querySelector('#MainMsg').style.marginLeft = '0%';
   voltarDescricao.style.visibility = 'hidden'
})



function insertImg(posicao){
   let insetImg = document.querySelector('#imgMain');
      let el_img = document.createElement('img');
      el_img.src = imgs[posicao].src;
      insetImg.appendChild(el_img);
      descricaoPhoto.innerHTML = `<h1>${descricao[posicao].nome}</h1>`;
      descricaoPhoto.innerHTML += `<p>${descricao[posicao].msg}</p>`;
}

// Função para voltar uma img
document.querySelector('#voltarImg').addEventListener('click', ()=>{
   if(posicaoImg == 0 ){
      posicaoImg = 0
   }else{
      posicaoImg --;// chama a Função para voltar ou ir pra frente
   }
   insertImg(posicaoImg)
});
// Função para ir para a próxima img
document.querySelector('#proxImg').addEventListener('click', ()=>{
   if(posicaoImg == imgs.length){
      posicaoImg = imgs.length // armazena a posição limite da img
   }else{
      posicaoImg ++; // Adiciona uma posição
   }
   insertImg(posicaoImg); // chama a Função para voltar ou ir pra frente
});