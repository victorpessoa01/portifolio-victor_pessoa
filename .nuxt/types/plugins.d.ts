// Generated by Nuxt'
import type { Plugin } from '#app'

type Decorate<T extends Record<string, any>> = { [K in keyof T as K extends string ? `$${K}` : never]: T[K] }

type IsAny<T> = 0 extends 1 & T ? true : false
type InjectionType<A extends Plugin> = IsAny<A> extends true ? unknown : A extends Plugin<infer T> ? Decorate<T> : unknown

type NuxtAppInjections = 
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.6_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_vlvmozii4etvgxxjd4bbdtzjkq/node_modules/nuxt/dist/app/plugins/revive-payload.client.js").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.6_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_vlvmozii4etvgxxjd4bbdtzjkq/node_modules/nuxt/dist/head/runtime/plugins/unhead.js").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.6_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_vlvmozii4etvgxxjd4bbdtzjkq/node_modules/nuxt/dist/app/plugins/router.js").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.6_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_vlvmozii4etvgxxjd4bbdtzjkq/node_modules/nuxt/dist/app/plugins/navigation-repaint.client.js").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.6_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_vlvmozii4etvgxxjd4bbdtzjkq/node_modules/nuxt/dist/app/plugins/check-outdated-build.client.js").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.6_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_vlvmozii4etvgxxjd4bbdtzjkq/node_modules/nuxt/dist/app/plugins/revive-payload.server.js").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.6_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_vlvmozii4etvgxxjd4bbdtzjkq/node_modules/nuxt/dist/app/plugins/chunk-reload.client.js").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxt+devtools@1.6.0_rollup@4.24.0_vite@5.4.9_@types+node@22.7.6_terser@5.36.0__vue@3.5.12/node_modules/@nuxt/devtools/dist/runtime/plugins/devtools.server.js").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxt+devtools@1.6.0_rollup@4.24.0_vite@5.4.9_@types+node@22.7.6_terser@5.36.0__vue@3.5.12/node_modules/@nuxt/devtools/dist/runtime/plugins/devtools.client.js").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.6_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_vlvmozii4etvgxxjd4bbdtzjkq/node_modules/nuxt/dist/app/plugins/dev-server-logs.js").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.13.2_@parcel+watcher@2.4.1_@types+node@22.7.6_ioredis@5.4.1_magicast@0.3.5_rollup@4.24_vlvmozii4etvgxxjd4bbdtzjkq/node_modules/nuxt/dist/app/plugins/check-if-layout-used.js").default> &
  InjectionType<typeof import("../../plugins/vuetify.js").default>

declare module '#app' {
  interface NuxtApp extends NuxtAppInjections { }

  interface NuxtAppLiterals {
    pluginName: 'nuxt:revive-payload:client' | 'nuxt:head' | 'nuxt:router' | 'nuxt:revive-payload:server' | 'nuxt:chunk-reload' | 'nuxt:global-components' | 'nuxt:checkIfLayoutUsed'
  }
}

declare module 'vue' {
  interface ComponentCustomProperties extends NuxtAppInjections { }
}

export { }
