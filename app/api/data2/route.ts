"use server"


//this function will to execute when the user visit this url admin/api/budgets/id/expenses/id
export async function GET(){
    // await verifySession()
    // const token = getToken()
    const url = `${process.env.API_URL}/api/plant2`
    const req = await fetch(url)
    
    const json = await req.json()
    if(!req.ok){
        return Response.json(json.error,{status:403})
    }
    return Response.json(json)
}

