
const UserDashboard = () => {
   return (
      <>
         <div>
            <div className="bg-white rounded-full border-none p-3 mb-4 shadow-md">
               <div className="flex items-center">
                  <i className="px-3 fas fa-search ml-1"></i>
                  <input type="text" placeholder="Buscar..." className="ml-3 focus:outline-none w-full" />
               </div>
            </div>
            <div className="lg:flex gap-4 items-stretch">

               <div className="bg-white md:p-2 p-6 rounded-lg border border-gray-200 mb-4 lg:mb-0 shadow-md lg:w-[35%]">
                  <div className="flex justify-center items-center space-x-5 h-full">
                     <div>
                        <p className="text-lg text-cyan-700">Last Payment</p>
                        <h2 className="text-4xl font-bold text-gray-600">50.36</h2>
                     </div>
                     <img src="https://www.emprenderconactitud.com/img/Wallet.png" alt="wallet"
                        className="h-24 md:h-20 w-38" />
                  </div>
               </div>

               <div className="bg-white p-4 rounded-lg xs:mb-4 max-w-full shadow-md lg:w-[65%]">
                  <div className="flex flex-wrap justify-between h-full">
                     <div
                        className="flex-1 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2">
                        <i className="fas fa-hand-holding-usd text-white text-4xl">$250.00</i>
                        <p className="text-white">Total Payment</p>
                     </div>
                     <div
                        className="flex-1 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2">
                        <i className="fas fa-exchange-alt text-white text-4xl">$144.77</i>
                        <p className="text-white">This Month</p>
                     </div>
                     {/* <div
                        className="flex-1 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2">
                        <i className="fas fa-qrcode text-white text-4xl"></i>
                        <p className="text-white">Canjear</p>
                     </div> */}
                  </div>
               </div>
            </div>
            <div className="bg-white rounded-lg p-4 overflow-x-auto shadow-md my-4">
               <table className="table-auto ">
                  <thead>
                     <tr>
                        <th className="px-4 py-2 text-left border-b-2 w-full">
                           <h2 className="text-lg font-bold text-gray-900">Transaction</h2>
                        </th>
                     </tr>
                  </thead>
                  <tbody className="overflow-x-auto">
                     <tr className="border-b w-full">
                        <td className="px-4 py-2 text-left align-top w-1/2">
                           <div>
                              <h2>L{"'"}Oréal Voluminous Mascara</h2>
                              <p>11/12/2023</p>
                           </div>
                        </td>
                        <td className="px-4 py-2 text-right text-cyan-500 w-1/2">
                           <p><span>150$</span></p>
                        </td>
                     </tr>
                     <tr className="border-b w-full">
                        <td className="px-4 py-2 text-left align-top w-1/2">
                           <div>
                              <h2>AVON Far Away Eau de Parfum</h2>
                              <p>11/12/2023</p>
                           </div>
                        </td>
                        <td className="px-4 py-2 text-right text-cyan-500 w-1/2">
                           <p><span>15$</span></p>
                        </td>
                     </tr>
                     <tr className="border-b w-full">
                        <td className="px-4 py-2 text-left align-top w-1/2">
                           <div>
                              <h2>CHANEL Le Rouge Lipstick</h2>
                              <p>11/12/2023</p>
                           </div>
                        </td>
                        <td className="px-4 py-2 text-right text-cyan-500 w-1/2">
                           <p><span>50$</span></p>
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </>
   );
};

export default UserDashboard;