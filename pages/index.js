import Layout from './components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <img src="/logo.svg" alt="Cámara de comercio servicios y turismo de querétaro" title="Cámara de comercio servicios y turismo de querétaro" style={{
          'width':'200px'
        }} />
      </main>
    </Layout>
  )
}
