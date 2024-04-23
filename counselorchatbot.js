const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

// Define themes and their associated courses
const themes = {
  "Math or Natural Science": {
    "1: Math and Statistics": [
      "BILD 5", "CSE 4GS", "COGS 14A", "COGS 14B", "HDS 60", "MATH 3B", "MATH 3C", "MATH 4C", "MATH 10A", "MATH 20A", "MATH 10B", "MATH 20B", "MATH 10C", "MATH 20C", "MATH 11", "MATH 18", "MATH 31AH", "MATH 31BH", "MATH 31CH", "MGT 3", "POLI 30", "MATH 30D", "PSYC 60", "PSYC 70", "SOCI 60"
    ],
    "2: Biological Sciences": [
      "ANTH 2", "ANTH 5", "ANTH 42", "ANTH 43", "BILD 1", "BILD 2", "BILD 3", "BILD 7", "BILD 10", "BILD 12", "BILD 18", "BILD 20", "BILD 22", "BILD 26", "BILD 28", "BILD 30", "BILD 32", "BILD 36", "BILD 38", "BILD 42", "BILD 44", "BILD 45GS", "BILD 46", "BILD 46GS", "BILD 60", "BILD 61", "COGS 17"
    ],
    "3: Physical Sciences": [
      "ASTR 1", "ASTR 2", "ASTR 3", "ASTR 4", "ASTR 10", "ASTR 15", "ASTR 18", "ASTR 20A", "ASTR 20B", "CHEM 4", "CHEM 6A", "CHEM 6AH", "CHEM 6B", "CHEM 6BH", "CHEM 6C", "CHEM 6CH", "CHEM 11", "ENVR 30", "ENVR 105", "ENVR 110", "ENVR 120", "ENVR 140", "ENVR 142GS", "ESYS 10", "PHYS 1A and AL", "PHYS 1B", "PHYS 1BL", "PHYS 1C", "PHYS CL", "PHYS 2A", "PHYS 2B", "PHYS 2C", "PHYS 4A", "PHYS 4B", "PHYS 4C", "PHYS 8", "PHYS 10", "PHYS 11", "PHYS 12", "SIO 1", "SIO 3", "SIO 10", "SIO 10GS", "SIO 12", "SIO 15", "SIO 16", "SIO 20", "SIO 25", "SIO 30", "SIO 35", "SIO 40", "SIO 45", "SIO 45GS", "SIO 46GS"
    ],
    "4: Computing and Logic": [
      "BILD 62", "COGS 3", "COGS 8", "COGS 9", "COGS 18", "CSE 3", "CSE 5A", "CSE 8A", "CSE 8B", "CSE 11", "CSE 12", "CSS 1", "CSS 2", "ECE 15", "ECON 5", "POLI 5D", "LIGN 6", "LIGN 17", "MAE 5", "MAE 8", "PHIL 10", "PHIL 12", "USP 4"
    ]
  },
  "Social Sciences": {
    "1: Culture, Society and Social Justice": [
      "AAS 10", "AAS 11", "AAS 14", "AAS 15", "ANTH 1", "ANTH 103", "ANTH 3", "ANTH 101", "ANTH 10", "ANTH 21", "ANTH 23", "ANTH 24", "ANTH 45", "ANTH 101", "ANTH 102", "ANTH 103", "ANTH 104", "ANTH 105", "ANTH 106", "ANTH 108", "CGS 2A", "CGS 2B", "CGS 101", "CGS 105", "CGS 110", "CGS 111", "CGS 112", "ETHN 127", "CGS 116", "CGS 123", "EDS 25", "ETHN 1", "ETHN 2", "ETHN 3", "ETHN 20", "ETHN 30", "GLBH 20", "SOCI 1", "SOCI 2", "SOCI 10", "SOCI 20", "SOCI 30", "SOCI 40", "SOCI 50", "SOCI 70"
    ],
    "2: Language and Communication": [
      "ANTH 4", "COMM 10", "COMM 20", "COMM 30", "COMM 30GS", "COMM 80", "DSGN 1", "LIGN 3", "LIGN 4", "LIGN 5", "LIGN 7", "LIGN 8", "LIGN 9GS", "LIGN 101", "LIGN 105", "LIGN 108", "LIGN 149GS", "LIGN 175", "LIGN 176", "LIGN 177", "LIGN 178", "MGT 18"
    ],
    "3: Mind and Cognition": [
      "COGS 1", "COGS 2", "COGS 10", "COGS 11", "COGS 13", "COGS 15", "COGS 20", "MUS 20", "HDS 1", "PSYC 1", "PSYC 2", "PSYC 3", "PSYC 4", "PSYC 6", "PSYC 7"
    ],
    "4: Government and Economics": [
      "ECON 1", "ECON 2", "ECON 3", "ECON 138", "GLBH 20", "POLI 10", "POLI 10D", "POLI 11", "POLI 11D", "POLI 12", "POLI 12D", "POLI 13", "POLI 13D", "USP 1", "USP 2", "USP 3", "USP 5", "USP 15", "USP 25"
    ]
  },
  "Writing": {
    "1: Writing Sequence": [
      "MCWP 40", "MCWP 50"
    ]
  },
  "Art, Humanities, or Language": {
    "1: Art": {
      "1. Music:":[
        "MUS 1A", "MUS 1B", "MUS 1C", "MUS 2A", "MUS 2B", "MUS 2C", "MUS 4", "MUS 5", "MUS 6", "MUS 7", "MUS 8", "MUS 8GS", "MUS 9", "MUS 10", "MUS 11", "MUS 12", "MUS 13", "MUS 14", "MUS 15", "MUS 16", "MUS 17", "MUS 18 (if taken for 4 units)", "MUS 19", "MUS 126", "MUS 127", "MUS 150"
      ], 
      "2. Theatre and Dance:":[
        "TDAC 1", "TDDE 1", "TDDM 1", "TDDM 5", "TDDM 100", "TDDM 101", "TDGE 1", "TDGE 3", "TDGE 5", "TDGE 10", "TDGE 11", "TDGE 12", "TDGE 25", "TDGE 89", "TDGE 100", "TDGE 105", "TDGE 124", "TDGE 125", "TDGE 126", "TDGE 131 or ETHN 163F*", "TDGE 133", "TDGE 134", "TDPW 1", "TDTR 10", "TDTR 15", "TDTR 20", "TDHD 20", "TDHD 21", "TDHD 175", "TDHT 10", "TDHT 21", "TDHT 22", "TDHT 23", "TDHT 103", "TDHT 104", "TDHT 105", "TDHT 107", "TDHT 108", "TDHT 109", "TDHT 110 or ETHN 132", "TDHT 111 or ETHN 133*", "TDHT 114", "TDHT 115", "TDHT 119", "TDHT 120 or ETHN 163G", "TDMV 1", "TDMV 2", "TDMV 3", "TDMV 5", "TDMV 11", "TDMV 20"
      ],
      "3. Visual Arts:":[
        "USP 6", "VIS 1", "VIS 2", "VIS 3", "VIS 6", "VIS 7", "VIS 8", "VIS 9", "VIS 10", "VIS 11", "VIS 20", "VIS 21A", "VIS 21B", "VIS 21C", "VIS 22", "VIS 23", "VIS 30", "VIS 31", "VIS 32", "VIS 41", "VIS 60", "VIS 70N", "VIS 83", "VIS 84", "VIS 84B", "VIS 85A", "VIS 85B"
      ]
    },
    "2: Humanities":{
      "1. Historical Narratives:":[
        "GSS 20", "GSS 21", "GSS 22", "GSS 23", "GSS 25", "GSS 26", "GSS 27", "HILD 2A", "HILD 2B", "HILD 2C", "HILD 7A", "HILD 7B", "HILD 7C", "HILD 8GS", "HILD 10", "HILD 11", "HILD 12", "HILD 14", "HILD 20", "HILD 30", "HILD 30GS", "HILD 40", "HILD 41", "HILD 42", "HILD 43", "HILD 50", "HILD 60", "HIUS 103 or ETHN 103A", "HIUS 108A or ETHN 112A", "HIUS 108B or ETHN 112B", "HIUS 112", "HIUS 113 or ETHN 154", "HIUS 125 or ETHN 163J", "HIUS 125GS", "HIUS 128", "HIUS 136 or ETHN 153", "HIUS 157", "HIUS 158 or ETHN 130", "HIUS 159 or ETHN 131", "HIUS 180 or ETHN 134", "LATI 10", "LATI 50"
      ], 
      "2. Literary Narratives:":[
        "AWP 10", "GSS 132", "LTCS 50", "LTCS 119", "CGS 119", "LTEN 21", "LTEN 22", "LTEN 23", "LTEN 25", "LTEN 26", "LTEN 27", "LTEN 28", "LTEN 29", "LTEN 31", "LTEN 171", "LTEN 178", "ETHN 168", "LTEN 181", "LTEN 185", "LTWL 19A", "LTWL 19B", "LTWL 19C", "LTWR 8A", "LTWR 8B", "LTWR 8C", "TDHT 10"
      ], 
      "3. Philisophical Perspectives:":[
        "MGT 16", "PHIL 1", "PHIL 13", "PHIL 14", "PHIL 15", "PHIL 16", "PHIL 24", "PHIL 25", "PHIL 26", "PHIL 27 (or POLI 27)", "PHIL 28 (or POLI 28)", "PHIL 31", "PHIL 32", "PHIL 33", "PHIL 35", "PHIL 50", "PHIL 51", "PHIL 55", "PHIL 60", "PHIL 155", "PHIL 156", "PHIL 165", "PHIL 170", "RELI 1", "RELI 2", "RELI 3"
      ]
    }},
    "3: Language":{
      "1. American Sign Language": [
        "LISL 1A and 1AX (or 5A)",
        "LISL 1B and 1BX (or 5B)",
        "LISL 1C and 1CX (or 5C)",
        "LISL 1D and 1DX",
        "LISL 1E"
      ],
      "2. Arabic": [
        "LIAB 1A and 1AX",
        "LIAB 1B and 1BX",
        "LIAB 1C and 1CX"
      ],
      "3. Cantonese (for Cantonese speakers)": [
        "LIHL 118F",
        "LIHL 118W",
        "LIHL 118P",
        "LIHL 138F",
        "LIHL 138W",
        "LIHL 138P"
      ],
      "4. Chinese (Mandarin)": [
        "CHIN 10A",
        "CHIN 10B",
        "CHIN 10C",
        "CHIN 20A",
        "CHIN 20B",
        "CHIN 20C"
      ],
      "5. Filipino (for Filipino speakers)": [
        "LIHL 112F",
        "LIHL 112W",
        "LIHL 112P",
        "LIHL 132F",
        "LIHL 132W",
        "LIHL 132P"
      ],
      "6. French": [
        "LIFR 1A and 1AX",
        "LIFR 1B and 1BX",
        "LIFR 1C and 1CX",
        "LIFR 1D and 1DX"
      ],
      "7. German": [
        "LIGM 1A and 1AX",
        "LIGM 1B and 1BX",
        "LIGM 1C and 1CX",
        "LIGM 1D and 1DX"
      ],
      "8. Greek (Ancient)": [
        "LTGK 1",
        "LTGK 2",
        "LTGK 3",
        "LTGK 101",
        "LTGK 102",
        "LTGK 103",
        "LTGK 104"
      ],
      "9. Hebrew": [
        "JWSP 1",
        "JWSP 2",
        "JWSP 3"
      ],
      "10. Hindi": [
        "LIHI 1A and 1AX",
        "LIHI 1B and 1BX",
        "LIHI 1C and 1CX",
        "LIHI 1D and 1DX"
      ],
      "11. Hindi (for Hindi speakers)": [
        "LIHL 119F",
        "LIHL 119W",
        "LIHL 119P",
        "LIHL 139F",
        "LIHL 139W",
        "LIHL 139P"
      ],
      "12. Italian": [
        "LIIT 1A and 1AX",
        "LIIT 1B and 1BX",
        "LIIT 1C and 1CX",
        "LIIT 1D and 1DX",
        "LTIT 2A",
        "LTIT 2B",
        "LTIT 2C",
        "LTIT  50",
        "LTIT 100",
        "LTIT 115",
        "LTIT 122",
        "LTIT 137",
        "LTIT 161"
      ],
      "13. Japanese": [
        "JAPN 10A",
        "JAPN 10B",
        "JAPN 10C",
        "JAPN 20A",
        "JAPN 20B",
        "JAPN 20C",
        "JAPN 130A",
        "JAPN 130B",
        "JAPN 130C",
        "JAPN 140A",
        "JAPN 140B",
        "JAPN 140C",
        "JAPN 150A",
        "JAPN 150B",
        "JAPN 150C"
      ],
      "14. Korean": [
        "LTKO 1A",
        "LTKO 1B",
        "LTKO 1C",
        "LTKO 2A",
        "LTKO 2B",
        "LTKO 2C",
        "LTKO 130",
        "LTKO 140"
      ],
      "15. Korean (for Korean speakers)": [
        "LIHL 115F",
        "LIHL 115W",
        "LIHL 115P",
        "LIHL 135F",
        "LIHL 135W",
        "LIHL 135P"
      ],"16. Persian (for Persian speakers)": [
        "LIHL 17",
        "LIHL 117F",
        "LIHL 117W",
        "LIHL 117P",
        "LIHL 137F",
        "LIHL 137W",
        "LIHL 137P"
      ],
      "17. Portuguese": [
        "LIPO 1A and 1AX",
        "LIPO 1B and 1BX",
        "LIPO 1C and 1CX"
      ],
      "18. Russian": [
        "LTRU 1A",
        "LTRU 1B",
        "LTRU 1C",
        "LTRU 2A",
        "LTRU 2B",
        "LTRU 104A",
        "LTRU 104B",
        "LTRU 104C"
      ],
      "19. Spanish":["LISP 1A and 1AX (or LISP 5A*)", "LISP 1B and 1BX (or LISP 5B*)", "LISP 1C and1CX (or LISP 5C*)", "LISP 1D and 1DX (or LISP 5D*)", "LISP 15", "LISP 16", "LISP 17", "LISP 18", "LTSP 2A", "LTSP 2B", "LTSP 2C", "LTSP 2D", "LTSP 2E", "LTSP 50A", "LTSP 50B", "LTSP 50C", "LTSP 100A", "LTSP 100B", "LTSP 101", "LTSP 116", "LTSP 123", "LTSP 135A", "LTSP 135B", "LTSP 137", "LTSP 138", "LTSP 150", "LTSP 150A", "LTSP 150B"],
      "20. Vietnamese (for Vietnamese speakers)":["LIHL 114F", "LIHL 114W", "LIHL 114P", "LIHL 134F", "LIHL 134W", "LIHL 134P"]
    }
};

let currentTheme = '';
let currentSequence = '';
let takenCourses = [];

// Function to get reply based on chosen theme
function getReply(message) {
  let reply = '';
  if (message.toLowerCase().includes('hi') || message.toLowerCase().includes('hello')) {
    reply = 'Hi! What theme would you like to pursue? (Math/Science, Social Sciences, Writing, or Art/Humanities/Language)';
  } else if (message.toLowerCase().includes('math') || message.toLowerCase().includes('science')) {
    currentTheme = "Math or Natural Science";
    reply = 'What sequence would you like to pursue in Math or Natural Science?\n1. Math and Statistics\n2. Biological Sciences\n3. Physical Sciences\n4. Computing and Logic';
  } else if (message.toLowerCase().includes('social')) {
    currentTheme = "Social Sciences";
    reply = 'What sequence would you like to pursue in Social Sciences?\n1. Culture, Society and Social Justice\n2. Language and Communication\n3. Mind and Cognition\n4. Government and Economics';
  } else if (message.toLowerCase().includes('writing')) {
    currentTheme = "Writing";
    reply = 'Which sequence would you like to pursue in Writing?\n1. Writing Sequence 1\n'; // Add more sequences...
  } else if (message.toLowerCase().includes('art') || message.toLowerCase().includes('humanities') || message.toLowerCase().includes('language')) {
    currentTheme = "Art, Humanities, or Language";
    reply = 'Which area would you like to pursue?\n1. Art\n2. Humanities\n3. Language';
  } else if( message.toLowerCase().includes('bye')){
    reply = "Let me know if you need more help";
  }else {
    reply = 'Invalid choice. Please choose one of the following themes: Math/Science, Social Sciences, Writing, or Art/Humanities/Language.';
  }
  return reply;
}

// Function to get reply based on chosen sequence
function getReply2(message) {
  let reply = '';
  const courses = themes[currentTheme];
  if (courses) {
    const sequenceKeys = Object.keys(courses);
    const sequenceNumber = parseInt(message);
    if (sequenceNumber >= 1 && sequenceNumber <= sequenceKeys.length) {
      currentSequence = sequenceKeys[sequenceNumber - 1];
      const remainingCourses = courses[currentTheme][currentSequence].filter(course => !takenCourses.includes(course));
      if (remainingCourses.length > 0) {
        reply = `You haven't taken the following courses in ${currentTheme} - ${currentSequence}: ${remainingCourses.join(', ')}`;
      } else {
        reply = 'You have completed all the courses in this sequence.';
      }
    } else {
      reply = 'Invalid sequence number. Please enter a number between 1 and ' + sequenceKeys.length + '.';
    }
  } else {
    reply = 'Invalid theme.';
  }
  return reply;
}

// Other functions remain unchanged

function sendMessage() {
  const message = userInput.value;
  let reply = '';

  if (!currentTheme) {
    reply = getReply(message);
  } else if (!currentSequence) {
    const sequenceNumber = parseInt(message);
    if (sequenceNumber >= 1 && sequenceNumber <= 4) {
      currentSequence = Object.keys(themes[currentTheme])[sequenceNumber - 1];
      reply = `You have chosen the sequence "${currentSequence}" in ${currentTheme}. Please list the courses you have taken.`;
    } else {
      reply = 'Invalid sequence number. Please enter a number between 1 and 4.';
    }
  } else {
    // If currentTheme and currentSequence are set, it means the user has chosen a theme and a sequence
    // Assuming the user provides the list of taken courses in the format "I have taken course1, course2, ..."
    takenCourses = message.match(/[A-Z]{2,5}\s?\d{1,4}[A-Z]?/g) || [];

    // Get the list of remaining courses based on the chosen theme and sequence
    const remainingCourses = themes[currentTheme][currentSequence].filter(course => !takenCourses.includes(course));
    if (remainingCourses.length > 0) {
      reply = `Based on the courses you've taken, here are the remaining courses you can take in ${currentTheme} - ${currentSequence}: ${remainingCourses.join(', ')}`;
    } else {
      reply = 'You have completed all the courses in this sequence.';
    }

    // Reset theme and sequence for future interactions
    currentTheme = '';
    currentSequence = '';
  }

  addMessage('user', message);
  addMessage('bot', reply);
  userInput.value = '';
}



function addMessage(sender, message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', sender);
  messageElement.innerText = message;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}
