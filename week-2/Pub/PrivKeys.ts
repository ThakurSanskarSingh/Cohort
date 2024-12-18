import {Keypair} from '@solana/web3.js'
import { TextEncoder } from 'util';

import nacl from 'tweetnacl'

const keypair = Keypair.generate()

const publicKey = keypair.publicKey


const secretKey = keypair.secretKey
console.log(`private key : ${secretKey}, public key : ${publicKey}`)

const message = new TextEncoder().encode("Send 0.3 sol to Sanskar")

const signature = nacl.sign.detached(message,secretKey)
const result = nacl.sign.detached.verify(
    message,
    signature,
    keypair.publicKey.toBytes()
)
console.log(result)


