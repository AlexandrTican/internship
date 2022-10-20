select 
	client_id,
	order_date,	
	amount,
	order_id,
	item_id,
	item_name
	item_description
from "ItemOrders"
INNER JOIN "Orders"
	ON "ItemOrders".order_id = "Orders".id
INNER JOIN "Items"
	ON "ItemOrders".item_id = "Items".id
ORDER BY order_date;