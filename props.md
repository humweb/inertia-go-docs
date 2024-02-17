---
outline: deep
---

# Share Data

## Share a prop globally

```go
Inertia.Share("title", "Inertia App Title")
```

## Share a function with root template

```go
Inertia.ShareFunc("asset", assetFunc)
```

```html
<script src="{{ asset "js/app.js" }}"></script>
```

## Share a prop from middleware

```go
func authenticate(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
    
        ctx := Inertia.WithProp(r.Context(), "userId", user.ID)
        
        // or
        
        ctx := Inertia.WithProps(r.Context(), Inertia.Props{
            "userId": user.ID,
        })
        
        next.ServeHTTP(w, r.WithContext(ctx))
    })
}
```

## Share data with root template

```go
ctx := Inertia.WithViewData(r.Context(), "meta", meta)
r = r.WithContext(ctx)
```

```html
<meta name="description" content="{{ .meta }}">
```
