import React, { Component } from 'react'
import Card from '../../node_modules/@material-ui/core/Card'
import Typography from '../../node_modules/@material-ui/core/Typography'
import List from '../../node_modules/@material-ui/core/List'
import ListItem from '../../node_modules/@material-ui/core/ListItem'
import ListItemText from '../../node_modules/@material-ui/core/ListItemText'
import Divider from '../../node_modules/@material-ui/core/Divider'

const styles = {
  card: {
    maxWidth: 500,
    alignSelf: 'center',
    margin: '30px'
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  }
}

//TODO implement a list behind the card using CSS animations
export default class CardComponentList extends Component {
  render() {
    return (
      <div>
        <Card style={styles.card}>
          <List component="nav">
            <ListItem button>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Drafts" />
            </ListItem>
          </List>
          <Divider />
          <List component="nav">
            <ListItem button>
              <ListItemText primary="Trash" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Spam" />
            </ListItem>
          </List>
        </Card>
      </div>
    )
  }
}
