# REUS API REFERENCE

### HTTP STATUS CODE SUMMARY

### ERROR TYPES

## ROUTES for User

#### Action: Get favouriteItems, User
POST /api//

#### Action: reservedItems, User
POST /api/xxxx/xxxx

#### Action: Get follows, User
POST /api/xxxx/xxxx

#### Action: Get following, User
POST /api/xxxx/xxxx

#### Action: Set isPublic, User
POST /api/xxxx/xxxx

## ROUTES for ITEM

#### Action: Create item, Business
POST /api/item/create

#### Action: Delete Item, Business
POST /api/item/remove/:item_id

#### Action: Get All My Items, Business
POST /api/item/get/all

#### Action: Get One Specific Item, Business
POST /api/item/get/:item_id

#### Action: Get User who rented One specific Item, Business
POST /api/item/get/rented_by

#### Action: Get itemsForRent, Business
POST /api/item/get/items_for_rent

#### Action: Get itemsRentedOut, Business
POST /api/item/get/rented

#### Action: Get timesRented Business
POST /api/item/get/rented_count

#### Action: Add locations to Item, business
POST /api/item/add/location/:item_id

#### Action: Remove locations, business
POST /api/item/remove/location/:item_id

#### Action: Get all items, User
POST /api/item/user/all

#### Action: Get One specific Item, User
POST /api/item/user/get/:item_id

#### Action: Set productViews, User
POST /api/xxxx/xxxx

#### Action: Set timesRented, User
POST /api/xxxx/xxxx





