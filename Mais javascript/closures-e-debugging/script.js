debugger
function contagem() {
    let total = 0;
    return function increment(){
        total++;
        console.log(total);
    }
}

const ativarIncemento = contagem();

ativarIncemento();
ativarIncemento();
ativarIncemento();
ativarIncemento();