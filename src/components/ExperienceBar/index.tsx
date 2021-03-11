import styles from './styles.module.sass'
import { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengesContext'

export default function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)
  const percentToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel)

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />

        <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  )
}