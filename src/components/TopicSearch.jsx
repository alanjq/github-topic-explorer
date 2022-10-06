import { useQuery } from "@apollo/client";
import GET_RELATED_TOPICS from '../queries/get_related_topics.jsx';
import TopicCard from "./TopicCard.jsx";

export const TopicSearch = ({ value }) => {
  const { loading, error, data } = useQuery(GET_RELATED_TOPICS(value));

  return <div>
    <h1>Topics related to {value}</h1>
    <div>
      {loading && <p>Please wait...</p>}
      {error && <p>No results found.</p>}
    </div>
    {Array.isArray(data?.topic?.relatedTopics) && data.topic.relatedTopics.map((topic) => <TopicCard key={topic.id} data={topic} />)}
  </div>
}
export default TopicSearch
