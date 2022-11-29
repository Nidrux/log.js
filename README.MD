# Log.js

<img src="https://img.shields.io/bundlephobia/min/@nidrux/log.js">
<img src="https://img.shields.io/github/v/release/Nidrux/log.js">
<img src="https://img.shields.io/github/license/Nidrux/log.js">
<img src="https://img.shields.io/snyk/vulnerabilities/github/Nidrux/log.js">



## Installation

```bash
npm i @nidrux/log.js
```


## Usage

```js
//Without any configuration
const LoggingManager = new LoggingManager();
LoggingManager.Log(LoggingManager.levels.warn, "oh no a warning");


// Output: [November 29th 2022, 7:14:49 pm] WARN oh no a warning

```
```js
//With configuration
let options = {
    enableColors: true,
    dateFormatting: "hh:mm:ss",
    webhooks: {
        hooks: ["your hook here"],
        onEvents: ["error", "fatal"], //["info", "warn", "error" , "fatal"]
    }
}
const LoggingManager = new LoggingManager(options);
LoggingManager.Log(LoggingManager.levels.warn, "oh no a warning");


// Output: [07:16:57] WARN oh no a warning

```
Don't want webhooks enabled? Just remove the webhook option!

Setting options is something you can do after initializing the LoggingManager or you can provide them directly as shown before. You could use the LoggingManager instance to populate your onEvents array with the correct levels. This isn't needed as you can also use strings but make sure that everything is spelled correctly. Otherwise it won't send the logs to the webhook

```js
//Setting options later somewhere.
const LoggingManager = new LoggingManager();
LoggingManager.Log(LoggingManager.levels.warn, "oh no a warning");

// Output: [November 29th 2022, 7:29:32 pm] WARN oh no a warning

/*
Some other code
*/
let options = {
    enableColors: true,
    dateFormatting: "hh:mm:ss",
    webhooks: {
        hooks: ["your hook here"],
        onEvents: [LoggingManager.levels.fatal, LoggingManager.levels.error], //["info", "warn", "error" , "fatal"]
    }
}

LoggingManager.config = options
LoggingManager.Log(LoggingManager.levels.warn, "oh no a second warning");

// Output: [07:29:32] WARN oh no a second warning
```
## Options 
```js
let options = {
    enableColors: true,
    dateFormatting: "DD/MM/YYYY - hh:mm:ss",
    webhooks: {
        hooks: ["your hook here"],
        onEvents: ["error", "fatal"], //["info", "warn", "error" , "fatal"]
    }
}
```
|  Key | Value  | description|
|---|---|---|
| enableColors | Boolean  | default is set to false|
| dateFormatting | date format string  | default string is set to "DD/MM/YYYY - hh:mm:ss"|
| webhooks | Object  | needs to include hooks and onEvents! |
| hooks | array  | valid webhooks. |
| onEvents| array  | ["info", "warn", "error" , "fatal"] |




