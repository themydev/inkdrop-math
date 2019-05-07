# math

### Please note, this is a freshly forked work in progress to add physics LateX support to Inkdrop. It is not ready to be used.
### If you are looking for the standard inkdrop-math plugin please go [here](https://github.com/inkdropapp/inkdrop-math)

It adds math syntax support to markdown editor and preview.

## Install

```
ipm install math
```

## Usage

### LaTeX syntax

You can write equations in LaTeX syntax like this:

    ```math
    \int_0^\infty \frac{x^3}{e^x-1}\,dx = \frac{\pi^4}{15}
    ```
    
or

    $$
    \int_0^\infty \frac{x^3}{e^x-1}\,dx = \frac{\pi^4}{15}
    $$

It will be rendered as:

![block example](https://github.com/inkdropapp/inkdrop-math/raw/master/docs/images/example-01.png)

Inline example:

    Inline math: $\int_0^\infty \frac{x^3}{e^x-1}\,dx = \frac{\pi^4}{15}$

It will produce:

![inline example](https://github.com/inkdropapp/inkdrop-math/raw/master/docs/images/example-02.png)
