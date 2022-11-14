import {useEffect,useState} from 'react'
import { LightContainer } from './style'
const LightList = [
    {
        id:0,
        color:"red",
    },
    {
        id:1,
        color:"yellow",
    },{
        id:2,
        color:"green",
    },
]
const Timer = () =>{
    const [colorValue, setColorValue] = useState(0)
    useEffect(() => {
      
      const coloID = setInterval(()=>{
       setColorValue(prevColorValue=> prevColorValue+1)
      },5000)
      return () => {
        clearInterval(coloID)
      }
    }, [])
    
    return(
        <div>
            {LightList.map(item=>{
            return <LightContainer color={item.color} isActive={colorValue%3===item.id}></LightContainer>
            })}
        </div>
    )
}
export default Timer