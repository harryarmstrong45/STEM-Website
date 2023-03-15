migrate((db) => {
  const collection = new Collection({
    "id": "chn6172gxmd9w6h",
    "created": "2023-03-15 15:31:59.890Z",
    "updated": "2023-03-15 15:31:59.890Z",
    "name": "user_Table",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "2jfnplil",
        "name": "firstName",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("chn6172gxmd9w6h");

  return dao.deleteCollection(collection);
})
