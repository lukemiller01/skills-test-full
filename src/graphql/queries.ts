import { gql } from "@apollo/client";

export const launchesQuery = gql`
  query Query {
    launchesPast {
      id
      launch_date_utc
    }
  }
`;
