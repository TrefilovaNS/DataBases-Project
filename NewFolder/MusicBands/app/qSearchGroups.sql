/**
 *
 * @author natali
 * @name qSearchGroups
 * @public
 */ 
Select * 
From Groups q1
 Inner Join qCountry q on q1.C_ID = q.C_ID
 Where q1.NAME_OF_GROUP Like :Param1