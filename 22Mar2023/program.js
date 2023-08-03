let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// Add "GO" to the end of the languages array

const lang = programming.languages;

const AddGo = lang.push('Go')

// Change difficulty to 7

programming.difficulty = 7;

// Remove jokes

delete programming.jokes;

// Add new key value pair

programming.isFun = true;

for (let i=0; i<lang.length; i++){
    //console.log(lang[i])
}

for (let j=0; j<programming.length; j++){
    console.log(Object.keys(programming))
}
