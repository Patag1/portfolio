import { create } from 'zustand'

interface storeProps {
  lang: 'EN' | 'ES'
  changeLang: () => void
}

export const store = create<storeProps>((set, get) => ({
    lang: 'EN',
    changeLang: () => set({ lang: get().lang === 'EN' ? 'ES' : 'EN' })
}))