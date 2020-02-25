# A2
CS332 Assignment #2

Citations: 

Database issue:
- Without the dropDatabase, create.js is pretty fragile, since it only works the first time you run it.
- See create.js for the suggested fix.

Query issue:
- The number of voters in GE16 is coming out too low. It's finding the voters who ONLY voted in GE16. For this query to do what you intended, your history string would have to be an array of strings instead.
