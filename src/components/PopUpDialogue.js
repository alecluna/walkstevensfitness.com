import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export default class PopUpDialogue extends Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
    this._handleClose = this._handleClose.bind(this)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ open: true })
    }, 6000)
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
