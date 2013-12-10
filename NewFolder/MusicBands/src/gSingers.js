/**
 * 
 * @author natali
 * @name gSingers
 */
var self= this;
function refresh(some){
    Logger.info(some);
    self.qSearchSinger.requery();
}
function editArtist(){
    var artst = new gEditSinger();
    artst.singID = self.qSearchSinger.S_ID;
    artst.showModal(refresh);
}
function addArtist(){
    self.qSearchSinger.insert();
    self.model.save();
    Logger.info(self.qSearchSinger.S_ID);
    var artst = new gAddSinger();    
    artst.singID = self.qSearchSinger.S_ID;
    artst.showModal(refresh);
}

function modelGridMouseClicked(evt) {//GEN-FIRST:event_modelGridMouseClicked
	// TODO Добавьте свой код:
        if (evt.clickCount>1){
            editArtist();
        }
}//GEN-LAST:event_modelGridMouseClicked

function SearchActionPerformed(evt) {//GEN-FIRST:event_SearchActionPerformed
	// TODO Добавьте свой код:
        Param1="%" + textField.text + "%";
        self.qSearchSinger.requery();
        self.qSearchSinger.last();
       
}//GEN-LAST:event_SearchActionPerformed

function CloseActionPerformed(evt) {//GEN-FIRST:event_CloseActionPerformed
	// TODO Добавьте свой код:
        self.close("hello from close");
}//GEN-LAST:event_CloseActionPerformed

function AddActionPerformed(evt) {//GEN-FIRST:event_AddActionPerformed
        addArtist();
}//GEN-LAST:event_AddActionPerformed

function DeleteActionPerformed(evt) {//GEN-FIRST:event_DeleteActionPerformed
    if (confirm('Действительно удалить?', title)) {
    qSearchSinger.deleteRow();
}
	
}//GEN-LAST:event_DeleteActionPerformed

function textFieldActionPerformed(evt) {//GEN-FIRST:event_textFieldActionPerformed
	// TODO Добавьте свой код:
}//GEN-LAST:event_textFieldActionPerformed

function formWindowOpened(evt) {//GEN-FIRST:event_formWindowOpened
	// TODO Добавьте свой код:
        // TODO Добавьте свой код:
        Param1 = "%%"
        qSearchSinger.requery();
}//GEN-LAST:event_formWindowOpened
