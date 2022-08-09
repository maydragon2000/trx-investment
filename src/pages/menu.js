const menus = [
    {
        id: 1,
        name: 'Home',
        links: '#',
        namesub: [
            {
                id: 1,
                sub: 'Home',
                links: '/'
            }
        ]
    },
    {
        id: 5,
        name: 'Page',
        links: '#',
        namesub: [
            {
                id: 3,
                sub: 'Wallet Connect',
                links: '/wallet-connect'
            },
            {
                id: 5,
                sub: 'Edit Profile',
                links: '/edit-profile'
            },
            {
                id: 7,
                sub: 'Login',
                links: '/login'
            },
            {
                id: 8,
                sub: 'Sign Up',
                links: '/sign-up'
            },
        ],
    },
]

export default menus;