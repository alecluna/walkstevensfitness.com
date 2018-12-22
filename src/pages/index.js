import React, { Component } from 'react'
import TextContent from '../components/textcontent'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Footer from '../components/footer'
import Hero from '../components/hero'
import PopUpDialogue from '../components/PopUpDialogue'
import Image from '../components/image'
import Border from '../components/border'

const styles = {
  section: {
    marginTop: '10%',
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    flexWrap: 'wrap',
    paddingBottom: '5%'
  },
  imageText: {
    maxWidth: '80%',
    marginTop: '5%',
    marginBottom: '5%'
  }
}
const fillerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad
minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.Duis aute irure dolor in
  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
pariatur.Excepteur sint occaecat cupidatat non proident, sunt in
  culpa qui officia deserunt mollit anim id est laborum.`

export default class IndexPage extends Component {
  constructor() {
    super()
    this.state = { open: true }
  }

  _handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    const { open } = this.state
    return (
      <div>
        <Dialog
          open={open}
          onClose={this._handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe for updates and deals, please enter your email
              address here!
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this._handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this._handleClose} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>

        <Hero text="Welcome to WalkStevenFitness" />
        <section
          style={{ marginTop: '10%', fontSize: '2em', fontWeight: '200' }}
        >
          <TextContent text="What I Do" />
        </section>
        <Border />
        <section style={styles.section}>
          <div style={{ maxWidth: '50%' }}>
            <Image />
          </div>
          <div style={styles.imageText}>
            <TextContent text={fillerText} />
          </div>
        </section>
        <Border />
        <section style={styles.section}>
          <div style={styles.imageText}>
            <TextContent text={fillerText} />
          </div>
          <div style={{ maxWidth: '50%' }}>
            <Image />
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}
