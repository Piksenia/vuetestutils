import {mount} from "@vue/test-utils";
import RandomNumber from "../../src/components/RandomNumber";

describe('RandomNumber', () => {

    test('if user does not clicked the button, random number should be 0', () => {
        const wrapper = mount(RandomNumber);
        const buttonrn = wrapper.find('#btngetrn');
        expect(RandomNumber.data().randomNumber).toBe(0);
    })

    test('By default, randomNumber data value should be 0', () => {
        const wrapper = mount(RandomNumber)
        expect(wrapper.html()).toContain('<span>0</span>')
    })

    test('if user clicked the button, random number should not be 0', async() => {
        const wrapper = mount(RandomNumber)
        await wrapper.find('button').trigger('click')
        const randomNumber = parseInt(wrapper.find('span').element.textContent)

        expect(randomNumber).toBeGreaterThanOrEqual(1)
        expect(randomNumber).toBeLessThanOrEqual(10)
    })

    test('If button is clicked, randomNumber should be between 1 and 10', async() => {
        const wrapper = mount(RandomNumber, {
            propsData: {
                min: 200,
                max: 300
            }
        })
        await wrapper.find('button').trigger('click')
        const randomNumber = parseInt(wrapper.find('span').element.textContent)

        expect(randomNumber).toBeGreaterThanOrEqual(200)
        expect(randomNumber).toBeLessThanOrEqual(300)
    })
})