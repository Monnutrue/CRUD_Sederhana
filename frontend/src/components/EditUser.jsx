import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

const EditUser = () => {
  const [nama, setNama] = useState("");
  const [divisi, setDivisi] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getUserById = async () => {
      const response = await axios.get(`http://localhost:5000/pegawai/${id}`);
      setNama(response.data.nama);
      setDivisi(response.data.divisi);
      setEmail(response.data.email);
      setGender(response.data.gender);
    };

    getUserById();
  }, [id]);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        nama,
        divisi,
        email,
        gender,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Edit Data Pegawai
        </h2>

        <form onSubmit={updateUser} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Nama</label>
            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Nama"
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Divisi
            </label>
            <input
              type="text"
              value={divisi}
              onChange={(e) => setDivisi(e.target.value)}
              placeholder="Divisi"
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Gender
            </label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-400 outline-none bg-white"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white font-semibold shadow-md"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
