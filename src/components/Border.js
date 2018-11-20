import React from 'react'

const styles = {
  listBorder: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
    borderBottom: '1px solid slategrey'
  }
}

export default function Border() {
  return (
    <div>
      <div style={styles.listBorder} />
    </div>
  )
}
