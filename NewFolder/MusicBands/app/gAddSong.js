/**
 * 
 * @author natali
 * @name gAddSong
 * @rolesAllowed admin
 */
function gAddSong(){
var self=this;
function closeWinActionPerformed(evt) {//GEN-FIRST:event_closeWinActionPerformed
	// TODO Добавьте свой код:
        self.close("hello from close");
}//GEN-LAST:event_closeWinActionPerformed

function saveActionPerformed(evt) {//GEN-FIRST:event_saveActionPerformed
	// TODO Добавьте свой код:
        self.model.save();
}//GEN-LAST:event_saveActionPerformed
}