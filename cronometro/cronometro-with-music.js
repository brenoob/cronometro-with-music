let display = document.getElementById('display')
        let minutos = document.getElementById('minutos')
        let segundos = document.getElementById('segundos')

        let comecar = document.getElementById('comecar')

        let cronometroSeg;
        
        let minutosAtual;
        let segundosAtual;

        let interval;

        for(let i = 0; i<= 60; i++){
            minutos.innerHTML+='<option value="'+i+'">'+i+'</option>'
        }
        for(let i = 1; i<= 60; i++){
            segundos.innerHTML+='<option value="'+i+'">'+i+'</option>'
        }

        comecar.addEventListener('click', function(){
            document.getElementById('soundDurante').play()
            minutosAtual = minutos.value
            segundosAtual = segundos.value

            display.childNodes[1].innerHTML = minutosAtual + ':'+segundosAtual
            
            interval = setInterval(() => {
                if(minutosAtual && segundosAtual == 0){
                        alert('coloque um tempo valido')
                    }
                segundosAtual--;
                if(segundosAtual <= 0) {
                    if(minutosAtual > 0) {
                        minutosAtual--;
                        segundosAtual = 59;
                    }else{
                        document.getElementById('soundDurante').load();
                        document.getElementById('sound').play();
                        alert('acabou!!')
                        document.getElementById('sound').load()
                        clearInterval(interval);
                    }
                }
                display.childNodes[1].innerHTML = minutosAtual + ":"+segundosAtual
            }, 1000);
        })