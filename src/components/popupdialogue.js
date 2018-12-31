import React, { Component } from 'react'
import Dialog from '../../node_modules/@material-ui/core/Dialog'
import DialogActions from '../../node_modules/@material-ui/core/DialogActions'
import DialogContent from '../../node_modules/@material-ui/core/DialogContent'
import DialogContentText from '../../node_modules/@material-ui/core/DialogContentText'
import DialogTitle from '../../node_modules/@material-ui/core/DialogTitle'
import TextField from '../../node_modules/@material-ui/core/TextField'
import Button from '../../node_modules/@material-ui/core/Button'

export default class PopUpDialogue extends Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
    this._handleClose = this._handleClose.bind(this)
  }

  componentDidMount() {
    this.popUp = setTimeout(() => {
      this.setState({ open: true })
    }, 6000)
  }

  componentWillUnmount() {
    //fix memory leak, unmount timer
    clearTimeout(this.popUp)
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
              If you would like to subscribe to occasional updates on plans and
              other offers, please enter your email address here!
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
            <Button onClick={this.handleClose} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}
