import { provideApolloClient, useQuery } from "@vue/apollo-composable";

import { subjectsPaginate } from "src/graphql/user/queries";

import apolloClient from "src/apollo/apollo-client";

provideApolloClient(apolloClient);

const paginateSubjects = () => {
  return useQuery(
    subjectsPaginate,
    {
      page: 1,
      perPage: 1,
      where: {
        column: "user_id",
        operator: "EQ",
        value: JSON.parse(localStorage.getItem("user-data")).user_id,
      },
    },
    process.env.MAIN_SPACE_ID
  );
};

const logout = () => {
  // tokenApi.remove();

  localStorage.removeItem("user-data");
};

const userApi = { paginateSubjects, logout };

export default userApi;
