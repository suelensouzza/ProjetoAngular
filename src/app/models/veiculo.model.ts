
export interface Veiculo {
  id: number;
  vehicle: string;
  volumetotal: number;
  connected: number;
  softwareUpdates: number;
  img: string;
}

export interface VeiculosAPI {
  vehicles: Veiculo[];
}
