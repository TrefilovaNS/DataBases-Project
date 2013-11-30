/**
 * 
 * @author natalia
 * @name gTest
 */
var self = this;
function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
	// TODO Добавьте свой код:
        self.model.save();
}//GEN-LAST:event_buttonActionPerformed

function modelGridMouseClicked(evt) {//GEN-FIRST:event_modelGridMouseClicked
	// TODO Добавьте свой код:
        if(evt.clickCount>1){
            showCountry();
        }
        
}//GEN-LAST:event_modelGridMouseClicked
function showCountry(){
    Logger.info("Hello");
    var shC = new gCountry();
    shC.countryID = groups.C_ID;
    shC.showModal(refresh);
}
function refresh(){
    self.country.requery();
    self.groups.requery();
    self.model.requery();
}