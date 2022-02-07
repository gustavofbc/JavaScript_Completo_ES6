const links = document.querySelectorAll('a');

function handleClick(event) {
  event.preventDefault();
  fetchPage(event.target.href);
  window.history.pushState(null, null, event.target.href);
}

async function fetchPage(url) {
  document.querySelector('.content').innerHTML = "Carregando";
  const pageReposponse = await fetch(url);
  const pageText = await pageReposponse.text();
  console.log(pageText)
  replaceContent(pageText);
}

function replaceContent(newText) {
  const newHTML = document.createElement('div');
  newHTML.innerHTML = newText;

  const oldContent = document.querySelector('.content');
  const newContent = newHTML.querySelector('.content')

  oldContent.innerHTML = newContent.innerHTML;
  document.title = newHTML.querySelector('title').innerText;
}

window.addEventListener('popstate', () => {
  fetchPage(window.location.href);
})

links.forEach(link => {
  link.addEventListener('click', handleClick)
})