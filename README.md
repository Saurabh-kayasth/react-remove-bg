# react-remove-bg

[![npm version](https://badge.fury.io/js/react-remove-bg.svg)](https://badge.fury.io/js/react-remove-bg)
[![npm downloads](https://img.shields.io/npm/dw/react-remove-bg.svg?maxAge=2592000)](https://img.shields.io/npm/dm/react-remove-bg.svg?maxAge=2592000)

### Installation
    npm install react-remove-bg

### Demo
 - Github: [react-remove-bg-example](https://github.com/Saurabh-kayasth/react-remove-bg-example)
 - Live: Try [here](https://react-remove-bg-example.vercel.app/)

![Screenshot_2022-05-22_11-39-21](https://user-images.githubusercontent.com/30195666/169681854-f29cab24-fc96-4385-86e8-704e8aff601b.png)

### Usage
This module uses Tensorflow bodypix model.
```javascript
import { removeBGTF } from 'react-remove-bg';

removeBGTF({
    imageSrc, // an image source
    internalResolution: 'low' | 'high' | 'medium' | 'full',
  }, function (img) {
    // use img.src to render img
    // <img src={img.src}/>
});

```

#### If you like this project, please consider buy me a coffee :)
https://www.buymeacoffee.com/saurabhK100

## MIT License

Copyright (c) 2022 Saurabh Kayasth

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
