/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fdmg5bodjwqvscz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mb9fqzyk",
    "name": "Category",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "zj6cqy1c5ey2y5h",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fdmg5bodjwqvscz")

  // remove
  collection.schema.removeField("mb9fqzyk")

  return dao.saveCollection(collection)
})
