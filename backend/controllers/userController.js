import Pegawai from "../models/userModel.js";

export const getPegawai = async (req, res) => {
  try {
    const pegawai = await Pegawai.find();
    res.json(pegawai);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPegawaiById = async (req, res) => {
  try {
    const pegawaiID = await Pegawai.findById(req.params.id);
    res.json(pegawaiID);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const savePegawai = async (req, res) => {
  const pegawai = new Pegawai(req.body);
  try {
    const insertedPegawai = await pegawai.save();
    res.status(201).json(insertedPegawai);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updatePegawai = async (req, res) => {
  try {
    const insertedPegawai = await Pegawai.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(insertedPegawai);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deletePegawai = async (req, res) => {
  try {
    const deletedPegawai = await Pegawai.deleteOne({ _id: req.params.id });
    res.status(200).json(deletePegawai);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
