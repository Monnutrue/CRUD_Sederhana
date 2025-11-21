import ExcelJS from "exceljs";
import userModel from "../models/userModel.js";

const dataPegawai = async (req, res) => {
  try {
    const pegawai = await userModel.find();

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Data Pegawai");

    worksheet.columns = [
      { header: "Nama", key: "nama", width: 15 },
      { header: "Divisi", key: "divisi", width: 20 },
      { header: "Email", key: "email", width: 30 },
      { header: "Gender", key: "gender", width: 15 },
    ];

    pegawai.forEach((s) => {
      worksheet.addRow({
        nama: s.nama,
        divisi: s.divisi,
        email: s.email,
        gender: s.gender,
      });
    });

    const buffer = await workbook.xlsx.writeBuffer();

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );

    res.setHeader(
      "Content-Disposition",
      "attachment; filename=data_pegawai.xlsx"
    );

    await workbook.xlsx.write(res);
    res.send(buffer);
  } catch (error) {
    console.log("Gagal mendownload data : ", error);
    res.status(500).json({ message: error.message });
  }
};

export default dataPegawai;
