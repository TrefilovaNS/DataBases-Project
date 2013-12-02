/**
 * 
 * @author natali
 * @name groupsGUI
 */

function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
	// TODO Добавьте свой код:
        self.model.save();
}//GEN-LAST:event_buttonActionPerformed
function showAddGroups(){
    Logger.info("Groups Add run");
    var shG = new AddGroup;
    shG.countryID = groups.C_ID;
    shG.singersID = singers.S_ID;
    shG.showModal(refresh);
}
function refresh(){
    self.country.requery();
    self.singers.requery();
    self.groups.requery();
    self.members.requery();
}