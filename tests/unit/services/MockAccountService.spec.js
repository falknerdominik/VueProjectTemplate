import MockAccountService from '@/services/mock/MockAccountService';

describe('MockAccountService', () => {
    it('Returns promise that fulfills correctly', () => {
        MockAccountService.tryLogin({username: 'test', password: 'test'})
            .then(account => {
                expect(account.user).toMatch("salt");
            })
            .catch(() => {
                expect(true).toBe(false);
            });
    })
});
