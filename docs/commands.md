To start a local network
```
zk lightnet start --no-sync
```

To keep the current working versions of o1js and Mina

```
zk lightnet start --no-pull
```

To stop the local network

```
zk lightnet stop
```

Logfiles for docker container is saved at: `${Home}/.cache/zkapp-cli/lightnet/logs/`

To launch the Mina explorer

```
zk lightnet explorer
```

Lightnet status

```
zk lightnet status
```

## zkApp account Interactions

```
acquireKeyPair()
releaseKeyPair()
listAcquiredKeyPairs()
```

