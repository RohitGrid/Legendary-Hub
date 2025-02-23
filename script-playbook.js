let currentPage = 0;
const pages = document.querySelectorAll('.page');
const pageFlipSound = document.getElementById('pageFlipSound');

function nextPage() {
  if (currentPage < pages.length - 2) {
    currentPage += 2;
    flipPage(currentPage);
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage -= 2;
    flipPage(currentPage);
  }
}

function flipPage(pageIndex) {
  pageFlipSound.play();

  pages.forEach((page, index) => {
    if (index < pageIndex || index > pageIndex + 1) {
      page.style.display = 'none';
    } else {
      page.style.display = 'block';
    }
  });

  const leftPage = pages[pageIndex];
  const rightPage = pages[pageIndex + 1];
  leftPage.style.transform = 'rotateY(180deg)';
  rightPage.style.transform = 'rotateY(0deg)';
}

document.addEventListener('DOMContentLoaded', () => {
  flipPage(0);
});