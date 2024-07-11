
(function(){
  emailjs.init({
    publicKey: "Zb38LklhOYeIPbszF",
  });
})();
const btn = document.getElementById('send-btn');
document.getElementById('form')
.addEventListener('submit', function(event){
  event.preventDefault();

  btn.value = 'Sending...';

  const serviceID = 'service_opg68tn';
  const templateID = 'template_7zwl4a6';

  emailjs.sendForm(serviceID, templateID, this)
  .then(() => {
    btn.value = 'Send Email';
    alert('message Sent Successfully !!');
    document.getElementById('form').requestFullscreen();
  }, (err) => {
    btn.value = 'Send Email';
    alert(JSON.stringify(err));
  })
})
  
function showsidebar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "flex"
  }
  function hidesidebar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "none"
  }
const name = document.getElementById("name");
const phoneno = document.getElementById("phoneno");
const email = document.getElementById("email");
const form = document.getElementById("form");
const errorElement = document.getElementById('error')
form.addEventListener('submit', (e) => {
  let message = []
  if (name.value === '' == null){
    message.push('Name is required')

    if(message.length > 0)
      e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})