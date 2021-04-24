import AppHeader from '@/components/AppHeader'
import {mount} from '@vue/test-utils'

describe('AppHeader', () => {

    test('if user is not logged in, do not show logout button', () => {
        const wrapper = mount(AppHeader);
        expect(wrapper.find('#btnlogout').isVisible()).toBeFalsy();
        //expect(AppHeader.loggedIn).toBeFalsy();
    })

    test('if a user is logged in, show logout button', async() => {
        const wrapper = mount(AppHeader);
        wrapper.setData({loggedIn: true});
        //wait DOM to update
        await wrapper.vm.$nextTick()
        expect(wrapper.find('#btnlogout').isVisible()).toBeTruthy();
    })
})