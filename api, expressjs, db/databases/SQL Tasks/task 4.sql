DELETE from "ClientInfo"
WHERE country = 'Thailand';

SELECT
	item_name,
	item_description
FROM
	"Items"
ORDER BY
	item_name
FETCH FIRST 10 ROW ONLY; -- limit 10


SELECT
	item_name,
	item_description
FROM
	"Items"
ORDER BY
	item_name
OFFSET 5 ROWS
FETCH LAST 5 ROW ONLY;


SELECT * from "Orders"

WHERE amount between 99 and 100000;


SELECT 
	username,
	firstname,
	lastname
FROM
	"Clients"
WHERE
	lastname like 'D%';

UPDATE "Orders"

SET order_date = '2010-04-29'

WHERE id = 'f03e7836-a976-440b-88f7-f52adb1fa4c7'