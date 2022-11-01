// ./apollo-client.js

import { ApolloClient, InMemoryCache } from "@apollo/client/core";

const client = new ApolloClient({
    uri: "https://api.lens.dev",
    cache: new InMemoryCache(),
});

export default client;
