import { Editor, TinyMCE } from 'tinymce';

declare const tinymce: TinyMCE;

const openDialog = (editor: Editor) => {
  return editor.windowManager.open({
    title: '上传图片',
    body: {
      type: 'panel',
      items: [
        {
          type: 'dropzone',
          name: 'fileinput'
        }
      ]
    },
    buttons: [
      {
        type: 'cancel',
        text: '关闭'
      },
    ],
    // 监听到有附件上传
    onChange(api) {
      api.block('上传中')
      const file = api.getData().fileinput
      const upload = editor.getParam('upload')
      upload(file, (filePath: string) => {
        editor.execCommand('mceInsertContent', false, `<img src=${filePath} class="picture" alt='picture'/>`)
        api.unblock()
        api.close()
      })
    }
  })
}

const setup = (editor: Editor, url: string): void => {
  // 注册工具栏
  editor.ui.registry.addButton('picture', {
    icon: 'image',
    tooltip: '上传图片',
    onAction: () => {
      openDialog(editor)
    }
  });
};

export default (): void => {
  tinymce.PluginManager.add('picture', setup);
};
