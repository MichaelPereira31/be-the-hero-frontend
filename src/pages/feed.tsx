import useTitle from '@/hooks/useTitle'
import FeedScreen from '@/screens/feed'

const Feed = () => {
  useTitle('Feed')

  return <FeedScreen />
}

export default Feed
