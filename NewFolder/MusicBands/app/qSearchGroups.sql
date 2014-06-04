/**
 *
 * @author natali
 * @name qSearchGroups
 * @public
 */ 
Select q.c_id, q1.year_of_foundation, q1.rating, q1.name_of_group, q.name_of_country
From Groups q1
 Inner Join qCountry q on q1.C_ID = q.C_ID
 Where q1.NAME_OF_GROUP Like :Param1