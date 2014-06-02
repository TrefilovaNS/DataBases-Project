/**
 *
 * @author natali
 * @name qSearchSongs
 * @public
 */ 
Select q1.List_of_Songs_ID, q.G_ID, q.Name_of_group, q1.Name_of_song, q1.Composer, q1.Scriptwriter, q1.Data_of_song
From Songs q1
 Inner Join Groups q on q1.G_ID = q.G_ID
 Where q1.NAME_OF_SONG like :Param1