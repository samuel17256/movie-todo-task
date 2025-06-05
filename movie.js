let movieTask=[
    {
        title:"the woman king",
        id:1,
        genre:"drama",
        year:2021,
        isWatched:false,
    }
]

// console.log(" Movie task before adding", movieTask)

//function add a movie
function addMovie(title,genre,year){
    let watched=false;
    let newId=movieTask.length +1
    let newMovie={
        title:title,
        id:newId,
        genre:genre,
        year:year,
        isWatched:watched,
    }
    movieTask.push(newMovie)
}

addMovie("fast and furios","action", 2009)
addMovie("merlin","drama", 2016)
addMovie("24 hours","action", 2008)
addMovie("seal team six","action", 2009)
console.log("Movie task after adding", movieTask)

//  mark movie as watched/unwatched
function movieWatch(movieId){
    for (let movie in movieTask){
        if(movieTask[movie].id === movieId){
            movieTask[movie].isWatched=true
           console.log("this movie has been watch", movieTask[movie])
        }else{
            console.log("this movie has not been watch", movieTask[movie])
        }
    }
}

movieWatch(1)

//movie list by genre
let actionGenre=[]
let dramaGenre=[]
function listGenre(movieGenre){
    for(let movie of movieGenre){
        if(movie.genre === "action"){
            actionGenre.push(movie.title)
        }else if(movie.genre === "drama"){
            dramaGenre.push(movie.title)
        }
    }
    console.log("this movie falls under this genre action:", actionGenre)
    console.log("this movie falls under this genre drama:", dramaGenre)
}

listGenre(movieTask)

//delete a movie

function deleteMovie(movieId){
    // movieTask.filter((movie)=>{
    //     if(movie.id !==movieId){
    //         console.log(movie)
    //     }
    // })
    movieTask.splice(movieId-1,1)
    console.log(movieTask)
}

deleteMovie(2)

function sortMovie(x,y){
 return x.year - y.year;

}
movieTask.sort(sortMovie)
console.log("movie sort by year", movieTask)