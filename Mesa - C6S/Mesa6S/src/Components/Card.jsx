import React from 'react'
import styles from '../styles/styles.css'

const Title = styled.h1`
    background-color: rgba(200, 200, 200, 0.8);
`;

const Paragraph = styled.p`
    background-color: rgba(200, 200, 200, 0.8);
`

const Card = ({info}) => {

    if (info.country == "AR"){
        
        return (
            <div key={info.id} className={styles.container}>
                <div className={styles.imagen}>
                    <img src={info.img} alt={info.city} />
                </div>
                <div className={styles.info}>
                    <Title>{info.city}</Title>
                    <Paragraph>Population: {info.population}</Paragraph>
                </div>
            </div>
        )
    }    

}

export default Card