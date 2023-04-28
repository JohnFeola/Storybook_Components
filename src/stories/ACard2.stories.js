import React from 'react'
import './ACard2.css'
import ACard2 from './ACard2';

export default {
    title: 'Components/ACard2',
    component: ACard2,
    argTypes: {
        firstName: { control: 'text'},
        lastName: { control: 'text'},
    },
};

const Template = (args) => <ACard2 {...args}/>;

export const Default = Template.bind({});
Default.args = {
    firstName: "John",
    lastName: "Feola",
    buttonText: "Save",
};


export const Matthew = {
    args: {
        firstName: "Matthew",
        lastName: "Feola",
        buttonText: "Button"
    }
};

export const Choices = {
    args: {
        firstName: "James",
        lastName: "Harrison",
        buttonText:"Save",
    }
}

Choices.argTypes = {
    firstName: {
      control: 'inline-radio',
      options: ['Craig', 'Youssef', 'Emily']
    },
    lastName: {
        control: 'inline-radio',
        options: ["Feola", "Jones", "Johnson"]
    },
    buttonText: {
        control: 'select',
        options: ["button1", "button2", "button3", "not_A_Button", "save", "yes", "no", "Anotherbutton"]
    }
  }
  