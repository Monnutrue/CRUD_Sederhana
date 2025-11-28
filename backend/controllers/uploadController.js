import ExcelJS from "exceljs";
import Pegawai from "../models/userModel.js";

const uploadData = async (req, res) => {
  try {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(req.file.path);

    const worksheet = workbook.worksheets[0];
    const result = [];

    worksheet.eachRow((row, rowNumber) => {
      if (rowNumber == 1) return;

      result.push({
        nama: row.getCell(1).value,
        divisi: row.getCell(2).value,
        email: row.getCell(3).value,
        gender: row.getCell(4).value,
      });
    });

    await Pegawai.insertMany(result);

    res.json({ message: "Excel berhasil disimpan" });
    res.end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default uploadData;
