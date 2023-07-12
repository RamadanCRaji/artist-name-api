const express = require("express");
const app = express();
const PORT = 8000;
const cors = require("cors");
app.use(cors());
let rappers = {
  "21 savage": {
    age: 28,
    birthName: "Shéyaa Bin Abraham-Joseph",
    birthdate: "22 October 1992",
    birthLocation: "London, England",
    origin: "Atlanta, Georgia",
    genre: "hip hop, trap, rap, horrorcore",
    occupation: "rapper, songwriter, record producer",
    yearsActive: "2013-present",
    labels: "Epic, Slaughter Gang",
    children: 3,
  },
  "chance the rapper": {
    age: 28,
    birthName: "Chancelor Jonathan Bennett",
    birthdate: "April 16, 1993",
    birthLocation: "Chicago, Illinois",
    origin: "Chicago, Illinois",
    genre: "hip hop, alternative hip hop, r & b",
    occupation:
      "rapper, singer, song writer, record producer, activist, actor, philanthropist",
    yearsActive: "2011-present",
    labels: "none",
    children: 2,
  },
  "kendrick lamar": {
    age: 35,
    birthName: "Kendrick Lamar Duckworth",
    birthdate: "June 17, 1987",
    birthLocation: "Compton, California",
    origin: "Compton, California",
    genre: "Hip hop",
    occupation: "Rapper, songwriter, record producer",
    yearsActive: "2004-present",
    labels: "Top Dawg, Aftermath, Interscope",
    children: 1,
  },
  drake: {
    age: 36,
    birthName: "Aubrey Drake Graham",
    birthdate: "October 24, 1986",
    birthLocation: "Toronto, Ontario, Canada",
    origin: "Toronto, Ontario, Canada",
    genre: "Hip hop, R&B, pop, dancehall",
    occupation: "Rapper, singer, songwriter, actor, businessman",
    yearsActive: "2001-present",
    labels: "Young Money, Cash Money, Republic, OVO Sound",
    children: 1,
  },
  "j. cole": {
    age: 38,
    birthName: "Jermaine Lamarr Cole",
    birthdate: "January 28, 1985",
    birthLocation: "Frankfurt, Hesse, West Germany",
    origin: "Fayetteville, North Carolina",
    genre: "Hip hop",
    occupation: "Rapper, singer, songwriter, record producer",
    yearsActive: "2007-present",
    labels: "Roc Nation, Dreamville, Interscope, Columbia",
    children: 2,
  },
  eminem: {
    age: 50,
    birthName: "Marshall Bruce Mathers III",
    birthdate: "October 17, 1972",
    birthLocation: "St. Joseph, Missouri, U.S.",
    origin: "Detroit, Michigan",
    genre: "Hip hop",
    occupation:
      "Rapper, songwriter, record producer, record executive, film producer, actor",
    yearsActive: "1988-present",
    labels: "Aftermath, Shady, Interscope, Bassmint, FBT Productions, Mashin",
    children: 3,
  },
  "lil wayne": {
    age: 40,
    birthName: "Dwayne Michael Carter Jr.",
    birthdate: "September 27, 1982",
    birthLocation: "New Orleans, Louisiana, U.S.",
    origin: "New Orleans, Louisiana, U.S.",
    genre: "Hip hop",
    occupation:
      "Rapper, singer, songwriter, record executive, entrepreneur, actor",
    yearsActive: "1995-present",
    labels: "Young Money, Republic, Cash Money, Universal",
    children: 4,
  },
  "kanye west": {
    age: 46,
    birthName: "Kanye Omari West",
    birthdate: "June 8, 1977",
    birthLocation: "Atlanta, Georgia, U.S.",
    origin: "Chicago, Illinois, U.S.",
    genre:
      "Hip hop, art pop, indie pop, synth-pop, progressive pop, pop rock, experimental",
    occupation:
      "Rapper, songwriter, record producer, fashion designer, director",
    yearsActive: "1996-present",
    labels: "GOOD, Def Jam, Roc-A-Fella",
    children: 4,
  },
  "jay-z": {
    age: 53,
    birthName: "Shawn Corey Carter",
    birthdate: "December 4, 1969",
    birthLocation: "Brooklyn, New York, U.S.",
    origin: "Brooklyn, New York, U.S.",
    genre: "Hip hop",
    occupation:
      "Rapper, songwriter, record executive, businessman, media proprietor",
    yearsActive: "1986-present",
    labels: "Roc Nation, Atlantic, Def Jam, Roc-A-Fella, Priority",
    children: 3,
  },
  "snoop dogg": {
    age: 51,
    birthName: "Calvin Cordozar Broadus Jr.",
    birthdate: "October 20, 1971",
    birthLocation: "Long Beach, California, U.S.",
    origin: "Long Beach, California, U.S.",
    genre: "Hip hop, funk, gangsta rap, reggae",
    occupation:
      "Rapper, singer, songwriter, actor, producer, media personality",
    yearsActive: "1992-present",
    labels:
      "Death Row, Interscope, No Limit, Priority, EMI, Doggystyle, Star Trak, Geffen, RCA, I Am Other, Columbia",
    children: 4,
  },
  unknown: {
    age: "unknown",
    birthName: "unknown",
    birthdate: "unknown",
    birthLocation: "unknown",
    origin: "unknown",
    genre: "unknown",
    occupation: "unknown",
    yearsActive: "unknown",
    labels: "unknown",
    children: "unknown",
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/api/:rapperName", (req, res) => {
  const name = req.params.rapperName.toLowerCase();
  if (rappers[name]) {
    res.json(rappers[name]);
  } else {
    res.json(rappers["unknown"]);
  }
});

app.listen(process.env.PORT || PORT, (_) => {
  console.log(`the server is running on port ${PORT}`);
});
