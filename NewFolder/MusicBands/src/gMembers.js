/**
 * 
 * @author natali
 * @name gMembers
 */
var self=this;
function refresh(some){
    Logger.info("here");
    Logger.info(some);
    self.qSearchMembers.requery();
}
function editWin(){
    var artst = new gEditMember();
    artst.mID = self.qSearchMembers.Members_of_group_ID;
    artst.showModal(refresh);
}
function addWin(){
    self.qSearchMembers.insert();
    self.model.save();
    Logger.info(self.qSearchMembers.Members_of_group_ID);
    var artst = new gAddMember();    
    artst.mID = self.qSearchMembers.Members_of_group_ID;
    artst.showModal(refresh);
}
function textFieldActionPerformed(evt) {//GEN-FIRST:event_textFieldActionPerformed
	// TODO Добавьте свой код:
}//GEN-LAST:event_textFieldActionPerformed

function searchActionPerformed(evt) {//GEN-FIRST:event_searchActionPerformed
	// TODO Добавьте свой код:
        Param1="%" + textField.text + "%";
        self.qSearchMembers.requery();
        self.qSearchMembers.last();
       
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
    qSearchMembers.deleteRow();
}
	
}//GEN-LAST:event_deleteActionPerformed

function modelGridMouseClicked(evt) {//GEN-FIRST:event_modelGridMouseClicked
	// TODO Добавьте свой код:
        if (evt.clickCount>1){
            editWin();
        }
}//GEN-LAST:event_modelGridMouseClicked

function formWindowOpened(evt) {//GEN-FIRST:event_formWindowOpened
	// TODO Добавьте свой код:
        Param1 = "%%"
        qSearchMembers.requery();
}//GEN-LAST:event_formWindowOpened
