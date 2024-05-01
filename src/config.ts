import algosdk from "algosdk";


const algodToken = "a".repeat(64);
const server: string = "http://localhost";
const port: string = "4001";

const mnemonic: string = 
"abandon confirm arrest tribe bacon plug subject panic soccer mind timber sustain vast setup obtain deposit mass hood smooth relief begin clump couch able talent";

export function getClient(): algosdk.Algodv2 {
    let client = new algosdk.Algodv2(algodToken, server, port);
    return client;
}

export function generateAccount(): algosdk.Account{
    let account = algosdk.mnemonicToSecretKey(mnemonic);
    return account;
}


