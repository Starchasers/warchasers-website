import * as yup from 'yup'

export type CoordinatesCalculationSchemaType = {
  x: number
  y: number
}

export const coordinatesCalculationSchema: yup.SchemaOf<CoordinatesCalculationSchemaType> =
  yup.object({
    x: yup.number().required(),
    y: yup.number().required()
  })
