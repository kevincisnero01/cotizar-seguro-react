import React from 'react';

const InsuranceForm = () =>{
  return (
  <>
    <form class="w-full max-w-sm mx-auto p-6 bg-white shadow-lg rounded-lg">
      
  <div class="mb-4">
    <label
      for="insuranceType"
      class="block text-sm font-medium text-gray-700 mb-1"
    >
      Selecciona el Tipo de Seguro
    </label>
    <select
      id="insuranceType"
      name="insuranceType"
      class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md shadow-sm"
    >
      <option value="">Selecciona una opción</option>
      <option value="americano">Americano</option>
      <option value="europeo">Europeo </option>
      <option value="asiatico">Asiatico </option>
    </select>
  </div>


  <div class="mb-6">
    <label
      for="yearCar"
      class="block text-sm font-medium text-gray-700 mb-1"
    >
      Año del Vehículo
    </label>
    <select
      id="yearCar"
      name="yearCar"
      class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md shadow-sm"
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
  </div>
  
  <div className="mb-6 flex items-center gap-6 ">
    <label
      for="plan1"
      class="text-sm font-medium text-gray-700 mb-2"
    >
    Plan Basico:
    </label>
    <input 
      type="radio"
      name="plan" id="plan1"
      value="basic"
      class="ml-1 text-indigo-600 focus:ring-indigo-500"
    />
    
    
    <label
      for="plan2"
      class="text-sm font-medium text-gray-700 mb-2 cursor-pointer"
    >
      Plan Completo:
    </label>
    <input 
      type="radio"
      name="plan" id="plan2"
      value="complete"
      className="ml-1 text-indigo-600 focus:ring-indigo-500"
    />
  </div>
  
  <button
    type="submit"
    class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  >
     Cotizar
  </button>
</form>

  </>
  );
};

export default InsuranceForm;