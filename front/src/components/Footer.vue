<template>
  <footer>
    <hr class="footer-divider" />
    <div>
      <p class="contact">Contact: 0473/66.32.41 | valoukervyn@gmail.com</p>
      <div class="social-icons">
        <a href="https://www.facebook.com/profile.php?id=653734084" target="_blank">
          <img src="../assets/fb.jpg" alt="Facebook">
        </a>
        <a href="https://www.instagram.com/valoukervyn/" target="_blank">
          <img src="../assets/ig.jpg" alt="Instagram">
        </a>
      </div>
      <p class="copyright">Copyright @ 2024 Valou Kervyn</p>
    </div>
  </footer>
</template>
  
  <style>
footer {
  background-color: #ffffff;
  color: #555555;
  text-align: center;
}

footer .footer-divider {
  border: none;
  border-top: 2px solid #ededed; /* Horizontal line for separation */
  margin: 0 auto .5rem; /* Center and add space below */
  width: 50%; /* Keep the line shorter than the full width */
}

footer .social-icons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

footer .social-icons a {
  display: inline-block;
}

footer .social-icons img {
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

footer .social-icons img:hover {
  transform: scale(1.1);
  opacity: 0.8; /* Slightly fade on hover */
}

footer .contact {
  margin: 0;
  color: #555555;
}

footer .copyright {
  margin-top: .3rem;
  color: #333333;
  font-style: italic;
}

  </style>
  