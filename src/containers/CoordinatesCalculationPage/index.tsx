import React from 'react'

import { ICoordinatesCalculationPageProps } from '../../pages/coordinates-calculation'

import useCoordinatesCalculationPage from './useCoordinatesCalculationPage'
import CoordinatesCalculationPageView from './CoordinatesCalculationPageView'

const CoordinatesCalculationPage = (props: ICoordinatesCalculationPageProps) => {
  const state = useCoordinatesCalculationPage(props)
  return <CoordinatesCalculationPageView {...props} {...state} />
}

export default CoordinatesCalculationPage
