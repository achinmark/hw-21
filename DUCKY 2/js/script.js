@keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to { 
      transform: rotate(360deg);
    }
  }
  
  img.star {
      animation-swim:            rotate; 
      animation-duration:        5s; 
      animation-iteration-count: infinite;
      animation-timing-function: linear;
  }