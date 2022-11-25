import {render,screen,fireEvent} from '@testing-library/react'
import Login from '../Component/LoginPage/login'
import loginStore from '../Stores/LoginStore/loginStore'

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
test('checking Login UserName',()=>{
   loginStore.onChangeUsername('Rahul')
   expect(loginStore.username).toBe('Rahul')
})
test('checking Login Password',()=>{
    loginStore.onChangePassword('Rahul@2021')
    expect(loginStore.password).toBe('Rahul@2021')
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
test("Empty Username and Password input value",()=>{
    loginStore.checkInput()
    expect(loginStore.enterUsername).toBe('Enter Username')
    expect(loginStore.enterPassword).toBe('Enter Password')
})

