# Algo Sandbox
I created this JavaScript sandbox for self-education, experiments and fun.

There's no UI here cause you don't need one. The only you need is console and NodeJS stack.

## Installation

After cloning the repo, run:
``` npm install  ```

Before start coding, run ``` gulp tdd ``` command that runs Karma test-runner on the background.

To measure performance, change ``` dir ``` variable in ``` karma-bench.conf.js ``` file to target dir name, and run:
``` gulp bench ```

## Naming and filestructure

Place your files and tests in ``` src/ ``` dir in well named target folders like following:

```
example/
  *.algo.js - algorithms
  *.spec.js - unit tests
  *.perf.js - performance tests
```

Enjoy!
