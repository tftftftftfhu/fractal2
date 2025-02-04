document.addEventListener('DOMContentLoaded', function() {
      var lottieContainer = document.getElementById('lottie-container');
      var animation = bodymovin.loadAnimation({
          container: lottieContainer,
          path: '0.json'
      });
    });



    const container = document.getElementById('lottie-container');

// 브라우저 창 크기 변경 시 이벤트 처리
window.addEventListener('resize', () => {
  container.style.width = window.innerWidth + 'px';
  container.style.height = window.innerHeight + 'px';
});
