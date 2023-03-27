migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("chn6172gxmd9w6h");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "chn6172gxmd9w6h",
    "created": "2023-03-15 15:31:59.890Z",
    "updated": "2023-03-15 15:38:11.031Z",
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
      },
      {
        "system": false,
        "id": "ijmgfmpf",
        "name": "secondName",
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
        "id": "65rjy4ng",
        "name": "userName",
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
        "id": "fl8utwee",
        "name": "password",
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
        "id": "t0nsjolc",
        "name": "dateOfBirth",
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
        "id": "21gp3ges",
        "name": "userLevel",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "fevfaumb",
        "name": "studentStaffNumber",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
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
})
