/**
 * 
 * @author natali
 * @name gGroups
 */
function gGroups(){
var self= this;
function refresh(some){
    Logger.info("here");
    Logger.info(some);
    self.model.qSearchGroups.requery();
}
function editWin(){
    var artst = new gEditGroup();
    artst.groupID = self.model.qSearchGroups.G_ID;
    artst.showModal(refresh);
}
function addWin(){
    self.model.qSearchGroups.insert();
    self.model.save();
    Logger.info(self.model.qSearchGroups.G_ID);
    var artst = new gAddGroup();    
    artst.groupID = self.model.qSearchGroups.G_ID;
    artst.showModal(refresh);
}
function deleteActionPerformed(evt) {//GEN-FIRST:event_deleteActionPerformed
     var srv = new ServerModule("testServ"); 
   if(srv.getName() === "admin"){
        if (confirm('Действительно удалить?')) {
    qSearchGroups.deleteRow();
}
    }else{
                alert("Нет доступа");
            }
	
}//GEN-LAST:event_deleteActionPerformed

function addActionPerformed(evt) {//GEN-FIRST:event_addActionPerformed
        try{
        addWin();
    }catch(ex){
            alert("Нет доступа");
    }
}//GEN-LAST:event_addActionPerformed
//
function closeWinActionPerformed(evt) {//GEN-FIRST:event_closeWinActionPerformed
	// TODO Добавьте свой код:
        logout();
}//GEN-LAST:event_closeWinActionPerformed
//
function searchActionPerformed(evt) {//GEN-FIRST:event_searchActionPerformed
	// TODO Добавьте свой код:
        self.model.params.Param1="%" + self.textField.text + "%";
        self.model.qSearchGroups.requery();
       
}//GEN-LAST:event_searchActionPerformed
//
function textFieldActionPerformed(evt) {//GEN-FIRST:event_textFieldActionPerformed
	// TODO Добавьте свой код:
}//GEN-LAST:event_textFieldActionPerformed
//
function modelGridMouseClicked(evt) {//GEN-FIRST:event_modelGridMouseClicked
	// TODO Добавьте свой код:
        try{
            if (evt.clickCount>1){
            editWin();
        }
    }catch(ex){
            alert("Нет доступа");
    }
}//GEN-LAST:event_modelGridMouseClicked

function formWindowOpened(evt) {//GEN-FIRST:event_formWindowOpened
	// TODO Добавьте свой код:
        self.model.params.Param1 = "%%";
        self.model.qSearchGroups.requery();
}//GEN-LAST:event_formWindowOpened

function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
	// TODO Добавьте свой код:
        var highestRating = new gHighestRating();
        highestRating.showModal();
}//GEN-LAST:event_buttonActionPerformed
}