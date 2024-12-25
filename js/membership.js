
document.getElementById('basicSubmitBtn').addEventListener('click', function() {
    const name = document.getElementById('basicName').value;
    const email = document.getElementById('basicEmail').value;
    const phone = document.getElementById('basicPhone').value;
    const duration = document.getElementById('basicDuration').value;
    const messageDiv = document.querySelector('#basicMembershipModal .infoMessage');

 
    const cardChecked = document.getElementById('basicCard').checked;
    const paypalChecked = document.getElementById('basicPaypal').checked;

    
    if (!name || !email || !phone) {
        messageDiv.innerText = "Please fill in all the required fields.";
        messageDiv.style.display = 'block';
        return; 
    }

  
    if (!duration) {
        messageDiv.innerText = "Please select a duration.";
        messageDiv.style.display = 'block';
        return; 
    }

   
    if (!(cardChecked || paypalChecked)) {
        messageDiv.innerText = "Please select a payment method.";
        messageDiv.style.display = 'block';
        return; 
    }

 
    document.getElementById('mainMessage').innerHTML = "Basic membership request submitted successfully for " + name + "!";
    document.getElementById('mainMessage').style.display = 'block';

 
    document.getElementById('basicMembershipForm').reset();

  
    $('#basicMembershipModal').modal('hide');


    setTimeout(() => {
        document.getElementById('mainMessage').style.display = 'none'; 
    }, 4000);
});



// Premium Membership Submit
document.getElementById('premiumSubmitBtn').addEventListener('click', function() {
    const name = document.getElementById('premiumName').value;
    const email = document.getElementById('premiumEmail').value;
    const phone = document.getElementById('premiumPhone').value;
    const duration = document.getElementById('premiumDuration').value;
    const messageDiv = document.querySelector('#premiumMembershipModal .infoMessage');
    
 
    const cardChecked = document.getElementById('premiumCard').checked;
    const paypalChecked = document.getElementById('premiumPaypal').checked;

  
    if (!name || !email || !phone) {
        messageDiv.innerText = "Please fill in all the required fields.";
        messageDiv.style.display = 'block';
        return; 
    }
   
    if (!duration) {
        messageDiv.innerText = "Please select a duration.";
        messageDiv.style.display = 'block';
        return; 
    }

    if (!(cardChecked || paypalChecked)) {
        messageDiv.innerText = "Please select a payment method.";
        messageDiv.style.display = 'block';
        return; 
    }

    document.getElementById('mainMessage').innerHTML = "Premium membership request submitted successfully for " + name + "!";
    document.getElementById('mainMessage').style.display = 'block';

    document.getElementById('premiumMembershipForm').reset();

 
    $('#premiumMembershipModal').modal('hide');

   
    setTimeout(() => {
        document.getElementById('mainMessage').style.display = 'none'; 
    }, 4000);
});

// VIP Membership Submit
document.getElementById('vipSubmitBtn').addEventListener('click', function() {
    const name = document.getElementById('vipName').value;
    const email = document.getElementById('vipEmail').value;
    const phone = document.getElementById('vipPhone').value;
    const duration = document.getElementById('vipDuration').value;
    const messageDiv = document.querySelector('#vipMembershipModal .infoMessage');
    
   
     const cardChecked = document.getElementById('vipCard').checked;
     const paypalChecked = document.getElementById('vipPaypal').checked;
 
   
     if (!name || !email || !phone) {
         messageDiv.innerText = "Please fill in all the required fields.";
         messageDiv.style.display = 'block';
         return; 
     }
 
  
     if (!duration) {
         messageDiv.innerText = "Please select a duration.";
         messageDiv.style.display = 'block';
         return; 
     }
 
    
     if (!(cardChecked || paypalChecked)) {
         messageDiv.innerText = "Please select a payment method.";
         messageDiv.style.display = 'block';
         return; 
     }
 
    
     document.getElementById('mainMessage').innerHTML = "VIP membership request submitted successfully for " + name + "!";
     document.getElementById('mainMessage').style.display = 'block';
 
  
     document.getElementById('vipMembershipForm').reset();
 
  
     $('#vipMembershipModal').modal('hide');
 
    
     setTimeout(() => {
         document.getElementById('mainMessage').style.display = 'none'; 
     }, 4000);
});


