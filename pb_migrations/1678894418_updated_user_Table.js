migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("chn6172gxmd9w6h")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("chn6172gxmd9w6h")

  // remove
  collection.schema.removeField("ijmgfmpf")

  // remove
  collection.schema.removeField("65rjy4ng")

  // remove
  collection.schema.removeField("fl8utwee")

  // remove
  collection.schema.removeField("t0nsjolc")

  // remove
  collection.schema.removeField("21gp3ges")

  // remove
  collection.schema.removeField("fevfaumb")

  return dao.saveCollection(collection)
})
