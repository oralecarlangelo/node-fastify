export interface IAuth {
  email: string;
  password: string;
}

export interface IAuthRegister {
  name: string
  email: string;
  password: string;
}

export interface IToken {
  token: string;
}
