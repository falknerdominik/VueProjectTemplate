export class MockLoginService {
    static tryLogin({ username, password }) {
        return {
            state: 'successful',
            user:  'salt',
            fullName: `${username} ${password}`
        };
    }
}