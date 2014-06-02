/**
 *
 * @author natali
 * @name ToursID
 * @public
 */ 
Select  t2.T_ID, t.G_ID, t2.SCHEDULE_OF_TOUR_ID, Name_of_town, StartDate, EndDate, Average_price
From GROUPS t1
 Inner Join TOURS t on t.G_ID = t1.G_ID
 Inner Join SCHEDULE_OF_TOUR t2 on t2.T_ID = t.T_ID