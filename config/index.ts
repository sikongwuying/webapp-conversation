import type { AppInfo } from '@/types/app'
export const APP_ID = `${process.env.NEXT_PUBLIC_APP_ID}`
export const API_KEY = `${process.env.NEXT_PUBLIC_APP_KEY}`
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const APP_INFO: AppInfo = {
  title: 'My Custom AI Assistant',
  description: 'A powerful AI assistant customized for your needs',
  copyright: '© 2025 My Custom Chat',
  privacy_policy: 'https://example.com/privacy',
  default_language: 'en',
}

export const isShowPrompt = true
export const promptTemplate = 'I want you to act as a helpful AI assistant.'

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
