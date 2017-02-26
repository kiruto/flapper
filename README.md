# Flip Flapping!
<img src="art/cover.jpg" alt="Papika" width="200"/>

## 使用flapper开始TypeScript应用

一个完备的JS应用应该具有合理的工程架构支撑，在微软的[官方文档](https://www.typescriptlang.org/docs/tutorial.html)中只介绍了使用tsc编译源文件的方法，并没有对TypeScript工程搭建有详细的说明。本项目是为此而生，只需要fork或clone项目后，便可搭建完整的开发测试环境。

flapper具有以下特点：

- 开发环境使用最新的TypeScript
- 采用webpack 2编译
- 单元测试使用Karma
- 默认有生产环境和测试环境两部分，可以自定义实现其他环境
- 纯js应用，若需要，可以轻松构建面向浏览器的HTML App
- 没有任何第三方依赖库，可以加入你喜欢的库，构建纯净的代码工程

## 本项目开发环境
以下是flapper项目开发的环境，该环境确保TypeScript正常工作。本项目将会跟进组建更新，解决新版组建兼容性问题。

|          | 环境       | 开发环境版本 | 是否支持最新版 |
|----------|------------|--------------|:--------------:|
| Runtime  | NodeJS     | v6.9.1       |       是       |
| package  | NPM        | 4.0.2        |       是       |
| 脚本语言 | TypeScript | ^2.1.6       |       是       |
| 编译     | Webpack2   | ^2.2.1       |       是       |
| 测试     | Karma      | ^1.4.1       |       是       |

## 准备工作
必须使用[Node.js和NPM](https://nodejs.org/en/)环境
- 支持Node v6 latest
- 支持npm v4 latest

确保安装好Node环境(建议最新版)后便可开始

## 安装
1. fork & clone本项目

    ```bash
    git clone https://github.com/kiruto/flapper
    ```
2. 安装依赖环境

    ```bash
    cd flapper
    npm install
    ```

如果初始化正常，应该可以看到node_module的外部依赖库目录。现在可以在Flapper基础上开发了！

## 单元测试
1. 在./src目录下的所有**/*.spec.ts文件都被用来测试。本工程下[./src/app/flip-flappers.spec.ts](src/app/flip-flappers.spec.ts)是一个简单的测试实例。
2. 执行以下命令进行测试
```bash
npm test
```

如果没有修改环境变量, 可以看到一个chrome浏览器对脚本进行测试的过程。

在调试环境下，单元测试以独立的Chrome运行并watch代码变化，实时更新；在生产环境，单元测试以Phantom形式运行。请确保每次编译时都执行单元测试。

## 编译
执行以下命令将index.ts为入口的程序编译，并输出在./dist下
```bash
npm run build
```

## 环境变量
可以直接修改环境变量文件
- 测试环境: [environment.js](config/environment.js)
- 生产环境: [environment.prod.js](config/environment.prod.js)

## License
```text
The MIT License

Copyright (c) 2010-2017 Yuriel. http://exyui.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
