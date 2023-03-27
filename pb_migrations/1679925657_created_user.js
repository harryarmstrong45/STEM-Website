migrate((db) => {
  const collection = new Collection({
    "id": "g3j6ex27dwq9tud",
    "created": "2023-03-27 14:00:57.750Z",
    "updated": "2023-03-27 14:00:57.750Z",
    "name": "user",
    "type": "auth",
    "system": false,
    "schema": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "allowEmailAuth": true,
      "allowOAuth2Auth": true,
      "allowUsernameAuth": true,
      "exceptEmailDomains": null,
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": null,
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("g3j6ex27dwq9tud");

  return dao.deleteCollection(collection);
})
