migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("chn6172gxmd9w6h")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g6e1edkf",
    "name": "evidenceID",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "u0xo9mbaqnfsowo",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("chn6172gxmd9w6h")

  // remove
  collection.schema.removeField("g6e1edkf")

  return dao.saveCollection(collection)
})
