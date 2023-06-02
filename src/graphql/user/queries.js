import gql from "graphql-tag";

export const subjectsPaginate = gql`
  query subjectsPaginate($page: Int!, $perPage: Int!, $where: ObjectPaginatorWhere) {
    paginate_subject(page: $page, perPage: $perPage, where: $where) {
      data {
        id
        avatar
        fullname {
          first_name
          last_name
        }
        email {
          email
        }
      }
    }
  }
`;
