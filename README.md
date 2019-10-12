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

If you have Vuetify `1.x` (not `2.x`), then you can find docs and demo [here](https://codesandbox.io/s/p2wnzxyo90?fontsize=14&module=%2Fsrc%2Fexamples%2FSimple.vue).

[DEMO on codesanbox](https://codesandbox.io/s/vue-template-6p9wp?fontsize=14&module=%2Fsrc%2Fexamples%2FSimple.vue)

[
![](https://d1sz9tkli0lfjq.cloudfront.net/items/0s2E3A433x1A2b1l3q24/Image%202019-10-07%20at%203.30.03%20AM.png)
](https://codesandbox.io/s/vue-template-6p9wp?fontsize=14&module=%2Fsrc%2Fexamples%2FSimple.vue)


## Navigation

<!-- TOC -->

- [Features](#features)
- [Installation](#installation)
- [Get started](#get-started)
- [Props](#props)
- [Events](#events)
- [Slots](#slots)
- [TODO](#todo)

<!-- /TOC -->

## Features

- used vuetify components
- support for different types of icons ([fa](https://fontawesome.com/),  [md](https://material.io/tools/icons/), [mdi](https://materialdesignicons.com/))
- internationalization (en, fr, pl, es, ru, uk, ptbr), with automatic detection of the current language through the Vuetify
- easy to start using
- props and events are available
- TypeScript support
- the project is ready to actively develop if there is support (stars)!
- the ability to create and use your own extensions
- choose where the extension buttons should be displayed: in the toolbar or in the bubble menu
- Vuetify `2.x` and `1.x` support

## Installation

```
yarn add tiptap-vuetify
# Or 
npm install --save tiptap-vuetify
```


## Get started

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
      Link,
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

### Nuxt

If you have Nuxt.js, [here](https://codesandbox.io/s/github/iliyaZelenko/tiptap-vuetify-nuxt/tree/master/) is a simple demo how it works.
The code for this example is taken from [this github repository](https://github.com/iliyaZelenko/tiptap-vuetify-nuxt).

### CDN (<script>)

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

I can easily add more.

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

## TODO

- images uploading (free hosting by default) [Relevant issue.](https://github.com/iliyaZelenko/tiptap-vuetify/issues/16) Ability to choose your uploading strategy.
- site with full-docs and examples
- emoticons
- tests
- support for more extensions
