db.transactions.aggregate([{$match: {transaction_count:{$gt : 80}}}, 
{$group: { _id: "$account_id", totalQuantity: {$sum: "$transaction_count"}}}])