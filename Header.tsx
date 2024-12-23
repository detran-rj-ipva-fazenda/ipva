import React from 'react';
import { Car } from 'lucide-react';

export function Header() {
  return (
    <div id="header-top" className="position-relative">
      <div id="header-bleb"></div>
      <header id="header-product" className="position-relative bg-blue-800 text-white w-100">
        <div className="container mx-auto px-4">
          <div id="menu-product" className="py-4">
            <div className="d-table-cell align-middle">
              <a href="https://fazenda.rj.gov.br/" className="flex items-center gap-2">
                <Car className="w-8 h-8" />
                <h1 className="text-2xl font-bold">DARJ IPVA</h1>
              </a>
            </div>
          </div>
        </div>
      </header>
      <h2 className="bg-gray-100 py-2 px-4 text-center text-lg font-medium">
        Consulta de débitos do ipva e emissão de DARJ
      </h2>
    </div>
  );
}