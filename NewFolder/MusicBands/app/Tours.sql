/**
 *
 * @author natali
 * @name Tours
 */ 
Select SCHEDULE_OF_TOUR_ID, Name_of_group, Name_of_tour
, Name_of_town, Startdate, Enddate
, Average_price 
From GROUPS t1
 Inner Join TOURS t on t.G_ID = t1.G_ID
 Inner Join SCHEDULE_OF_TOUR t2 on t2.T_ID = t.T_ID