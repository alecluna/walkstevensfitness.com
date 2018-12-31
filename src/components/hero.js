import React, { Component } from 'react'
import Typography from '../../node_modules/@material-ui/core/Typography'
import Paper from '../../node_modules/@material-ui/core/Paper'
import Border from '../components/border'

const styles = {
  background: {
    backgroundColor: '#0e1e25',
    height: '40vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  paperStyle: {
    height: '60%',
    width: '80%',
    marginTop: '15%'
  }
}

export default class Hero extends Component {
  render() {
    return (
      <div style={styles.background}>
        <Paper style={styles.paperStyle} elevation={20}>
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Typography
              variant="display4"
              style={{ color: 'black', fontWeight: '200', fontSize: '2em' }}
            >
              {this.props.text}
            </Typography>
            <Border />
          </div>
        </Paper>
      </div>
    )
  }
}
