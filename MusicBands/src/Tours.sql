/**
 *
 * @author natali
 * @name Tours
 */ 
Select * 
From GROUPS t1
, SCHEDULE_OF_TOUR t
, TOURS t2
where t1.G_ID=t2.G_ID and t.T_ID=t2.T_ID