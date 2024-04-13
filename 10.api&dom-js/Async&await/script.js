async function randomUser() {
    const response = await fetch('https://randomuser.me/');
    // waits until the request completes...
    console.log(response);
  }