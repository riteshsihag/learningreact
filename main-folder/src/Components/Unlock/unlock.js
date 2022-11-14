import {useState} from 'react'
const Unlock = () => {
    const [unlock, setUnlock] = useState(false)
    const unlockDevice=()=>{
        setUnlock(!unlock)
    }
  return (
    <div className="unlock">
    <img src={unlock?"https://assets.ccbp.in/frontend/hooks/unlock-img.png":"https://assets.ccbp.in/frontend/hooks/lock-img.png"}/>
    <h2>{unlock?"Your Device is unlocked":"Your Device is locked"}</h2>
    <button onClick={unlockDevice}>{unlock?"Lock":"Unlock"}</button>
    </div>
  );
}

export default Unlock;
