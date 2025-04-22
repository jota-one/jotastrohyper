/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "fdmg5bodjwqvscz",
    "created": "2025-04-20 13:50:49.157Z",
    "updated": "2025-04-20 13:50:49.157Z",
    "name": "sign",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "0hoet0l4",
        "name": "francais",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
      }
    ],
    "indexes": [],
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
  const collection = dao.findCollectionByNameOrId("fdmg5bodjwqvscz");

  return dao.deleteCollection(collection);
})
