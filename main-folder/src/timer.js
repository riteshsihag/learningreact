import {useEffect,useState} from 'react'
const Timer = () =>{
    const [timer,setTimer] = useState(0)
    useEffect(() => {
      
      const timerId = setInterval(()=>{
        setTimer(prevTimer=> prevTimer+1)
      },1000)
      return () => {
        clearInterval(timerId)
      }
    }, [])
    
    return(
        <div>
            <h1>{timer}</h1>
        </div>
    )
}
export default Timer