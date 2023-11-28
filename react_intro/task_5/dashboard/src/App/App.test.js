import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App'

describe('Tests cases in App component', () => {
    it('The class App-header exist in App', () => {
        const wrapper = shallow(<App />); //surface envelope
        const exist = wrapper.find('.App-header'); // Look in App to see if it has an 'App-header' div

        expect(exist).to.have.length(1);
    });
    it('The class App-body exist in App', () => {
        const wrapper = shallow(<App/>); //surface envelope
        const exist = wrapper.find('.App-body'); // Look in App to see if it has an 'App-body' div

        expect(exist).to.have.length(1);
    })
    it('The class App-footer exist in App', () => {
        const wrapper = shallow(<App/>); //surface envelope
        const exist = wrapper.find('.App-footer'); // Look in App to see if it has an 'App-footer' div

        expect(exist).to.have.length(1);
    })
})