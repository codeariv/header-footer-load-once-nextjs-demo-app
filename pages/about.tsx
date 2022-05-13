import styles from '../styles/Home.module.css'

export default function About(props: { description: string }) {
  return (
    <div className={styles.container}>
      <h2>About page</h2>
      <p>{props?.description}</p>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/about`)
  const data = await res.json()

  return { props: { description: data.description } }
}