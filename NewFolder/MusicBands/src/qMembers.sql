/**
 *
 * @author natalia
 * @name qMembers
 */ 
Select * 
From MEMBERS_OF_GROUP t1
 Inner Join GROUPS t2 on t1.G_ID = t2.G_ID
 Inner Join SINGERS t on t1.S_ID = t.S_ID