import React, { Component } from 'react'
import Typography from '../../node_modules/@material-ui/core/Typography'
import Paper from '../../node_modules/@material-ui/core/Paper'
import Border from '../components/border'
import styled from '../../node_modules/styled-components'

const device = {
  mobileS: `(min-width: 320px)`,
  mobileM: `(min-device-width: 375px)`,
  mobileL: `(min-width: 425px)`,
  tablet: `(min-width: 768px)`,
  laptop: `(min-width: 1024px)`,
  laptopL: `(min-width: 1440px)`,
  desktop: `(min-width: 2560px)`
}

const styles = {
  background: {
    backgroundColor: '#0e1e25',
    height: '40vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  paperStyle: {
    height: '55%',
    width: '80%',
    marginTop: '15%'
  }
}

const PaperWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;

  @media ${device.mobileS} {
    margin-top: 10%;
  }

  /* iPhone 6 7 & 8 Landscape */
  @media only screen and ${device.mobileM} and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
    margin-top: 2%;
  }

  /* iPhone X Landscape */
  @media only screen and ${device.mobileM} and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape) {
    margin-top: 2%;
  }
`
export default class Hero extends Component {
  render() {
    return (
      <div style={styles.background}>
        <Paper style={styles.paperStyle} elevation={20}>
          <PaperWrapper>
            <Typography
              variant="display4"
              style={{
                textAlign: 'center',
                color: 'black',
                fontWeight: '250',
                fontSize: '2em'
              }}
            >
              {this.props.text}
              <Border />
            </Typography>
          </PaperWrapper>
        </Paper>
      </div>
    )
  }
}
