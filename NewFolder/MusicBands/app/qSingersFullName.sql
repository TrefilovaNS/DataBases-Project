/**
 *
 * @author natalia
 * @name qSingersFullName
 * @public
 */ 
Select *, (t1.FIRSTNAME || ' ' || t1.LASTNAME) AS fullName 
From SINGERS t1