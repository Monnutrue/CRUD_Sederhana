import mongoose from "mongoose";

const Pegawai = mongoose.Schema({
  nama: {
    type: String,
    require: true,
  },
  divisi: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
});

export default mongoose.model("Pegawai", Pegawai);
