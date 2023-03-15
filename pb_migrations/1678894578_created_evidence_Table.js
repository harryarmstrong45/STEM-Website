migrate((db) => {
  const collection = new Collection({
    "id": "u0xo9mbaqnfsowo",
    "created": "2023-03-15 15:36:18.103Z",
    "updated": "2023-03-15 15:36:18.103Z",
    "name": "evidence_Table",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "uvygca2u",
        "name": "type",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "r23byrha",
        "name": "dateUploaded",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "no65oozk",
        "name": "fileName",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 1000000000,
          "mimeTypes": [
            "image/png",
            "image/jpeg",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "application/pdf",
            "application/vnd.openxmlformats-officedocument.presentationml.presentation",
            "application/vnd.ms-powerpoint",
            "application/msword",
            "image/gif",
            "image/webp"
          ],
          "thumbs": []
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
  const collection = dao.findCollectionByNameOrId("u0xo9mbaqnfsowo");

  return dao.deleteCollection(collection);
})
