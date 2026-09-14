import { Question } from '../models/question';

// X/Y values are copied from cinemaCompass.xlsx.
// They are already weighted/normalized final contributions.
// Final base result = sum of selected answer.x / answer.y.

export const QUESTIONS: Question[] = [
  {
    id: 1,
    page: 1,
    section: "yearbook",
    text: "Which of these movies is the best?",
    weight: 0.7,
    answers: [
      { id: 1, text: "Forrest Gump", x: -0.02389, y: 0.00970 },
      { id: 2, text: "One Flew Over the Cuckoo's Nest", x: -0.03556, y: 0.02485 },
      { id: 3, text: "The Matrix", x: 0.03056, y: -0.01212 },
      { id: 4, text: "The Good, the Bad and the Ugly", x: -0.01222, y: 0.04182 },
    ]
  },
  {
    id: 2,
    page: 1,
    section: "yearbook",
    text: "Which of these TV series is the best?",
    weight: 0.75,
    answers: [
      { id: 1, text: "The Sopranos", x: -0.02944, y: 0.02970 },
      { id: 2, text: "The Wire", x: -0.02944, y: 0.02242 },
      { id: 3, text: "Game of Thrones", x: 0.03722, y: -0.02242 },
      { id: 4, text: "Chernobyl", x: -0.03389, y: 0.00606 },
    ]
  },
  {
    id: 3,
    page: 1,
    section: "yearbook",
    text: "Which of these trilogies is your favorite?",
    weight: 0.8,
    answers: [
      { id: 1, text: "The Lord of the Rings", x: 0.04111, y: 0.02242 },
      { id: 2, text: "The Dark Knight", x: 0.01722, y: -0.01879 },
      { id: 3, text: "The Godfather", x: -0.04056, y: 0.04788 },
      { id: 4, text: "Before Trilogy (Sunrise / Sunset / Midnight)", x: -0.04500, y: 0.02848 },
    ]
  },
  {
    id: 4,
    page: 1,
    section: "yearbook",
    text: "Which of these directors is your favorite?",
    weight: 0.85,
    answers: [
      { id: 1, text: "Steven Spielberg", x: -0.02389, y: 0.02000 },
      { id: 2, text: "Quentin Tarantino", x: -0.04278, y: 0.03697 },
      { id: 3, text: "Martin Scorsese", x: 0.03722, y: -0.03030 },
      { id: 4, text: "Christopher Nolan", x: -0.02889, y: -0.02000 },
      { id: 5, text: "David Fincher", x: 0.02167, y: 0.03273 },
    ]
  },
  {
    id: 5,
    page: 1,
    section: "yearbook",
    text: "Leonardo Di Caprio is:",
    weight: 0.5,
    answers: [
      { id: 1, text: "Jack Dawson (Titanic)", x: -0.00889, y: 0.01152 },
      { id: 2, text: "Jordan Belfort (The Wolf of Wall Street)", x: -0.00889, y: -0.01273 },
      { id: 3, text: "Hugh Glass (The Revenant)", x: 0.00500, y: 0.00545 },
      { id: 4, text: "Frank Abagnale Jr. (Catch Me if You Can)", x: 0.00500, y: -0.00061 },
    ]
  },
  {
    id: 6,
    page: 1,
    section: "yearbook",
    text: "Brad Pitt is:",
    weight: 0.5,
    answers: [
      { id: 1, text: "Tyler Durden (Fight Club)", x: 0.00778, y: -0.01273 },
      { id: 2, text: "Achilles (Troy)", x: 0.00667, y: 0.00697 },
      { id: 3, text: "Aldo Raine (Inglourious Basterds)", x: -0.00889, y: 0.00242 },
      { id: 4, text: "Billy Beane (Moneyball)", x: -0.00889, y: 0.00848 },
    ]
  },
  {
    id: 7,
    page: 1,
    section: "yearbook",
    text: "Natalie Portman is:",
    weight: 0.5,
    answers: [
      { id: 1, text: "Mathilda (Leon: The Professional)", x: -0.01167, y: 0.00545 },
      { id: 2, text: "Nina Sayers (Black Swan)", x: 0.00778, y: -0.00667 },
      { id: 3, text: "Evey (V for Vendetta)", x: 0.01056, y: -0.00061 },
      { id: 4, text: "Jackie Kennedy (Jackie)", x: -0.01444, y: 0.01455 },
    ]
  },
  {
    id: 8,
    page: 1,
    section: "yearbook",
    text: "Scarlett Johansson is:",
    weight: 0.5,
    answers: [
      { id: 1, text: "Black Widow (MCU)", x: 0.01611, y: -0.00970 },
      { id: 2, text: "Lucy (Lucy)", x: -0.00889, y: 0.00848 },
      { id: 3, text: "Nicole Barber (Marriage Story)", x: -0.01167, y: 0.01455 },
      { id: 4, text: "Charlotte (Lost in Translation)", x: 0.01611, y: -0.01273 },
    ]
  },
  {
    id: 9,
    page: 2,
    section: "viewing-habits",
    text: "Where do you watch movies most often?",
    weight: 0.9,
    answers: [
      { id: 1, text: "Cinema", x: 0.00944, y: 0.01030 },
      { id: 2, text: "Streaming services", x: 0.00944, y: -0.02727 },
      { id: 3, text: "TV channels", x: -0.01556, y: 0.02606 },
      { id: 4, text: "Pirated from the internet", x: -0.00556, y: -0.02242 },
    ]
  },
  {
    id: 10,
    page: 2,
    section: "viewing-habits",
    text: "How often do you go to cinema?",
    weight: 0.9,
    answers: [
      { id: 1, text: "At least once a month.", x: 0.00000, y: 0.03212 },
      { id: 2, text: "A few times a year when something big comes out.", x: 0.00000, y: 0.01030 },
      { id: 3, text: "Maybe once every couple of years.", x: 0.00000, y: -0.01697 },
      { id: 4, text: "Never.", x: 0.00000, y: -0.02788 },
    ]
  },
  {
    id: 11,
    page: 2,
    section: "viewing-habits",
    text: "Which do you prefer: movies or series?",
    weight: 1.0,
    answers: [
      { id: 1, text: "Series, for time convenience.", x: 0.00500, y: -0.03697 },
      { id: 2, text: "Series, for deeper stories and character development.", x: -0.00611, y: -0.01879 },
      { id: 3, text: "Movies, because they don’t require a big commitment.", x: 0.01056, y: -0.01273 },
      { id: 4, text: "Movies, because they represent the peak form of cinematic experience.", x: 0.00500, y: 0.02364 },
    ]
  },
  {
    id: 12,
    page: 2,
    section: "viewing-habits",
    text: "What is your watchlist mostly made of?",
    weight: 0.9,
    answers: [
      { id: 1, text: "Movie classics that you feel you have to watch", x: 0.00000, y: 0.04848 },
      { id: 2, text: "New movies that you didn't get to watch", x: 0.00000, y: -0.04848 },
      { id: 3, text: "Everything everywhere all at once", x: 0.00000, y: -0.00545 },
      { id: 4, text: "I don't have a watchlist", x: 0.00000, y: 0.00000 },
    ]
  },
  {
    id: 13,
    page: 2,
    section: "viewing-habits",
    text: "Do you often rewatch movies?",
    weight: 0.7,
    answers: [
      { id: 1, text: "Rarely, only a few personal favorites.", x: 0.00333, y: -0.01758 },
      { id: 2, text: "I rewatch movies I liked but didn’t fully grasp.", x: 0.00000, y: 0.00788 },
      { id: 3, text: "I always prefer finding new stuff, but don’t mind revisiting old favorites from time to time.", x: 0.00000, y: -0.01212 },
      { id: 4, text: "More often than not I’d rather rewatch something I love than risk trying something new.", x: -0.00889, y: 0.02364 },
    ]
  },
  {
    id: 14,
    page: 2,
    section: "viewing-habits",
    text: "Do you ever stop watching a movie halfway through?",
    weight: 0.7,
    answers: [
      { id: 1, text: "Never. If I start it, I'll finish it.", x: -0.01222, y: 0.02485 },
      { id: 2, text: "Only if it's truly bad.", x: -0.00056, y: 0.00788 },
      { id: 3, text: "Sometimes I just lose interest.", x: 0.00722, y: -0.01333 },
      { id: 4, text: "Often. If it doesn't hook me in the first 30 minutes, it's off.", x: 0.01500, y: -0.02606 },
    ]
  },
  {
    id: 15,
    page: 2,
    section: "viewing-habits",
    text: "What is your favorite age of cinema?",
    weight: 1.0,
    answers: [
      { id: 1, text: "1980s and earlier", x: -0.01111, y: 0.05455 },
      { id: 2, text: "1990s", x: 0.00000, y: 0.02424 },
      { id: 3, text: "2000s", x: 0.01111, y: -0.01212 },
      { id: 4, text: "2010s to present", x: 0.00000, y: -0.05455 },
    ]
  },
  {
    id: 16,
    page: 2,
    section: "viewing-habits",
    text: "What movie runtime puts you off the most?",
    weight: 0.8,
    answers: [
      { id: 1, text: "If it's under 90 minutes, it doesn't feel like a real movie.", x: 0.00833, y: 0.02364 },
      { id: 2, text: "If it's over 3 hours, forget it — I don’t have that kind of time.", x: -0.00944, y: -0.01939 },
      { id: 3, text: "I don’t even check the runtime — I just hit play.", x: 0.00389, y: 0.00909 },
    ]
  },
  {
    id: 17,
    page: 3,
    section: "hot-takes",
    text: "Marvel movies are shallow and lack artistic value.",
    weight: 1.0,
    answers: [
      { id: 1, text: "Agree, I rarely watch them.", x: -0.03389, y: -0.03091 },
      { id: 2, text: "Agree, but I’m not bored watching them.", x: 0.04389, y: 0.01758 },
      { id: 3, text: "Disagree.", x: -0.01167, y: -0.01879 },
    ]
  },
  {
    id: 18,
    page: 3,
    section: "hot-takes",
    text: "Star Wars is outdated and survives only because of nostalgia.",
    weight: 1.0,
    answers: [
      { id: 1, text: "Agree.", x: -0.03389, y: 0.02970 },
      { id: 2, text: "I’m not into the recent movies, but it's legacy deserves respect.", x: 0.04389, y: -0.03697 },
      { id: 3, text: "Disagree.", x: 0.02167, y: -0.01879 },
    ]
  },
  {
    id: 19,
    page: 3,
    section: "hot-takes",
    text: "Harry Potter is children's fiction that adults take too seriously.",
    weight: 1.0,
    answers: [
      { id: 1, text: "Agree, it's overhyped.", x: 0.02722, y: -0.01273 },
      { id: 2, text: "It’s fair to say it’s children’s fiction, but that doesn’t mean it lacks depth.", x: -0.03389, y: 0.02364 },
      { id: 3, text: "Disagree.", x: 0.01611, y: 0.01758 },
    ]
  },
  {
    id: 20,
    page: 3,
    section: "hot-takes",
    text: "Anime is often cringe and mostly appeals to nerds.",
    weight: 1.0,
    answers: [
      { id: 1, text: "Agree.", x: 0.03833, y: -0.02485 },
      { id: 2, text: "That's certainly not true, but I still haven't seen one that got me hooked.", x: -0.04500, y: 0.01758 },
      { id: 3, text: "NANI?!", x: 0.01611, y: 0.00545 },
    ]
  },
  {
    id: 21,
    page: 3,
    section: "hot-takes",
    text: "No matter how well made, cartoons can’t achieve the emotional weight of live-action cinema.",
    weight: 1.0,
    answers: [
      { id: 1, text: "Agree.", x: 0.04389, y: -0.02485 },
      { id: 2, text: "Animation has its limits, but emotion isn't one of them.", x: -0.05056, y: 0.01152 },
      { id: 3, text: "Disagree.", x: -0.01722, y: 0.00545 },
    ]
  },
  {
    id: 22,
    page: 3,
    section: "hot-takes",
    text: "Horror movies are almost never actually scary and therefore have no value.",
    weight: 1.0,
    answers: [
      { id: 1, text: "Agree.", x: 0.04389, y: -0.03091 },
      { id: 2, text: "They are scary, but that doesn't make me enjoy them.", x: -0.05056, y: 0.02970 },
      { id: 3, text: "Disagree.", x: 0.01056, y: -0.01879 },
    ]
  },
  {
    id: 23,
    page: 3,
    section: "hot-takes",
    text: "Romantic comedies in general are predictable, boring and cliche.",
    weight: 1.0,
    answers: [
      { id: 1, text: "Agree, I avoid watching them.", x: 0.03833, y: 0.01758 },
      { id: 2, text: "They are my guilty pleasure", x: -0.04500, y: -0.02485 },
      { id: 3, text: "Disagree.", x: 0.01611, y: 0.01758 },
    ]
  },
  {
    id: 24,
    page: 3,
    section: "hot-takes",
    text: "Sitcoms are not funny anymore, it's an outdated format.",
    weight: 1.0,
    answers: [
      { id: 1, text: "Agree.", x: 0.03833, y: 0.02970 },
      { id: 2, text: "Agree, but I enjoy mockumentary or absurd comedy shows.", x: -0.05056, y: -0.04303 },
      { id: 3, text: "Disagree.", x: 0.00500, y: 0.02364 },
    ]
  },
  {
    id: 25,
    page: 4,
    section: "pov",
    text: "Someone spoiled a movie you were dying to see, including the plot twists and the ending.",
    weight: 0.8,
    answers: [
      { id: 1, text: "I'll still watch it and enjoy it as if nothing happened.", x: -0.01389, y: 0.01879 },
      { id: 2, text: "I'll watch it, but the excitement is gone.", x: -0.00056, y: -0.01515 },
      { id: 3, text: "It is dead now.", x: 0.02167, y: -0.03455 },
    ]
  },
  {
    id: 26,
    page: 4,
    section: "pov",
    text: "You are a 14 y.o. boy and you are setting your profile picture. Who is it?",
    weight: 0.55,
    answers: [
      { id: 1, text: "Tony Montana", x: -0.01111, y: 0.00970 },
      { id: 2, text: "Levi Ackerman", x: 0.02722, y: -0.02364 },
      { id: 3, text: "Thomas Shelby", x: -0.02611, y: -0.01030 },
      { id: 4, text: "Joker", x: 0.01778, y: -0.02061 },
    ]
  },
  {
    id: 27,
    page: 4,
    section: "pov",
    text: "You're a girl getting ready for a costume party. What's your cosplay?",
    weight: 0.55,
    answers: [
      { id: 1, text: "Katniss Everdeen", x: 0.00889, y: -0.00727 },
      { id: 2, text: "Tokyo", x: -0.02056, y: -0.02727 },
      { id: 3, text: "Jinx", x: 0.03000, y: -0.03030 },
      { id: 4, text: "Daenerys Targaryen", x: 0.02389, y: 0.00000 },
    ]
  },
  {
    id: 28,
    page: 4,
    section: "pov",
    text: "You're stranded on a desert island — which sidekick do you trust to help you survive and escape?",
    weight: 0.55,
    answers: [
      { id: 1, text: "Jesse Pinkman", x: -0.02167, y: -0.01030 },
      { id: 2, text: "Morty Smith", x: 0.03000, y: -0.02727 },
      { id: 3, text: "Samwise Gamgee", x: 0.02500, y: 0.02121 },
      { id: 4, text: "Dr. John Watson", x: -0.00944, y: 0.02000 },
    ]
  },
  {
    id: 29,
    page: 4,
    section: "pov",
    text: "You're a kid again, watching Disney. Who's your princess?",
    weight: 0.5,
    answers: [
      { id: 1, text: "Elsa", x: 0.01333, y: -0.00909 },
      { id: 2, text: "Ariel", x: -0.02278, y: 0.02424 },
      { id: 3, text: "Cinderella", x: 0.01889, y: 0.01212 },
      { id: 4, text: "Rapunzel", x: 0.02167, y: -0.01818 },
    ]
  },
  {
    id: 30,
    page: 4,
    section: "pov",
    text: "You’re regaining consciousness after blacking out. You’re disoriented. What’s your first thought? Where are you?",
    weight: 0.7,
    answers: [
      { id: 1, text: "In the middle of a town square. It’s 1955. The DeLorean won’t start.", x: 0.02667, y: 0.02485 },
      { id: 2, text: "On the floor, nose broken. You’re in Fight Club.", x: -0.01611, y: 0.00788 },
      { id: 3, text: "One dream level up. You just felt the kick.", x: 0.02667, y: -0.02606 },
      { id: 4, text: "On a beach. In Normandy. Gunfire echoes. It's D Day.", x: -0.03167, y: 0.01879 },
    ]
  },
  {
    id: 31,
    page: 4,
    section: "pov",
    text: "You get the chance to live through the lives of characters played by one of these actors. Who do you choose?",
    weight: 0.5,
    answers: [
      { id: 1, text: "Tom Cruise", x: 0.02444, y: -0.00970 },
      { id: 2, text: "Robert De Niro", x: -0.02556, y: 0.02061 },
      { id: 3, text: "Morgan Freeman", x: -0.00611, y: 0.02667 },
      { id: 4, text: "Johnny Depp", x: 0.02000, y: 0.00545 },
    ]
  },
  {
    id: 32,
    page: 4,
    section: "pov",
    text: "The upcoming movie or series you're most excited about is based on:",
    weight: 0.7,
    answers: [
      { id: 1, text: "A work of literature", x: -0.01222, y: 0.02364 },
      { id: 2, text: "A video game", x: -0.03167, y: 0.02061 },
      { id: 3, text: "A real event", x: 0.03167, y: -0.02970 },
      { id: 4, text: "An original script", x: -0.00833, y: -0.00909 },
    ]
  },
  {
    id: 33,
    page: 5,
    section: "film-attitudes",
    text: "Do public ratings (e.g. IMDb) play an important role in deciding whether to watch a movie?",
    weight: 1.0,
    answers: [
      { id: 1, text: "They strongly guide my choices.", x: -0.02278, y: 0.03636 },
      { id: 2, text: "I tend to go with the acclaimed and avoid anything poorly rated.", x: -0.01167, y: 0.01818 },
      { id: 3, text: "I check them, but they don’t make the decision for me.", x: 0.01056, y: -0.01818 },
      { id: 4, text: "I don't care about them all that much.", x: 0.01611, y: -0.02424 },
    ]
  },
  {
    id: 34,
    page: 5,
    section: "film-attitudes",
    text: "How is a movie most likely to grab your interest and get you hyped to watch it?",
    weight: 1.0,
    answers: [
      { id: 1, text: "If the synopsis intrigues me.", x: -0.01722, y: 0.02424 },
      { id: 2, text: "The trailer should do the job.", x: 0.02722, y: -0.02424 },
      { id: 3, text: "The director and cast are key.", x: -0.01167, y: 0.01212 },
      { id: 4, text: "I really only trust personal recommendations.", x: 0.00500, y: -0.00606 },
    ]
  },
  {
    id: 35,
    page: 5,
    section: "film-attitudes",
    text: "What’s your view on the Oscars?",
    weight: 1.0,
    answers: [
      { id: 1, text: "I follow them and care who wins.", x: -0.01722, y: 0.03030 },
      { id: 2, text: "I check the winners, but don’t take it too seriously.", x: -0.00611, y: 0.01212 },
      { id: 3, text: "I mostly ignore them — they don’t mean much to me.", x: 0.01056, y: -0.01818 },
      { id: 4, text: "They're a joke and have lost all credibility.", x: 0.01611, y: -0.03636 },
    ]
  },
  {
    id: 36,
    page: 5,
    section: "film-attitudes",
    text: "What's your stance on CGI?",
    weight: 1.0,
    answers: [
      { id: 1, text: "I don't watch movies that use it.", x: -0.03944, y: 0.01818 },
      { id: 2, text: "I much prefer practical effects.", x: 0.01056, y: 0.03030 },
      { id: 3, text: "I welcome any technological advancement in filmmaking.", x: 0.03278, y: -0.01818 },
      { id: 4, text: "I don't even think about what's CGI and what's not.", x: 0.01056, y: -0.03030 },
    ]
  },
  {
    id: 37,
    page: 5,
    section: "film-attitudes",
    text: "Who plays the key role in the process of making a movie great?",
    weight: 1.0,
    answers: [
      { id: 1, text: "The director", x: 0.02722, y: 0.00606 },
      { id: 2, text: "The writer", x: -0.03389, y: 0.03030 },
      { id: 3, text: "The cast", x: -0.01722, y: 0.01212 },
      { id: 4, text: "The production team", x: 0.04389, y: -0.04242 },
    ]
  },
  {
    id: 38,
    page: 5,
    section: "film-attitudes",
    text: "What type of ending satisfies you the most?",
    weight: 1.0,
    answers: [
      { id: 1, text: "I need a resolute and concrete ending.", x: 0.02167, y: 0.03636 },
      { id: 2, text: "I like things wrapped up, but a little room for theorizing is welcome.", x: 0.01056, y: 0.01818 },
      { id: 3, text: "I enjoy endings that leave room for interpretation.", x: -0.01167, y: -0.02424 },
      { id: 4, text: "The more ambiguous the better, I like to think about it later.", x: -0.02278, y: -0.03636 },
    ]
  },
  {
    id: 39,
    page: 5,
    section: "film-attitudes",
    text: "Do you see film more as art or entertainment?",
    weight: 1.0,
    answers: [
      { id: 1, text: "I just care about having a fun time.", x: 0.04389, y: -0.03030 },
      { id: 2, text: "A great movie must challenge, move, or provoke the viewer.", x: -0.03944, y: 0.01818 },
      { id: 3, text: "It isn't art if it isn't entertaining.", x: 0.02167, y: -0.01212 },
    ]
  },
  {
    id: 40,
    page: 5,
    section: "film-attitudes",
    text: "What's the one feeling you seek the most when watching a movie?",
    weight: 1.0,
    answers: [
      { id: 1, text: "Goosebumps", x: 0.04389, y: -0.01212 },
      { id: 2, text: "Laughter", x: -0.03944, y: 0.03030 },
      { id: 3, text: "Comfort", x: 0.03278, y: 0.02424 },
      { id: 4, text: "Thrill", x: -0.03944, y: -0.02424 },
      { id: 5, text: "Tears", x: -0.02278, y: -0.00606 },
      { id: 6, text: "Mindfuck", x: 0.03278, y: -0.03030 },
      { id: 7, text: "Enlightenment", x: -0.03389, y: 0.02424 },
    ]
  },
];