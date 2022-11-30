import { action, decorate, observable } from "mobx";

class loginStore {
  username = "";
  password = "";
  enterPassword = "";
  enterUsername = "";
  error_msg = "";
  LoginApiData;
  constructor(
    LoginServiceData: InstanceType<any>,
    LoginFixtureData: InstanceType<any>
  ) {
    this.LoginApiData = LoginServiceData;
  }
  onSuccessSubmitForm = async (onSuccess: (jwt_token: string) => void) => {
    const response = await this.LoginApiData.getLoginData(
      this.username,
      this.password
    );
    try {
      onSuccess(response.jwt_token);
    } catch {
      this.error_msg = response.error_msg;
    }
  };

  onChangeUsername = (value: string) => {
    this.username = value;
  };
  onChangePassword = (value: string) => {
    this.password = value;
  };
  checkInput = () => {
    if (this.username === "") {
      this.enterUsername = "Enter Username";
    } else {
      this.enterUsername = "";
    }
    if (this.password === "") {
      this.enterPassword = "Enter Password";
    } else {
      this.enterPassword = "";
    }
  };
}

decorate(loginStore, {
  username: observable,
  password: observable,
  enterPassword: observable,
  enterUsername: observable,
  error_msg: observable,
  onSuccessSubmitForm: action,
  onChangeUsername: action,
  onChangePassword: action,
  checkInput: action,
});

export default loginStore;
