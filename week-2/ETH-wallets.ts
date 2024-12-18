import {ethers} from 'ethers'
import { derivePath } from 'ed25519-hd-key'
import { generateMnemonic,mnemonicToSeedSync } from 'bip39'

const words = generateMnemonic()

const seed = mnemonicToSeedSync(words)

for(let i=0;i<4;i++){
    const path = `m/44'/60'/${i}'/0'`

    const derivedSeed = derivePath(path,seed.toString("hex")).key

    const privateKey = ethers.hexlify(derivedSeed)

    const wallet = new ethers.Wallet(privateKey)

    const publicAddress = wallet.address
    console.log(`Ethereum Address (Public Key) ${i}: ${publicAddress}`);
}

