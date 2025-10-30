import React from 'react';
import Layout from './components/layout/Layout';
import InsuranceForm from './components/Insurance/InsuranceForm';
import Card from './components/common/Card';

function App() {

  return (
  <>
   <Layout>
      <Card 
        title="Cotizador de Seguros" 
        width="max-w-lg mx-auto" 
        headerColor="bg-indigo-600 text-white"
      >
        <InsuranceForm />
      </Card>
    </Layout>
  </>
  )
}

export default App
