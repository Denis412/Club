import { provideApolloClient, useQuery } from "@vue/apollo-composable";

import { subjectsPaginate } from "src/graphql/user/queries";

import apolloClient from "src/apollo/apollo-client";

import { spaceHeader } from "src/utils/spaceHeader";

provideApolloClient(apolloClient);

const paginateSubjects = (space_id) => {
  return useQuery(
    subjectsPaginate,
    {
      page: 1,
      perPage: 1,
      where: {
        column: "user_id",
        operator: "EQ",
        value: JSON.parse(localStorage.getItem("user-data"))?.user_id,
      },
    },
    spaceHeader(space_id || process.env.MAIN_SPACE_ID)
  );
};

const logout = () => {
  // tokenApi.remove();

  localStorage.removeItem("user-data");
};

const userApi = { paginateSubjects, logout };

export default userApi;
