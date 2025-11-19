import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  const [pegawai, setPegawai] = useState([]);

  const getPegawai = async () => {
    try {
      const response = await axios.get("http://localhost:5000/pegawai");
      setPegawai(response.data);
    } catch (error) {
      console.log(`Gagal membuat data ${error}`);
    }
  };

  useEffect(() => {
    const load = async () => {
      await getPegawai();
    };
    load();
  }, []);

  const deletePegawai = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/pegawai/${id}`);
      getPegawai();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container relative overflow-x-auto bg-white shadow-lg rounded-lg border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Daftar Pegawai
        </h2>
        <Link
          to="add"
          className="bg-indigo-600 text-white hover:bg-indigo-700 font-semibold py-1 px-3 rounded-md transition duration-150 ease-in-out mr-2"
        >
          Tambah Data
        </Link>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              No
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Nama
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Divisi
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Email
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Gender
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {pegawai.map((pegawai, index) => (
            <tr key={pegawai.id || index} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {index + 1}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {pegawai.nama}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {pegawai.divisi}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {pegawai.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {pegawai.gender}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                <Link
                  to={`edit/${pegawai._id}`}
                  className="bg-indigo-600 text-white hover:bg-indigo-700 font-semibold py-1 px-3 rounded-md transition duration-150 ease-in-out mr-2"
                >
                  Edit
                </Link>
                <button
                  className="bg-red-500 text-white hover:bg-red-600 font-semibold py-1 px-3 rounded-md transition duration-150 ease-in-out"
                  onClick={() => deletePegawai(pegawai._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
