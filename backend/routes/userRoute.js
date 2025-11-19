import express from "express";
import {
  getPegawai,
  getPegawaiById,
  savePegawai,
  updatePegawai,
  deletePegawai,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/pegawai", getPegawai);
router.get("/pegawai/:id", getPegawaiById);
router.post("/pegawai/", savePegawai);
router.patch("/pegawai/:id", updatePegawai);
router.delete("/pegawai/:id", deletePegawai);

export default router;
