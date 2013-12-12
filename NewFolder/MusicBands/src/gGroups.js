/**
 * 
 * @author natali
 * @name gGroups
 */
var self= this;
function refresh(some){
    Logger.info("here");
    Logger.info(some);
    self.qSearchGroups.requery();
}
function editWin(){
    var artst = new gEditGroup();
    artst.groupID = self.qSearchGroups.G_ID;
    artst.showModal(refresh);
}
function addWin(){
    self.qSearchGroups.insert();
    self.model.save();
    Logger.info(self.qSearchGroups.G_ID);
    var artst = new gAddGroup();    
    artst.groupID = self.qSearchGroups.G_ID;
    artst.showModal(refresh);
}
function deleteActionPerformed(evt) {//GEN-FIRST:event_deleteActionPerformed
    if (confirm('Действительно удалить?', title)) {
    qSearchGroups.deleteRow();
}
	
}//GEN-LAST:event_deleteActionPerformed

function addActionPerformed(evt) {//GEN-FIRST:event_addActionPerformed
        addWin();
}//GEN-LAST:event_addActionPerformed

function closeWinActionPerformed(evt) {//GEN-FIRST:event_closeWinActionPerformed
	// TODO Добавьте свой код:
        self.close("hello from close");
}//GEN-LAST:event_closeWinActionPerformed

function searchActionPerformed(evt) {//GEN-FIRST:event_searchActionPerformed
	// TODO Добавьте свой код:
        Param1="%" + textField.text + "%";
        self.qSearchGroups.requery();
        self.qSearchGroups.last();
       
}//GEN-LAST:event_searchActionPerformed

function textFieldActionPerformed(evt) {//GEN-FIRST:event_textFieldActionPerformed
	// TODO Добавьте свой код:
}//GEN-LAST:event_textFieldActionPerformed

function modelGridMouseClicked(evt) {//GEN-FIRST:event_modelGridMouseClicked
	// TODO Добавьте свой код:
        if (evt.clickCount>1){
            editWin();
        }
}//GEN-LAST:event_modelGridMouseClicked

function formWindowOpened(evt) {//GEN-FIRST:event_formWindowOpened
	// TODO Добавьте свой код:
        Param1 = "%%"
        qSearchGroups.requery();
}//GEN-LAST:event_formWindowOpened
