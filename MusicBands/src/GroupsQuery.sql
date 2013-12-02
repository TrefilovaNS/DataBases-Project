/**
 *
 * @author natali
 * @name GroupsQuery
 */ 
Select * 
From GROUPS t1
, MEMBERS_OF_GROUP t
, COUNTRY t2
, SINGERS t3
 Where :cID = t2.C_ID
 and :gID = t1.G_ID