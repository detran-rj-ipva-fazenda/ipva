import React, { useState } from 'react';
import { Header } from './components/Header';
import { SearchForm } from './components/SearchForm';
import { VehicleDetails } from './components/VehicleDetails';
import { PaymentDetails } from './components/PaymentDetails';
import { LoadingSpinner } from './components/LoadingSpinner';
import { VehicleData } from './types';

function App() {
  const [loading, setLoading] = useState(false);
  const [vehicleData, setVehicleData] = useState<VehicleData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (renavam: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulating API call with mock data
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (renavam === '00332622096') {
        setVehicleData({
          renavam: '00332622096',
          placa: 'LRZ3G52',
          chassi: '9BWZZZ377VT004251',
          exercicio: '2024',
          valorIPVA: 2432.79,
          valorMulta: 486.57,
          valorMora: 210.68,
          valorTotal: 3130.05,
          dataVencimento: '24/01/2024',
          contribuinte: 'ANGELITO CANDIDO DE JESUS',
          cpfCnpj: '112***70718',
          municipio: 'MACAE',
          baseCalculo: 60820.00,
          aliquota: 4,
          duodecimos: 12,
          marca: 'I',
          modelo: 'BMW X1 SDRIVE1.8I VL31',
          anoFabricacao: '2011'
        });
      } else {
        setError('Veículo não encontrado. Verifique o número do RENAVAM.');
      }
    } catch (err) {
      setError('Erro ao buscar dados do veículo. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <SearchForm onSearch={handleSearch} />
          
          {loading && <LoadingSpinner />}
          
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <p className="text-red-700">{error}</p>
            </div>
          )}
          
          {vehicleData && (
            <>
              <VehicleDetails data={vehicleData} />
              <PaymentDetails data={vehicleData} />
            </>
          )}
        </div>
      </main>
      <footer className="bg-white border-t py-4 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between text-sm text-gray-600">
            <div>Release v1.0.22 de 11/11/2024</div>
            <a href="https://fazenda.rj.gov.br/" className="hover:text-gray-900">
              SEFAZ-RJ
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;