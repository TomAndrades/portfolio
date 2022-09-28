import { Experiencia, Tecnologia } from "./experiencia"

export const EXPERIENCIAS: Experiencia[] = [
    {

        id: 1,
        nombreEmpresa: "Fermi Componentes Electronicos",
        esTrabajoActual: true,
        fechaInicio: new Date("10/03/2021"),
        descripcion: "Instalador Electrico"
    },
    {

        id: 2,
        nombreEmpresa: "VECO",
        esTrabajoActual: false,
        fechaInicio: new Date("01/02/2022"),
        fechaFin: new Date("10/03/2021"),
        descripcion: "Operario Tecnico Electromecanico"
    },
    {

        id: 3,
        nombreEmpresa: "Back Srl",
        esTrabajoActual: false,
        fechaInicio: new Date("10/10/2018"),
        fechaFin: new Date("10/03/2019"),
        descripcion: "Operario"
    }
]

export const TECNOLOGIAS: Tecnologia[] = [
    {
        id: 1,
        nombreTecnologia: "js",
        porcentaje: 60
    },
    {
        id: 2,
        nombreTecnologia: "html",
        porcentaje: 100
    },
    {
        id: 3,
        nombreTecnologia: "css",
        porcentaje: 50
    }
]