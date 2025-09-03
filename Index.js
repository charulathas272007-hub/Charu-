Create a <style> element
const style = document.createElement("style");
style.innerHTML = `
/* General Page Styling */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f5f5f5;
  text-align: center;
}

/* Shaking Animation */
@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  50% { transform: translateX(2px); }
  75% { transform: translateX(-2px); }
  100% { transform: translateX(0); }
}

/* Dancing Animation */
@keyframes dance {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(2deg); }
  50% { transform: rotate(-2deg); }
  75% { transform: rotate(2deg); }
  100% { transform: rotate(0deg); }
}

/* Main Name */
header h1 {
  font-family: "Ephesis", cursive;
  color: darkblue;
  font-size: 40px;
  margin: 20px 0 10px 0;
  animation: shake 1.5s infinite;
}

/* Subtitle - oval styled */
header p {
  display: inline-block;
  padding: 10px 30px;
  border: 3px solid black;
  border-radius: 50px;
  background-color: skyblue;
  color: #4B0082;
  font-family: "Great Vibes", cursive;
  font-size: 20px;
}

/* Section Titles */
h2 {
  font-family: "Dancing Script", cursive;
  color: maroon;
  font-size: 30px;
  display: inline-block;
  animation: dance 2s infinite;
}

/* Sections */
section {
  margin: 30px auto;
  width: 80%;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

/* Footer */
footer {
  margin-top: 40px;
  padding: 10px;
  background: #222;
  color: #ccc;
  font-size: 14px;
}
`;

// Append the <style> to the document head
document.head.appendChild(style);
