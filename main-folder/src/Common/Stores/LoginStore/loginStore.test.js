import loginStore from "./loginStore"


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

test("Empty Username and Password input value",()=>{
    loginStore.checkInput()
    expect(loginStore.enterUsername).toBe('Enter Username')
    expect(loginStore.enterPassword).toBe('Enter Password')
})

