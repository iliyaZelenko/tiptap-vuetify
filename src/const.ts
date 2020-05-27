export const PACKAGE_NAME = 'tiptap-vuetify'

export const VuetifyVuePrototypeProperty = '$vuetify'

export const EVENTS = {
  INPUT: 'input' as const,
  INIT: 'init' as const,
  BLUR: 'blur' as const,
  FOCUS: 'focus' as const
}

export const PROPS = {
  VALUE: 'value' as const,
  EXTENSIONS: 'extensions' as const,
  TOOLBAR_ATTRIBUTES: 'toolbarAttributes' as const,
  EDITOR_PROPERTIES: 'editorProperties' as const,
  NATIVE_EXTENSIONS: 'nativeExtensions' as const,
  PLACEHOLDER: 'placeholder' as const,
  CARD_PROPS: 'cardProps' as const,
  OUTPUT_FORMAT: 'outputFormat' as const,
  TYPE: 'type' as const,
  MIN_HEIGHT: 'minHeight' as const,
  MAX_HEIGHT: 'maxHeight' as const,
  DISABLED: 'disabled' as const
}

export enum EDITOR_TYPES_ENUM {
  card = 'card',
  inline = 'inline'
}
