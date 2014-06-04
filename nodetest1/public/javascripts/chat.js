var username;

var chat = {
	joinChat: function(){
		username = $('#txtUsername').val();
		$('#userName').text('You are now signed in as ' + username);
		
		$('#joinChat').hide();
		$('#inChat').show();
	},
	leaveChat:function(){
		$('#txtUsername').val('');
		$('#joinChat').show();
		$('#inChat').hide();
	},
	addText: function(e){
		if ((e.type == 'keypress' && e.keyCode == 13) || e.type == 'click'){
			var txtIn = $('#txtChatInput').val();
			 $('#txtChatInput').val('');
			
			//Add text
			$('#chatArea').append('<b>' + username + '</b>: ' + txtIn + '<br />');
			
			//Clear input
			
			
			chat.scrollToBottom($('#chatArea'));
		}		
	},
	scrollToBottom: function(element){
		element.scrollTop(element[0].scrollHeight);
	}
};