// MIT License

// Copyright (c) 2018 Neutralinojs

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

import { request, RequestType } from '../http/request';

export interface CreateDirectoryOptions extends BaseOption {
  path: string;
}

export interface RemoveDirectoryOptions extends BaseOption {
  path: string;
}

export interface WriteFileOptions extends BaseOption {
  fileName: string;
  data: string;
}

export interface ReadFileOptions extends BaseOption {
  fileName: string;
}

export interface RemoveFileOptions extends BaseOption {
  fileName: string;
}

export interface ReadDirectoryOptions extends BaseOption {
  path: string;
}

export function createDirectory(options: CreateDirectoryOptions) {
    request({
        url: 'filesystem.createDirectory',
        type: RequestType.POST,
        data: options,
        onSuccess: options.onSuccess,
        onError: options.onError,
        isNativeMethod: true
    });
};


export function removeDirectory(options: RemoveDirectoryOptions) {
    request({
        url: 'filesystem.removeDirectory',
        type: RequestType.POST,
        data: options,
        onSuccess: options.onSuccess,
        onError: options.onError,
        isNativeMethod: true
    });
};

export function writeFile(options: WriteFileOptions) {
    request({
        url: 'filesystem.writeFile',
        type: RequestType.POST,
        data: options,
        onSuccess: options.onSuccess,
        onError: options.onError,
        isNativeMethod: true
    });
};

export function readFile(options: ReadFileOptions) {
    request({
        url: 'filesystem.readFile',
        type: RequestType.POST,
        data: options,
        onSuccess: options.onSuccess,
        onError: options.onError,
        isNativeMethod: true
    });
};

export function removeFile(options: RemoveFileOptions) {
    request({
        url: 'filesystem.removeFile',
        type: RequestType.POST,
        data: options,
        onSuccess: options.onSuccess,
        onError: options.onError,
        isNativeMethod: true
    });
};

export function readDirectory(options: ReadDirectoryOptions) {
    request({
        url: 'filesystem.readDirectory',
        type: RequestType.POST,
        data: options,
        onSuccess: options.onSuccess,
        onError: options.onError,
        isNativeMethod: true
    });
};
