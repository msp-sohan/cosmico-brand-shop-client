import axiosPublic from '.'

// save user data in database
export const saveUser = async (user) => {
   const currentUser = {
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL,
      role: 'user',
      status: 'Verified',
   };
   const { data } = await axiosPublic.put(`/users/${user?.email}`, currentUser);
   return data;
};