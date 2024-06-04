import { defineFakeRoute } from '@zhennann/vite-plugin-fake-server/client';

export default defineFakeRoute([
  {
    url: '/home/user/login',
    method: 'post',
    response: req => {
      return {
        code: 0,
        message: 'Success',
        data: {
          user: req.body,
          jwt: 'ZZZZZZZZZZZZ',
        },
      };
    },
  },
]);
