
<!--#echo json="package.json" key="name" underline="=" -->
subjclog2607-pmb
================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Make your console.log()ging a bit more traceable with a subject prefix.
<!--/#echo -->



#### This module logs to the default console,

thus the "c" in its name.
If you want to log to memory instead, use the the similarly-named module
[subjlog1707-pmb](https://github.com/mk-pmb/subjlog1707-pmb-js).



API
---

This module exports one function:

### makeLogger(subj)

Returns a function `log` that `console.log()`s
the `subj` and all its arguments.

The `subj` should be a string, because future versions may support
overloaded invocations with a different type of first argument.



### .dbg, .err, .warn

The `log` function from `makeLogger` also carries some methods:

* `.dbg`: Same but for `console.debug()`.
* `.err`: Same but for `console.error()`.
* `.warn`: Same but for `console.warn()`.



Usage
-----

see [test/usage.mjs](test/usage.mjs).



Known issues
------------

* Needs more/better tests and docs.





<!--#toc stop="scan" -->

&nbsp;


License
-------
<!--#echo json="package.json" key="license" -->
ISC
<!--/#echo -->
