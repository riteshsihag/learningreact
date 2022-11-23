import React from 'react';
import './App.css';
import Todo from './Components/Todo/todo';
import {useTranslation, Trans} from 'react-i18next'
import { Provider } from 'mobx-react';
import todoStore from './Components/Stores/todoStore';
function App() {
  const {i18n} = useTranslation()
  const lngs = {
    en : {nativeName: 'English'},
    hi: {nativeName: 'हिन्दी'}}
  
  return (
    <div className="App">
     <h1><Trans i18nKey={'heading'}>
      TodoList Application
      </Trans></h1> 
     <select onClick={(e)=>i18n.changeLanguage((e.target as HTMLInputElement).value)}>
      {Object.keys(lngs).map((eachlng)=>{
        return <option  key={eachlng} value={eachlng}>{lngs[eachlng as keyof typeof lngs].nativeName}</option>
      })}
        </select>
      <Provider todoStore = {todoStore}>
      <Todo/>
      </Provider>
    </div>
  );
}

export default App;
