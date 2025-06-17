import { defineStore } from 'pinia'

export interface AppState {
  model: string
}

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    model: 'deepseek-chat', // 是否进入放映状态
  }),

  actions: {
    setModel(model: string) {
      this.model = model
    },
  },
})