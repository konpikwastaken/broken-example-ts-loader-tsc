# Repro steps
- yarn
- yarn dev

Observe error similar to the following emitted:

```
[tsl] ERROR
      TS5074: Option '--incremental' can only be specified using tsconfig, emitting to single file or when option `--tsBuildInfoFile` is specified.
```

Does not repro with typescript 3.4.5