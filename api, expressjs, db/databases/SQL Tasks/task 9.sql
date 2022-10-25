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
WHERE "Orders".client_id ='fd969119-c109-42e9-a5ab-45c8e834789a';