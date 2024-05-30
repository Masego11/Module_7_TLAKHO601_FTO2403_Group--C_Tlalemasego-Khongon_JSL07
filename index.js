document.addEventListener('DOMContentLoaded', function () {
    const cardForm = document.getElementById('cardForm');
    const modal = document.getElementById('modal');
    const certificateContent = document.getElementById('certificateContent');
    const closeModal = document.querySelector('.close');
  
    // Hide the modal initially
    modal.style.display = 'none';
  
    cardForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // 🚨 Get input values
      const studentNameInput = document.getElementById('studentName');
      const personalMessageInput = document.getElementById('personalMessage'); //Fetched the personalMessage from the Html document by ID
      const courseNameInput = document.getElementById('courseName'); //Fetched the courseName from the Html document by ID
  
      const studentName = studentNameInput.value;
      const personalMessage = personalMessageInput.value;
      const courseName = courseNameInput ? courseNameInput.value : "a course"; // Fallback to "a course" if no input

      if (studentName.trim() === '' || personalMessage.trim() === '') {
        alert('Please fill in all fields');
        return;
      }
  
      // 🚨 Generate certificate content dynamically // Fetched certificate content using the .innerHtml element. Added certficate content 
      certificateContent.innerHTML =  `  
      <h2>Certifacte of Achievement</h2>
      <p>This is to certfiy that</p>
      <h3>${studentName}</h3>
      <p>Has almost completed</p>
      <h3>${courseName}</h3>
      <p>With legendary perserverance and world-class bad-assery for never giving up</p>
      <img src='logo.png' alt='Codespace' max-width='60' height='60' >
      <p>${personalMessage}</p>
      
      
    `;
    
      //  Display the modal
      modal.style.display = 'block';
  
      // Clear the form inputs
      studentNameInput.value = '';
      personalMessageInput.value = '';
      if(courseNameInput) courseNameInput.value = '';
    });
  
    //  🚨 Close the modal when the close button is clicked
    closeModal.addEventListener('click', function () {
      modal.style.display = 'none'; //set modal display to none
      
      
    });
  });
  