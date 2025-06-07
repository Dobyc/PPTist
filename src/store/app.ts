import { defineStore } from 'pinia'

export interface AppState {
  model: string
}

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    model: 'doubao-1.5-pro-32k', // 是否进入放映状态
  }),

  actions: {
    setModel(model: string) {
      this.model = model
    },
  },
})