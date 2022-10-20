INSERT into
	"ClientInfo"(country,city,address)
VALUES
	('USA','Detroit','Hickory Lane st. 141'),
	('Japan','Osaka','street2'),
	('Germany','Hamburg','street3'),
	('Ukraine','Kiev','street512'),
	('Finland','Turku','street32'),
	('Romania','Iasi','street311'),
	('Moldova','Chisinau','street119'),
	('USA','Michigan','street31'),
	('Japan','Hokkaido','street4'),
	('Spain','Marid','street51'),
	('Italy','Rome','street951'),
	('France','Paris','street33'),
	('Thailand','Bangkok','street30');
	INSERT INTO
	"Clients"(username, firstName, lastName, age, email,client_info_id)
Values
('ann1','Ann','K.','27','ann.k@gmail.com','fe4c60ab-71c3-48bc-9017-c64805e84469'),
('kim','Kim','Jong-Un','40','kim.j@gmail.com','4eee371e-a6d1-42fd-9339-6c19ef3636b4'),
('joe00','Joe','Mama','59','joe.m@gmail.com','6c81908a-5b6f-41ab-8077-ba53f6af23cd'),
('bill9','Bill','J.','19','bill.j@gmail.com','4c9aab9a-e3d3-4970-9b83-8153f9de0c0a'),
('idk','John','Doe','22','john.doe@gmail.com','59f04f34-8d57-4862-8690-338b30e4d881'),
('ann2','Ann','K.','29','ann.k1@gmail.com','3f2bbff6-0ce6-495b-aaf0-7d033f8a65b2'),
('joe01','Joe','Black','33','joe.black@gmail.com','915a3f65-cae8-4f9a-bb5c-cef755c021ee'),
('bill20','Bill','D','20','bill.d@gmail.com','e4020ce5-8972-447c-959a-7a13ac63f49a'),
('jane','Jane','H','22','jane@gmail.com','8f1f9bc7-56ad-4471-ba43-20bceb04e2e7'),
('just1n','Justin','C','47','justin.c@gmail.com','319b8682-6050-4470-a669-53034788bdb1'),
('ch','Charlie','R','29','charlie.r@gmail.com','a08c5f3e-5c43-4f10-afd6-4ea81a4c6f2d'),
('M1k3','Mike','Hunt','52','@gmail.com','b688dc7e-13a5-45ef-b9c9-234369d20909');


INSERT INTO
	"Orders"(client_id,amount)
VALUES
	('4962c28f-9c95-46f5-a2fd-552ef11eaaa3',19),
	('f87f2fff-3f40-46fe-8d2d-57ee5bf99303',99),
	('ec1927c0-da36-4e1f-9c7f-88fdac1412a1',2),
	('536e07b1-fb2d-4e78-b2be-d16faf34d81f',22),
	('19789f1a-38c9-4833-b571-6aab0dff1ec7',9),
	('a7fb5cd6-3695-427f-9bf3-0b5fcfa4ae10',11301),
	('9b4853ae-3ff5-4d08-b68d-648ee67a73d6',2990),
	('ecbe3aa2-0451-4302-825c-aeed2d00b568',951),
	('4a6932f7-c640-42c7-b578-10fc3a2b1c1d',101),
	('db7796ad-9e62-4694-9410-6b13cf8f8d42',109),
	('ab65a192-3449-47dd-9dc4-b6c1dc05c951',104);
    
insert into 
    "Items"(item_name,item_description)
VALUES
	('C4 explosives',' remote controlled, just for fun'),
	('10mm ammo','Only for 10mm chambers,20 rounds'),
	('9x18mm ammo','Only for 9x18mm chambers,20 rounds'),
	('9x18mm HP ammo','Only for 10mm chambers, hollow point,20 rounds'),
	('9x19 ammo','Only for 9x19 chambers,,20 rounds'),
	('9x19 HP ammo','Only for 9x19mm chambers,hollow point,,20 rounds'),
	('.45 ACP','Only for 10mm chambers,20 rounds'),
	('.357','Only for .357 chambers,20 rounds'),
	('.50 AE','Only for .50 AE chambers,20 rounds'),
	('12 gauge','Only for 10mm chambers,20  shells'),
	('5.56','Only for 5.56 chambers,1000 rounds'),
	('5.45','Only for 5.45 chambers,1000 rounds'),
	('20 gauge','Only for 20 gauge chambers,100 shells');

-- insert into 
-- 	"ItemOrders"(order_id,item_id)
-- VALUES
-- 	('f03e7836-a976-440b-88f7-f52adb1fa4c7','')
-- 	('c8663463-f864-4d21-8a91-9a1231c44601','')
-- 	('6e659188-27e3-4443-91b6-d675112a298f','')
-- 	('187b701b-f0bd-40ef-9111-034ecfbeaafd','')
-- 	('1943c645-641e-4813-8304-f66c333d22fb','')
-- 	('4ec16a5c-6359-456a-a262-badbd4e46cf1','')
-- 	('a9d534aa-3ca4-4391-82ee-2951978f6f4a','')
-- 	('fff43e10-0c85-4880-8ec5-5d2a644fc2f4','')
-- 	('5bbf635d-838e-4858-bab2-f0e198a305c7','')
-- 	('c3dcb287-65d9-4e5f-8285-6620281152d1','')
-- 	('c1746d9b-a9be-4c8f-9464-ed3597a5358e','')
-- 	('e81ed70a-82d7-4e09-8c89-33660a53a607','')
select * from "Items"

	