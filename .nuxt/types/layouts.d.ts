import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/Users/skankhunt/Blogging-with-Nuxt/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}