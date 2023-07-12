import { Header } from './header';

export default {
  component: Header,
};

export const Example = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  args: {
    title: 'Welcome',
  },
};
