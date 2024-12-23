import React from 'react';
import { Copy } from 'lucide-react';

interface PixPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  pixKey: string;
}

export function PixPaymentModal({ isOpen, onClose, pixKey }: PixPaymentModalProps) {
  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey);
    alert('Chave PIX copiada!');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <h3 className="text-xl font-semibold mb-4">Pagamento via PIX</h3>
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <p className="text-sm text-gray-600 mb-2">Chave PIX (Telefone):</p>
          <div className="flex items-center gap-2">
            <p className="font-mono bg-white p-2 rounded flex-1">{pixKey}</p>
            <button
              onClick={handleCopyPix}
              className="p-2 text-blue-600 hover:text-blue-800"
              title="Copiar chave PIX"
            >
              <Copy className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}