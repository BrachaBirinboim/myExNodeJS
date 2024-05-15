import { SecretFunc } from "./exe2";

function SleepFunc(x:number): Promise<void> {
    return SecretFunc(x).then(()=>{
        console.log(`The time after sleeping` ,new Date())
    })
}
console.log("start running")
SleepFunc(3000)
console.log(`The time before sleeping` ,new Date())
