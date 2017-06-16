'use strict';
module.exports = {
    production : {
        client:'postgresql',
        connection: 'postgres://sofpctfqvqxyog:7143f4da890eb39eafb52c38981e13763741ba558c88052eff97a92235682500@ec2-184-73-167-43.compute-1.amazonaws.com:5432/d67fv98tiklvsg',
        pool:{
            min:1,
            max:1
        }
    },

    development: {
        client: 'postgresql',
        connection: "postgres://localhost/flash_card" || process.env.DATABASE_URL,
        pool: {
            min: 1,
            max: 1
        }
    },
    test: {
        client: 'postgresql',
        connection: "postgres://localhost/webpocket",
        pool: {
            min: 1,
            max: 1
        }
    }
};
