
export interface IAuthenticationProvider { 
    login(username: string, password: string): Promise<string>;
    register(username: string, password: string): Promise<string>;
    logout(token: string): Promise<void>;
    verify(token: string): Promise<boolean>;
}