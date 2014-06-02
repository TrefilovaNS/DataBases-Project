/**
 *
 * @author natali
 * @name Members
 * @public
 */ 
Select t.Members_of_group_ID, Name_of_group, (2013-t1.Year_of_birhday) AS Age, Role_of_group, (t1.FIRSTNAME || ' ' || t1.LASTNAME) AS fullName 
From SINGERS t1
 Inner Join MEMBERS_OF_GROUP t on t1.S_ID = t.S_ID
 Inner Join GROUPS t2 on t.G_ID = t2.G_ID