/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fdmg5bodjwqvscz")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_zp338nb` ON `sign` (`slug`)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1bjhzpmq",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fdmg5bodjwqvscz")

  collection.indexes = []

  // remove
  collection.schema.removeField("1bjhzpmq")

  return dao.saveCollection(collection)
})
