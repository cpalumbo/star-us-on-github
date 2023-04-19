async function fetchStarCount() {
    try {
      const response = await fetch('https://api.github.com/repos/GenieFramework/Genie.jl');
      const data = await response.json();
  
      if (response.status === 200) {
        return data.stargazers_count;
      } else {
        console.error('Error fetching star count:', data.message);
        return null;
      }
    } catch (error) {
      console.error('Error fetching star count:', error);
      return null;
    }
  }
  
  function updateStarCount() {
    fetchStarCount().then((starCount) => {
      if (starCount !== null) {
        document.getElementById('star-count').textContent = starCount.toLocaleString();
      } else {
        document.getElementById('star-count').textContent = 'N/A';
      }
    });
  }
  
  updateStarCount();
  



