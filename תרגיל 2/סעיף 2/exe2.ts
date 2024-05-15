export const SecretFunc=(x: number,): Promise<void> => new Promise((resolve,reject)=>{
   
    console.log(Date.now)
        setTimeout((err:any)=>{
            if(err){
                reject(err);
            }
            resolve();
        },x)
});