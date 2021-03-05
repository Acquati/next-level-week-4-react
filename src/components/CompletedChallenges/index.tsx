import styles from './styles.module.sass'

export default function CompletedChallenges() {
  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios Completos</span>
      <span>5</span>
    </div>
  )
}