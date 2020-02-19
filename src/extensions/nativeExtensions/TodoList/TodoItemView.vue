<template>
  <li
    :data-type="node.type.name"
    :data-done="node.attrs.done.toString()"
    class="tiptap-vuetify-todo-item-view"
    data-drag-handle
  >
    <VCheckbox
      :input-value="node.attrs.done"
      class="mr-2 mt-3 pt-1"
      hide-details
      @change="onChange"
    />
    <div
      ref="content"
      class="todo-content"
      :contenteditable="view.editable.toString()"
    />
  </li>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { VCheckbox } from 'vuetify/lib'

@Component({
  components: { VCheckbox }
})
export default class TodoItemView extends Vue {
  @Prop({
    type: Object,
    required: true
  })
  node

  @Prop({
    type: Object,
    required: true
  })
  view

  @Prop({
    type: Function,
    required: true
  })
  updateAttrs: (...args: any) => any

  onChange () {
    this.updateAttrs({
      done: !this.node.attrs.done
    })
  }
}
</script>

<style lang="stylus">
.tiptap-vuetify-todo-item-view
  display: flex
</style>
