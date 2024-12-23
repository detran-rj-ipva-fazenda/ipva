import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { validateRenavam } from '../utils/validators';

interface SearchFormProps {
  onSearch: (renavam: string) => void;
}

export function SearchForm({ onSearch }: SearchFormProps) {
  const [renavam, setRenavam] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateRenavam(renavam)) {
      setError('Renavam inválido. Digite um número com 11 dígitos.');
      return;
    }

    setError('');
    onSearch(renavam);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Consulta IPVA</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="renavam" className="block text-sm font-medium text-gray-700">
            Número do RENAVAM
          </label>
          <input
            type="text"
            id="renavam"
            value={renavam}
            onChange={(e) => setRenavam(e.target.value.replace(/\D/g, ''))}
            maxLength={11}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Digite o RENAVAM"
          />
          {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
        >
          <Search className="w-5 h-5" />
          Consultar
        </button>
      </form>
    </div>
  );
}