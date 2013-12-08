/**
 * 
 * @author natalia
 * @name gArtList
 */
var self= this;
function refresh(some){
    Logger.info("here");
    Logger.info(some);
    self.singers.requery();
}
function editArtist(){
    var artst = new gArtist();
    artst.artID = self.singers.S_ID;
    artst.showModal(refresh);
}
function addArtist(){
    var artst = new gAddArtist();
    artst.artID = self.singers.S_ID;
    artst.showModal(refresh);
}

function modelGridMouseClicked(evt) {//GEN-FIRST:event_modelGridMouseClicked
	// TODO Добавьте свой код:
        if (evt.clickCount>1){
            editArtist();
        }
}//GEN-LAST:event_modelGridMouseClicked

function button1ActionPerformed(evt) {//GEN-FIRST:event_button1ActionPerformed
	// TODO Добавьте свой код:
        self.close("hello from close");
}//GEN-LAST:event_button1ActionPerformed

function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
	// TODO Добавьте свой код:
       Param1="%" + textField.text + "%";
        self.singers.requery();
        self.singers.last();
       
}//GEN-LAST:event_buttonActionPerformed

function button2ActionPerformed(evt) {//GEN-FIRST:event_button2ActionPerformed
	// TODO Добавьте свой код:
      var windowAdd = new gAddArtist();
      self.singers.insert();
      windowAdd.showModal();
//     
    
//    self.singers.insert();
//     
//     editArtist();
     
      
}//GEN-LAST:event_button2ActionPerformed
