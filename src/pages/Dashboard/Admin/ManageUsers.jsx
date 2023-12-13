import useAllUser from "../../../hooks/useAllUser";

const ManageUsers = () => {
   const { data: allUsers = [] } = useAllUser()
   return (
      <>
         <div className="w-full">
            <div className="my-5">
               <h2 className="text-3xl text-center font-semibold">Manage Users</h2>
            </div>
            <div className="w-full overflow-x-auto">
               <table className="border-collapse w-full table-auto">
                  <thead>
                     <tr>
                        <th className="p-3 border border-gray-500">
                           <input type="checkbox" name="" id="" />
                        </th>
                        <th className="p-3 border border-gray-500">Image</th>
                        <th className="p-3 border border-gray-500">Name</th>
                        <th className="p-3 border border-gray-500">Email</th>
                        <th className="p-3 border border-gray-500">Role</th>
                        <th className="p-3 border border-gray-500">Status</th>
                        <th className="p-3 border border-gray-500">Action</th>
                     </tr>
                  </thead>
                  <tbody>
                     {
                        allUsers?.map((user, index) => <tr key={user?._id} className="bg-white">
                           <td className=" p-3 text-gray-800 text-center border border-b">
                              {index + 1}
                           </td>
                           <td className="flex justify-center items-center p-2 border border-b">
                              <img src={user?.image} alt="" className="w-16 h-16 rounded-full" />
                           </td>
                           <td className=" p-3 text-gray-800 text-center border border-b">
                              {user?.name}
                           </td>
                           <td className=" p-3 text-gray-800 text-center border border-b">
                              {user?.email}
                           </td>
                           <td className=" p-3 text-gray-800 text-center border border-b">
                              <p className={`${user?.role === "admin" ? "bg-yellow-400 text-black" : "bg-blue-400 text-white"} rounded-full p-1`}>{user?.role}</p>
                           </td>
                           <td className="p-3 text-gray-800   text-center border border-b">
                              <p className="bg-green-400 rounded-full text-white p-1">{user?.status}</p>
                           </td>
                           <td className="p-3 text-gray-800 space-x-5 space-y-3 md:space-y-0 text-center border border-b">
                              <button className="text-blue-600 underline hover:text-blue-800 font-medium">Edit</button>
                              <button className="text-blue-600 underline hover:text-blue-800 font-medium">Delete</button>
                           </td>
                        </tr>)
                     }
                  </tbody>
               </table>
            </div>
         </div>
      </>
   );
};

export default ManageUsers;