/**
 *
 * @author natalia
 * @name groups
 */ 
Select * 
From GROUPS t1
, MEMBERS_OF_GROUP t
, SINGERS t2
where t1.G_ID=t.G_ID and t2.S_ID=t.S_ID