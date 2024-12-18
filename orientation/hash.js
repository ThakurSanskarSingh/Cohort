const crypto = require('crypto')

const input = 'Blockchain'

const hash = crypto.createHash('sha256').update(input).digest('hex')

console.log(hash)

function findHashPrefix(prefix,input)  {
    while(true){
        let newInput = 0
        let hashed = crypto.createHash('sha256').update(newInput).digest('hex')
        if(hashed.startsWith(prefix) && (newInput == input)){
            return {
                hashed
            }
            
        }
        newInput ++;
    }
}

const result = findHashPrefix('0000','100xdevs')