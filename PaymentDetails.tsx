import React, { useState } from 'react';
import { Printer } from 'lucide-react';
import { VehicleData } from '../types';
import { formatCurrency } from '../utils/formatters';
import { PixPaymentModal } from './PixPaymentModal';

interface PaymentDetailsProps {
  data: VehicleData;
}

export function PaymentDetails({ data }: PaymentDetailsProps) {
  const [selectedInstallment, setSelectedInstallment] = useState<number | null>(null);
  const [isPixModalOpen, setIsPixModalOpen] = useState(false);

  const installments = [
    {
      cota: 1,
      vencimento: '24/01/2024',
      valorPrincipal: data.valorIPVA / 3,
      juros: 76.80,
      multa: 162.19,
      desconto: 0,
      total: 1049.92
    },
    {
      cota: 2,
      vencimento: '23/02/2024',
      valorPrincipal: data.valorIPVA / 3,
      juros: 70.31,
      multa: 162.19,
      desconto: 0,
      total: 1043.43
    },
    {
      cota: 3,
      vencimento: '27/03/2024',
      valorPrincipal: data.valorIPVA / 3,
      juros: 63.57,
      multa: 162.19,
      desconto: 0,
      total: 1036.70
    }
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Detalhes do Pagamento</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-2 text-left">Cota</th>
              <th className="px-4 py-2 text-left">Vencimento</th>
              <th className="px-4 py-2 text-right">Valor principal</th>
              <th className="px-4 py-2 text-right">Juros</th>
              <th className="px-4 py-2 text-right">Multa</th>
              <th className="px-4 py-2 text-right">Desconto</th>
              <th className="px-4 py-2 text-right">Total</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {installments.map((installment) => (
              <tr key={installment.cota} className="border-t">
                <td className="px-4 py-2">{installment.cota}</td>
                <td className="px-4 py-2">{installment.vencimento}</td>
                <td className="px-4 py-2 text-right">{formatCurrency(installment.valorPrincipal)}</td>
                <td className="px-4 py-2 text-right">{formatCurrency(installment.juros)}</td>
                <td className="px-4 py-2 text-right">{formatCurrency(installment.multa)}</td>
                <td className="px-4 py-2 text-right">{formatCurrency(installment.desconto)}</td>
                <td className="px-4 py-2 text-right">{formatCurrency(installment.total)}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => setSelectedInstallment(installment.cota)}
                    className="p-2 text-blue-600 hover:text-blue-800"
                  >
                    <i className="fa-light fa-barcode"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex gap-4 mt-6">
        <button
          onClick={handlePrint}
          className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
        >
          <Printer className="w-5 h-5" />
          Imprimir
        </button>
        <button
          onClick={() => setIsPixModalOpen(true)}
          className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
        >
          Pagar débitos via Pix
        </button>
      </div>

      <PixPaymentModal
        isOpen={isPixModalOpen}
        onClose={() => setIsPixModalOpen(false)}
        pixKey="21999046198"
      />
    </div>
  );
}