import React, { Component } from 'react'
import Paper from '../../node_modules/@material-ui/core/Paper'
import Border from '../components/border'
import styled from '../../node_modules/styled-components'

const device = {
  mobileS: `(max-device-width < 425px)`,
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
    height: '50%',
    width: '80%',
    marginTop: '15%'
  }
}

const PaperWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const CustomTypography = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: black;
  font-weight: 300;
  font-size: 1.8em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  text-align: center;

  /* iPhone 6 7 & 8 Portrait */
  @media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait) {
    margin-top: 15%;
  }
  /*small devices portriat */
  @media ${device.mobileS} {
    margin-top: 15%;
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
            <CustomTypography>
              {this.props.text}
              <Border />
            </CustomTypography>
          </PaperWrapper>
        </Paper>
      </div>
    )
  }
}
