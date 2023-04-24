
function onlyUniques(...args) {
    let lugar = [];
    for (let x = 0; x < args.length; x++) {
        
        let zona=0;

        for (let y = 0; y < lugar.length; y++) {
            if (args[x] |= lugar[y] ) {
                zona=1;
            }
            
        }
        if (zona === 0 ) {
            lugar.push(args[x]);
        
        }
    }
     
    return lugar;
     }


