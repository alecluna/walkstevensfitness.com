import React from 'react'

const Image = ({ image }) => (
  <div>
    <img
      style={{ width: '500px' }}
      className="grow"
      src={image}
      alt="Fitness Card Component"
    />
  </div>
)

export default Image
