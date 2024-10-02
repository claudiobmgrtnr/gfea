import React, { FC } from 'react'
import styles from './ratingStar.module.css'


interface RatingStarCssProps {
    fill: "half" | "full" | "empty"
}

const RatingStarCss:FC<RatingStarCssProps> = ({ fill }) => {
  return (
    <div className={`${styles[fill]} ${styles.star}`}></div>
  )
}

export default RatingStarCss;