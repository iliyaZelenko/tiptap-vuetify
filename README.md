Component simplifies integration [tiptap](https://github.com/scrumpy/tiptap) with [vuetify](https://github.com/vuetifyjs/vuetify).

## Installation

```
yarn add tiptap-vuetify
# Or 
npm install --save tiptap-vuetify
```


## Get started

1) Add `Vue.use` for plugin. You can select your icons group (`iconsGroup`, `'md'` by default).

```js
import TiptapVuetify from 'tiptap-vuetify'

Vue.use(TiptapVuetify, {
  // optional, default to 'md' (default vuetify icons)
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
  ListItem, Blockquote, HardBreak, HorizontalRule, History
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

## Props

# extensions

You can use the necessary extensions. The corresponding buttons are added automatically.

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
- `Blockquote`
- `HardBreak`
- `HorizontalRule`
- `History`

# toolbar-attributes

You can specify your attributes for the toolbar (`<v-toolbar>` vuetify component).

For example, change the color:
```vue
:toolbar-attributes="{ color: 'yellow' }"
```
