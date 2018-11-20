import React from 'react'
import Typography from '../../node_modules/@material-ui/core/Typography'

const styles = {
  footerDemensions: {
    height: '150px',
    backgroundColor: '#282828'
  }
}
export default function Footer() {
  return (
    <div style={{ marginTop: '10%' }}>
      <section style={styles.footerDemensions}>
        <Typography> Test</Typography>
      </section>
      <div style={{ textAlign: 'center', backgroundColor: '#202020' }}>
        <Typography style={{ color: 'white' }}>
          Created by: Alec Luna @alecluna
        </Typography>
      </div>
    </div>
  )
}
