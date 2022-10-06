import { gql } from "@apollo/client";

export const GET_RELATED_TOPICS = (searchvalue) => gql`
{
  topic(name: "${searchvalue}") {
    name
    id
    stargazerCount
    relatedTopics {
      name
      stargazerCount
    }
  }
}
`;
export default GET_RELATED_TOPICS
