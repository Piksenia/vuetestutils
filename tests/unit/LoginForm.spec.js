import {mount} from "@vue/test-utils";
import LoginForm from "../../src/components/LoginForm";

describe('LoginForm', () => {

    test('if user clicked button, form submit button should be emitted one time', async() => {
        const wrapper = mount(LoginForm);
        const inputField = wrapper.find('input[type="text"]');
        inputField.setValue('Xenia');
        await wrapper.trigger('submit');
        const formSubmittedCalls = wrapper.emitted('formSubmitted')
        expect(formSubmittedCalls).toHaveLength(1)
    })

    test('if user clicked button, form submit button should be emitted ten times', async() => {
        const wrapper = mount(LoginForm);
        const inputField = wrapper.find('input[type="text"]');
        inputField.setValue('Xenia');
        await wrapper.trigger('submit');
        const formSubmittedCalls = wrapper.emitted('formSubmitted')
        expect(formSubmittedCalls).toHaveLength(1)
        const expectedPayload = { name: 'Xenia' }
        expect(wrapper.emitted('formSubmitted')[0][0]).toMatchObject(expectedPayload)
    })

    /*test('if a user is logged in, show logout button', async() => {
        const wrapper = mount(LoginForm);

    })*/
})