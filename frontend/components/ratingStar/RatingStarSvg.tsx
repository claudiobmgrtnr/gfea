import React, { FC } from 'react'
import styles from './ratingStar.module.css'
import StarIconFull from './starIconFull.svg'
import StarIconLeft from './starIconLeft.svg'
import StarIconRight from './starIconRight.svg'


interface RatingStarSvgProps {
    fill: "half" | "full" | "empty"
}

const RatingStarSvg: FC<RatingStarSvgProps> = ({ fill }) => {
    switch (fill) {
        case "full":
            return <StarIconFull className={`${styles.starSvg} ${styles.svgFull}`} />
        case "half":
            return (
                <div className={styles.svgHalf}>
                    <StarIconLeft className={styles.svgLeft} />
                    <StarIconRight className={styles.svgRight} />
                </div>
            )
        case "empty":
            return <StarIconFull className={`${styles.starSvg} ${styles.svgEmpty}`}/>
        default:
            return null
    }
}

export default RatingStarSvg;