import React,{ useState } from 'react';

const InsuranceForm = () =>{
  
  //definir el state
  const [data, setData] = useState({
    brand: '',
    year: '',
    plan: ''
  });

  // extraer valores de state
  const { brand, year, plan } = data;

  // handle generico para todos los campos 
  const handleInputChange = e =>{
    setData({
      ...data, [e.target.name] : e.target.value
    })
  }

  return (
  <>
  <form className="w-full mx-auto">
    <div className="grid grid-cols-[15%_75%] gap-4 mb-4 items-center">
      <label
        htmlFor="brand"
        className="block text-sm font-medium text-gray-700 md:text-right md:pr-4"
      >
        Marca
      </label>

      <select
        id="brand" name="brand" value={brand}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md shadow-sm"
        onChange={handleInputChange}
      >
        <option value="">Selecciona una opción</option>
        <option value="americano">Americano</option>
        <option value="europeo">Europeo</option>
        <option value="asiatico">Asiatico</option>
      </select>
    
      <label
        htmlFor="year"
        className="block text-sm font-medium text-gray-700 md:text-right md:pr-4"
      >
        Año 
      </label>
      
      <select
        id="year" name="year" value={year}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md shadow-sm"
        onChange={handleInputChange}
      >
        <option value="">Selecciona el año</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
        <option value="2016">2016</option>
        <option value="2015">2015</option>
        <option value="2014">2014</option>
        <option value="2013">2013</option>
        <option value="2012">2012</option>
      </select>
    
      <label className="block text-sm font-medium text-gray-700 md:text-right md:pr-4">
        Plan
      </label>
      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <input 
            type="radio" id="plan1" name="plan" value="basic" 
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" 
            onChange={handleInputChange} checked={plan == 'basic'}
          />
          <label htmlFor="plan1" className="ml-2 block text-sm text-gray-900">
            Básico
          </label>
        </div>
        <div className="flex items-center">
          <input 
            type="radio" id="plan2" name="plan" value="complete" 
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" 
            onChange={handleInputChange} checked={plan == 'complete'}
          />
          <label htmlFor="plan2" className="ml-2 block text-sm text-gray-900">
            Completo
          </label>
        </div>
      </div>
    </div>

    <div className="mt-8">
      <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Cotizar
      </button>
    </div>
  </form>

  </>
  );
};

export default InsuranceForm;