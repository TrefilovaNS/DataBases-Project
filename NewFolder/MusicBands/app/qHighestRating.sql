/**
 *
 * @author natali
 * @name qHighestRating
 * @public
 */ 
Select t.NAME_OF_GROUP, t.RATING, t2.Name_of_song
From GROUPS t
, GROUPS t1
, LIST_OF_SONGS t2
 Where t.RATING > t1.RATING and t2.G_ID = t.G_ID