import React from 'react';
import { VehicleData } from '../types';
import { formatCurrency } from '../utils/formatters';

interface VehicleDetailsProps {
  data: VehicleData;
}

export function VehicleDetails({ data }: VehicleDetailsProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Detalhes do Veículo</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <p className="text-gray-600">Renavam</p>
          <p className="font-medium">{data.renavam}</p>
        </div>
        <div>
          <p className="text-gray-600">Placa</p>
          <p className="font-medium">{data.placa}</p>
        </div>
        <div>
          <p className="text-gray-600">Ano de fabricação</p>
          <p className="font-medium">{data.anoFabricacao}</p>
        </div>
        <div>
          <p className="text-gray-600">Marca</p>
          <p className="font-medium">{data.marca}</p>
        </div>
        <div>
          <p className="text-gray-600">Modelo</p>
          <p className="font-medium">{data.modelo}</p>
        </div>
        <div>
          <p className="text-gray-600">Município</p>
          <p className="font-medium">{data.municipio}</p>
        </div>
        <div>
          <p className="text-gray-600">Base de Cálculo</p>
          <p className="font-medium">{formatCurrency(data.baseCalculo)}</p>
        </div>
        <div>
          <p className="text-gray-600">Alíquota</p>
          <p className="font-medium">{data.aliquota}%</p>
        </div>
        <div>
          <p className="text-gray-600">Duodécimos</p>
          <p className="font-medium">{data.duodecimos}</p>
        </div>
      </div>
    </div>
  );
}