/**
 *
 * @author natali
 * @name test
 */ 
Select COMPOSER, SCRIPTWRITER, NAME_OF_SONG, DATE_OF_SONG, NAME_OF_GROUP
From GROUPS t, LIST_OF_SONGS t1
where t.G_ID = t1.G_ID