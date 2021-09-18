import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useState } from 'react'
import { useForm, UseFormReturn } from 'react-hook-form'
import { ICoordinatesCalculationPageProps } from '../../pages/coordinates-calculation'
import { coordinatesCalculationSchema, CoordinatesCalculationSchemaType } from './formSchema'

export interface ICoordinatesCalculationPageStateProps {
  form: UseFormReturn<CoordinatesCalculationSchemaType>
  inAllowedRange: boolean | null
  onSubmit: (data: CoordinatesCalculationSchemaType) => void
}

const useCoordinatesCalculationPage = (
  props: ICoordinatesCalculationPageProps
): ICoordinatesCalculationPageStateProps => {
  const [inAllowedRange, setInAllowedRange] = useState<boolean | null>(null)

  const jsFunction: (x: number, y: number) => boolean = eval(
    props.coordinatesConfiguration.fields.jsFunctioon
  )

  const form = useForm<CoordinatesCalculationSchemaType>({
    resolver: yupResolver(coordinatesCalculationSchema)
  })

  const onSubmit = (data: CoordinatesCalculationSchemaType) => {
    try {
      const isValid = jsFunction(data.x, data.y)

      if (typeof isValid !== 'boolean') {
        console.error('Provided function did not return boolean value')
        return
      }

      setInAllowedRange(isValid)
    } catch (e) {
      console.error(props.coordinatesConfiguration.fields.jsFunctioon, e)
    }
  }

  return {
    form,
    inAllowedRange,
    onSubmit
  }
}

export default useCoordinatesCalculationPage
