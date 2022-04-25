import { describe, it, expect } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useStore } from '@/store/index'

setActivePinia(createPinia())
const store = useStore()

describe('pinia test', () => {
  it('initial value', async () => {
    expect(store.count).toBe(0)
  })
  it('actions.increment', async () => {
    store.increment()
    expect(store.count).toBe(1)
  })
  it('getters.next', async () => {
    expect(store.next).toBe(2)
  })
})
