/**
 *
 * @author natali
 * @name All
 */ 
Select * 
From GROUPS t1
, COUNTRY t
, MEMBERS_OF_GROUP t2
, LIST_OF_SONGS t3
, SINGERS t4
 Where t.C_ID = t1.C_ID
 and t1.G_ID = t2.G_ID
 and t4.S_ID = t2.S_ID
 and t3.G_ID = t1.G_ID