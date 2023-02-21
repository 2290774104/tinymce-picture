import { Editor, TinyMCE } from 'tinymce';

declare const tinymce: TinyMCE;

const setup = (editor: Editor, url: string): void => {
  editor.ui.registry.addButton('picture', {
    text: 'picture button',
    onAction: () => {
      editor.setContent('<p>content added from picture</p>');
    }
  });
};

export default (): void => {
  tinymce.PluginManager.add('picture', setup);
};
