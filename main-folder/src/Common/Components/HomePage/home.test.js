import {render,screen} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from '../Component/MainPage/home'
beforeEach(()=>{
    render(<BrowserRouter><Home/></BrowserRouter>)
})
test("testing buttons on home page",()=>{
    const loginButton = screen.getAllByRole('button')
    expect(loginButton.length).toBe(2)
})
test("heading on home page",()=>{
    expect(screen.getAllByRole('heading',{level:1}).length).toBe(1)
})
