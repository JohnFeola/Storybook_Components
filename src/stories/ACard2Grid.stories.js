import React from 'react'
import ACard2Grid from './ACard2Grid'

export default {
    title: 'Components/ACards2Grid',
    component: ACard2Grid,
    argTypes: {
        cards: {control: 'object'},
    },
};


const Template = (args) => <ACard2Grid {... args} />;

export const SampleGrid = Template.bind({});

SampleGrid.args = {
    cards: [
        { firstName: 'John', lastName: 'Feola', buttonText: "save" },
    { firstName: 'Matthew', lastName: 'Feola', buttonText: "save"  },
    { firstName: 'Craig', lastName: 'Jones', buttonText: "save"  },
    { firstName: 'Youssef', lastName: 'Johnson' , buttonText: "save" },
    { firstName: 'Emily', lastName: 'Smith' , buttonText: "save" }, 
    ],
};


export const OtherNames = Template.bind({});
OtherNames.args = {
    cards: [
        { firstName: 'John', lastName: 'Williamson', buttonText: "save" },
        { firstName: 'Darrell', lastName: 'Cheripko' , buttonText: "save" },
        { firstName: 'Mark', lastName: 'Jones' , buttonText: "save" },
        { firstName: 'Nick', lastName: 'Smith' , buttonText: "save" },
        { firstName: 'Emily', lastName: 'Gundling' , buttonText: "save" }, 
        { firstName: 'John', lastName: 'Franklin', buttonText: "save" },
        { firstName: 'Darrell', lastName: 'Cheripko', buttonText: "save"  },
        { firstName: 'Mark', lastName: 'Jones', buttonText: "save"  },
        { firstName: 'Nick', lastName: 'Fruhling', buttonText: "save"  },
        { firstName: 'Emily', lastName: 'Gundling', buttonText: "save"  },
    ],
};

