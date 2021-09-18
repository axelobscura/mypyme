import Head from 'next/head';
import styles from '../../styles/Home.module.css';

export default function LayoutDashboard({children}){
  return(
    <div>
      <Head>
        <title>CÁMARA DE COMERCIO SERVICIOS Y TURISMO DE QUERÉTARO</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;600&display=swap" rel="stylesheet" /> 
      </Head>

      {children}

      <footer className={styles.footer}>
        <h5>MYPYME DIGITAL</h5>
        <h6>CÁMARA DE COMERCIO SERVICIOS Y TURISMO DE QUERÉTARO</h6>
        <p>442 824 2050 | mypymes.010@gmail.com</p>
      </footer>
    </div>
  )
}