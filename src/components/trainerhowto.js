import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Stepper from '../../node_modules/@material-ui/core/Stepper'
import Step from '../../node_modules/@material-ui/core/Step'
import StepLabel from '../../node_modules/@material-ui/core/StepLabel'
import StepContent from '../../node_modules/@material-ui/core/StepContent'
import Button from '../../node_modules/@material-ui/core/Button'
import Paper from '../../node_modules/@material-ui/core/Paper'
import Typography from '../../node_modules/@material-ui/core/Typography'
import TextContent from './textcontent'

const fillerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.Duis aute irure dolor in
  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
pariatur.Excepteur sint occaecat cupidatat non proident, sunt in
  culpa qui officia deserunt mollit anim id est laborum.`

function getSteps() {
  return [
    'How to Communicate',
    'How do I teach?',
    'What to expect?',
    'How to schedule?',
    'How to get clients?',
    'How to assess clients?',
    'What forms do I need to train?'
  ]
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <TextContent text={fillerText} />
    case 1:
      return <TextContent text={fillerText} />
    case 2:
      return <TextContent text={fillerText} />
    case 3:
      return <TextContent text={fillerText} />
    case 4:
      return <TextContent text={fillerText} />
    case 5:
      return <TextContent text={fillerText} />
    case 6:
      return <TextContent text={fillerText} />
    default:
      return 'Unknown step'
  }
}

export default class TrainerHowTo extends React.Component {
  state = {
    activeStep: 0
  }

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }))
  }

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }))
  }

  handleReset = () => {
    this.setState({
      activeStep: 0
    })
  }

  render() {
    const steps = getSteps()
    const { activeStep } = this.state

    return (
      <div style={{ margin: '20px' }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Typography style={{ marginBottom: '10px' }}>
                    {getStepContent(index)}
                  </Typography>
                  <div>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={this.handleNext}
                      >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            )
          })}
        </Stepper>
        {activeStep === steps.length && (
          <Paper style={{ margin: '20px' }} square elevation={0}>
            <Typography>
              Thats it! - If you would like to go more in-depth, contact me to
              schedule a one-on-one with me for dietary and fitness plans.
            </Typography>
            <Button color="secondary" onClick={this.handleReset}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
    )
  }
}
