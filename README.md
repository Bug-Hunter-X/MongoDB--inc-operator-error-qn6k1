# MongoDB $inc Operator Error
This example demonstrates an error that can occur when using the $inc operator in MongoDB update operations. The $inc operator requires a numeric value for incrementing or decrementing a field. Using a string value instead will lead to a failure. The solution corrects the mistake by ensuring a numeric value is passed to the $inc operator.