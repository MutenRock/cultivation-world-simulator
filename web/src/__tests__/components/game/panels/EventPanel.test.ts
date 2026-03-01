import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import EventPanel from '@/components/game/panels/EventPanel.vue'
import { createPinia, setActivePinia } from 'pinia'
import { createI18n } from 'vue-i18n'

describe('EventPanel', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should render successfully', () => {
    const i18n = createI18n({
      legacy: false,
      locale: 'zh-CN',
      messages: {
        'zh-CN': {
          game: {
            event_panel: {
              title: 'Events',
              year: 'Year {year}',
              month: 'Month {month}',
            }
          }
        }
      }
    })

    const wrapper = mount(EventPanel, {
      global: {
        plugins: [createPinia(), i18n],
        directives: {
          sound: () => {}
        }
      }
    })

    expect(wrapper.exists()).toBe(true)
  })
})
