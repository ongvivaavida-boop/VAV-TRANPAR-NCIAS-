
import { Accordion } from './components/Accordion';
import { DocumentLink } from './components/DocumentLink';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Header / Logo Area */}
      <header className="py-8 px-4 text-center bg-white shadow-sm mb-6">
        <div className="flex justify-center items-center mb-2">
          {/* Logo VAV */}
          <div className="flex flex-col items-center">
            <img src="/Design sem nome.png" alt="Logo Viva a Vida" className="h-64 w-auto mb-4 object-contain" />
            <h1 className="text-4xl font-bold text-blue-600 tracking-tight">Viva Vida</h1>
            <p className="text-xl text-gray-500 font-medium">Transparências</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 pb-12 space-y-4">

        {/* Balanço VAV - Blue Container */}
        <Accordion title="Balanço VAV" className="bg-blue-600">
          <div className="space-y-2">
            <Accordion title="Balanço 2024" className="bg-yellow-400 text-blue-900 hover:bg-yellow-500">
              <DocumentLink title="Balanço e DRE 2024" href="/BALANCO_E_DRE_VIVA_A_VIDA_2024_assinado.pdf" />
            </Accordion>

            <Accordion title="Balanço 2023" className="bg-yellow-400 text-blue-900 hover:bg-yellow-500">
              <DocumentLink title="Balanço 2023 Assinado" href="/BALANCO_2023_assinado.pdf" />
            </Accordion>

            <Accordion title="Balanço 2022" className="bg-yellow-400 text-blue-900 hover:bg-yellow-500">
              <DocumentLink title="Balanço 2022" href="/VAV. Balanço 2022.pdf" />
            </Accordion>
          </div>
        </Accordion>

        {/* Transparência / VAV / SEDES - Blue */}
        <Accordion title="Transparência / VAV / SEDES – Fundo Municipal da Criança e do Adolescente de Camaçari 2025" className="bg-blue-700">
          <div className="space-y-2">
            <Accordion title="Declaração de Transparência" className="bg-yellow-400 text-blue-900 hover:bg-yellow-500">
              <DocumentLink title="Declaração de Transparência" href="/VAV.28.11.TRANSPARENCIA_assinado (2).pdf" />
            </Accordion>

            <Accordion title="Plano de Trabalho" className="bg-yellow-400 text-blue-900 hover:bg-yellow-500">
              <DocumentLink title="Plano de Trabalho" href="/19.11 VAV.PLANO DE TRABALHO.pdf" />
            </Accordion>

            <Accordion title="Diário Oficial" className="bg-yellow-400 text-blue-900 hover:bg-yellow-500">
              <DocumentLink title="Diário Oficial" href="/diario oficial.pdf" />
            </Accordion>

            <Accordion title="Cronograma VAV" className="bg-yellow-400 text-blue-900 hover:bg-yellow-500">
              <DocumentLink title="Cronograma VAV" href="/CRONOGRAMA VAV.pdf" />
            </Accordion>

            <Accordion title="Planejamento G2 e G3 (Fev - Jun)" className="bg-yellow-400 text-blue-900 hover:bg-yellow-500">
              <DocumentLink title="Planejamento G2 e G3 (Fev - Jun)" href="/G2 e G3 FEV A JUN - planejamento (1).pdf" />
            </Accordion>

            <Accordion title="Planejamento G4 e G5 (Fev - Jun)" className="bg-yellow-400 text-blue-900 hover:bg-yellow-500">
              <DocumentLink title="Planejamento G4 e G5 (Fev - Jun)" href="/G4 e G5 FEV A JUN - planejamento.pdf" />
            </Accordion>

            <Accordion title="Planejamento 1º Ano (Fev - Jun)" className="bg-yellow-400 text-blue-900 hover:bg-yellow-500">
              <DocumentLink title="Planejamento 1º Ano (Fev - Jun)" href="/1º ano FEV A JUN - planejamento.pdf" />
            </Accordion>

            <Accordion title="Planejamento 2º e 3º Ano (Fev - Jun)" className="bg-yellow-400 text-blue-900 hover:bg-yellow-500">
              <DocumentLink title="Planejamento 2º e 3º Ano (Fev - Jun)" href="/2º e 3º ano FEV A JUN - planejamento.pdf" />
            </Accordion>

            <Accordion title="Planejamento 4º e 5º Ano (Fev - Jun)" className="bg-yellow-400 text-blue-900 hover:bg-yellow-500">
              <DocumentLink title="Planejamento 4º e 5º Ano (Fev - Jun)" href="/4º e 5º ano FEV A JUN - planejamento.pdf" />
            </Accordion>
          </div>
        </Accordion>

        {/* Transparência / VAV / SEADES - Blue */}
        <Accordion title="Transparência / VAV / SEADES - Governo do Estado da Bahia 2024" className="bg-blue-700">
          <div className="space-y-2">
            <Accordion title="Transparência VAV / SEADES" className="bg-yellow-400 text-blue-900 hover:bg-yellow-500">
              <DocumentLink title="Transparência VAV / SEADES" href="/VaV.Transparencia SEADES .pdf" />
            </Accordion>
          </div>
        </Accordion>

      </main>
    </div>
  );
}

export default App;
