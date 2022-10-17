<span><div align="center">![kv](/assets/kv.png)</div></span>
<p align="center"><a href="https://www.npmjs.com/package/simplify-vue-i18n">simplify-vue-i18n</a></p>
To make it easier for you to use vue-i18n

## Installation
```bash
npm install simplify-vue-i18n
```

## Usage
```js
import { useLocale } from 'simplify-vue-i18n'
const messages = {
  zh: {
    message: {
      hello: '你好，世界'
    }
  },
  en: {
    message: {
      hello: 'hello world',
    },
  },
  jp: {
    message: {
      hello: 'こんにちは、世界',
    },
  },
}
const i18n = useLocale(messages)
const app = createApp(App)
app.use(i18n)
```
```html
<!-- switch language -->
import { changeLocale } from "simplify-vue-i18n";

<template>
  <p>{{ $t("message.hello") }}</p>
  <div flex="~ gap3" justify-center my4>
    <button @click="changeLocale('zh')" btn>zh</button>
    <button @click="changeLocale('jp')" btn>jp</button>
    <button @click="changeLocale('en')" btn>en</button>
  </div>
</template>
```

```html
<!-- scoped message -->
import { useScopeLocale } from "simplify-vue-i18n";
useScopeLocale({
  locale:'zh',
  message:{
    ...
  }
})

<template>
  <p>{{ $t("message.hello") }}</p>
  <div flex="~ gap3" justify-center my4>
    <button @click="changeLocale('zh')" btn>zh</button>
    <button @click="changeLocale('jp')" btn>jp</button>
    <button @click="changeLocale('en')" btn>en</button>
  </div>
</template>
```

## Thanks
- [vue-i18n-next](https://github.com/intlify/vue-i18n-next)
- [vue](https://github.com/vuejs/core)

<a href="https://github.com/Simon-He95/sponsor" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a>
