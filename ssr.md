---
outline: deep
---

# Server-side Rendering (Optional)

Enable SSR with the url of your nodejs server:

```go
Inertia.EnableSsrWithDefault() // http://127.0.0.1:13714
```

Or with custom url:

```go
Inertia.EnableSsr("http://app-ssr-host:13714")
```
