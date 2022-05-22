# react-remove-bg

[![npm version](https://badge.fury.io/js/rn-webrtc.svg)](https://badge.fury.io/js/react-remove-bg)
[![npm downloads](https://img.shields.io/npm/dt/rn-webrtc.svg?maxAge=2592000)](https://img.shields.io/npm/dm/react-remove-bg.svg?maxAge=2592000)

### Installation
    npm install react-remove-bg

### Usage
This module uses Tensorflow bodypix model.
```javascript
import removeBGTF from 'react-remove-bg';

removeBGTF({
    imageSrc, // an image source
    internalResolution: 'low' | 'high' | 'medium' | 'full',
  }, function (img) {
    // use img.src to render img
    // <img src={img.src}/>
});

```


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