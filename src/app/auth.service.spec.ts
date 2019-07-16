import { AuthService } from './auth.service';

describe('Auth service tests', () => {
  let authService: AuthService;

  beforeEach(() => {
    authService = new AuthService();
  });

  it('Default value of isAccessAllowed should be false', () => {
    expect(authService.isAccessAllowed).toBe(false);
  });
  it('Method isUserAuthenticated should return isAccessAllowed', () => {
    expect(authService.isUserAuthenticated()).toBe(authService.isAccessAllowed);
  });
  it('Method allowAccess should change isAccessAllowed to true', () => {
    authService.allowAccess();
    expect(authService.isAccessAllowed).toBe(true);
  });
  it('Method blockAccess should change isAccessAllowed to false', () => {
    authService.blockAccess();
    expect(authService.isAccessAllowed).toBe(false);
  });
});
