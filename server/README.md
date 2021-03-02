# Budget Application Server

POSTMAN Documentation
[https://documenter.getpostman.com/view/13590478/TWDfCsUy](https://documenter.getpostman.com/view/13590478/TWDfCsUy)

List of available endpoints:

- `POST /transactions`
- `GET /transactions/`
- `DELETE /transactions/:id`

### POST /transactions

Description: Add new transaction

Request:

- data:

```json
{
  "name": "string",
  "category": "string",
  "amount": "number"
}
```

Response:

- status: 201
- body:
  ​

```json
{
  "name": "Gaji",
  "category": "income",
  "amount": 500,
  "_id": "603e1fa027718a3dd8e64cdf"
}
```

### GET /transactions

Description: Get all transaction

Request:

Response:

- status: 200
- body:
  ​

```json
[
    {
        "_id": "603e1fa027718a3dd8e64cdf",
        "name": "Gaji",
        "category": "income",
        "amount": 500
    },
    {
        "_id": "603e201c27718a3dd8e64ce0",
        "name": "Makan",
        "category": "income",
        "amount": -100
    }
    ...
]
```

### DELETE /transactions/:id

Description: Remove one transaction

Request:

- params:
  - id: number

Response:

- status: 200
- body:
  ​

```json
{
  "message": "Transaction Successfuly Deleted"
}
```
