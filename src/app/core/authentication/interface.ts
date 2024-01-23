export interface User {
  [prop: string]: any;

  id?: number | string | null;
  name?: string;
  email?: string;
  avatar?: string;
  roles?: any[];
  permissions?: any[];
}

export interface Token {
  [prop: string]: any;

  access_token: string;
  token_type?: string;
  expires_in?: number;
  exp?: number;
  refresh_token?: string;
}

export interface IdentityToken {
  [prop: string]: any;

  accessToken: string;
  tokenType: string;
  expiresIn: number;
  exp?: number;
  refreshToken: string;
}
