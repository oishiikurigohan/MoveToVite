import store from '@/store/index'
import { mount } from '@vue/test-utils'
import App from '@/App.vue'

const wrapper = mount(App, {
  global: {
    provide: {
      store: store,
    },
  },
})

describe('App.vue', () => {
  it('button click', async () => {
    store.replaceState({ count: 3 })
    await wrapper.find('#button').trigger('click')
    expect(wrapper.find('#current').text()).toMatch('current: 4')
    expect(wrapper.find('#next').text()).toMatch('next: 5')
  })
})
