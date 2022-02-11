import axios from 'axios';

const usersUrl = 'https://test-server-neyyar.herokuapp.com/api/admin/v1';


export const getUsers = async () => {
    // id = id || '';
    return await axios.get(`${usersUrl}/meeting`);
    console.log(usersUrl)
}

export const addUser = async (user) => {
    return await axios.post(`${usersUrl}/meeting`, user);
}

// export const deleteUser = async (id) => {
//     return await axios.delete(`${usersUrl}/${id}`);
// }

// export const editUser = async (id, user) => {
//     return await axios.put(`${usersUrl}/${id}`, user)
// }