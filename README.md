# Node.js<br>
## 1. Basic knowledge:
- HTML
- CSS
- JavaScript

## 2. What Node.js can do?
- Front-end
- Back-end
- Full stack developer
- DevOps

User --> Front Page - (Send Request) -> Web sever --> Database

## 3. What is Node?
Not only Node can open sever end box,
- Java
- PHP
- Python
- Ruby
- .Net

These can also do sever end, but only Node.js use JavaScript language.

### 3.1. Node.js is a JavaScript runtime on Chrome's V8 JavaScript Engine
- it is not a programming language
- it is not a library or a framework
- it is only a runtime of JavaScript

It can parse and execute JavaScript code
JavaScript in Node.js:
- Do not have **BOM, DOM**
- Provides file IO stream
- Builds web sever
- Telecommunication
- http sever

### 3.2. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.
- event-driven 事件驱动
- non-blocking I/O model 非阻塞IO模型(异步)
- lightweight and efficient 轻量和高效

### 3.3. Node.js' package ecosystem, npm is the largest ecosystem of open source libraries in the world.

## Some resource and doc
- 《深入浅出Node.js》
- 《Node.js权威指南》
- [Node Beginner](https://www.nodebeginner.org/)
- [Node.js 阮一峰](https://javascript.ruanyifeng.com/nodejs/basic.html)
- [Node.js](https://nodejs.org/)

## 4. Further knowledge
- b/s
- modularisation
- Node API
- Asynchronous (callback, promise, generator)
- Express
- EC6: EcmaScript 6
- ... 

It also can help you learn:
- Vue
- React
- Angular
## 5. How to install Node.js
1. [Download Node from this page](https://nodejs.org/en/download/) <br>
LTS: Long Time Stable<br>
Current: The latest version<br>
Select one version based your OS
2. Install Node.js
3. Run `node -v` to check your version<br>
v14.5.0

---

# Let's start
## 01
### 1. HelloWorld
1. Create your HelloWorld.js file.
2. Open terminal and locate your HelloWorld.js file dictionary.
3. Run `node HelloWorld.js`


    Hello World!

**DO NOT USE "NODE" AS YOUR FILE NAME**

### 2. NoBOMandDOM
`node NoBOMandDOM`
<p>
    
    nd@Neils-MacBook-Pro 01 % node NoBOMandDOM
    /Users/nd/Dev/learn_node_js/01/NoBOMandDOM.js:4
    console.log(window)
                ^
    
    ReferenceError: window is not defined
        at Object.<anonymous> (/Users/nd/Dev/learn_node_js/01/NoBOMandDOM.js:4:13)
        at Module._compile (internal/modules/cjs/loader.js:1201:30)
        at Object.Module._extensions..js (internal/modules/cjs/loader.js:1221:10)
        at Module.load (internal/modules/cjs/loader.js:1050:32)
        at Function.Module._load (internal/modules/cjs/loader.js:938:14)
        at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:71:12)
        at internal/main/run_main_module.js:17:47

</p>

### 3. readFile
See details in readFile.js<br>
`node readFile.js`<br>

    <Buffer 68 65 6c 6c 6f 20 6e 6f 64 65 2e 6a 73>
    hello node.js
### 4. Explorer does not recognise Node.js
Open HTML file cannotKnowNodeJS.html, the console will output:

    HelloWorld.js:5 Hello World!
    NoBOMandDOM.js:4 Window
    NoBOMandDOM.js:5 #document
    readFile.js.js:1 Failed to load resource: the server responded with a status of 404 (Not Found)
