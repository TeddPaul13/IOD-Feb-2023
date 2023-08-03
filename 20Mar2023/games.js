

const game1= {
    title: "Rugby",
    description: "A game played using an egg-shaped ball",
    rating: 9.5,
    alreadyPlay: true
}
const game2= {
    title: "Football",
    description: "A game played using an round shaped ball",
    rating: 7.5,
    alreadyPlay: false
}

const games =[game1, game2]

for (let i= 0; i<games.length; i++){
    const Allgames = games[i]
    
    const gameTitle = Allgames.title;
    const gameDetail = Allgames.description;
    const rating = Allgames.rating;

    console.log(`${gameTitle} - ${gameDetail} - ${rating}`);
    // console.log(gameDetail);
    // console.log(rating);

    const played = Allgames.alreadyPlay

    if (played){
        console.log(`You already play ${gameTitle} by AU `)
    }else{
        console.log(`You still need to play ${gameTitle} by AU `)
    }
}
