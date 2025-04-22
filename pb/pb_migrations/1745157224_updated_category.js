/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zj6cqy1c5ey2y5h")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zx7lpnj2",
    "name": "parent",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "zj6cqy1c5ey2y5h",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zj6cqy1c5ey2y5h")

  // remove
  collection.schema.removeField("zx7lpnj2")

  return dao.saveCollection(collection)
})
