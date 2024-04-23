var visor = document.getElementById('visor')
function calcular(tipo, valor){
    if (tipo ==='acao'){
        if(valor ==='c'){
            visor.value = ''
        }else if(visor.value.length===0){
            visor.value = ''
        }else if(valor === '+' || valor === '-'|| valor === '*'|| valor === '/' || valor === '.'){
            visor.value += valor
        }else if(valor === '='){
            visor.value = eval(visor.value) //este operador consegue pegar uma string e transformar ela em números, 
            //para conseguir interpretá-la e assim fazer os cálculos necessários 
        }
    }else if(tipo = 'valor'){
        visor.value += valor
    }
}
function resolver(){
    
}