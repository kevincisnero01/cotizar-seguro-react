import React from 'react';
import Layout from './components/layout/Layout';
import InsuranceForm from './components/Insurance/InsuranceForm';

function App() {

  return (
  <>
   <Layout>
      <div>
          <h1 className="text-xl md:text-3xl font-bold text-gray-800 px-2 mb-2 md:mb-6 flex items-center ">
          Cotizar Seguro
          </h1>
          <div className="bg-red-white p-6 rounded-none md:rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl h-full">
            <InsuranceForm/>
          </div>
        </div>
    </Layout>
  </>
  )
}

export default App
