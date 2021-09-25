import React from 'react'

import { IWarTeamsPageProps } from '../../pages/teams'

import useWarTeamsPage from './useWarTeamsPage'
import WarTeamsPageView from './WarTeamsPageView'

const WarTeamsPage = (props: IWarTeamsPageProps) => {
  const state = useWarTeamsPage(props)
  return <WarTeamsPageView {...props} {...state} />
}

export default WarTeamsPage
