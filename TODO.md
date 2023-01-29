HIGH PRIO:

[/] Update the data type of cost and amount to float.
[/] Implement the array in quotation transaction.
[] Update stocks in stockard in billing module.
[] Condition if the stock/qtybalance of the product is zero
[] Get all quotations and service tickets endpoint
[] Get quotation/service ticket details by ID.


LOW PRIO:
[] Insert User ID of the logged-in user to the quotation.

```sql
SELECT
Q.quotation_id, QL.qty, QL.amount, SK.unit, SK.cost,
PP.printname, PP.barcode, PC.serial_number,
PC.brand_name, PC.model, PC.color, SI.service_name, SI.unit as service_unit, SI.cost as service_cost,
C.name, C.contact_number, C.address, Q.date_transaction, Q.status
FROM quotation Q
INNER JOIN quotation_line QL ON QL.quotation_id = Q.quotation_id
LEFT OUTER JOIN sku SK ON SK.sku_id = QL.sku_id
LEFT OUTER JOIN service S ON S.service_id = Q.service_id
LEFT OUTER JOIN service_line SL ON SL.service_id =  S.service_id
LEFT OUTER JOIN service_item SI ON SI.service_item_id = SL.service_item_id
LEFT OUTER JOIN product_parts PP ON SK.sku_id = PP.sku_id
LEFT OUTER JOIN product_car PC ON PC.sku_id = SK.sku_id
INNER JOIN customer C ON C.customer_id = Q.customer_id where Q.quotation_id = 7;
```
