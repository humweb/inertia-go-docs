---
outline: deep
---

# Quick start

```bash
go get -u github.com/humweb/inertia-go
```

## Setup Inertia instance

```go
// Application URL for redirect
url := "http://inertia-app.test"

// Root template, see the example below
rootTemplate := "./app.gohtml"

// Asset version
version := ""

Inertia := inertia.New(url, rootTemplate, version)
```

Or create with `embed.FS` for root template:

```go
import "embed"

//go:embed template
var templateFS embed.FS

// ...

Inertia := inertia.NewWithFS(url, rootTemplate, version, templateFS)
```


## Root template

```html
<!DOCTYPE html>
<html>
<head>
    <title>Go Inertia</title>
    {{ if .ssr }}
    {{ raw .ssr.Head }}
    {{ end }}
</head>
<body>
    {{ if not .ssr }}
    <div id="app" data-page="{{ marshal .page }}"></div>
    {{ else }}
    {{ raw .ssr.Body }}
    {{ end }}
</body>
</html>
```

## Middleware
This example uses chi or standard mux but

### Chi
```go
r := chi.NewRouter()
r.Group(func(r chi.Router) {
    r.Use(Inertia.Middleware)
})
```
### Standard Mux
```go
mux := http.NewServeMux()
mux.Handle("/", Inertia.Middleware(homeHandler))
```

## Creating Responses
```go
func GetUsers(w http.ResponseWriter, r *http.Request) {
	
	var users []models.User
    
	//...
	
    Inertia.Render(w, r, "Users", inertia.Props{
	    "users": users,	
    })
}

```