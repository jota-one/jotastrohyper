/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zj6cqy1c5ey2y5h")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wrhyp5fw",
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
  const collection = dao.findCollectionByNameOrId("zj6cqy1c5ey2y5h")

  // remove
  collection.schema.removeField("wrhyp5fw")

  return dao.saveCollection(collection)
})
