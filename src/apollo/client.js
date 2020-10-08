import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://18.180.253.189:8000/subgraphs/name/pancakeswap'
  }),
  cache: new InMemoryCache(),
  shouldBatch: true
})

export const healthClient = new ApolloClient({
  link: new HttpLink({
    uri: 'http://18.180.253.189:8030/graphql'
  }),
  cache: new InMemoryCache(),
  shouldBatch: true
})

export const v1Client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/ianlapham/uniswap'
  }),
  cache: new InMemoryCache(),
  shouldBatch: true
})

export const blockClient = new ApolloClient({
  link: new HttpLink({
    uri: 'http://18.180.253.189:8000/subgraphs/name/bokayi/bsc-blocks'
  }),
  cache: new InMemoryCache()
})
