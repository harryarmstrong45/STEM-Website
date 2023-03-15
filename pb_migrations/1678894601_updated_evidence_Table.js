migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u0xo9mbaqnfsowo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "he5esakg",
    "name": "rating",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mrfbjxek",
    "name": "comment",
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
  const collection = dao.findCollectionByNameOrId("u0xo9mbaqnfsowo")

  // remove
  collection.schema.removeField("he5esakg")

  // remove
  collection.schema.removeField("mrfbjxek")

  return dao.saveCollection(collection)
})
