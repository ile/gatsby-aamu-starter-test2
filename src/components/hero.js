import React from 'react'
import Img from 'gatsby-image'

import * as styles from './hero.module.css'

export default ({ data }) => (
	  <div className={styles.hero}>
	    <Img className={styles.heroImage} alt={data.name} fluid={data.image.image.childImageSharp.fluid} />
	    <div className={styles.heroDetails}>
	      <h3 className={styles.heroHeadline}>{data.name}</h3>
	      <p className={styles.heroTitle}>{data.title}</p>
	      <p>{data.bio}</p>
	    </div>
	  </div>
	)
