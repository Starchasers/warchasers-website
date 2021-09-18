import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import TextField from '@mui/material/TextField'
import React from 'react'

import { ICoordinatesCalculationPageProps } from '../../pages/coordinates-calculation'
import { ICoordinatesCalculationPageStateProps } from './useCoordinatesCalculationPage'

import ContentPage from '../../components/blocks/ContentPage'
import PageNavigation from '../../components/elements/PageNavigation'
import options from '../../assets/configs/contentfulRichTextOptions'
import Button from '@mui/material/Button'
import CoordinatesBlock from '../../components/blocks/CoordinatesBlock'
import { Controller } from 'react-hook-form'
import { css } from '@emotion/css'

interface ICoordinatesCalculationPageViewProps
  extends ICoordinatesCalculationPageProps,
    ICoordinatesCalculationPageStateProps {}

const CoordinatesCalculationPageView = (props: ICoordinatesCalculationPageViewProps) => (
  <ContentPage>
    <ContentPage.Container>
      <PageNavigation
        contentPages={props.layout.fields.contentPages}
        activePage={props.contentPage}
      />
      <ContentPage.DocumentContainer>
        {documentToReactComponents(props.contentPage.fields.content, options)}
        <form onSubmit={props.form.handleSubmit(props.onSubmit)}>
          <CoordinatesBlock>
            <Controller
              control={props.form.control}
              name={'x'}
              render={(renderProps) => (
                <TextField
                  label='Coord: X'
                  variant='outlined'
                  color='primary'
                  type='number'
                  error={renderProps.fieldState.invalid}
                  {...renderProps.field}
                  value={renderProps.field.value ?? ''}
                  className={css`
                    grid-area: x;
                  `}
                />
              )}
            />
            <Controller
              control={props.form.control}
              name={'y'}
              render={(renderProps) => (
                <TextField
                  label='Coord: Z'
                  variant='outlined'
                  color='primary'
                  type='number'
                  error={renderProps.fieldState.invalid}
                  {...renderProps.field}
                  value={renderProps.field.value ?? ''}
                  className={css`
                    grid-area: y;
                  `}
                />
              )}
            />
            <Button
              variant='contained'
              type='submit'
              className={css`
                grid-area: button;
              `}
            >
              Oblicz
            </Button>
            <div
              className={css`
                grid-area: message;
              `}
            >
              {typeof props.inAllowedRange === 'boolean' ? (
                props.inAllowedRange ? (
                  <p>{props.coordinatesConfiguration.fields.trueMessage}</p>
                ) : (
                  <p>{props.coordinatesConfiguration.fields.falseMessage}</p>
                )
              ) : null}
            </div>
          </CoordinatesBlock>
        </form>
      </ContentPage.DocumentContainer>
    </ContentPage.Container>
  </ContentPage>
)

export default CoordinatesCalculationPageView
