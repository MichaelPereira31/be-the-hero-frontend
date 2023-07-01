import useTitle from '@/hooks/useTitle'
import HomeScreen from '@/screens/home'

const Home = () => {
  useTitle('Home')

  return <HomeScreen />
}

export default Home
