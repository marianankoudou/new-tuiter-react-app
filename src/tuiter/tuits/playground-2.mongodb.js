
use('tuiter-su2-23');

db.users.drop();

db.users.insertMany([
    {'_id': 1, 'username': 'alice', 'password': 111}, 
    {'_id': 2, 'username': 'bob', 'password': 222},
    {'_id': 3, 'username': 'john', 'password': 333}
]);

