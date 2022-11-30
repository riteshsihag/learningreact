import {render,screen,fireEvent} from '@testing-library/react'
import { LoginServiceApi } from '../../Services/index.api'
import { LoginFixture } from '../../Services/index.fixture'
import loginStore from '../../Stores/LoginStore/loginStore'
import Login from './login'
const LoginServiceData = new LoginServiceApi()
const LoginFixtureData = new LoginFixture()
const LoginValues = new loginStore(LoginServiceData,LoginFixtureData)
beforeEach(()=>{
 
    render(<Login LoginValues={LoginValues}/>)
})

afterEach(()=>{
  LoginValues.username = ''
  LoginValues.password = ''
  LoginValues.enterPassword = ''
  LoginValues.enterUsername = ''
  LoginValues.error_msg = ''
})

test("checking username  value in component", () => {
    const usernameInput = screen.getByPlaceholderText('Username')
    fireEvent.change(usernameInput, { target: { value: "Rahul" } });
    expect(LoginValues.username).toBe("Rahul");
  });

test("checking password value in component", () => {
    const passwordInput = screen.getByPlaceholderText("Password");
    fireEvent.change(passwordInput, { target: { value: "Rahul@2021" } });
    expect(LoginValues.password).toBe("Rahul@2021");
  });
test("buttons on login page",()=>{
    const loginButton = screen.getAllByRole('button')
    expect(loginButton.length).toBe(1)
})


