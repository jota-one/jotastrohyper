/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fdmg5bodjwqvscz")

  // remove
  collection.schema.removeField("ulnnotye")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1byhg5jc",
    "name": "slug",
    "type": "text",
    "required": false,
    "presentable": false,
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
  const collection = dao.findCollectionByNameOrId("fdmg5bodjwqvscz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ulnnotye",
    "name": "video",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  // remove
  collection.schema.removeField("1byhg5jc")

  return dao.saveCollection(collection)
})
