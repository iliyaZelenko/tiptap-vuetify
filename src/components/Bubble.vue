<template>
  <editor-menu-bubble
    v-slot="context"
    :editor="editor"
  >
    <div
      class="tiptap-vuetify-editor-pop"
      role="tooltip"
    >
      <div class="tiptap-vuetify-editor-pop__popper">
        <actions-render
          :actions="actions"
          :context="context"
          :editor="editor"
          :dark="true"
        />
        <div x-arrow />
      </div>
    </div>
  </editor-menu-bubble>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Editor, EditorMenuBubble } from 'tiptap'
// import { icons } from '~/extensions/nativeExtensions/link/Link'
import I18nMixin from '~/mixins/I18nMixin'
import ExtensionActionInterface from '~/extensions/actions/ExtensionActionInterface'
import ActionsRender from '~/components/ActionsRender.vue'
import { VCard } from 'vuetify/lib'
// нативный menu-bubble от tiptap не правильно выдавал позицию в последней версии. Норм поведение у них пропало в 1.16.2
import Popper from 'popper.js'

/* eslint-disable */
// TODO REFACTOR! Потратил 3 часа чтобы решить один странный issue и переделать под poper.

@Component({
  components: {
    ActionsRender,
    EditorMenuBubble,
    VCard
  }
})
export default class Menu extends mixins(I18nMixin) {
  @Prop({ type: Object, required: true })
  readonly editor!: Editor

  @Prop({
    type: Array,
    default: () => []
  })
  readonly actions: ExtensionActionInterface[]

  mounted () {
    class RangeRef {
      range: any = null
      rect: any = null
      timeoutMousemove: any = null

      constructor () {
        this.updateRect()

        const update: any = (evt, hide) => {
          let selection = document.getSelection()

          this.range = selection && selection.rangeCount && selection.getRangeAt(0)

          this.updateRect(hide)
        }
        const editorContent = document.querySelector('.tiptap-vuetify-editor .ProseMirror')!

        editorContent.addEventListener('mouseup', update)
        editorContent.addEventListener('input', update)
        editorContent.addEventListener('keydown', evt => update(evt, true))

        const debounce = function debounce(f, ms) {
          let isCooldown = false;

          return function() {
            if (isCooldown) return;

            f.apply(this, arguments);

            isCooldown = true;

            setTimeout(() => isCooldown = false, ms);
          };
        }

        editorContent.addEventListener('mousemove',
          debounce(function () {
            update()
          }, 100)
        )

        window.addEventListener('scroll', update)
        document
          .scrollingElement!
          .addEventListener('scroll', update)
      }

      updateRect (hide = false) {
        if (!hide && this.range) {
          this.rect = this.range.getBoundingClientRect()
        } else {
          this.rect = {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: 0,
            height: 0
          }
        }

        this.rectChangedCallback(this.rect)
      }

      rectChangedCallback (arg) {
        // Abstract to be implemented
      }

      getBoundingClientRect () {
        return this.rect
      }

      get clientWidth () {
        return this.rect.width
      }

      get clientHeight () {
        return this.rect.height
      }
    }

    setTimeout(() => {
      const pop = document.querySelector<HTMLElement>('.tiptap-vuetify-editor-pop')!
      const rangeRef: any = new RangeRef()
      const popper = new Popper(rangeRef, pop, {
        placement: 'top',
        modifiers: { offset: { offset: '0,5' } },
        positionFixed: true
      })

      rangeRef.rectChangedCallback = ({ width }) => {
        if (width > 0) {
          popper.scheduleUpdate()
          pop.firstElementChild!.classList.add('tiptap-vuetify-editor-pop__popper--visible')
        } else {
          pop.firstElementChild!.classList.remove('tiptap-vuetify-editor-pop__popper--visible')
        }
      }
    }, 1000)
  }
}
</script>

<style lang="stylus">
.tiptap-vuetify-editor-pop {
  position: fixed;
  z-index 1;
  opacity: 0.9 !important
  transition: transform 100ms ease-in-out;

  .tiptap-vuetify-editor-pop__popper {
    background-image: linear-gradient(
      to bottom,
      rgba(49, 49, 47, 0.99),
      #262625
    );
    background-repeat: repeat-x;
    border-radius: 5px;
    padding: 0 10px;
    color: white;
    line-height: 44px;
    display: inline-block;
    visibility: hidden
    opacity: 0;
    pointer-events: none;

    &--visible {
      visibility: visible
      pointer-events: auto;
      animation: pop-upwards 180ms forwards linear;
      animation-delay: 0.2s;
      transition: opacity 0s linear 0.2s;
    }
  }

  &[x-placement="top"] {
    margin-bottom: 7px;
  }
  &[x-placement="bottom"] {
    margin-top: 7px;
  }
  &[x-placement="bottom"] .tiptap-vuetify-editor-pop__popper {
    background-image: linear-gradient(to top, rgba(49, 49, 47, 0.99), #262625);
  }
}

[x-arrow] {
  position: fixed;
  width: 14px;
  height: 14px;
  background-color: #262625;
  transform: rotate(45deg);
  z-index: -1;

  [x-placement="top"] & {
    margin-bottom: -7px;
    bottom: 0;
  }
  [x-placement="bottom"] & {
    margin-top: -7px;
    top: 0;
  }
}


@keyframes pop-upwards {
  0% {
    transform: matrix(0.97, 0, 0, 1, 0, 12);
    opacity: 0;
  }

  20% {
    transform: matrix(0.99, 0, 0, 1, 0, 2);
    opacity: 0.7;
  }

  40% {
    transform: matrix(1, 0, 0, 1, 0, -1);
    opacity: 1;
  }

  70% {
    transform: matrix(1, 0, 0, 1, 0, 0);
    opacity: 1;
  }

  100% {
    transform: matrix(1, 0, 0, 1, 0, 0);
    opacity: 1;
  }
}
</style>
