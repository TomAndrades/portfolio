import { IconProp } from "@fortawesome/fontawesome-svg-core"

export interface Experiencia {

    id?: number,
    nombreEmpresa: string,
    esTrabajoActual: boolean,
    fechaInicio: Date,
    fechaFin?: Date,
    descripcion: string
}

export interface Tecnologia {

    id?: number,
    nombreTecnologia: IconProp,
    porcentaje: number

}