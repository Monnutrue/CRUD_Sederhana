import express from "express";
import multer from "multer";
import {
  getPegawai,
  getPegawaiById,
  savePegawai,
  updatePegawai,
  deletePegawai,
} from "../controllers/userController.js";
import dataPegawai from "../controllers/excelController.js";
import uploadData from "../controllers/uploadController.js";

const router = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/")
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
})
const upload = multer({storage});

router.get("/pegawai", getPegawai);
router.get("/pegawai/:id", getPegawaiById);
router.post("/pegawai/", savePegawai);
router.patch("/pegawai/:id", updatePegawai);
router.delete("/pegawai/:id", deletePegawai);
router.get("/api/download", dataPegawai);
router.post("/api/upload-excel", upload.single("excell"), uploadData);

export default router;
