```ts
new HttpRequestBuilder()
   .setUrl("/users")
   .setMethod("POST")
   .setHeader("Authorization","token")
   .setBody(data)
   .build()
```
