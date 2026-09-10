export interface VeiculosAPI extends Array<VeiculoAPI> {}

export interface VeiculoAPI {
  id: number | string;
  vehicle: string;
  volumetotal: number | string;
  connected: number | string;
  softwareUpdates: number | string;
  img: string;
}


export interface DadoVeiculo {
  id: number | string;
  odometro: number;
  nivelCombustivel: number;
  status: string;
  lat: number;
  long: number;
}