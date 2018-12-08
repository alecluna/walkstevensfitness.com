import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

export default class PopUpDialogue extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Dialog
          onOpen={this.props.open}
          onClose={this._handleClose}
          aria-labelledby="form-dialog-title"
        />
      </div>
    )
  }
}

{
  /* <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
  <DialogContent>
    <DialogContentText>
      To subscribe to this website, please enter your email address
      here. We will send updates occasionally.
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
  </DialogActions> */
}
