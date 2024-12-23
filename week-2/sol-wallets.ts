import nacl from 'tweetnacl'
import { Keypair } from '@solana/web3.js'
import {derivePath} from 'ed25519-hd-key'
import {generateMnemonic,mnemonicToSeedSync} from 'bip39'
const mnemonic = generateMnemonic()
const seed = mnemonicToSeedSync(mnemonic)

for(let i=0;i<4;i++){
    const path = `m/44'/501'/${i}'/0'`
    const derivedSeed = derivePath(path,seed.toString("hex")).key

    // below nacl.sign.keyPair.fromSeed generates pair of keys from derived seed - we have extracred secret key 
    //nacl.sign.keyPair.fromSeed(derivedSeed) this genetrates keypair from a given seed using the Ed25519 signature algorithm, which is commonly used in various blockchains, 
    //used to generate cryptographic keys

    const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey

    //keypair.fromsecetkey is used to generate key pair from private key and we have extraceted public key form that 
    //Keypair.fromSecretKey(secret) this creates solana key pair of public key and private key
    //used tp generate solana-compatible key pair 
    console.log(Keypair.fromSecretKey(secret).publicKey.toBase58())
    console.log("Solana key pair :  ",Keypair.fromSecretKey(secret))
}

