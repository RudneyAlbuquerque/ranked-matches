let winBalance;
let level;

function calculateBalance(win,loss) {
    winBalance = win - loss;
    
    if (winBalance <= 10) {
      level = "Ferro";
      }
    
    else if (winBalance <= 20) {
      level = "Bronze";
      }
    
    else if (winBalance <= 50) {
      level = "prata";
      }
    
    else if (winBalance <= 80) {
      level = "Ouro";
      }
    
    else if (winBalance <= 90) {
      level = "Diamante";
      }
    
    else if (winBalance <= 100) {
      level = "Lendário";
      }
    
    else {
      level = "Imortal";
      }

    return winBalance, level
    
    }
    

    function showMessage() {
      calculateBalance(81, 20);
      console.log(`O Herói tem um saldo de ${winBalance} e está no nível de ${level}`);
    }
    
    // Chamando a função


    showMessage();