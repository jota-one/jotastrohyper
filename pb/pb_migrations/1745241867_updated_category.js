/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zj6cqy1c5ey2y5h")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_o0Kjvd0` ON `category` (`slug`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zj6cqy1c5ey2y5h")

  collection.indexes = []

  return dao.saveCollection(collection)
})
