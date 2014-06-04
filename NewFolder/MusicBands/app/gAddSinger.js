/**
 * 
 * @author natali
 * @name gAddSinger
 * @rolesAllowed admin
 */
function gAddSinger(){
var self=this;
function SaveActionPerformed(evt) {//GEN-FIRST:event_SaveActionPerformed
	// TODO Добавьте свой код:
        self.model.save();
}//GEN-LAST:event_SaveActionPerformed

function CloseWinActionPerformed(evt) {//GEN-FIRST:event_CloseWinActionPerformed
	// TODO Добавьте свой код:
        self.close("hello from close");
}//GEN-LAST:event_CloseWinActionPerformed
}