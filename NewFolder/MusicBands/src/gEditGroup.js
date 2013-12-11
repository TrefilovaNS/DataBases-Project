/**
 * 
 * @author natali
 * @name gEditGroup
 */
var self=this;
function closeActionPerformed(evt) {//GEN-FIRST:event_closeActionPerformed
	// TODO Добавьте свой код:
        self.close("hello from close");
}//GEN-LAST:event_closeActionPerformed

function saveActionPerformed(evt) {//GEN-FIRST:event_saveActionPerformed
	// TODO Добавьте свой код:
        self.model.save();
}//GEN-LAST:event_saveActionPerformed
