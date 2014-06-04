/**
 * 
 * @author natali
 * @name Main
 */
function Main(){
    var self = this;
    
    var srv = new ServerModule("testServ"); 
   self.label3.text = srv.getName();
    
function singersActionPerformed(evt) {//GEN-FIRST:event_singersActionPerformed
	// TODO Добавьте свой код:
        var singers = new gSingers();
        singers.showModal();
}//GEN-LAST:event_singersActionPerformed

function groupsActionPerformed(evt) {//GEN-FIRST:event_groupsActionPerformed
	// TODO Добавьте свой код:
        var groups = new gGroups();
        groups.showModal();
}//GEN-LAST:event_groupsActionPerformed

function songsActionPerformed(evt) {//GEN-FIRST:event_songsActionPerformed
	// TODO Добавьте свой код:
        var songs = new gSongs();
        songs.showModal();
}//GEN-LAST:event_songsActionPerformed

function membersActionPerformed(evt) {//GEN-FIRST:event_membersActionPerformed
	// TODO Добавьте свой код:
        var members = new gMembers();
        members.showModal();
}//GEN-LAST:event_membersActionPerformed

function toursActionPerformed(evt) {//GEN-FIRST:event_toursActionPerformed
	// TODO Добавьте свой код:
        var tours = new gTour();
        tours.showModal();
}//GEN-LAST:event_toursActionPerformed

    function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
        // TODO Добавьте свой код:
        logout();
    }//GEN-LAST:event_buttonActionPerformed
}