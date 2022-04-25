import { describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useStore } from '@/store/index'
import App from '@/App.vue'

const wrapper = mount(App, {
  global: {
    provide: {
      plugins: [createTestingPinia({ createSpy: vi.fn })],
    },
  },
})

const store = useStore()

describe('App.vue', () => {
  it('button click', async () => {
    store.count = 3
    await wrapper.find('#button').trigger('click')
    expect(wrapper.find('#current').text()).toMatch('current: 4')
    expect(wrapper.find('#next').text()).toMatch('next: 5')
  })
})
