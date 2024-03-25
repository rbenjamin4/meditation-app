const deleteBtn = document.querySelector('.deletebtn');

const deleteAccount = async () => {
    const response = await fetch('/api/users/delete/:id', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to delete account.');
    }
  };
  
deleteBtn.addEventListener('click', deleteAccount);