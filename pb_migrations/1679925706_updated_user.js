migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g3j6ex27dwq9tud")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xugm0jqe",
    "name": "lastName",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9vyi3sss",
    "name": "studentNumber",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g3j6ex27dwq9tud")

  // remove
  collection.schema.removeField("xugm0jqe")

  // remove
  collection.schema.removeField("9vyi3sss")

  return dao.saveCollection(collection)
})
