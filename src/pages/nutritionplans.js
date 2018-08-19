import React, { Component } from 'react'
import Link from 'gatsby-link'

export default class Nutritionplans extends Component {
  render() {
    return (
      <div>
        <p>
          <Link to="/courses"> Back Button here </Link>
        </p>
        <li> this page </li>
        <li> is supposed </li>
        <li> to provide </li>
        <li>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScEu6GAJ4UE1FWpzKhJ03nVHckp1b0bRPKHonkG7WQWIlqS9Q/viewform?embedded=true">
            Complete this quick survey so i can larn more about youn
          </a>
          >
        </li>
      </div>
    )
  }
}
