import Layout from './components/Layout';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <Link href="/dashboard">
          <img src="/logo.jpg" alt="Cámara de comercio servicios y turismo de querétaro" title="Cámara de comercio servicios y turismo de querétaro" style={{
            'width':'200px'
          }} />
        </Link>
      </main>
    </Layout>
  )
}
