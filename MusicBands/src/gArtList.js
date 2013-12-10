/**
 * 
 * @author natalia
 * @name gArtList
 */
var self= this;
function refresh(some){
    Logger.info("here");
    Logger.info(some);
    self.singersSearch.requery();
}
function editArtist(){
    var artst = new gArtist();
    artst.artID = self.singersSearch.S_ID;
    artst.showModal(refresh);
}
function addArtist(){
    self.singersSearch.insert();
    self.model.save();
    Logger.info("hello");
    Logger.info(self.singersSearch.S_ID);
    var artst = new gAddArtist();
    
    artst.artID = self.singersSearch.S_ID;
    
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
        self.singersSearch.requery();
        self.singersSearch.last();
       
}//GEN-LAST:event_buttonActionPerformed

function button2ActionPerformed(evt) {//GEN-FIRST:event_button2ActionPerformed
        addArtist();
}//GEN-LAST:event_button2ActionPerformed

function button3ActionPerformed(evt) {//GEN-FIRST:event_button3ActionPerformed
if (confirm('Действительно удалить?', title)) {
singersSearch.deleteRow();
}
	
}//GEN-LAST:event_button3ActionPerformed

function formWindowOpened(evt) {//GEN-FIRST:event_formWindowOpened
	// TODO Добавьте свой код:
        Param1 = "%%"
        singersSearch.requery();
}//GEN-LAST:event_formWindowOpened
