# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT productname, categoryname FROM products AS p
JOIN categories AS c ON p.categoryid = c.categoryid;

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT orderid, shippername FROM orders AS o
JOIN shippers AS s ON o.shipperid = s.shipperid
WHERE orderdate < '1997-01-09';

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT productname as Product_Name, quantity as Ordered_Quantity 
FROM orderdetails AS o
JOIN products AS p ON o.productid = p.productid
WHERE orderid = 10251
ORDER BY p.productname;

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

SELECT orderid AS Order_ID, customername AS Customer_Name, lastname AS Employee_Last_Name
FROM orders AS o
JOIN customers AS c ON o.customerid = c.customerid, employees AS e ON o.employeeid = e.employeeid;

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

SELECT c.categoryname, COUNT(p.productid) AS Product_Count
FROM categories AS c
JOIN products AS p ON c.categoryid = p.categoryid
GROUP BY c.categoryid;

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 

SELECT orderid, COUNT(p.productid) AS ItemCount
FROM orderdetails AS o
JOIN products AS p ON o.productid = p.productid
GROUP BY o.orderid;
