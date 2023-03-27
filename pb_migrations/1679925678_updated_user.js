migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g3j6ex27dwq9tud")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lzwkgdi3",
    "name": "firstName",
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

  // remove
  collection.schema.removeField("lzwkgdi3")

  return dao.saveCollection(collection)
})
