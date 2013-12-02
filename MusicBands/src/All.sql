/**
 *
 * @author natali
 * @name All
 */ 
Select * 
From country q1
 Inner Join groups q on q1.C_ID = q.C_ID
, singers q2
 Inner Join members q3 on q.G_ID = q3.G_ID
 and q3.S_ID = q2.S_ID