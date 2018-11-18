import React from 'react'

const styles = {
  listBorder: {
    borderBottom: '.5px solid slategrey'
  }
}

export default function Border() {
  return (
    <div>
      <div style={styles.listBorder} />
    </div>
  )
}
