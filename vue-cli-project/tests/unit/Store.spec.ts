import store from '@/store/index'

describe('vuex test', () => {
  it('initial value', async () => {
    expect(store.state.count).toBe(0)
  })
  it('mutations.increment', async () => {
    store.commit('increment')
    expect(store.state.count).toBe(1)
  })
  it('getters.next', async () => {
    expect(store.getters.next).toBe(2)
  })
})
