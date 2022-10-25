select  "Orders".*, "Items".*
from "ItemOrders"
INNER JOIN "Orders"
	ON "ItemOrders".order_id = "Orders".id
INNER JOIN "Items"
	ON "ItemOrders".item_id = "Items".id
ORDER BY order_date;