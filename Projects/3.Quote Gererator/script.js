function generate(){
    
    var quotes = { "- Harvey Specter.": '"You always have a choice."', "- Harvey Specter": '"According to me’ is the only ‘according to’ that matters."'       
    }
    
    var authors = Object.keys(quotes);
    
    
    var author = authors[Math.floor(Math.random() * authors.length)];
    var quote = quotes[author];
    
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
    
}