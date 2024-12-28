import { PublicKey } from "@solana/web3.js";
import { ASSOCIATED_TOKEN_PROGRAM_ID,TOKEN_PROGRAM_ID } from "@solana/spl-token";

const userAddress = new PublicKey('93rw8QRoCkG8rMTsZArpZqDobf1bvVf7mjXygVT23zm6')
const tokenMintAddress = new PublicKey ('BQxSec9qRKCWaVxWFCFpDCzJ19GQoCGiDwLbyG3Nmm7Z')

//this function written below finds pda that is off the curve by generating / iterating the bump from 255 to 1 
//this one finds the bump and append it

const getAssociatedTokenAddress = (mintAddress,ownerAddress) => {
    return PublicKey.findProgramAddressSync(
        [
            ownerAddress.toBuffer(),
            TOKEN_PROGRAM_ID.toBuffer(),
            mintAddress.toBuffer()
        ],
        ASSOCIATED_TOKEN_PROGRAM_ID
    )
}

const [associatedTokenAddress,bump] = getAssociatedTokenAddress(tokenMintAddress,userAddress)
console.log(`Associated token Adress : ${associatedTokenAddress.toBase58()}, bump : ${bump}`)

//this funciton below will just create the bump but here we are manually givivng it th e bump and it adds it to the pda

const PDA  =  PublicKey.createProgramAddressSync(
    [userAddress.toBuffer(),TOKEN_PROGRAM_ID,tokenMintAddress.toBuffer(),Buffer.from([bump])],
    ASSOCIATED_TOKEN_PROGRAM_ID
)

console.log(`PDA : ${PDA}`)
