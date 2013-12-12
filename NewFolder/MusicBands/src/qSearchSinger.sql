/**
 *
 * @author natali
 * @name qSearchSinger
 */ 
Select *, (q1.FIRSTNAME || ' ' || q1.LASTNAME) AS fullName 
From Singers q1
 Where q1.LASTNAME like :Param1