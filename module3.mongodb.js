use("mongodbCrashCourse");

db.blogs.insertMany([
  {
    "title": "Learn Flask Web Development",
    "slug": "learn-flask-web-development",
    "content": "Flask is a micro web framework for Python, designed to make building web applications quick and easy. It is classified as a \"microframework\" because it provides a core set of functionalities for web development, such as URL routing and request handling, but it does not include built-in features like database abstraction layers, form validation, or authentication. Instead, Flask allows developers to integrate these functionalities through various community-provided extensions.",
    "created": new Date(Date.now() - 10 * 60 * 60 * 1000)
  },
  {
    "title": "Mastering Django Web Development",
    "slug": "mastering-django-web-development",
    "content": "Django is a high-level Python web framework that promotes rapid development and clean, pragmatic design. It includes many built-in features like an ORM, authentication system, and admin interface, making it ideal for building robust, scalable web applications quickly and efficiently.",
    "created": new Date(Date.now() - 9 * 60 * 60 * 1000)
  },
  {
    "title": "Getting Started with Node.js",
    "slug": "getting-started-with-node-js",
    "content": "Node.js is a runtime environment that allows developers to run JavaScript on the server side. Built on Chrome's V8 engine, it enables fast and scalable network applications. Its non-blocking I/O model makes it efficient for data-intensive real-time applications.",
    "created": new Date(Date.now() - 8 * 60 * 60 * 1000)
  },
  {
    "title": "Introduction to Express.js for Beginners",
    "slug": "introduction-to-express-js-for-beginners",
    "content": "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. With a simple API and middleware support, it’s widely used for creating APIs and server-side logic in JavaScript.",
    "created": new Date(Date.now() - 7 * 60 * 60 * 1000)
  },
  {
    "title": "Building APIs with FastAPI",
    "slug": "building-apis-with-fastapi",
    "content": "FastAPI is a modern Python web framework for building APIs with high performance, based on standard Python type hints. It’s designed to be easy to use while offering features like automatic data validation, documentation generation, and asynchronous request handling.",
    "created": new Date(Date.now() - 6 * 60 * 60 * 1000)
  },
  {
    "title": "Developing Static Sites with Jekyll",
    "slug": "developing-static-sites-with-jekyll",
    "content": "Jekyll is a static site generator that's perfect for creating blogs and personal websites. It takes markdown files and converts them into static HTML, making deployment simple and efficient, especially when integrated with GitHub Pages.",
    "created": new Date(Date.now() - 5 * 60 * 60 * 1000)
  },
  {
    "title": "An Introduction to Ruby on Rails",
    "slug": "an-introduction-to-ruby-on-rails",
    "content": "Ruby on Rails is a server-side web application framework written in Ruby. It follows the convention over configuration principle and the MVC pattern, making it an excellent choice for developers who value convention and simplicity in building full-featured web apps.",
    "created": new Date(Date.now() - 4 * 60 * 60 * 1000)
  },
  {
    "title": "Create Scalable Apps with Spring Boot",
    "slug": "create-scalable-apps-with-spring-boot",
    "content": "Spring Boot is a Java-based framework used to build stand-alone and production-ready Spring applications. It simplifies the configuration and deployment process, allowing developers to focus more on writing business logic than boilerplate code.",
    "created": new Date(Date.now() - 3 * 60 * 60 * 1000)
  },
  {
    "title": "Intro to Svelte for Web Development",
    "slug": "intro-to-svelte-for-web-development",
    "content": "Svelte is a front-end framework that shifts much of the work to compile time, resulting in fast, lightweight applications. Unlike traditional frameworks, it compiles components into efficient vanilla JavaScript, offering better performance and a smaller bundle size.",
    "created": new Date(Date.now() - 2 * 60 * 60 * 1000)
  },
  {
    "title": "Learn Vue.js for Reactive Web Interfaces",
    "slug": "learn-vue-js-for-reactive-web-interfaces",
    "content": "Vue.js is a progressive JavaScript framework for building user interfaces. It's approachable and versatile, supporting component-based development and reactive data binding, making it ideal for both beginners and experienced developers alike.",
    "created": new Date(Date.now() + 5 * 60 * 60 * 1000)
  }
]);
