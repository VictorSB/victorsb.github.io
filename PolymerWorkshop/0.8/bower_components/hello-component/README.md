hello-component
============

See the [component page](http://polymerlabs.github.io/hello-component) for more information.

## Getting Started

We've put together a [guide to seed-element](http://www.polymer-project.org/docs/start/reusableelements.html) to help get you rolling.

## Testing Your Element

Add the logic specific to your new element and verify its functionality. Good unit tests are essential to your verification plan but a good way to quickly sanity test your component is to access your demo.html file via a local web server. There are several ways to do this but one easy method is to run a simple web server that ships with Python, using the commands:

```sh
python -m SimpleHTTPServer
```

Or other method using NodeJS:

```sh
http-server ./
```

This starts a web server on port 8000, so you can test your new element by navigating a browser to `localhost:8000/component/demo.html`.
