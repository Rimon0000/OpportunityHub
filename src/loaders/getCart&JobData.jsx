import { getShoppingCart } from "../utilities/fakedb"

const cartAndJobData = async() =>{
    const jobsData = await fetch('features.json')
    const jobs = await jobsData.json()
    
    const savedJob = getShoppingCart()

     let cart = []
     for(const id in savedJob){
         const foundJob = jobs.find( ft => ft.id === id)
         if(foundJob){
             foundJob.quantity = savedJob[id]
             cart.push(foundJob)
         }
        }
        return {cart, jobs};
     
     
     }
export  {cartAndJobData}