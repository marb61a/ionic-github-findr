import { User } from '../models/user';

const userList: User[] = [
    {
        name: 'JoeBloggs',
        company: 'ABC',
        location: 'Seattle, US',
        bio: 'I like lots of tech stuff',
        avatar_url: 'http://i.imgur.com/jav62p6.jpg',
        email: ''
    },
    {
        name: 'JohnDoe',
        company: 'Doe and Co.',
        location: 'London, UK',
        bio: 'I love open source!',
        avatar_url: 'http://i.imgur.com/TzWcihb.png'
    }
]

export const USER_LIST = userList;