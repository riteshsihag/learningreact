import { LoginServiceApi } from "../../Services/index.api"
import { LoginFixture } from "../../Services/index.fixture"
import loginStore from "./loginStore"

const LoginServiceData = new LoginServiceApi()
const LoginFixtureData = new LoginFixture()
const LoginValues = new loginStore(LoginServiceData,LoginFixtureData)
afterEach(()=>{
    LoginValues.username = ''
    LoginValues.password = ''
    LoginValues.enterPassword = ''
    LoginValues.enterUsername = ''
    LoginValues.error_msg = ''
})
test('checking Login UserName',()=>{
    LoginValues.onChangeUsername('Rahul')
   expect(LoginValues.username).toBe('Rahul')
})
test('checking Login Password',()=>{
    LoginValues.onChangePassword('Rahul@2021')
    expect(LoginValues.password).toBe('Rahul@2021')
 })

test("Empty Username and Password input value",()=>{
    LoginValues.checkInput()
    expect(LoginValues.enterUsername).toBe('Enter Username')
    expect(LoginValues.enterPassword).toBe('Enter Password')
})

