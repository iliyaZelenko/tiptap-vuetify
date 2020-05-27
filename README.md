WYSIWYG editor for Vuetify. The editor is based on [tiptap](https://github.com/scrumpy/tiptap) and uses [vuetify's](https://github.com/vuetifyjs/vuetify) components. :muscle:

  <p align="center">
    <a href="https://www.npmjs.com/package/tiptap-vuetify">
      <img src="https://img.shields.io/npm/v/tiptap-vuetify.svg" alt="Version">
    </a>
    <a href="https://www.npmjs.com/package/tiptap-vuetify">
      <img src="https://img.shields.io/npm/dm/tiptap-vuetify.svg" alt="Downloads">
    </a>
    <a href="https://www.npmjs.com/package/tiptap-vuetify">
      <img src="https://img.shields.io/npm/l/tiptap-vuetify.svg" alt="License">
    </a>
    <a href="https://circleci.com/gh/iliyaZelenko/tiptap-vuetify">
      <img src="https://circleci.com/gh/iliyaZelenko/tiptap-vuetify.svg?style=svg" alt="CircleCI Build Status">
    </a>
    <a href="https://lgtm.com/projects/g/iliyaZelenko/tiptap-vuetify/context:javascript">
      <img alt="Language grade: JavaScript" src="https://img.shields.io/lgtm/grade/javascript/g/iliyaZelenko/tiptap-vuetify.svg?logo=lgtm&logoWidth=18" />
    </a>
    <a href="https://standardjs.com/">
      <img alt="codebeat badge" src="https://badgen.net/badge/code%20style/standard/f2a" />
    </a>
    <a href="https://www.npmjs.com/package/tiptap-vuetify">
      <img alt="codebeat badge" src="https://img.shields.io/badge/size-6.58%20kB-44cc11.svg" />
    </a>
  </p>

If you have Vuetify `1.x` (not `2.x`), then you can find docs and demo [here](https://github.com/iliyaZelenko/tiptap-vuetify/blob/version-1.x/README.md).

# [DEMO :bomb:](https://iliyazelenko.github.io/tiptap-vuetify-demo)

[
![](https://p35.f2.n0.cdn.getcloudapp.com/items/qGuDmGEm/Image+2020-02-01+at+10.14.29+AM.png?v=40d834512cb17e777f36c96b622990f2)
](https://iliyazelenko.github.io/tiptap-vuetify-demo)



## Navigation

<!-- TOC -->

- [Features](#features)
- [Installation 🔧](#installation)
- [Get started](#get-started)
- [Props](#props)
- [Events](#events)
- [Slots](#slots)
- [Donate 💰 and high support](#donate-creating-code-at-your-request-out-of-turn)
- [TODO](#todo)

<!-- /TOC -->

## Features

- used vuetify components
- support for different types of icons ([fa](https://fontawesome.com/),  [md](https://material.io/tools/icons/), [mdi](https://materialdesignicons.com/), [mdiSvg](https://vuetifyjs.com/en/customization/icons#install-material-design-icons-js-svg))
- internationalization (en, es, fr, pl, ru, uk, ptbr, tr, he, nl, ja, de, ko, zh-CN, fa, sv, cs, it), with automatic detection of the current language through the Vuetify. You can make a PR for your language if it is not there, [here](https://github.com/iliyaZelenko/tiptap-vuetify/pull/118/files) is an example.
- markdown support
- easy to start using
- props and events are available
- TypeScript support
- the project is ready to actively develop if there is support (stars)!
- the ability to create and use your own extensions
- choose where the extension buttons should be displayed: in the toolbar or in the bubble menu
- support for custom image upload. You can use any method of upload through your Vue component.
- Vuetify `2.x` and `1.x` support

## Installation

```
yarn add tiptap-vuetify
# Or 
npm install --save tiptap-vuetify
```


## Get started

### Nuxt

If you have Nuxt.js, [here](https://codesandbox.io/s/github/iliyaZelenko/tiptap-vuetify-nuxt/tree/master/) is a simple demo how to integrate it (`@nuxtjs/vuetify` module is used).
The code for this example is taken from [this github repository](https://github.com/iliyaZelenko/tiptap-vuetify-nuxt), you can find more infо there.

### NPM (ES modules)

1) Installing the package and Vuetify 2 from scratch:

```js
import Vue from 'vue'
import Vuetify from 'vuetify'
// import plugin
import { TiptapVuetifyPlugin } from 'tiptap-vuetify'
// don't forget to import CSS styles
import 'tiptap-vuetify/dist/main.css'
// Vuetify's CSS styles 
import 'vuetify/dist/vuetify.min.css'


// Vuetify Object (as described in the Vuetify 2 documentation)
const vuetify = new Vuetify()

// use Vuetify's plugin
Vue.use(Vuetify)
// use this package's plugin
Vue.use(TiptapVuetifyPlugin, {
  // the next line is important! You need to provide the Vuetify Object to this place.
  vuetify, // same as "vuetify: vuetify"
  // optional, default to 'md' (default vuetify icons before v2.0.0)
  iconsGroup: 'md'
})
```

More about vuetify icons you can read [here](https://vuetifyjs.com/en/components/icons).

2) Use in your component. Here is a complete example:

```vue
<template>
  <div>
    <!-- Use the component in the right place of the template -->
    <tiptap-vuetify
      v-model="content"
      :extensions="extensions"
    />
  </div>
</template>

<script>
// import the component and the necessary extensions
import { TiptapVuetify, Heading, Bold, Italic, Strike, Underline, Code, Paragraph, BulletList, OrderedList, ListItem, Link, Blockquote, HardBreak, HorizontalRule, History } from 'tiptap-vuetify'

export default {
  // specify TiptapVuetify component in "components"
  components: { TiptapVuetify },
  data: () => ({
    // declare extensions you want to use
    extensions: [
      History,
      Blockquote,
      Link,
      Underline,
      Strike,
      Italic,
      ListItem,
      BulletList,
      OrderedList,
      [Heading, {
        options: {
          levels: [1, 2, 3]
        }
      }],
      Bold,
      Code,
      HorizontalRule,
      Paragraph,
      HardBreak
    ],
    // starting editor's content
    content: `
      <h1>Yay Headlines!</h1>
      <p>All these <strong>cool tags</strong> are working now.</p>
    `
  })
}
</script>
```

### CDN
  
**Attention: it seems that this method does not work due to the fact that this is not done in the `tiptap` package itself. Therefore, it most likely will not work. [More details](https://github.com/iliyaZelenko/tiptap-vuetify/issues/146#issuecomment-601548526).**

There is another use case with the script tag (CDN version of package):

```html
<script src="https://unpkg.com/tiptap-vuetify"></script>
```

Or

```html
<script src="https://cdn.jsdelivr.net/npm/tiptap-vuetify"></script>
```

The plugin should be installed automatically after connecting the script.
The only thing is that the Vuetify object must be set in `window.vuetify` so that the plugin gets access to it.
Write if you have questions.

## Props

### placeholder

Placeholder is displayed when there is no content in the editor.

How to use:

```vue
  <tiptap-vuetify
    placeholder="Write something …"
  />
```

### extensions

You can use the necessary extensions. The corresponding buttons are added automatically
(in the order in which you specify the extension).

How to import and use them can be seen in the example above.

Available extensions (native tiptap extensions from `tiptap-extensions` package):

- `Bold`
- `Italic`
- `Strike`
- `Underline`
- `Code`
- `CodeBlock`
- `Image`
- `Paragraph`
- `BulletList` or `OrderedList` (use with the `ListItem` extension)
- `ListItem`
- `Link`
- `Blockquote`
- `HardBreak`
- `HorizontalRule`
- `History`
- `TodoList` (use with the `TodoItem` extension)
- `TodoItem`

I can easily add more.

### toolbar-attributes

You can specify your attributes for the toolbar (`<v-toolbar>` vuetify component).

For example, change the color:
```vue
:toolbar-attributes="{ color: 'yellow' }"
```

### card-props

Allows you to pass props for the editor's `<v-card>`.

```vue
<tiptap-vuetify
  :card-props="{ flat: true, color: '#26c6da' }"
/>
```

### editor-properties

Tiptap `Editor` properties (passed to the constructor).

You can see the full list of properties [here](https://github.com/scrumpy/tiptap#editor-properties).

This is the most powerful way to customize the editor for yourself. Pay particular attention to [`editorProps`](https://prosemirror.net/docs/ref/#view.EditorProps).

Only these properties are not available: `content`, `onUpdate`, they are used in this package.
If you want to add extensions to the `extensions` property, then use the `native-extensions` prop of this package.


### native-extensions

You can transfer native extensions (not related to this package) to the [`extensions`](https://tiptap.scrumpy.io/docs/api/classes.html#extensions-2) property.

How to use:

```vue
<tiptap-vuetify
  :native-extensions="nativeExtensions"
/>
```

```js
// You can import from tiptap's built-in extensions
import {
  TrailingNode
} from 'tiptap-extensions'
// or your own extension
import Title from './Title'

// in script:
data () {
  return {
    nativeExtensions: [
      new Title(),
      new TrailingNode({
        node: 'paragraph',
        notAfter: ['paragraph'],
      })
    ]
  }
}
```

[Here](https://github.com/iliyaZelenko/tiptap-vuetify/issues/100#issuecomment-551950075) is example of how to create your extension from scratch.

### custom image upload components
A custom image upload / selection component allows you to upload images to or select images from your application's backend system.
The when properly configured, the component will be displayed as a tab in the Add Image window.

To implement this, first create a component where users can upload and/or select images. The component will not get any props from the image window.
When a user selects an image, the component must emit a `select-file` event with an object containing `src` and `alt` properties.
For example:
```js
selectImage() {
  // When doing an asynchronous upload, you can set the src property to the value provided by the server (backend).
  this.$emit('select-file', { src: '/path/to/image.jpg', alt: 'Uploaded image' });
}
```

To add your component to the image extension, make the following changes:
Import your component, e.g.
```js
import FileSelector from '~/Components/FileSelector'
```
Update `tiptap-vuetify :extensions` value for Image as follows:
```js
...
[Image, {
  options: {
    imageSources: [
      { component: FileSelector, name: 'File Selector' }
    ]
  }
}]
...
```
The value of `name` will be the tab name.

By default, your component will be added to tiptap-vuetify's own image sources (URL and data url Upload). If you want to exclude these image sources you can set `imageSourcesOverride: true` in the extension's options.

A basic example implementation can be found in the package's demo code in [FileSelector.vue](demo/Components/FileSelector.vue) and [Index.vue](demo/pages/Index.vue).

### output-format

The format to output from the v-model. This defaults to `html`

For example, to get json instead:
```vue
<tiptap-vuetify
  output-format="json"
/>
```

### disabled

Flag for disabling entire editor (disabled toolbar items and [ready-only](https://tiptap.scrumpy.io/read-only) content area). Default false.

For example, disabled editor by component prop: 
```vue
<tiptap-vuetify
  :disabled="editorDisabled"
/>
```

## Events

### init

**first argument** (object):
```ts
{
  // tiptap editor instance
  editor: Editor
}
```

How to use:

```vue
<tiptap-vuetify
  @init="onInit"
/>
```

### keydown

Called when the editor receives a keydown event.

```vue
<tiptap-vuetify
  @keydown="onKeyDown"
/>
```

``` js
methods: {
  onkeydown (event, view) {
    console.log('event', event.key)
  }
}
```

Note: if you need to work with the <kbd>Enter</kbd>, then look [here](https://github.com/iliyaZelenko/tiptap-vuetify/issues/100#issuecomment-551950075).

[What is `view`?](https://prosemirror.net/docs/ref/#view.EditorView)

## Slots

### toolbar

You can manually display the toolbar. How to use:

1) Since Vue `2.6.0` (new syntax):

```vue
<tiptap-vuetify
  v-model="content"
  :extensions="extensions"
  :toolbar-attributes="{ color: 'yellow' }"
>
  <template #toolbar="{ buttons, commands, isActive }">
    <!--You can render the buttons as you wish (you can see in the source code how this is done).-->
    <pre>{{ buttons }}</pre>
  </template>
</tiptap-vuetify>
```

2) Before `2.6.0`:

```vue
<tiptap-vuetify>
  <div 
    slot="toolbar" 
    slot-scope="{ buttons, commands, isActive }"
  >
    <!--You can render the buttons as you wish (you can see in the source code how this is done).-->
    <pre>{{ buttons }}</pre>
  </div>
</tiptap-vuetify>
```

### footer

Footer of the Editor.

### toolbar-before

You can add content before the toolbar.

### toolbar-after

You can add content after the toolbar.

## Donate (creating code at your request out of turn)

💰 I can do some feature for you out of turn and at a fast pace or solve your problem, give a quick answers. To do this, you can [pay me one-time or make a subscription](http://patreon.com/zelen). We can discuss the details by email, it is written in [my profile](https://github.com/iliyaZelenko).

## TODO

- better images support: uploading (free hosting by default) [Relevant issue.](https://github.com/iliyaZelenko/tiptap-vuetify/issues/16) Ability to choose your uploading strategy. [Resize](https://github.com/scrumpy/tiptap/issues/333) image and change other params.
- site with full-docs and examples
- emoticons
- tests
- support for more extensions
