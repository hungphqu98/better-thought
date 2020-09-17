import { musicList } from './music.js'
import { quotes } from './quotes.js'


function getTopic() {
    var topics = []
    quotes
    .map(quote => quote.topic)
    .forEach(topic => topic.map(
        item => if(!topics.includes(item)) {
          topics.push(item)
        }))
    
    console.log(topics);
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
getQuotes('failed')

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
getMusic('unready')