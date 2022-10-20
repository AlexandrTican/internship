SELECT 
	country,
	city
from 
	"ClientInfo"
INNER JOIN "Clients" USING (client_info_id);
