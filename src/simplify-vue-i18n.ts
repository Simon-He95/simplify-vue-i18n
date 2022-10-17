import { type I18n, createI18n, useI18n } from 'vue-i18n'
import type { Messages } from './types'
let i18n: I18n
export function useLocale(messages: Record<string, any> = {}, language = 'zh') {
  i18n = createI18n({
    legacy: false,
    locale: language,
    messages,
  })
  return i18n
}

export function changeLocale(language: string) {
  if (!i18n)
    return console.error('i18n is not initialized')

  const { locale } = i18n.global as any
  locale.value = language
}

export function useScopeLocale(data: (Record<string, any> & Messages) = { messages: {} }): (I18n & { $t: (key: string, ...args: any[]) => string }) {
  const result = Object.assign(useI18n(data), { locale: i18n.global.locale }) as any
  const locale = data.locale
  if (locale)
    result.locale.value = locale
  return Object.assign(result, { $t: result.t })
}
