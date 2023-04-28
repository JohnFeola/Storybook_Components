import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    label: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

export const SmallGrey = {
  args: {
    size: "small",
    label: "greyButton",
    backgroundColor: 'gray',
  },
};


export const bigRed = {
  args: {
    size: "large",
    label: "hello world",
    primary: false,
    backgroundColor: 'red',
  }
}

bigRed.argTypes = {
  backgroundColor: {
    control: 'inline-radio',
    options: ['red', 'green', 'blue']
  },
  label: {
    control: 'inline-radio',
    options: ['Button1', "button2", "longer string here for example", "how about a really long stringho really lo\\ Ang string how about a really long string  "]
  }
}

SmallGrey.argTypes = {
  backgroundColor: {
    control: 'inline-radio',
    options: ['gray', 'lightgray', 'darkgray']
  }
}

