import { shallowMount } from 'jest-vue-test-utils';
import HelloWorld from '../HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('should renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });

  it('should keep count when clicked 3 times', async () => {
    const wrapper = shallowMount(HelloWorld);
    await wrapper.find('button').trigger('click');
    await wrapper.find('button').trigger('click');
    await wrapper.find('button').trigger('click');
    expect(wrapper.find('button').text()).toBe('count is: 3');
  });
});
