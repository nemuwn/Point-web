import { GraphQLClient } from "graphql-request";
import { getSdk, SdkFunctionWrapper } from "./graphql";
export interface GraphQLError extends Error {
  response: {
    errors: {
      message: string;
    }[];
  };
}

const callAndHandleError: SdkFunctionWrapper = (action) =>
  action().catch((err) => {
    const error = err.response?.errors[0];
    throw new Error(error?.message);
  });

// const ssrMode = typeof window === "undefined";
const endpoint = "http://localhost:4000/graphql";

export const client = new GraphQLClient(endpoint, {
  mode: "no-cors",
});
const sdk = getSdk(client, callAndHandleError);

export default sdk;
