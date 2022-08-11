import { Experiencia } from "./experiencia"

export const EXPERIENCIAS: Experiencia[] = [
    {

        id: 1,
        nombreEmpresa: "Fermi Componentes Electronicos",
        esTrabajoActual: true,
        fechaInicio: new Date(10 / 3 / 2021),
        descripcion: "Instalador Electrico"
    },
    {

        id: 2,
        nombreEmpresa: "VECO",
        esTrabajoActual: false,
        fechaInicio: new Date(1 / 2 / 2022),
        fechaFin: new Date(10 / 3 / 2021),
        descripcion: "Operario Tecnico Electromecanico"
    },
    {

        id: 3,
        nombreEmpresa: "Back Srl",
        esTrabajoActual: true,
        fechaInicio: new Date(10 / 10 / 2018),
        fechaFin: new Date(10 / 3 / 2019),
        descripcion: "Operario"
    }
]