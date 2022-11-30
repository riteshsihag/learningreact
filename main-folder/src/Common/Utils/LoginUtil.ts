export const  LoginUtil=(response:Response)=>{
    return new Promise(async(resolve,reject)=>{
        const data = await response.json()
        if(response.ok){
             resolve(data)
         }
         else{
            reject(data.error_msg)
         }
    })

}