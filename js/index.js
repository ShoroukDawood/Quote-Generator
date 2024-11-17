// window.alert("hello");
// set the title & description
document.getElementById('title').innerHTML = "Quote of the Day";
document.getElementById('desc').innerHTML = "Press the button below to recieve a random quote!";

// start function
    function getQuote() {
        var quotes = [
        "“Be yourself; everyone else is already taken.”"+'<br>'+"― Oscar Wilde",
        "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”"+'<br>'+"― Albert Einstein",
        "“Be the change that you wish to see in the world.”" + '<br>' + "― Mahatma Gandhi",
        "“If you tell the truth, you don't have to remember anything.”" + '<br>' + "― Mark Twain",
        "“To live is the rarest thing in the world. Most people exist, that is all.”" + '<br>' + "― Oscar Wilde",
        
        ];
        var newIndexes = Math.floor(Math.random() * quotes.length);
        console.log(Math.random());
        console.log(Math.random() * quotes.length);
        console.log(Math.floor(Math.random() * quotes.length));
        var newQuote = quotes[newIndexes];
        document.getElementById('quotes-desc').innerHTML = newQuote;
    }
