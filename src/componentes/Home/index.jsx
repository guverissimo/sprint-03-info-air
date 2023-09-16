import {} from 'react'
import AppStore from '../../assets/AppStore.png'
import GooglePlay from '../../assets/googlePlay.png'
import styles from './Home.module.css'

const Home = () => {

    return (
        <>
            <section className={styles.home__container}>
                <div className={styles.home__title}>
                    <h1 >Baixe nosso aplicativo</h1>
                    <p>e obtenha atualizações diárias</p>
                </div>
                <div className={styles.imgs}>
                    <a href="https://www.apple.com/br/app-store/" target='blank'><img className={styles.img} src={AppStore} alt="Link para baixar na Appstore" /></a>
                    <a href="https://play.google.com/store/games?device=windows&&utm_source=latam_Med&utm_medium=hasem&utm_content=Dec1622&utm_campaign=Evergreen&pcampaignid=MKT-EDR-latam-br-1000189-Med-hasem-py-Evergreen-Dec1622-Text_Search_BKWS-id_102353_%7CEXA%7CONSEM_kwid_43700074624718464&gclid=CjwKCAjwpJWoBhA8EiwAHZFzfkBX9Ryr--5OkboRyhUVJnTj1ZsjglMlomTqIseVJPJXa7bmQu3xFBoCiQoQAvD_BwE&gclsrc=aw.ds&pli=1" target='blank'><img className={styles.img} src={GooglePlay} alt="Link para baixar na GooglePlay" /></a>
                </div>
            </section>
        </>
    )
}

export default Home