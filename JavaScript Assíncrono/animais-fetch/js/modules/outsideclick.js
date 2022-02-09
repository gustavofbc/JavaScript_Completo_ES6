export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  //impedir que sempre que eu clicar adicione o eventListener, limitando a apenas uma vez
  if(!element.hasAttribute(outside)){
    //adicionando em mais um evento (ex: click e touchstart)
    events.forEach((item) => {
      setTimeout(() => {html.addEventListener(item, handleOutsideClick);});
    })
    element.setAttribute(outside, '');
  }

  function handleOutsideClick(event) {
    //verificar se estou clicando fora do menu dropdown
    if(!element.contains(event.target)){
      element.removeAttribute(outside);
      events.forEach((item) => {
        html.removeEventListener(item, handleOutsideClick);
      })
      callback();
    }
  }
}