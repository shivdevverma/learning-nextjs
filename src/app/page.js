import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1> Home Page</h1>
      <Link href="/login"> Login </Link> <br />
      <Link href="/about"> About </Link><br />
      <Link href="/about/aboutstudent"> About Student </Link><br />
      <Link href="/about/aboutcollege"> About College </Link>
    </main>
  )
}
