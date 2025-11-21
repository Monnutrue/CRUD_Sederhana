import express from "express";
import {
  getPegawai,
  getPegawaiById,
  savePegawai,
  updatePegawai,
  deletePegawai,
} from "../controllers/userController.js";
import dataPegawai from "../controllers/excelController.js";

const router = express.Router();

router.get("/pegawai", getPegawai);
router.get("/pegawai/:id", getPegawaiById);
router.post("/pegawai/", savePegawai);
router.patch("/pegawai/:id", updatePegawai);
router.delete("/pegawai/:id", deletePegawai);
router.get("/api/download", dataPegawai);

export default router;
