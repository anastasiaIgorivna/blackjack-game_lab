import Button from '../components/Button';

export default {
  title: 'UI/Button',
  component: Button,
  args: {
    onClick: () => alert('clicked'),
  },
};

export const Primary = {
  args: {
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    label: 'Secondary',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    label: 'Disabled',
    disabled: true,
  },
};