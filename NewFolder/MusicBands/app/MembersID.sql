/**
 *
 * @author natali
 * @name MembersID
 */ 
Select t.S_ID, t.G_ID, t.Members_of_group_ID
From SINGERS t1
 Inner Join MEMBERS_OF_GROUP t on t1.S_ID = t.S_ID
 Inner Join GROUPS t2 on t.G_ID = t2.G_ID