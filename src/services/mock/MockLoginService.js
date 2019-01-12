export default class MockLoginService {
    static tryLogin({ username, password }) {
        return {
            state: 'successful',
            account: {
                user:  'salt',
                fullName: `${username} ${password}`,
            },
        };
    }
}