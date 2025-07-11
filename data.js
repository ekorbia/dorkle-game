// Game data for Dorkle
const gameData = {
  movies: [
    "Titanic",
    "Avatar",
    "Star Wars",
    "Harry Potter",
    "Lord of the Rings",
    "The Matrix",
    "Jurassic Park",
    "Finding Nemo",
    "Toy Story",
    "Frozen",
    "The Lion King",
    "Beauty and the Beast",
    "Aladdin",
    "The Little Mermaid",
    "Shrek",
    "Madagascar",
    "Ice Age",
    "Cars",
    "Up",
    "Wall-E",
    "Spider-Man",
    "Batman",
    "Superman",
    "Iron Man",
    "Captain America",
    "Thor",
    "Hulk",
    "Wonder Woman",
    "Black Panther",
    "Guardians of the Galaxy",
    "Fast and Furious",
    "Mission Impossible",
    "James Bond",
    "Rocky",
    "Terminator",
    "Alien",
    "Predator",
    "Jaws",
    "E.T.",
    "Back to the Future",
    "Indiana Jones",
    "Ghostbusters",
    "Men in Black",
    "The Avengers",
    "X-Men",
    "Transformers",
    "Pirates of the Caribbean",
    "The Hunger Games",
    "Twilight",
    "The Hobbit",
    "Inception",
    "Interstellar",
    "Gravity",
  ],

  celebrities: [
    "Leonardo DiCaprio",
    "Brad Pitt",
    "Angelina Jolie",
    "Jennifer Lawrence",
    "Will Smith",
    "Tom Cruise",
    "Johnny Depp",
    "Robert Downey Jr.",
    "Scarlett Johansson",
    "Emma Stone",
    "Ryan Gosling",
    "Chris Hemsworth",
    "Chris Evans",
    "Chris Pratt",
    "Dwayne Johnson",
    "Vin Diesel",
    "Mark Wahlberg",
    "Matt Damon",
    "Ben Affleck",
    "George Clooney",
    "Sandra Bullock",
    "Julia Roberts",
    "Meryl Streep",
    "Nicole Kidman",
    "Charlize Theron",
    "Reese Witherspoon",
    "Amy Adams",
    "Anne Hathaway",
    "Natalie Portman",
    "Keira Knightley",
    "Emma Watson",
    "Jennifer Aniston",
    "Beyoncé",
    "Taylor Swift",
    "Ariana Grande",
    "Lady Gaga",
    "Rihanna",
    "Katy Perry",
    "Justin Bieber",
    "Ed Sheeran",
    "Bruno Mars",
    "Drake",
    "Kanye West",
    "Jay-Z",
    "Eminem",
    "Justin Timberlake",
    "John Legend",
    "Adele",
    "Sam Smith",
    "Billie Eilish",
    "The Weeknd",
    "Post Malone",
    "Oprah Winfrey",
    "Ellen DeGeneres",
    "Jimmy Fallon",
    "Stephen Colbert",
  ],

  music: [
    "Taylor Swift",
    "Ed Sheeran",
    "Adele",
    "Beyoncé",
    "Drake",
    "Ariana Grande",
    "Justin Bieber",
    "Billie Eilish",
    "The Weeknd",
    "Post Malone",
    "Dua Lipa",
    "Harry Styles",
    "Bad Bunny",
    "Olivia Rodrigo",
    "BTS",
    "Doja Cat",
    "Lady Gaga",
    "Bruno Mars",
    "Rihanna",
    "Kanye West",
    "Jay-Z",
    "Eminem",
    "Coldplay",
    "Imagine Dragons",
    "Maroon 5",
    "OneRepublic",
    "Twenty One Pilots",
    "The Chainsmokers",
    "Calvin Harris",
    "David Guetta",
    "Marshmello",
    "Skrillex",
    "Queen",
    "The Beatles",
    "Michael Jackson",
    "Madonna",
    "Prince",
    "Elvis Presley",
    "Bob Dylan",
    "Johnny Cash",
    "Frank Sinatra",
    "Whitney Houston",
    "Stevie Wonder",
    "Nirvana",
    "AC/DC",
    "Led Zeppelin",
    "Pink Floyd",
    "U2",
    "Radiohead",
    "Green Day",
    "Red Hot Chili Peppers",
    "Foo Fighters",
    "Metallica",
    "Guns N' Roses",
    "Shawn Mendes",
    "Selena Gomez",
    "Camila Cabello",
    "Miley Cyrus",
    "Katy Perry",
    "Lana Del Rey",
    "SZA",
    "Lizzo",
    "Megan Thee Stallion",
    "Cardi B",
    "Nicki Minaj",
    "Travis Scott",
    "Kendrick Lamar",
    "J. Cole",
    "Lil Baby",
    "DaBaby",
    "Future",
    "The Killers",
    "Arctic Monkeys",
    "Panic! At The Disco",
    "Fall Out Boy",
    "My Chemical Romance",
    "Paramore",
    "Linkin Park",
    "Muse",
    "Black Eyed Peas",
    "OneDirection",
  ],

  "sports-stars": [
    "LeBron James",
    "Michael Jordan",
    "Tom Brady",
    "Serena Williams",
    "Tiger Woods",
    "Michael Phelps",
    "Simone Biles",
    "Kobe Bryant",
    "Shaquille O'Neal",
    "Stephen Curry",
    "Kevin Durant",
    "Giannis Antetokounmpo",
    "Patrick Mahomes",
    "Aaron Rodgers",
    "Ronda Rousey",
    "Conor McGregor",
    "Floyd Mayweather",
    "Mike Tyson",
    "Muhammad Ali",
    "Babe Ruth",
    "Wayne Gretzky",
    "Venus Williams",
    "Alex Morgan",
    "Kawhi Leonard",
    "Russell Westbrook",
    "James Harden",
    "Damian Lillard",
    "Anthony Davis",
    "Shohei Ohtani",
    "Mike Trout",
    "Aaron Judge",
    "Mookie Betts",
    "Fernando Tatis Jr",
    "Connor McDavid",
    "Sidney Crosby",
    "Alex Ovechkin",
    "Nathan MacKinnon",
    "Jon Jones",
    "Amanda Nunes",
    "Kamaru Usman",
    "Francis Ngannou",
    "Carmelo Anthony",
    "Chris Paul",
    "Dwyane Wade",
    "Derek Jeter",
    "Peyton Manning",
    "Joe Montana",
    "Jerry Rice",
    "Larry Bird",
    "Magic Johnson",
    "Kareem Abdul-Jabbar",
    "Julius Erving",
    "Charles Barkley",
    "Karl Malone",
    "John Stockton",
    "Tim Duncan",
    "David Robinson",
    "Hakeem Olajuwon",
    "Patrick Ewing",
    "Scottie Pippen",
    "Dennis Rodman",
    "Reggie Miller",
    "Ray Allen",
    "Paul Pierce",
    "Kevin Garnett",
    "Dirk Nowitzki",
    "Steve Nash",
    "Jason Kidd",
    "Gary Payton",
    "Clyde Drexler",
  ],

  "us-states": [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
    "Washington DC",
  ],

  countries: [
    "United States",
    "Canada",
    "Mexico",
    "Brazil",
    "Argentina",
    "United Kingdom",
    "France",
    "Germany",
    "Italy",
    "Spain",
    "Russia",
    "China",
    "Japan",
    "India",
    "Australia",
    "South Korea",
    "Thailand",
    "Vietnam",
    "Philippines",
    "Indonesia",
    "Malaysia",
    "Singapore",
    "Turkey",
    "Greece",
    "Netherlands",
    "Belgium",
    "Switzerland",
    "Austria",
    "Sweden",
    "Norway",
    "Denmark",
    "Finland",
    "Poland",
    "Czech Republic",
    "Hungary",
    "Romania",
    "Bulgaria",
    "Croatia",
    "Serbia",
    "Slovenia",
    "Slovakia",
    "Estonia",
    "Latvia",
    "Lithuania",
    "Ukraine",
    "Belarus",
    "Portugal",
    "Ireland",
    "Israel",
    "Egypt",
    "South Africa",
    "Nigeria",
    "Kenya",
    "Morocco",
    "Ghana",
    "Ethiopia",
    "Algeria",
    "Tunisia",
    "Libya",
    "Sudan",
    "Chad",
    "Niger",
    "Mali",
    "Senegal",
    "Ivory Coast",
    "Burkina Faso",
    "Guinea",
    "Sierra Leone",
    "Liberia",
    "Togo",
    "Benin",
    "Cameroon",
    "Central African Republic",
    "Democratic Republic of Congo",
    "Republic of Congo",
    "Gabon",
    "Equatorial Guinea",
    "Sao Tome and Principe",
    "Angola",
    "Zambia",
    "Zimbabwe",
    "Botswana",
    "Namibia",
    "Lesotho",
    "Swaziland",
    "Mozambique",
    "Madagascar",
    "Mauritius",
    "Seychelles",
    "Comoros",
    "Djibouti",
    "Eritrea",
    "Somalia",
    "Uganda",
    "Tanzania",
    "Rwanda",
    "Burundi",
    "Malawi",
    "Afghanistan",
    "Pakistan",
    "Bangladesh",
    "Sri Lanka",
    "Nepal",
    "Bhutan",
    "Maldives",
    "Myanmar",
    "Laos",
    "Cambodia",
    "Mongolia",
    "North Korea",
    "Kazakhstan",
    "Uzbekistan",
    "Turkmenistan",
    "Kyrgyzstan",
    "Tajikistan",
    "Iran",
    "Iraq",
    "Syria",
    "Lebanon",
    "Jordan",
    "Saudi Arabia",
    "Yemen",
    "Oman",
    "United Arab Emirates",
    "Qatar",
    "Bahrain",
    "Kuwait",
    "Armenia",
    "Azerbaijan",
    "Georgia",
    "New Zealand",
    "Fiji",
    "Papua New Guinea",
    "Solomon Islands",
    "Vanuatu",
    "Samoa",
    "Tonga",
    "Kiribati",
    "Tuvalu",
    "Nauru",
    "Palau",
    "Marshall Islands",
    "Micronesia",
    "Chile",
    "Peru",
    "Ecuador",
    "Colombia",
    "Venezuela",
    "Guyana",
    "Suriname",
    "French Guiana",
    "Bolivia",
    "Paraguay",
    "Uruguay",
    "Costa Rica",
    "Panama",
    "Nicaragua",
    "Honduras",
    "El Salvador",
    "Guatemala",
    "Belize",
    "Jamaica",
    "Haiti",
    "Dominican Republic",
    "Cuba",
    "Bahamas",
    "Barbados",
    "Trinidad and Tobago",
    "Grenada",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Antigua and Barbuda",
    "Dominica",
    "Saint Kitts and Nevis",
  ],

  "80s-music": [
    "Michael Jackson",
    "Madonna",
    "Prince",
    "Whitney Houston",
    "George Michael",
    "Duran Duran",
    "Bon Jovi",
    "U2",
    "Def Leppard",
    "Guns N' Roses",
    "AC/DC",
    "Queen",
    "The Police",
    "Cyndi Lauper",
    "Blondie",
    "The Cure",
    "Depeche Mode",
    "New Order",
    "Tears for Fears",
    "Simple Minds",
    "Wham!",
    "Culture Club",
    "Eurythmics",
    "Hall & Oates",
    "Lionel Richie",
    "Stevie Wonder",
    "Phil Collins",
    "Genesis",
    "Van Halen",
    "Journey",
    "Foreigner",
    "REO Speedwagon",
    "Toto",
    "Chicago",
    "Fleetwood Mac",
    "The Go-Go's",
    "The Bangles",
    "Pat Benatar",
    "Joan Jett",
    "Heart",
    "Pretenders",
    "Talking Heads",
    "B-52's",
    "Devo",
    "The Cars",
    "Billy Joel",
    "Elton John",
    "Rod Stewart",
    "Paul McCartney",
    "John Lennon",
    "David Bowie",
    "Sting",
    "Bryan Adams",
    "John Mellencamp",
    "Bruce Springsteen",
    "Bob Seger",
    "Tom Petty",
    "Cheap Trick",
    "The Knack",
    "Blondie",
    "Ramones",
    "Dead Kennedys",
    "Black Flag",
    "Minor Threat",
    "Bad Brains",
    "X",
    "The Clash",
    "Sex Pistols",
    "The Smiths",
    "Joy Division",
    "Siouxsie and the Banshees",
    "Bauhaus",
    "The Psychedelic Furs",
    "Echo & the Bunnymen",
    "The Jesus and Mary Chain",
    "Sonic Youth",
    "Hüsker Dü",
    "The Replacements",
    "R.E.M.",
    "The B-52's",
    "Talking Heads",
    "Television",
  ],

  "90s-music": [
    "Nirvana",
    "Pearl Jam",
    "Soundgarden",
    "Alice in Chains",
    "Stone Temple Pilots",
    "Red Hot Chili Peppers",
    "Jane's Addiction",
    "Smashing Pumpkins",
    "Radiohead",
    "Oasis",
    "Blur",
    "Pulp",
    "Suede",
    "Britpop",
    "Coldplay",
    "U2",
    "R.E.M.",
    "Green Day",
    "The Offspring",
    "Bad Religion",
    "NOFX",
    "Rancid",
    "Social Distortion",
    "Sublime",
    "No Doubt",
    "Bush",
    "Live",
    "Collective Soul",
    "Creed",
    "Matchbox Twenty",
    "Goo Goo Dolls",
    "Counting Crows",
    "Blind Melon",
    "Silverchair",
    "Tool",
    "Rage Against the Machine",
    "Korn",
    "Limp Bizkit",
    "Deftones",
    "White Zombie",
    "Marilyn Manson",
    "Nine Inch Nails",
    "Ministry",
    "Filter",
    "Stabbing Westward",
    "The Cure",
    "Depeche Mode",
    "New Order",
    "Massive Attack",
    "Portishead",
    "Tricky",
    "Björk",
    "PJ Harvey",
    "Hole",
    "Alanis Morissette",
    "Fiona Apple",
    "Tori Amos",
    "Sinéad O'Connor",
    "Cranberries",
    "Dolores O'Riordan",
    "Mariah Carey",
    "Whitney Houston",
    "Céline Dion",
    "Boyz II Men",
    "TLC",
    "Salt-N-Pepa",
    "En Vogue",
    "Janet Jackson",
    "Lauryn Hill",
    "Erykah Badu",
    "D'Angelo",
    "Maxwell",
    "Tupac Shakur",
    "The Notorious B.I.G.",
    "Nas",
    "Jay-Z",
    "Wu-Tang Clan",
    "A Tribe Called Quest",
    "De La Soul",
    "Public Enemy",
    "N.W.A",
    "Dr. Dre",
    "Snoop Dogg",
    "Ice Cube",
    "Eminem",
    "Cypress Hill",
    "House of Pain",
    "Beastie Boys",
    "Beck",
    "Weezer",
  ],

  "2000s-music": [
    "Eminem",
    "50 Cent",
    "Kanye West",
    "Jay-Z",
    "Outkast",
    "Missy Elliott",
    "Nelly",
    "Ludacris",
    "Lil Wayne",
    "T.I.",
    "The Game",
    "Snoop Dogg",
    "Usher",
    "Justin Timberlake",
    "Beyoncé",
    "Christina Aguilera",
    "Britney Spears",
    "Kelly Clarkson",
    "Alicia Keys",
    "John Legend",
    "The Black Eyed Peas",
    "Gwen Stefani",
    "Fergie",
    "Nelly Furtado",
    "Shakira",
    "Rihanna",
    "Amy Winehouse",
    "Adele",
    "Duffy",
    "Lily Allen",
    "The Killers",
    "The Strokes",
    "The White Stripes",
    "Arctic Monkeys",
    "Franz Ferdinand",
    "Kaiser Chiefs",
    "Bloc Party",
    "Interpol",
    "Yeah Yeah Yeahs",
    "The Hives",
    "The Vines",
    "Jet",
    "Wolfmother",
    "Kings of Leon",
    "The Kooks",
    "Kasabian",
    "Muse",
    "Radiohead",
    "Coldplay",
    "Keane",
    "Snow Patrol",
    "Travis",
    "Stereophonics",
    "Oasis",
    "Blur",
    "Gorillaz",
    "Damon Albarn",
    "Thom Yorke",
    "Jonny Greenwood",
    "Ed O'Brien",
    "Green Day",
    "Blink-182",
    "Sum 41",
    "Good Charlotte",
    "Simple Plan",
    "New Found Glory",
    "Fall Out Boy",
    "Panic! At The Disco",
    "My Chemical Romance",
    "The Used",
    "Taking Back Sunday",
    "Brand New",
    "Dashboard Confessional",
    "Jimmy Eat World",
    "The Get Up Kids",
    "Saves the Day",
    "Something Corporate",
    "The Starting Line",
    "Yellowcard",
    "The All-American Rejects",
    "Bowling for Soup",
    "The Ataris",
    "Less Than Jake",
    "Reel Big Fish",
    "Goldfinger",
    "The Mighty Mighty Bosstones",
    "Streetlight Manifesto",
    "Catch 22",
    "Operation Ivy",
    "Rancid",
  ],

  "80s-movies": [
    "E.T. the Extra-Terrestrial",
    "Back to the Future",
    "The Breakfast Club",
    "Ferris Bueller's Day Off",
    "Sixteen Candles",
    "Pretty in Pink",
    "The Terminator",
    "Blade Runner",
    "Raiders of the Lost Ark",
    "The Empire Strikes Back",
    "Return of the Jedi",
    "Ghostbusters",
    "Beverly Hills Cop",
    "Top Gun",
    "Dirty Dancing",
    "Footloose",
    "Flashdance",
    "The Karate Kid",
    "Rocky III",
    "Rocky IV",
    "Rambo: First Blood Part II",
    "Conan the Barbarian",
    "The Road Warrior",
    "Mad Max Beyond Thunderdome",
    "The Shining",
    "Poltergeist",
    "A Nightmare on Elm Street",
    "Friday the 13th",
    "Halloween II",
    "An American Werewolf in London",
    "The Thing",
    "They Live",
    "Escape from New York",
    "Big Trouble in Little China",
    "The Princess Bride",
    "The Goonies",
    "Gremlins",
    "Short Circuit",
    "WarGames",
    "Tron",
    "The NeverEnding Story",
    "Labyrinth",
    "The Dark Crystal",
    "Willow",
    "The Last Unicorn",
    "The Secret of NIMH",
    "An American Tail",
    "The Land Before Time",
    "My Neighbor Totoro",
    "Castle in the Sky",
    "Nausicaä of the Valley of the Wind",
    "Akira",
    "Ghost in the Shell",
    "Fist of the North Star",
    "Dragon Ball Z: Dead Zone",
    "Saint Seiya",
    "Captain Tsubasa",
    "City Hunter",
    "Lupin III",
    "Dirty Harry",
    "Lethal Weapon",
    "Die Hard",
    "Predator",
    "Aliens",
    "The Fly",
    "Robocop",
    "Full Metal Jacket",
    "Platoon",
    "Born on the Fourth of July",
    "Good Morning, Vietnam",
  ],

  "90s-movies": [
    "Titanic",
    "Jurassic Park",
    "The Lion King",
    "Forrest Gump",
    "Terminator 2: Judgment Day",
    "The Silence of the Lambs",
    "Pulp Fiction",
    "Goodfellas",
    "The Shawshank Redemption",
    "Schindler's List",
    "Saving Private Ryan",
    "The Matrix",
    "Fight Club",
    "Se7en",
    "The Sixth Sense",
    "American Beauty",
    "Fargo",
    "The Big Lebowski",
    "Reservoir Dogs",
    "True Romance",
    "Natural Born Killers",
    "JFK",
    "Born on the Fourth of July",
    "Platoon",
    "Dances with Wolves",
    "Unforgiven",
    "Braveheart",
    "The Last of the Mohicans",
    "Heat",
    "Casino",
    "The Departed",
    "Goodfellas",
    "Scarface",
    "The Godfather Part III",
    "Ghost",
    "Pretty Woman",
    "When Harry Met Sally",
    "Sleepless in Seattle",
    "You've Got Mail",
    "The Bodyguard",
    "Dirty Dancing",
    "Ghost",
    "The Notebook",
    "Titanic",
    "Speed",
    "Die Hard 2",
    "Lethal Weapon 2",
    "Lethal Weapon 3",
    "Lethal Weapon 4",
    "Bad Boys",
    "The Rock",
    "Con Air",
    "Face/Off",
    "Broken Arrow",
    "Eraser",
    "Last Action Hero",
    "True Lies",
    "Total Recall",
    "Basic Instinct",
    "Fatal Attraction",
    "The Hand That Rocks the Cradle",
    "Single White Female",
    "Sleeping with the Enemy",
    "Cape Fear",
    "The Silence of the Lambs",
    "Hannibal",
    "Red Dragon",
    "Manhunter",
    "Seven",
    "The Game",
    "Zodiac",
    "Gone Girl",
    "The Social Network",
  ],

  "2000s-movies": [
    "Avatar",
    "The Dark Knight",
    "Shrek",
    "Finding Nemo",
    "Pirates of the Caribbean",
    "Spider-Man",
    "Lord of the Rings",
    "Harry Potter",
    "The Matrix Reloaded",
    "The Matrix Revolutions",
    "Kill Bill",
    "Sin City",
    "300",
    "Gladiator",
    "Troy",
    "Alexander",
    "Kingdom of Heaven",
    "Robin Hood",
    "The Last Samurai",
    "Master and Commander",
    "Black Hawk Down",
    "We Were Soldiers",
    "Saving Private Ryan",
    "Band of Brothers",
    "The Pacific",
    "Generation Kill",
    "Crash",
    "Million Dollar Baby",
    "The Departed",
    "No Country for Old Men",
    "There Will Be Blood",
    "Slumdog Millionaire",
    "The Hurt Locker",
    "Inglourious Basterds",
    "Django Unchained",
    "Pulp Fiction",
    "Kill Bill: Vol. 1",
    "Kill Bill: Vol. 2",
    "Death Proof",
    "Planet Terror",
    "From Dusk Till Dawn",
    "Sin City",
    "300",
    "Watchmen",
    "V for Vendetta",
    "The League of Extraordinary Gentlemen",
    "Hellboy",
    "Hellboy II: The Golden Army",
    "The Incredible Hulk",
    "Iron Man",
    "Thor",
    "Captain America: The First Avenger",
    "The Avengers",
    "X-Men",
    "X2: X-Men United",
    "X-Men: The Last Stand",
    "X-Men Origins: Wolverine",
    "X-Men: First Class",
    "The Wolverine",
    "X-Men: Days of Future Past",
    "Deadpool",
    "Deadpool 2",
    "Logan",
    "The New Mutants",
    "Dark Phoenix",
    "Fantastic Four",
    "Fantastic Four: Rise of the Silver Surfer",
    "Ghost Rider",
    "Ghost Rider: Spirit of Vengeance",
    "Daredevil",
    "Elektra",
    "The Punisher",
    "Punisher: War Zone",
    "Blade: Trinity",
  ],

  "us-sports-teams": [
    "New England Patriots",
    "Dallas Cowboys",
    "Pittsburgh Steelers",
    "Green Bay Packers",
    "San Francisco 49ers",
    "New York Giants",
    "Denver Broncos",
    "Seattle Seahawks",
    "Kansas City Chiefs",
    "Baltimore Ravens",
    "Philadelphia Eagles",
    "Indianapolis Colts",
    "Los Angeles Rams",
    "Miami Dolphins",
    "Buffalo Bills",
    "Tennessee Titans",
    "Houston Texans",
    "Cleveland Browns",
    "Cincinnati Bengals",
    "Chicago Bears",
    "Minnesota Vikings",
    "Detroit Lions",
    "Atlanta Falcons",
    "Carolina Panthers",
    "New Orleans Saints",
    "Tampa Bay Buccaneers",
    "Arizona Cardinals",
    "Los Angeles Chargers",
    "Las Vegas Raiders",
    "Jacksonville Jaguars",
    "New York Jets",
    "Washington Commanders",
    "Los Angeles Lakers",
    "Boston Celtics",
    "Golden State Warriors",
    "Chicago Bulls",
    "San Antonio Spurs",
    "Miami Heat",
    "Detroit Pistons",
    "Philadelphia 76ers",
    "New York Knicks",
    "Brooklyn Nets",
    "Milwaukee Bucks",
    "Toronto Raptors",
    "Indiana Pacers",
    "Atlanta Hawks",
    "Charlotte Hornets",
    "Washington Wizards",
    "Orlando Magic",
    "Cleveland Cavaliers",
    "Denver Nuggets",
    "Utah Jazz",
    "Portland Trail Blazers",
    "Oklahoma City Thunder",
    "Minnesota Timberwolves",
    "Sacramento Kings",
    "Los Angeles Clippers",
    "Phoenix Suns",
    "Dallas Mavericks",
    "Houston Rockets",
    "Memphis Grizzlies",
    "New Orleans Pelicans",
    "New York Yankees",
    "Boston Red Sox",
    "Los Angeles Dodgers",
    "San Francisco Giants",
    "St. Louis Cardinals",
    "Philadelphia Phillies",
    "Atlanta Braves",
    "Chicago Cubs",
    "Milwaukee Brewers",
    "Cincinnati Reds",
    "Pittsburgh Pirates",
    "New York Mets",
    "Washington Nationals",
    "Miami Marlins",
    "Houston Astros",
    "Texas Rangers",
    "Los Angeles Angels",
    "Oakland Athletics",
    "Seattle Mariners",
    "Minnesota Twins",
    "Chicago White Sox",
    "Cleveland Guardians",
    "Detroit Tigers",
    "Kansas City Royals",
    "Tampa Bay Rays",
    "Baltimore Orioles",
    "Toronto Blue Jays",
    "Colorado Rockies",
    "Arizona Diamondbacks",
    "San Diego Padres",
  ],

  "popular-books": [
    "To Kill a Mockingbird",
    "1984",
    "Harry Potter",
    "The Lord of the Rings",
    "The Great Gatsby",
    "Pride and Prejudice",
    "The Catcher in the Rye",
    "The Hobbit",
    "Fahrenheit 451",
    "Of Mice and Men",
    "The Chronicles of Narnia",
    "Gone with the Wind",
    "The Grapes of Wrath",
    "Lord of the Flies",
    "The Handmaid's Tale",
    "Brave New World",
    "The Book Thief",
    "The Kite Runner",
    "Life of Pi",
    "The Alchemist",
    "The Da Vinci Code",
    "The Hunger Games",
    "Twilight",
    "Fifty Shades of Grey",
    "The Girl with the Dragon Tattoo",
    "Gone Girl",
    "The Fault in Our Stars",
    "The Maze Runner",
    "Divergent",
    "The Outsiders",
    "Where the Red Fern Grows",
    "Bridge to Terabithia",
    "Charlotte's Web",
    "Matilda",
    "The Giver",
    "Holes",
    "Hatchet",
    "Island of the Blue Dolphins",
    "Number the Stars",
    "The Phantom Tollbooth",
    "A Wrinkle in Time",
    "The Secret Garden",
    "Little Women",
    "Anne of Green Gables",
    "The Little Prince",
    "Where the Wild Things Are",
    "Goodnight Moon",
    "The Very Hungry Caterpillar",
    "Green Eggs and Ham",
    "The Cat in the Hat",
    "Oh, the Places You'll Go!",
    "Horton Hears a Who!",
    "The Lorax",
    "One Fish Two Fish Red Fish Blue Fish",
    "Hop on Pop",
    "Fox in Socks",
    "The Sneetches",
    "Yertle the Turtle",
    "How the Grinch Stole Christmas!",
    "The 500 Hats of Bartholomew Cubbins",
    "And to Think That I Saw It on Mulberry Street",
    "If I Ran the Zoo",
    "If I Ran the Circus",
    "Scrambled Eggs Super!",
    "On Beyond Zebra!",
    "Horton Hatches the Egg",
    "Thidwick the Big-Hearted Moose",
    "The King's Stilts",
    "The Butter Battle Book",
    "You're Only Old Once!",
    "Oh, the Thinks You Can Think!",
    "I Can Read With My Eyes Shut!",
    "The Foot Book",
    "Mr. Brown Can Moo! Can You?",
    "There's a Wocket in My Pocket!",
    "I Am Not Going to Get Up Today!",
    "Ten Apples Up On Top!",
    "Go, Dog. Go!",
  ],

  "iconic-places": [
    "Eiffel Tower",
    "Statue of Liberty",
    "Great Wall of China",
    "Taj Mahal",
    "Pyramids of Giza",
    "Machu Picchu",
    "Colosseum",
    "Big Ben",
    "Sydney Opera House",
    "Mount Rushmore",
    "Stonehenge",
    "Christ the Redeemer",
    "Leaning Tower of Pisa",
    "Golden Gate Bridge",
    "Times Square",
    "Buckingham Palace",
    "White House",
    "Empire State Building",
    "Hollywood Sign",
    "Las Vegas Strip",
    "Niagara Falls",
    "Grand Canyon",
    "Yellowstone",
    "Mount Everest",
    "Sahara Desert",
    "Amazon Rainforest",
    "Great Barrier Reef",
    "Victoria Falls",
    "Uluru",
    "Mount Fuji",
    "Santorini",
    "Bali",
    "Maldives",
    "Hawaii",
    "Bermuda Triangle",
    "Easter Island",
    "Venice",
    "Paris",
    "London",
    "New York",
    "Tokyo",
    "Rome",
    "Barcelona",
    "Amsterdam",
    "Dubai",
    "Singapore",
    "Hong Kong",
    "Sydney",
    "Rio de Janeiro",
    "Cairo",
    "Istanbul",
    "Moscow",
    "Prague",
    "Vienna",
    "Stockholm",
    "Copenhagen",
    "Athens",
    "Jerusalem",
    "Burj Khalifa",
    "Space Needle",
    "CN Tower",
    "Willis Tower",
    "One World Trade Center",
    "Brooklyn Bridge",
    "Tower Bridge",
    "Sagrada Familia",
    "Notre Dame",
    "Arc de Triomphe",
    "Red Square",
    "Forbidden City",
    "Angkor Wat",
    "Petra",
    "Chichen Itza",
    "Iguazu Falls",
    "Table Mountain",
    "Kilimanjaro",
    "Acropolis",
    "Parthenon",
    "Edinburgh Castle",
    "Neuschwanstein",
  ],

  "tv-shows": [
    "Friends",
    "The Office",
    "Game of Thrones",
    "Breaking Bad",
    "Stranger Things",
    "The Big Bang Theory",
    "How I Met Your Mother",
    "Lost",
    "Grey's Anatomy",
    "The Walking Dead",
    "Seinfeld",
    "Cheers",
    "The Simpsons",
    "Family Guy",
    "South Park",
    "Saturday Night Live",
    "The Tonight Show",
    "Jeopardy",
    "Wheel of Fortune",
    "The Price is Right",
    "Survivor",
    "Big Brother",
    "The Bachelor",
    "Dancing with the Stars",
    "American Idol",
    "The Voice",
    "America's Got Talent",
    "Shark Tank",
    "The Masked Singer",
    "Hell's Kitchen",
    "MasterChef",
    "Top Chef",
    "The Great British Bake Off",
    "Chopped",
    "Iron Chef",
    "House",
    "CSI",
    "NCIS",
    "Law & Order",
    "Criminal Minds",
    "Bones",
    "Castle",
    "Dexter",
    "True Detective",
    "Sherlock",
    "Doctor Who",
    "Star Trek",
    "The X-Files",
    "Supernatural",
    "Buffy the Vampire Slayer",
    "The Twilight Zone",
    "Black Mirror",
    "Westworld",
    "The Crown",
    "Downton Abbey",
    "Mad Men",
    "The Sopranos",
    "House of Cards",
    "Ozark",
    "Better Call Saul",
    "The Mandalorian",
    "WandaVision",
    "Loki",
    "The Falcon and the Winter Soldier",
    "Hawkeye",
    "Marvel's Agents of S.H.I.E.L.D.",
    "Arrow",
    "The Flash",
    "Supergirl",
    "Legends of Tomorrow",
    "The Witcher",
    "Lucifer",
    "Money Heist",
    "Squid Game",
    "Bridgerton",
    "Emily in Paris",
    "The Queen's Gambit",
    "Tiger King",
    "Making a Murderer",
    "The Umbrella Academy",
  ],

  "survivor-tv-show": [
    "Jeff Probst",
    "Tribal Council",
    "Immunity Challenge",
    "Reward Challenge",
    "Hidden Immunity Idol",
    "Merge",
    "Jury",
    "Final Tribal Council",
    "Sole Survivor",
    "Outwit Outplay Outlast",
    "Fire Making Challenge",
    "Torch Snuffer",
    "Voting Confessional",
    "Blindside",
    "Alliance",
    "Pagonging",
    "Purple Rock",
    "Tribe Swap",
    "Redemption Island",
    "Edge of Extinction",
    "Island of the Idols",
    "Fire Tokens",
    "Advantage Menu",
    "Safety Without Security",
    "Shot in the Dark",
    "Richard Hatch",
    "Boston Rob",
    "Sandra Diaz-Twine",
    "Parvati Shallow",
    "Russell Hantz",
    "Cirie Fields",
    "Ozzy Lusth",
    "Amanda Kimmel",
    "Colby Donaldson",
    "Rupert Boneham",
    "Stephanie LaGrossa",
    "James Clement",
    "Courtney Yates",
    "Coach Wade",
    "Tyson Apostol",
    "Andrea Boehlke",
    "Malcolm Freberg",
    "Tony Vlachos",
    "Spencer Bledsoe",
    "Kelley Wentworth",
    "Joe Anglim",
    "Aubry Bracco",
    "Michaela Bradshaw",
    "David Wright",
    "Zeke Smith",
    "Sarah Lacina",
    "Ben Driebergen",
    "Chrissy Hofbeck",
    "Domenick Abbate",
    "Wendell Holland",
    "Angelina Keeley",
    "Christian Hubicki",
    "Davie Rickenbacker",
    "Kellyn Bechtold",
    "Lauren O'Connell",
    "Tommy Sheehan",
    "Janet Carbin",
    "Noura Salman",
    "Michele Fitzgerald",
    "Natalie Anderson",
    "Yul Kwon",
    "Ethan Zohn",
    "Tina Wesson",
    "Vecepia Towery",
    "Jenna Morasca",
    "Amber Brkich",
    "Chris Daugherty",
    "Danni Boatwright",
    "Aras Baskauskas",
    "Earl Cole",
    "Todd Herzog",
    "JT Thomas",
    "Natalie White",
    "Fabio Birza",
    "Sophie Clarke",
    "Kim Spradlin",
    "Denise Stapley",
    "John Cochran",
    "Tyson Apostol",
    "Mike Holloway",
    "Jeremy Collins",
    "Adam Klein",
    "Sarah Lacina",
    "Ben Driebergen",
    "Wendell Holland",
    "Chris Underwood",
    "Tommy Sheehan",
    "Tony Vlachos",
    "Erika Casupanan",
    "Maryanne Oketch",
  ],

  "iconic-brands": [
    "Apple",
    "Google",
    "Microsoft",
    "Amazon",
    "Facebook",
    "Tesla",
    "Netflix",
    "Disney",
    "McDonald's",
    "Coca-Cola",
    "Pepsi",
    "Starbucks",
    "Nike",
    "Adidas",
    "Samsung",
    "Sony",
    "Toyota",
    "BMW",
    "Mercedes-Benz",
    "Ferrari",
    "Porsche",
    "Lamborghini",
    "Rolex",
    "Gucci",
    "Louis Vuitton",
    "Chanel",
    "Prada",
    "Versace",
    "Armani",
    "H&M",
    "Zara",
    "Uniqlo",
    "Gap",
    "Levi's",
    "Calvin Klein",
    "Ralph Lauren",
    "Walmart",
    "Target",
    "Costco",
    "IKEA",
    "Home Depot",
    "Lowe's",
    "Best Buy",
    "Visa",
    "Mastercard",
    "American Express",
    "PayPal",
    "Uber",
    "Lyft",
    "Airbnb",
    "Spotify",
    "YouTube",
    "Instagram",
    "Twitter",
    "TikTok",
    "Snapchat",
    "LinkedIn",
    "Intel",
    "AMD",
    "NVIDIA",
    "IBM",
    "Oracle",
    "Salesforce",
    "Adobe",
    "Zoom",
    "KFC",
    "Burger King",
    "Subway",
    "Pizza Hut",
    "Domino's",
    "Taco Bell",
    "Chipotle",
    "Walmart",
    "CVS",
    "Walgreens",
    "7-Eleven",
    "Shell",
    "Exxon",
    "BP",
    "Chevron",
    "FedEx",
    "UPS",
    "DHL",
    "Southwest Airlines",
    "Delta",
    "American Airlines",
    "United",
    "Marriott",
    "Hilton",
    "Hyatt",
    "Holiday Inn",
    "Sheraton",
    "Four Seasons",
    "Ritz-Carlton",
    "Canon",
    "Nikon",
    "GoPro",
    "Bose",
    "Beats",
    "JBL",
    "Harman Kardon",
    "Bang & Olufsen",
    "LEGO",
    "Mattel",
    "Hasbro",
    "Barbie",
    "Hot Wheels",
    "Nerf",
    "Play-Doh",
    "Monopoly",
  ],
};

// Category display names for UI
const categoryDisplayNames = {
  movies: "Movies",
  celebrities: "Celebrities",
  music: "Music",
  "sports-stars": "US Sports Stars",
  "iconic-places": "Iconic Places",
  "tv-shows": "TV Shows",
  "survivor-tv-show": "Survivor TV Show",
  "iconic-brands": "Iconic Brands",
  "us-states": "US States",
  countries: "Countries",
  "80s-music": "80's Music",
  "90s-music": "90's Music",
  "2000s-music": "2000's Music",
  "80s-movies": "80's Movies",
  "90s-movies": "90's Movies",
  "2000s-movies": "2000's Movies",
  "us-sports-teams": "US Sports Teams",
  "popular-books": "Popular Books",
};

// Utility functions for Dorkle game data
const GameDataUtils = {
  // Random seed for session-based randomization
  seed: Date.now() % 1000000,

  // Seeded random number generator (Linear Congruential Generator)
  seededRandom: function () {
    this.seed = (this.seed * 9301 + 49297) % 233280;
    return this.seed / 233280;
  },

  // Enhanced random with fallback
  getRandom: function () {
    return Math.random();
  },

  // Get random word from category
  getRandomWord: function (category) {
    if (!gameData[category]) {
      console.error(`Category '${category}' not found`);
      return null;
    }

    const words = gameData[category];
    const randomIndex = Math.floor(this.getRandom() * words.length);
    return words[randomIndex];
  },

  // Get all categories
  getCategories: function () {
    return Object.keys(gameData);
  },

  // Get display name for category
  getCategoryDisplayName: function (category) {
    return categoryDisplayNames[category] || category;
  },

  // Get category word count
  getCategoryWordCount: function (category) {
    return gameData[category] ? gameData[category].length : 0;
  },

  // Advanced shuffle with multiple algorithms
  shuffleArray: function (array, algorithm = "fisher-yates") {
    const shuffled = [...array];

    switch (algorithm) {
      case "fisher-yates":
        return this.fisherYatesShuffle(shuffled);
      case "durstenfeld":
        return this.durstenfeldShuffle(shuffled);
      case "modern":
        return this.modernShuffle(shuffled);
      default:
        return this.fisherYatesShuffle(shuffled);
    }
  },

  // Fisher-Yates shuffle (classic)
  fisherYatesShuffle: function (array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(this.getRandom() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  },

  // Durstenfeld shuffle (modern variant)
  durstenfeldShuffle: function (array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(this.getRandom() * (i + 1));
      if (i !== j) {
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    return array;
  },

  // Modern shuffle with multiple passes
  modernShuffle: function (array) {
    // First pass: standard shuffle
    this.fisherYatesShuffle(array);

    // Second pass: swap random pairs
    const swaps = Math.floor(array.length / 4);
    for (let i = 0; i < swaps; i++) {
      const idx1 = Math.floor(this.getRandom() * array.length);
      const idx2 = Math.floor(this.getRandom() * array.length);
      [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
    }

    return array;
  },

  // Get multiple shuffled versions and pick randomly
  getSuperShuffledWords: function (category) {
    if (!gameData[category]) {
      console.error(`Category '${category}' not found`);
      return [];
    }

    const originalWords = [...gameData[category]];
    const algorithms = ["fisher-yates", "durstenfeld", "modern"];
    const randomAlgorithm =
      algorithms[Math.floor(this.getRandom() * algorithms.length)];

    // Create multiple shuffled versions
    const shuffled1 = this.shuffleArray(originalWords, randomAlgorithm);
    const shuffled2 = this.shuffleArray([...originalWords], "fisher-yates");
    const shuffled3 = this.shuffleArray([...originalWords], "modern");

    // Randomly pick from one of the shuffled versions
    const versions = [shuffled1, shuffled2, shuffled3];
    const selectedVersion =
      versions[Math.floor(this.getRandom() * versions.length)];

    // Final randomization: slice and reshuffle
    const startIndex = Math.floor(
      this.getRandom() * (selectedVersion.length / 4),
    );
    const endIndex =
      selectedVersion.length -
      Math.floor(this.getRandom() * (selectedVersion.length / 4));
    const sliced = selectedVersion
      .slice(startIndex, endIndex)
      .concat(
        selectedVersion.slice(0, startIndex),
        selectedVersion.slice(endIndex),
      );

    return this.shuffleArray(sliced, "fisher-yates");
  },

  // Get shuffled words for a category (enhanced version)
  getShuffledWords: function (category) {
    if (!gameData[category]) {
      console.error(`Category '${category}' not found`);
      return [];
    }

    // Use super shuffle for better randomization
    return this.getSuperShuffledWords(category);
  },

  // Randomize all categories at once
  randomizeAllCategories: function () {
    const randomizedData = {};

    Object.keys(gameData).forEach((category) => {
      randomizedData[category] = this.getShuffledWords(category);
    });

    return randomizedData;
  },

  // Reset randomization seed
  resetSeed: function () {
    this.seed = Date.now() % 1000000;
  },

  // Get random subset of words from category
  getRandomSubset: function (category, count) {
    const shuffled = this.getShuffledWords(category);
    return shuffled.slice(0, Math.min(count, shuffled.length));
  },
};

// Export for use in other files
if (typeof module !== "undefined" && module.exports) {
  module.exports = { gameData, GameDataUtils, categoryDisplayNames };
}
