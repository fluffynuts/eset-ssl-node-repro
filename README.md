What is this?
---

A reproduction for the issue where ESET's SSL handling causes issues with node
processes attempting to communicate over ssl:
![Node error]( node-ssl-error.png )

Usage:
---

from a console:
```
npm i
npm test
```

if that all works, you're not experiencing the issue (:

How to work around the issue:
---
Open Advanced setup:

![ESET Systray menu]( eset-systray-menu.png )

Search for "SSL" and then disable the feature:

![ESET Advanced setup]( disable-ssl-feature.png )

Now you won't get the error above.
