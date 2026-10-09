const nextBtn = document.getElementById('nextBtn');
const mainCard = document.getElementById('mainCard');

const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');

const progressBar = document.getElementById('progressBar');
const heartBgContainer = document.getElementById('heartBgContainer');

// กดปุ่มอ่านต่อเพื่อสลับไปหน้าดาวน์โหลด (Loading)
nextBtn.addEventListener('click', () => {
  step1.classList.add('hidden');
  step2.classList.remove('hidden');
  startLoading();
});

function startLoading() {
  let width = 0;
  const loadingInterval = setInterval(() => {
    if (width >= 100) {
      clearInterval(loadingInterval);
      showAnniversaryPage();
    } else {
      width += 2; // เพิ่มทีละ 2% (ปรับแต่งความเร็วในการโหลดตรงนี้ได้)
      progressBar.style.width = width + '%';
    }
  }, 40); // อัปเดตทุกๆ 40 มิลลิวินาที
}

// สลับเข้าสู่หน้าการ์ดฉลองครบรอบสำเร็จ
function showAnniversaryPage() {
  step2.classList.add('hidden');
  step3.classList.remove('hidden');
  mainCard.classList.add('pink-bg'); // เปลี่ยนสีกรอบเป็นการ์ดสีชมพูหวาน
  
  // ปล่อยหัวใจลอยพุ่งฉลองรอบๆ หน้าจอแบบต่อเนื่อง
  setInterval(createFloatingHeart, 250);
}

function createFloatingHeart() {
  const heart = document.createElement('div');
  heart.className = 'floating-heart';
  
  const hearts = ['❤️', '💖', '💕', '🌹', '✨', '🌸'];
  heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];
  
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 2 + 2 + 's'; // ลอยช้าเร็วสลับกันระหว่าง 2-4 วินาที
  
  heartBgContainer.appendChild(heart);
  
  // ลบอิลิเมนต์ทิ้งเมื่อเคลื่อนที่เสร็จสิ้นป้องกันคอมพิวเตอร์ทำงานหนัก
  heart.addEventListener('animationend', () => {
    heart.remove();
  });
}
