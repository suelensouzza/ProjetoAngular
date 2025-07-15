export interface LoginRequest {
  nome: string;
  senha: string;
}

export interface LoginResponse {
  id: number;
  nome: string;
  email: string;
}
