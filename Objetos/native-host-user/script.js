// Liste 5 objetos nativos
Object
String
Number
Array
Function

// Liste 5 objetos do browser
Window
Document
NodeList
HTMLCollection
alert

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox
if(typeof document.webkitHidden !== 'undefined'){
    console.log('Existe')
} else {
    console.log('Não existe')
}

if(typeof document.webkitVisibilityState !== 'undefined'){
    console.log('Existe')
} else {
    console.log('Não existe')
}