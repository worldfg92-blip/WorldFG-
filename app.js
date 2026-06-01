function showPage(id){
 document.querySelectorAll('.page').forEach(p=>p.style.display='none');
 document.getElementById(id).style.display='block';
}
function addPost(){
 const t=document.getElementById('postText');
 if(!t.value.trim()) return;
 const posts=document.getElementById('posts');
 posts.innerHTML='<div class="post">'+t.value+'</div>'+posts.innerHTML;
 t.value='';
}
