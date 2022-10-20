SELECT 
	username,
	order_date,
	amount
FROM 
	"Orders"
INNER JOIN 
	"Clients"
ON 
	"Orders".client_id = "Clients".id
WHERE 
	username LIKE 'b%';