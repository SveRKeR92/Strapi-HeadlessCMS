import gql from 'graphql-tag';

export const AllPostsQuery = gql `
query AllPosts {
      posts {
            data {
                  id
                  attributes {
                        Title
                        Content
                        Image {
                              data {
                                    attributes {
                                          caption
                                    }
                              }
                        }
                        updatedAt
                  }
            }
      }
}
`
