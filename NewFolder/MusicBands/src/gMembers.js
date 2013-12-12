/**
 * 
 * @author natali
 * @name gMembers
 */
var self=this;
function refresh(some){
    Logger.info("here");
    Logger.info(some);
    self.qMembers.requery();
}
function editWin(){
    var artst = new gEditMember();
    artst.groupID = self.qMembers.G_ID;
    artst.showModal(refresh);
}
function addWin(){
    self.qSearchGroups.insert();
    self.model.save();
    Logger.info(self.qMembers.G_ID);
    var artst = new gAddMember();    
    artst.groupID = self.qMembers.G_ID;
    artst.showModal(refresh);
}
function modelGridMouseClicked(evt) {//GEN-FIRST:event_modelGridMouseClicked
	// TODO Добавьте свой код:
        if (evt.clickCount>1){
            editWin();
        }
}//GEN-LAST:event_modelGridMouseClicked

function textFieldActionPerformed(evt) {//GEN-FIRST:event_textFieldActionPerformed
	// TODO Добавьте свой код:
}//GEN-LAST:event_textFieldActionPerformed

function searchActionPerformed(evt) {//GEN-FIRST:event_searchActionPerformed
	// TODO Добавьте свой код:
        Param1="%" + textField.text + "%";
        self.qMembers.requery();
        self.qMembers.last();
       
}//GEN-LAST:event_searchActionPerformed

function closeWinActionPerformed(evt) {//GEN-FIRST:event_closeWinActionPerformed
	// TODO Добавьте свой код:
        self.close("hello from close");
}//GEN-LAST:event_closeWinActionPerformed

function addActionPerformed(evt) {//GEN-FIRST:event_addActionPerformed
        addWin();
}//GEN-LAST:event_addActionPerformed

function deleteActionPerformed(evt) {//GEN-FIRST:event_deleteActionPerformed
    if (confirm('Действительно удалить?', title)) {
    qMembers.deleteRow();
}
	
}//GEN-LAST:event_deleteActionPerformed
