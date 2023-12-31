import { } from 'react'
import ImgMapaPoluicao from '../../assets/Mapa-Poluicao.png'
import ImgRanking from '../../assets/ranking-poluicao.png'
import styles from './MapaPoluicao.module.css'

const MapaPoluicao = () => {
    return (
        <>
            <section className={styles.MapaPoluicao}>
                <img className={styles.ImgMapaPoluicao} src={ImgMapaPoluicao} alt="" />
                <div className={styles.ImgRanking}>
                    <h1>Paises com os piores indices de qualidade do ar</h1>
                    <img src={ImgRanking} alt="" />
                </div>
            </section>
        </>
    )
}

export default MapaPoluicao

