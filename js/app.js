const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => showQuoits(data) )
}


const showQuoits = quoit => {
    const quoitElement = document.querySelector('#quote');
    quoitElement.innerText = quoit.quote;
}