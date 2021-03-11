import styles from '../styles/pages/Home.module.sass'
import { GetServerSideProps } from 'next'
import { ChallengesProvider } from '../contexts/ChallengesContext'
import { CountdownProvider } from '../contexts/CountdownContext'
import Head from 'next/head'
import ChallengeBox from '../components/ChallengeBox'
import CompletedChallenges from '../components/CompletedChallenges'
import Countdown from '../components/Countdown'
import ExperienceBar from '../components/ExperienceBar'
import Profile from '../components/Profile'
import isEmptyObject from '../utils/isEmptyObject'

interface HomeProps {
  level: number
  currentExperience: number
  challengesCompleted: number
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let level: string, currentExperience: string, challengesCompleted: string

  if (isEmptyObject(ctx.req.cookies)) {
    level = '1'
    currentExperience = '0'
    challengesCompleted = '0'
  } else {
    level = ctx.req.cookies.level
    currentExperience = ctx.req.cookies.currentExperience
    challengesCompleted = ctx.req.cookies.challengesCompleted
  }

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>

            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}