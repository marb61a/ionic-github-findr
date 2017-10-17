import { User } from '../models/user.interface';

const userList: User[] = [
    { 
        name: 'Jack Black',
        company: 'ACME ',
        location: 'New York',
        bio: 'Blah blah blurb about myself',
        avatar_url: string,
        email: 'jackb@example.com'
    },
    { 
        name: 'Joe Bloggs',
        company: 'ABC',
        location: 'London',
        bio: 'Blah blah blurb about myself',
        avatar_url: string,
        email: 'joe@abc.com'
    }
];

export const USER_LIST = userList;