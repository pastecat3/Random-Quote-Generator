const text=document.querySelector("#quote");
const author=document.querySelector("#author");
const tweetButton=document.querySelector("#tweet");

const getNewQuote = async () => {
    let url="https://type.fit/api/quotes";
    const response=await fetch(url);
    console.log(typeof response);
    const allQuotes = await response.json();
    const index = Math.floor(Math.random()*allQuotes.length);
    const quote=allQuotes[index].text;
    const auth=allQuotes[index].author;
    if(auth==null)
    {

    }
    text.innerHTML=quote;
    author.innerHTML=auth;


    tweetButton.href="https://twitter.com/intent/tweet?text="+quote+" ~ "+auth;
}
getNewQuote();