/**
 * 
 * @author jskonst
 * @public
 * @module
 */ 
function testServ() {
    var self = this, model = this.model;
    
    // TODO : place your code here
    self.getName = function(){
        
      return self.principal.name;  
    };
    
    /**
     * @rolesAllowed admin
     * @returns {undefined}
     */
    self.getRolesTest = function(){
      return "Hello";  
    };
    
}
