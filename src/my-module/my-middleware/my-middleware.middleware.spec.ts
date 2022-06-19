import { MyMiddlewareMiddleware } from './my-middleware.middleware';

describe('MyMiddlewareMiddleware', () => {
  it('should be defined', () => {
    expect(new MyMiddlewareMiddleware()).toBeDefined();
  });
});
