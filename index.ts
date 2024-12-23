export interface VehicleData {
  renavam: string;
  placa: string;
  chassi: string;
  exercicio: string;
  valorIPVA: number;
  valorMulta: number;
  valorMora: number;
  valorTotal: number;
  dataVencimento: string;
  contribuinte: string;
  cpfCnpj: string;
  municipio: string;
  baseCalculo: number;
  aliquota: number;
  duodecimos: number;
  marca: string;
  modelo: string;
  anoFabricacao: string;
}

export interface PaymentInstallment {
  cota: number;
  vencimento: string;
  valorPrincipal: number;
  juros: number;
  multa: number;
  desconto: number;
  total: number;
}