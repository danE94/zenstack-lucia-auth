/* eslint-disable */
const metadata = {
    fields: {
        user: {
            id: {
                name: 'id',
                type: 'String',
                isId: true,
                attributes: [{ name: '@default', args: [] }],
            },
            email: {
                name: 'email',
                type: 'String',
            },
            hashedPassword: {
                name: 'hashedPassword',
                type: 'String',
            },
            session: {
                name: 'session',
                type: 'Session',
                isDataModel: true,
                isArray: true,
                backLink: 'user',
            },
            post: {
                name: 'post',
                type: 'Post',
                isDataModel: true,
                isArray: true,
                backLink: 'user',
            },
        },
        session: {
            id: {
                name: 'id',
                type: 'String',
                isId: true,
            },
            userId: {
                name: 'userId',
                type: 'String',
                isForeignKey: true,
            },
            expiresAt: {
                name: 'expiresAt',
                type: 'DateTime',
            },
            user: {
                name: 'user',
                type: 'User',
                isDataModel: true,
                backLink: 'session',
                isRelationOwner: true,
                foreignKeyMapping: { id: 'userId' },
            },
        },
        post: {
            id: {
                name: 'id',
                type: 'String',
                isId: true,
                attributes: [{ name: '@default', args: [] }],
            },
            title: {
                name: 'title',
                type: 'String',
            },
            content: {
                name: 'content',
                type: 'String',
            },
            userId: {
                name: 'userId',
                type: 'String',
                isForeignKey: true,
            },
            user: {
                name: 'user',
                type: 'User',
                isDataModel: true,
                backLink: 'post',
                isRelationOwner: true,
                foreignKeyMapping: { id: 'userId' },
            },
        },
    },
    uniqueConstraints: {
        user: {
            id: {
                name: 'id',
                fields: ['id'],
            },
            email: {
                name: 'email',
                fields: ['email'],
            },
        },
        session: {
            id: {
                name: 'id',
                fields: ['id'],
            },
        },
        post: {
            id: {
                name: 'id',
                fields: ['id'],
            },
        },
    },
    deleteCascade: {
        user: ['Session', 'Post'],
    },
    authModel: 'User',
};
export default metadata;
