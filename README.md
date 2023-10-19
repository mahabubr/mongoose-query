### What is the purpose of creating a model with an interface and schema in MongoDB? How does it help in defining the structure of a collection?

- in mongodb creating model with interface help to define the structure. that is
  a organized way to connect database and easy to manage database. it help for
  data validation. we can validate data and avoid simple error. the most use
  case in we can reuse the schema and our code don't repeated.

<br/>
<br/>

### Explain the concept of field filtering in MongoDB. How can you specify which fields to include or exclude in the returned documents?

- in database management we need to find operator. because its help us to find
  document in database. in find method we can easily access database and filter
  all data or any data as we need. in mongodb have many operator to filter the
  data. and its have Inclusion Projection or Exclusion Projection to select the
  data and help us to select how many data we need.

<br/>
<br/>

### What are instance methods in MongoDB models? Provide an example of a custom instance method and explain its purpose.

- in mongodb models that he return that is instance. we need to get, update or
  delete anything do operation in data we need to access schemas and that access
  help us model and the model is instance. we create a instance and do operating
  in database.

```
  const userSchema = new mongoose.schema({
        name: String,
        phone: Number,
        email: String
    })

    const User = mongoose.model("User", userSchema)
```

<br/>
<br/>

### How do you use comparison operators like "$ne," "$gt," "$lt," "$gte," and "$lte" in MongoDB queries? Provide examples to illustrate their usage.

- in mongodb there have every one is operator and we everyone is different each
  other. we $ne -> NOT EQUAL | $gt -> GRATER THAN | $lt -> LESS THEN | $gte ->
  GRATER THAN EQUAL | $lte -> LESS THAN QUEAl. when we query the database in
  this operator every operator give different data.

` db.collection.find({ age: { $ne: 25 } })`
` db.collection.find({ price: { $gt: 100 } })`
` db.collection.find({ rating: { $lt: 4.5 } })`
` db.collection.find({ quantity: { $gte: 10 } })`
` db.collection.find({ createdAt: { $lte: 20 } })`

<br/>
<br/>

### What are MongoDB’s “$in” and “$nin” operators? How can you use them to match values against an array of values or exclude values from a given array?

- $in operator match and return the data. this operator check the condition that we give and return data by our condition. this operator filter the data that we give specific condition.
```
    db.collection.find({ field: { $in: [value1, value2, value3] } })
```

- - $nin operation operator match the data that you give into value and give us does not match data. because is NOT IN operator. he give not match data that we give in condition.
```
    db.collection.find({ field: { $nin: [value1, value2, value3] } })
```