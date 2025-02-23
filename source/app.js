function displayQuotes(response) {
   new Typewriter("#quoting-text", {
     strings:response.data.answer,
       autoStart: true,
       delay: 1,
     cursor:"",
   });
}

function showQuotes(event) {
    event.preventDefault();

    let words = document.querySelector("#quote-text");
        let apiKey = "713a631324o2dtc013aaf4374b846544";
    let context = `Generate programming motivation quote about ${words.value}`;
 let prompt =
        "You are an expert in movitation quote about programming. You are to generate 1 line and separate it using < br >. ";
        let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
 
    axios.get(apiUrl).then(displayQuotes);
}

let quoting = document.querySelector("#quoteForm");
quoting.addEventListener("submit", showQuotes);