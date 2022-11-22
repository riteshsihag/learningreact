import React from 'react';
import './App.css';
import Todo from './Components/Todo/todo';
import {useTranslation, Trans} from 'react-i18next'
function App() {
  const {i18n} = useTranslation()
  const lngs = {
    en: {nativeName: 'English'},
    hi: {nativeName: 'Hindi'}
  }
  return (
    <div className="App">
     <h1><Trans i18nKey={'heading'}>
      TodoList Application
      </Trans></h1> 
     <select onClick={(e)=>i18n.changeLanguage((e.target as HTMLInputElement).value)}>
      {Object.keys(lngs).map(lng=>{
        return <option  key={lng} value={lng} >{lng}</option>
      })}
        </select>

      <Todo/>
    </div>
  );
}

export default App;
