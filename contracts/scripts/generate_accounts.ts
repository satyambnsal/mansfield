import { Lightnet, Mina } from 'o1js';

const GRAPHQL_ENDPOINT: string = Bun.env.GRAPHQL_ENDPOINT;
const ACCOUNTS_MANAGER_ENDPOINT: string = Bun.env.ACCOUNTS_MANAGER_ENDPOINT;
const ARCHIVE_NODE_API_ENDPOINT: string = Bun.env.ARCHIVE_NODE_API_ENDPOINT;

console.log({
  GRAPHQL_ENDPOINT,
  ACCOUNTS_MANAGER_ENDPOINT,
  ARCHIVE_NODE_API_ENDPOINT,
});

const network = Mina.Network({
  mina: GRAPHQL_ENDPOINT,
  lightnetAccountManager: ACCOUNTS_MANAGER_ENDPOINT,
});

Mina.setActiveInstance(network);

// const feePayerPrivateKey = (await Lightnet.acquireKeyPair()).privateKey;
// const feePayerAccount = feePayerPrivateKey.toPublicKey();

// console.log({
//   feePayerAccount,
//   feePayerPrivateKey,
// });
