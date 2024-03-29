import { Project } from '@/types'
import { create } from 'zustand'
import UserLang from '@/components/UserLang'

interface storeProps {
  lang: string
  setLang: (lang: string) => void
  changeLang: () => void
  modalData: Project | null
  modalOpen: boolean
  openModal: (data: Project) => void
  closeModal: () => void
}

export const store = create<storeProps>((set, get) => ({
  lang: 'ES',
  setLang: (lang) => set({ lang }),
  changeLang: () => set({ lang: get().lang === 'EN' ? 'ES' : 'EN' }),
  modalData: null,
  modalOpen: false,
  openModal: (data) => set({ modalData: data, modalOpen: true }),
  closeModal: () => set({ modalData: null, modalOpen: false }),
}))
