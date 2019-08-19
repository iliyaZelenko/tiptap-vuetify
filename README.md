**At the moment, this package does not fully support Vuetifi 2. If you want me to work more on this project, you can give me motivation in the form of a star. Thanks for attention!**
  
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

WYSIWYG editor for Vuetify. Component simplifies integration [tiptap](https://github.com/scrumpy/tiptap) with [vuetify](https://github.com/vuetifyjs/vuetify).

[DEMO on codesanbox](https://codesandbox.io/s/p2wnzxyo90?fontsize=14&module=%2Fsrc%2Fexamples%2FSimple.vue)

[
![](https://i.imgur.com/vfKWfkv.png)
](https://codesandbox.io/s/p2wnzxyo90?fontsize=14&module=%2Fsrc%2Fexamples%2FSimple.vue)


## Navigation

<!-- TOC -->

- [Features](#features)
- [Installation](#installation)
- [Get started](#get-started)
- [Props](#props)
- [Events](#events)
- [Slots](#slots)
- [Frequent issues](#frequent-issues)
- [TODO](#todo)

<!-- /TOC -->

## Features

- used vuetify components
- support for different types of icons ([fa](https://fontawesome.com/),  [md](https://material.io/tools/icons/), [mdi](https://materialdesignicons.com/))
- internationalization (2 languages: en, ru)
- easy to start using
- props and events are available
- the project is ready to actively develop if there is support (stars)!
- TypeScript support

## Installation

```
yarn add tiptap-vuetify
# Or 
npm install --save tiptap-vuetify
```


## Get started

1) Add `Vue.use` for plugin. You can select your icons group (`iconsGroup`, `'md'` by default).

```js
import Vue from 'vue'
import { TiptapVuetifyPlugin } from 'tiptap-vuetify'
// don't forget to import styles
import 'tiptap-vuetify/dist/main.css'

// first it
Vue.use(Vuetify)
// AFTER Vue.use(Vuetify) !!!
Vue.use(TiptapVuetifyPlugin, {
  // optional, default to 'md' (default vuetify icons before v2.0.0)
  iconsGroup: 'md'
})
```

More about vuetify icons you can read [here](https://vuetifyjs.com/en/components/icons).

2) Use in your component. Here is a complete example:

```vue
<template>
  <div>
    <!--Use the component in the right place of the template-->
    <tiptap-vuetify
      v-model="content"
      :extensions="extensions"
    />

    <!--Here's how to make a preview (optional)-->
    <h1>Preview</h1>
    <hr>

    <div
      class="tiptap-vuetify-editor__content"
      v-html="content"
    />
  </div>
</template>

<script>
// import the component and the necessary extensions
import { TiptapVuetify, Heading, Bold, Italic, Strike, Underline, Code, CodeBlock, Paragraph, BulletList, OrderedList,
  ListItem, Link, Blockquote, HardBreak, HorizontalRule, History
} from 'tiptap-vuetify'

export default {
  // specify in the list of components
  components: { TiptapVuetify },
  data: () => ({
    // declare extensions you want to use
    extensions: [
      // you can specify options for extension
      new Heading({
        levels: [1, 2, 3]
      }),
      new Bold(),
      new Italic(),
      new Strike(),
      new Underline(),
      new Code(),
      new CodeBlock(),
      new Paragraph(),
      new BulletList(),
      new OrderedList(),
      new ListItem(),
      new Link(),
      new Blockquote(),
      new HardBreak(),
      new HorizontalRule(),
      new History()
    ],
    // starting content for the editor
    content: `
      <h1>Yay Headlines!</h1>
      <p>All these <strong>cool tags</strong> are working now.</p>
    `
  })
}
</script>
```

There is another use case with the script tag (CDN version of package):

```html
<script src="https://unpkg.com/tiptap-vuetify"></script>
```

Or

```html
<script src="https://cdn.jsdelivr.net/npm/tiptap-vuetify"></script>
```

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

Available extensions:

- `Bold`
- `Italic`
- `Strike`
- `Underline`
- `Code`
- `CodeBlock`
- `Paragraph`
- `BulletList`
- `OrderedList`
- `ListItem`
- `Link`
- `Blockquote`
- `HardBreak`
- `HorizontalRule`
- `History`

### toolbar-attributes

You can specify your attributes for the toolbar (`<v-toolbar>` vuetify component).

For example, change the color:
```vue
:toolbar-attributes="{ color: 'yellow' }"
```

### editor-properties

Tiptap `Editor` properties (passed to the constructor).

You can see the full list of properties [here](https://github.com/scrumpy/tiptap#editor-properties).

Only these properties are not available: `content`, `onUpdate`, they are used in this package.
If you want to add extensions to the `extensions` property, then use the `native-extensions` prop of this package.


### native-extensions

How to use:

```vue
<tiptap-vuetify
  :native-extensions="nativeExtensions"
/>
```

```js
// in script:
data () {
  return {
    nativeExtensions: [new TiptapExtension1(), new TiptapExtension2()]
  }
}
```

### output-format

The format to output from the v-model. This defaults to `html`

For example, to get json instead:
```vue
<tiptap-vuetify
  output-format="json"
/>
```

## Events

### @init

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

## Slots

### toolbar

How to use:

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

## Frequent issues

### A La Carte / VuetifyLoaderPlugin

You may receive an error like this:

```
[Vue warn]:  Unknown custom element: <v-card> - did you register 
the component correctly? For recursive components, 
make sure to provide the "name" option.
```

To solve it, specify for Vuetify that you want to use components that this package uses: 

```
Vue.use(Vuetify, {
  components: {
    VTextField,
    VTooltip,
    VToolbar,
    VCard,
    VIcon,
    VBtn,
  }
});
```

In the future version this problem will most likely be solved and you will not need to do anything.

## TODO

- images uploading (free hosting by default) [Relevant issue.](https://github.com/iliyaZelenko/tiptap-vuetify/issues/16)
- site with docs and examples
- emoticons
- tests
- choose where the extension buttons should be displayed: in the toolbar or in the bubble menu (it's done and ready to go to the new version)
