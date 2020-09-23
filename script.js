import { musicList } from './music.js'
import { quotes } from './quotes.js'


function getTopic() {
    let topics = []
    quotes
    .map(quote => quote.topic)
    .forEach(topic => topic.map(
        item => topics.push(item)
    ))
    let unique = new Set(topics)
    let uniqueTopics = [...unique]
    for (let i = 0; i < uniqueTopics.length; i++) {
        document.getElementById("myUL").innerHTML += '<li><a>' + uniqueTopics[i] +'</a></li>';
    }
}
getTopic()

let getContent = document.getElementById('content')
let getAuthor = document.getElementById('author')
function getQuotes(query) {
    var result = quotes.filter(quote =>
    quote.topic.some(item => item === query)
    ).map(quote => {
    const results = {}
      results.quote = quote.content
      results.author = quote.author
    return results
    })
    var getOne = (Math.floor(Math.random() * result.length))
    getContent.innerHTML = result[getOne].quote
    getAuthor.innerHTML = result[getOne].author
}

let getVid = document.getElementById('musicVid')
function getMusic(query) {
    var result = musicList
                .filter(music =>
                    music.topic.some(item => item === query))
                .map(music => {
                    const results = {};
                    results.src = music.src;
                    return results
                })
        var getOne = (Math.floor(Math.random() * result.length))
        getVid.src = result[getOne].src
}
let inputF = document.getElementById('myMood')
inputF.onchange = function() {
    let queryValue = inputF.value
    document.getElementById('modal').style.display = "none"
    getQuotes(queryValue)
    getMusic(queryValue)
}