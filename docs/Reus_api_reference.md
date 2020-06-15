# REUS API REFERENCE

### HTTP STATUS CODE SUMMARY

### ERROR TYPES
200 - OK
400 - BAD REQUEST
404 - NOT FOUND
500 - SERVER ERROR

## ROUTES for User

#### Action: Create User Object, User
POST /api/user/auth/register

#### Action: Login User Object, User 
POST /api/user/auth/login

#### Action: Get User Object, User 
GET /api/user/auth/get/user

#### Action: Get favouriteItems, User 
GET /api/user/actions/get/favourites

#### Action: Add Item to favouriteItems, User 
POST /api/user/actions/add/favourites/:item_id

#### Action: Remove Item from favouriteItems, User 
POST /api/user/actions/remove/favourites/:item_id

#### Action: Get reservedItems, User 
GET /api/user/actions/get/reserved

#### Action: Add Item to reservedItems, User  FIX
POST /api/user/actions/add/reseved/:item_id

#### Action: Remove Item to reservedItems, User  FIX
POST /api/user/actions/remove/reserved:/:item_id

#### Action: Get followers, User 
GET /api/user/actions/get/followers

#### Action: Get following, User 
GET /api/user/actions/get/following

#### Action: Follow User with user_id, User 
POST /api/user/actions/follow/:user_id

#### Action: Unfollow User with user_id, User 
POST /api/user/actions/unfollow/:user_id

#### Action: Set isPublic, User 
POST /api/user/actions/set/public_profile

GET ALL USERS TODO (not private)

## ROUTES for Business

#### Action: Create User Object, Business 
POST /api/business/auth/register

#### Action: Login User Object, Business 
POST /api/business/auth/login

#### Action: Get User Object, Business 
GET /api/business/auth/get/user

#### Action: Get itemsForRent, Business 
GET /api/business/actions/get/items_for_rent

#### Action: Add itemsForRent, Business
GET /api/business/actions/get/items_for_rent

#### Action: Get itemsRentedOut, Business 
GET /api/business/actions/get/rented_out

## ROUTES for Admin

#### Action: Create User Object, Admin
POST /api/admin/auth/register

#### Action: Login User Object, Admin
POST /api/admin/auth/login

#### Action: Get User Object, Admin
GET /api/admin/auth/get/user


## ROUTES for ITEM

#### Action: Create item, Business 
POST /api/item/create

#### Action: Delete Item, Business
POST /api/item/remove/:item_id

#### Action: Get All My Items, Business 
GET /api/item/get/all

#### Action: Get One Specific Item, Business 
GET /api/item/get/:item_id

#### Action: Get User who rented One specific Item, Business 
POST /api/item/get/rented_by/:item_id

#### Action: Set the User who rented One specific Item, Business 
POST /api/item/set/rented_by/:user_id

#### Action: Get timesRented Business 
POST /api/item/get/rented_count

#### Action: Add locations to Item, business TODO
POST /api/item/add/location/:item_id

#### Action: Remove locations, business TODO
POST /api/item/remove/location/:item_id

#### Action: Get all items, User 
POST /api/item/user/get/all

#### Action: Get One specific Item, User 
POST /api/item/user/get/:item_id

#### Action: Set productViews, User TODO
POST /api/xxxx/xxxx

#### Action: Set timesRented, User TODO
POST /api/xxxx/xxxx





