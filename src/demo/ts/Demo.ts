import { TinyMCE } from 'tinymce';

import Plugin from '../../main/ts/Plugin';

declare let tinymce: TinyMCE;

type Callback = (filePath: string) => void

Plugin();

tinymce.init({
  selector: 'textarea.tinymce',
  plugins: 'code picture',
  toolbar: 'picture',
  upload: (files: File[], callback: Callback) => {
    // files 上传的附件集合  callback 上传成功的回调
    console.log(files);
    callback('https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF')
  }
});
