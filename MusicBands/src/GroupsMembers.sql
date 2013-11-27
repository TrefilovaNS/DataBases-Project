/**
 *
 * @author natali
 * @name GroupsMembers
 */ 
Select * 
From MEMBERS_OF_GROUP t1
, GROUPS t
, SINGERS t2
, COUNTRY t3
 Where t1.G_ID = t.G_ID
 and t1.S_ID = t2.S_ID
 and t3.C_ID = t.C_ID