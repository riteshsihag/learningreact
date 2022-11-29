import {render,screen,fireEvent} from '@testing-library/react'
import loginStore from '../../Stores/LoginStore/loginStore'
import Login from './login'

beforeEach(()=>{
    render(<Login/>)
})

afterEach(()=>{
    loginStore.username = ''
    loginStore.password = ''
    loginStore.enterPassword = ''
    loginStore.enterUsername = ''
    loginStore.error_msg = ''
})

test("checking username  value in component", () => {
    const usernameInput = screen.getByPlaceholderText('Username')
    fireEvent.change(usernameInput, { target: { value: "Rahul" } });
    expect(loginStore.username).toBe("Rahul");
  });

test("checking password value in component", () => {
    const passwordInput = screen.getByPlaceholderText("Password");
    fireEvent.change(passwordInput, { target: { value: "Rahul@2021" } });
    expect(loginStore.password).toBe("Rahul@2021");
  });
test("buttons on login page",()=>{
    const loginButton = screen.getAllByRole('button')
    expect(loginButton.length).toBe(1)
})


