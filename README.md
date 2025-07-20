# acode-plugin-template

this repository is a most basic example of an Acode plugin without any bundlers etc.

official docs: https://acode-plugin-docs.vercel.app/docs/getting-started/intro

#### official examples:

- [JavaScript (with Bundler)](https://github.com/Acode-Foundation/acode-plugin)
- [TypeScript](https://github.com/Acode-Foundation/AcodeTSTemplate)

## Snippets

### Basic Plugin Structures

```JS
(function(){
  if(window.acode){
    const pluginId   = 'example-plugin';
    const pluginName = 'Example Plugin';
    // Mount Plugin
    acode.setPluginInit( pluginId, async (baseUrl, $page, settings) => {
      // Init Plugin
      // ... do something here ...
      // Say Hello
      window.toast(`${pluginName} mounted.`);  
    });
    // Unmount Plugin
    acode.setPluginUnmount( pluginId, () => {
      // ... do something here ...
      // Say Bye
      window.toast(`${pluginName} unmounted.`);  
    });
  }
})();
```

```JS
(function(){
  if(window.acode){
    const plugin = {
      id      : 'example-plugin',
      name    : 'Example Plugin',
      $page   : null,
      init    : (baseUrl, $page) => {},
      destroy : () => {},
    };
    const pluginId   = 'example-plugin';
    const pluginName = 'Example Plugin';
    // Mount Plugin
    acode.setPluginInit( plugin.id, async (baseUrl, $page, settings) => {
      // Init Plugin
      await plugin.init( baseUrl, $page );
      // Say Hello
      window.toast(`${plugin.name} mounted.`);  
    });
    // Unmount Plugin
    acode.setPluginUnmount( plugin.id, () => {
      // Destroy Plugin
      plugin.destroy();
      // Say Bye
      window.toast(`${plugin.name} unmounted.`);  
    });
  }
})();
```

### Access Official Acode Modules

```JS
const _AceModes            = acode.require('aceModes'); // https://acode-plugin-docs.vercel.app/docs/utilities/ace-modes
const _ActionStack         = acode.require('actionStack'); // https://acode-plugin-docs.vercel.app/docs/advanced-apis/action-stack
const _Color               = acode.require('Color'); // https://acode-plugin-docs.vercel.app/docs/helpers/color
const _ColorPicker         = acode.require('colorPicker'); // https://acode-plugin-docs.vercel.app/docs/ui-components/dialogs/color-picker
const _ContextMenu         = acode.require('contextmenu'); // https://acode-plugin-docs.vercel.app/docs/interface-apis/context-menu
const _CreateKeyboardEvent = acode.require('createKeyboardEvent'); // https://acode-plugin-docs.vercel.app/docs/utilities/keyboard-event
const _DialogBox           = acode.require('dialogBox'); // https://acode-plugin-docs.vercel.app/docs/ui-components/dialogs/custom-dialog
const _Encodings           = acode.require('encodings'); // https://acode-plugin-docs.vercel.app/docs/utilities/encoding
const _FileBrowser         = acode.require('fileBrowser'); // https://acode-plugin-docs.vercel.app/docs/editor-components/file-browser
const _FileList            = acode.require('fileList'); // https://acode-plugin-docs.vercel.app/docs/editor-components/file-list
const _Fonts               = acode.require('fonts'); // https://acode-plugin-docs.vercel.app/docs/helpers/fonts
const _FS                  = acode.require('fs'); // https://acode-plugin-docs.vercel.app/docs/utilities/fs
const _FSO                 = acode.require('fsOperation'); // https://acode-plugin-docs.vercel.app/docs/utilities/fs
const _InputHints          = acode.require('inputHints'); // https://acode-plugin-docs.vercel.app/docs/helpers/input-hints
const _Intent              = acode.require('intent'); // https://acode-plugin-docs.vercel.app/docs/advanced-apis/intent
const _Keyboard            = acode.require('keyboard'); // https://acode-plugin-docs.vercel.app/docs/utilities/keyboard
const _Loader              = acode.require("loader"); // https://acode-plugin-docs.vercel.app/docs/ui-components/dialogs/loader
const _MultiPrompt         = acode.require('multiPrompt'); // https://acode-plugin-docs.vercel.app/docs/ui-components/dialogs/multi-prompt
const _OpenFolder          = acode.require('openFolder'); // https://acode-plugin-docs.vercel.app/docs/utilities/open-folder
const _Palette             = acode.require('palette'); // https://acode-plugin-docs.vercel.app/docs/editor-components/palette
const _Page                = acode.require('page'); // https://acode-plugin-docs.vercel.app/docs/editor-components/page
const _Projects            = acode.require('projects'); // https://acode-plugin-docs.vercel.app/docs/utilities/projects
const _Prompt              = acode.require('prompt'); // https://acode-plugin-docs.vercel.app/docs/ui-components/dialogs/prompt
const _Select              = acode.require('select'); // https://acode-plugin-docs.vercel.app/docs/ui-components/dialogs/select
const _SelectionMenu       = acode.require('selectionMenu'); // https://acode-plugin-docs.vercel.app/docs/ui-components/selection-menu
const _Settings            = acode.require('settings'); // https://acode-plugin-docs.vercel.app/docs/editor-components/settings
const _SidebarApps         = acode.require('sidebarApps'); // https://acode-plugin-docs.vercel.app/docs/interface-apis/sidebar-apps
const _SideButton          = acode.require('sideButton'); // https://acode-plugin-docs.vercel.app/docs/interface-apis/side-buttons
const _ThemeBuilder        = acode.require('themeBuilder'); // https://acode-plugin-docs.vercel.app/docs/helpers/theme-builder
const _Themes              = acode.require('themes'); // https://acode-plugin-docs.vercel.app/docs/helpers/themes
const _Toast               = acode.require('toast'); // https://acode-plugin-docs.vercel.app/docs/ui-components/toast
const _Tutorial            = acode.require('tutorial'); // https://acode-plugin-docs.vercel.app/docs/ui-components/tutorial
const _URL                 = acode.require('Url'); // https://acode-plugin-docs.vercel.app/docs/utilities/url
const _WindowResize        = acode.require('windowResize'); // https://acode-plugin-docs.vercel.app/docs/utilities/window-resize
```

### Access Global Acode Objects

```JS
const _Commands      = editorManager.editor.commands;
const _Editor        = editorManager.editor;
const _EditorManager = editorManager;
const _Files         = editorManager.editor;
```

### Register Commands

```JS
editor.editorManager.commands.addCommand({ 
  name: pluginId + '.hide', 
  exec: () => plugin.hide(), 
  description: 'Hide Example Plugin Panel'
});

// if _Commands is defined
_Commands.addCommand({ 
  name: pluginId + '.hide', 
  exec: () => plugin.hide(), 
  description: 'Hide Example Plugin Panel'
});
```