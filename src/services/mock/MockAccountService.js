export default class MockAccountService {
    static tryLogin({ username, password }) {
        return new Promise((resolve) => {
            resolve(
                {
                    user: 'salt',
                    fullName: `${username} ${password}`,
                }
            );
        });
    }
}