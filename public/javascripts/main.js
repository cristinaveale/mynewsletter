$(document).ready(function(){
  $('.delete-subscriber').on('click', deleteSubscriber);
});

function deleteSubscriber(){
  event.preventDefault();

  const confirmation = confirm('Are you sure you want to delete your subscription?');

  if(confirmation){
    $.ajax({
      type: 'DELETE',
      url: '/subscriber/'+ $('.delete-subscriber').data('id')
    }).done(function(response){
      window.location.replace('/');
    });
  } else {
    return false;
  }
}