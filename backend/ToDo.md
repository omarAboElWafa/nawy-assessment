# ToDo List for Updates

## Security Updates

- [ ] Implement Helmet to secure HTTP headers
- [ ] Validate all incoming request to the Backend
      Note: ensure the API contains the required data
      The data in the API request is in the right format
      The API request contains the required authorization header to send and receive data
      There are no malicious data in the API request
      The API does not have a request data that is larger than the required size
- [ ] Implement malicious operations detection
      Note: Blacklisted JWT tokens can be stored on your server database or in-memory database like Redis, to ensure every API request made with a blacklisted token is not honored. The little overhead with storing blacklisted tokens is your API needs to hit the database on every request to ensure the token is not blacklisted and this renders your JWT implementation from being stateless
- [ ] Implement secure file uploads
- [ ] Implement CSRF protection
- [ ] Implement rate limiting
      Note: It is important to limit the number of login attempts by IP address, this is to prevent a brute-force attack by an attacker
      In addition to limiting the number of login requests by IP address, it is also important to limit the number of API requests an IP address can make within a time-frame, this is to prevent DDOS (Distributed Denial Of Service) attack.
      A DDOS attack is a malicious attempt by an attacker to disrupt the normal flow of traffic on your server by flooding it with abnormal internet traffic. In simple terms, the attacker will be making millions of requests per traffic to slow down or stop your server entirely.

- [ ] Implement secure password hashing
- [ ] Implement secure session management
- [ ] Implement secure CORS policy

## Performance Updates

- [ ] Optimize database queries
- [ ] Use caching to improve performance
- [ ] Use gzip compression for responses (locally with middleware and in production with NGINX as a reverse proxy (in Docker))
- [ ] Favor asynchronous operations in write operations over synchronous operations (if you can favor read operations also it will be great) (use async/await and Message Queues and Redis) to improve performance with eventual consistency
- [ ] Implement lazy loading of components
- [ ] Optimize images and other media

## Clean Code Updates

- [ ] Refactor code to follow TypeScript best practices

## Other Updates

- [ ] Add analytics to track user behavior
- [ ] Implement A/B testing for new features
- [ ] Add support for multiple languages
- [ ] Add support for multiple clients (web, mobile, desktop), response should be based on the client type

https://hackernoon.com/how-to-write-and-organize-nodejs-api-tests-the-right-way
https://expressjs.com/en/advanced/best-practice-performance.html#use-gzip-compression
