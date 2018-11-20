import React from 'react'
import Typography from '../../node_modules/@material-ui/core/Typography'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const styles = {
  footerDemensions: {
    height: '120px',
    maxWidth: '100%',
    backgroundColor: '#282828',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  icontStyles: {
    height: '2em',
    width: '2em',
    borderRadius: '50px'
  }
}
export default function Footer() {
  return (
    <div style={{ marginTop: '10%' }}>
      <section style={styles.footerDemensions}>
        <div>
          <Typography style={{ color: 'white' }}> Contact Me:</Typography>
          <Typography style={{ color: 'white' }}> 916-555-55555</Typography>
        </div>
        <div
          style={{
            width: '200px',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center'
          }}
        >
          <div />
          <div>
            <a href="https://www.instagram.com/walkstevens/ ">
              <FaInstagram color="white" size="2em" />
            </a>
          </div>
          <div>
            <a href="https://www.twitter.com">
              <FaTwitter color="white" size="2em" />
            </a>
          </div>
          <div>
            <a href="https://www.facebook.com">
              <FaFacebook color="white" size="2em" />
            </a>
          </div>
        </div>
      </section>
      <div style={{ textAlign: 'center', backgroundColor: '#202020' }}>
        <Typography style={{ color: 'white' }}>
          Created by: Alec Luna @alecluna
        </Typography>
      </div>
    </div>
  )
}
