$(document).ready(function(){

	
	$('#in-username').on('keyup',function(e){
		let username = e.target.value;

		$.ajax({

			url:'https://api.github.com/users/'+username,
			data:{
				client_id:'de9224b2ad96a1e54a5e',
				client_secret:'fbe604b9b5261c3ed3417b9bba0c3c355c16bb42',
			}

		}).done(function(user){
			$.ajax({
				url:'https://api.github.com/users/'+username+'/repos',
				data:{
				client_id:'de9224b2ad96a1e54a5e',
				client_secret:'fbe604b9b5261c3ed3417b9bba0c3c355c16bb42',
			}
			}).done(function(repos){
				$.each(repos,function(index, repo){
					$('#repo-con-inner').append(`
						<a target="_blank" class="repo-block" href="${repo.html_url}">

                                                    <span>${repo.name}</span>

                                                </a>
						`);
				});
			});

			$('#repo-con-inner').html(`
				<h3> <a target="_blank" href="${user.html_url}" style="color:f54d27; text-decoration:none;">${user.name}</a>'s repositories </h3>

				`);
		});
	});



});
$(window).load(function(){



		$.ajax({

			url:'https://api.github.com/users/sagar-mishra',
			data:{
				client_id:'de9224b2ad96a1e54a5e',
				client_secret:'fbe604b9b5261c3ed3417b9bba0c3c355c16bb42',
			}

		}).done(function(user){
			$.ajax({
				url:'https://api.github.com/users/sagar-mishra/repos',
				data:{
				client_id:'de9224b2ad96a1e54a5e',
				client_secret:'fbe604b9b5261c3ed3417b9bba0c3c355c16bb42',
			}
			}).done(function(repos){
				$.each(repos,function(index, repo){
					$('#repo-con-inner').append(`
						<a target="_blank" class="repo-block" href="${repo.html_url}">

                                                    <span>${repo.name}</span>

                                                </a>
						`);
				});
			});

			$('#repo-con-inner').html(`
				<h3> <a target="_blank" href="${user.html_url}" style="color:f54d27; text-decoration:none;">${user.name}</a>'s repositories </h3>

				`);
		});
	
});
