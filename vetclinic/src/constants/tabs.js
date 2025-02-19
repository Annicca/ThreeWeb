import diagnosticsImage from "../assets/diagnostics.jpg";
import laboratoryImage from "../assets/laboratory.jpg";
import medicalExaminationImage from "../assets/medical-examination.jpg";
import surgeryImage from "../assets/surgery.jpg";
import therapyImage from "../assets/therapy.jpg";

export const TABS = [
  {
    id: "diagnostics",
    title: "Диагностические услуги",
    dataUrl: "/data/diagnostics.json",
    imageUrl: diagnosticsImage,
  },
  {
    id: "laboratory",
    title: "Лабораторные исследования",
    dataUrl: "/data/laboratory.json",
    imageUrl: laboratoryImage,
  },
  {
    id: "medical-examination",
    title: "Диспансеризация",
    dataUrl: "/data/medical-examination.json",
    imageUrl: medicalExaminationImage,
  },
  {
    id: "surgery",
    title: "Хирургия и Стоматология",
    dataUrl: "/data/surgery.json",
    imageUrl: surgeryImage,
  },
  {
    id: "therapy",
    title: "Терапия",
    dataUrl: "/data/therapy.json",
    imageUrl: therapyImage,
  },
];
