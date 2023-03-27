migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g3j6ex27dwq9tud")

  // remove
  collection.schema.removeField("9vyi3sss")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vfpui8bj",
    "name": "studentNumber",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g3j6ex27dwq9tud")

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

  // remove
  collection.schema.removeField("vfpui8bj")

  return dao.saveCollection(collection)
})
