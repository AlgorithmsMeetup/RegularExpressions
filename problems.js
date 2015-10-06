var problems = [
  {
    description: "Matches a series of characters",
    matches: ["nana", "banana", "nanananana"],
    doesntMatch: ["ana", "bana", "anna", "nan"],
    regex: /FILL ME IN/
  },
  {
    description: "Matches a phrase that needs escaping",
    matches: ["(subtlety)"],
    doesntMatch: ["subtlety"],
    regex: /FILL ME IN/
  },
  {
    description: "Matches a string (case insensitive)",
    matches: ["Dinosaurs are coming.", "Look, dinosaurs!", "Ahhh!  DINOSAURS!"],
    doesntMatch: ["dino", "saurs"],
    regex: /FILL ME IN/
  },
  {
    description: "Matches one of two characters",
    matches: ["b", "c"],
    doesntMatch: ["a", "d", "e", "f"],
    regex: /FILL ME IN/
  },
  {
    description: "Matches a word with one of several prefixes",
    matches: ["prefix", "suffix", "infix"],
    doesntMatch: ["fix", "blix", "unix"],
    regex: /FILL ME IN/
  },
  {
    description: "Matches a word with an arbitrary number of a character",
    matches: ["snp", "snep", "sneep", "sneeep", "sneeeeep", "sneeeeeeeeeeeeeep"],
    doesntMatch: ["s", "sleeep", "snanana"],
    regex: /FILL ME IN/
  },
  {
    description: "Matches a word with an arbitrary, non-zero number of a character",
    matches: ["sne", "snee", "sneee", "sneeeee", "sneeeeeeeeeeeeee"],
    doesntMatch: ["sna", "snanana", "s", "sn", "e"],
    regex: /FILL ME IN/
  },
  {
    description: "Matches a series of characters only at the beginning of the string",
    matches: ["ant", "anteater", "antelope"],
    doesntMatch: ["cantelope", "cantor"],
    regex: /FILL ME IN/
  },
  {
    description: "Matches a series of characters only at the end of the string",
    matches: ["running", "fighting", "hitting"],
    doesntMatch: ["ingot", "trappings"],
    regex: /FILL ME IN/
  },
  {
    description: "Matches only letters and numbers",
    matches: ["hjkl", "1234", "a1b2c3d4", "XYZ"],
    doesntMatch: ["asdf?", "12-34", "awefij*", ""],
    regex: /FILL ME IN/
  },
  {
    description: "Matches only strings that do not contain the letter e",
    matches: ["This should match", "This, too!", "And don't you think this should match?"],
    doesntMatch: ["Hello, world", "orange", "eeeeee", "sheep", "people"],
    regex: /FILL ME IN/
  },
  {
    description: "Matches only uppercase strings",
    matches: ["HELLO", "SIR", "GOOD DAY TO YOU"],
    doesntMatch: ["hi", "Fine weather today", "I do so say, I do"],
    regex: /FILL ME IN/
  },
  {
    description: "Matches a word",
    matches: ["Hello", "Hello, Bob.", "Hello, Fred."],
    doesntMatch: ["hello", "Hell", "ello", "Hellogoodbye"],
    regex: /FILL ME IN/
  },
  {
    description: "Matches singular and plural",
    matches: ["dog is cool", "dogs are cool"],
    doesntMatch: ["do cool", "doge is cool"],
    regex: /FILL ME IN/
  },
  {
    description: "Matches only perfect mYsPaCeCaSe",
    matches: ["gAnGsTaZ", "xXxSpArKlEzZxXx"],
    doesntMatch: ["Proper casing", "nOTRigHT"],
    regex: /FILL ME IN/
  },
  {
    description: "Matches a MongoDB id (24 characters, 0-9 and a-f)",
    matches: ["4e5990b09cadab565d00020f", "52336bcbb74a7a0000000014", "52337102b74a7a000000001c"],
    doesntMatch: ["523b74a7a0011", "acd832042bac424eff45b90", "herearesomelettersafterf", "73847acbe93e0cb2d4a2e461f"],
    regex: /FILL ME IN/
  },
  {
    description: "Matches credit card numbers (16 digits, possibly dash- or space-separated every four digits)",
    matches: ["4147293803941928", "5061-1928-2837-8372", "1029 2038 0000 2837"],
    doesntMatch: ["112233445566778", "123-485-384-328-2938", "1827 3917 2837 29302"],
    regex: /FILL ME IN/
  },
  {
    description: "Matches strings that have the same word twice",
    matches: ["pizza pizza", "repeat words repeat"],
    doesntMatch: ["no repeats here", "platypus", "pizzapizza", "today is monday", "day is monday"],
    regex: /FILL ME IN/
  },
  {
    description: "Matches multiples of 5",
    matches: ["5", "60", "5395"],
    doesntMatch: ["a", "24", "86", "5555554"],
    regex: /FILL ME IN/
  },
  {
    description: "Matches dollar amounts",
    matches: ["$5.00", "$0.57", "$1234.56"],
    doesntMatch: ["$5.6", "4.23", "$07.23", "$67.383", "$234.32.65"],
    regex: /FILL ME IN/
  },
  {
    description: "Matches ten-digit phone numbers in standard formats",
    matches: ["495-394-2938", "9293802283", "(415) 504-1928"],
    doesntMatch: ["234567890", "23-245-23-123", "394*730*1938"],
    regex: /FILL ME IN/
  },
  {
    description: "Matches emails",
    matches: ["syeoryn@gmail.com", "syeoryn+github@gmail.com", "drew.cuthbertson@someemail.com", "anotheremail@place.gov", "foreign_email@something.co.uk"],
    doesntMatch: ["syeoryn", "drew@", "@com.dev", "drew,cuthbertson@algorithms.com", "hello dude@dude.com"],
    regex: /FILL ME IN/
  },
  {
    description: "Matches dates (YYYY-MM-DD)",
    matches: ["1999-03-06", "0989-06-23", "2014-02-28"],
    doesntMatch: ["1234-", "2883-23-06", "1098-11-41", "1923-13-04"],
    // doesntMatch: ["1098-02-30", "1923-11-31", "2007-06-31"], // hard mode!
    regex: /FILL ME IN/
  },
  {
    description: "Matches stringified arrays of numbers",
    matches: ["[1, 2, 3]", "[3454,642,245]", "[1234]", "[]"],
    doesntMatch: ["[", "]", "[[0, 3, 2]", "[, , ]", "[1, 2, 3,]", "[1   2]"],
    regex: /FILL ME IN/
  },
  {
    description: "Matches URLs with valid query strings",
    matches: ["asdf.com?key=val", "google.com?search=turtles&limit=100&foo=bar"],
    doesntMatch: ["asdf.com?keyval", "google.com?search=turtles?limit=1", "google.com&asdf=4"],
    regex: /FILL ME IN/
  },
  {
    description: "Matches strings that look like street addresses",
    matches: ["134 1st st", "4958 Market Street", "495 Olympic Blvd", "55 South Ave", "394 Oak Grove Lane"],
    doesntMatch: ["23984 7th", "2938 Market Watermelon", "Mission St", "123 Ave Vine"],
    regex: /FILL ME IN/
  }
];
