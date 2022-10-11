import { IconProp, IconName, text } from "@fortawesome/fontawesome-svg-core"


export interface Experiencia {

    id?: number,
    nombreEmpresa: string,
    esTrabajoActual: boolean,
    fechaInicio: Date,
    fechaFin?: Date,
    descripcion: string
}

export interface Estudio {

    id?: number,
    nombreInstituto: string,
    cursandoActualmente: boolean,
    fechaInicio: Date,
    fechaFin?: Date,
    descripcion: string
}

export interface Tecnologia {

    id?: number,
    nombreTecnologia: IconName,
    porcentaje: number

}

export interface Proyecto {

    id?: number,
    nombreProyecto: string,
    descripcion: string,
    urlProyecto: string,
    imgProyecto: string

}